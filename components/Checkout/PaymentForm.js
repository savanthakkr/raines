import React from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { handleLogin } from "@/utils/auth";
import LoadingSpinner from "@/utils/LoadingSpinner";
import baseUrl from "@/utils/baseUrl";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const INITIAL_USER = {
    email: "",
    password: "",
};

const PaymentForm = () => {
    const [user, setUser] = React.useState(INITIAL_USER);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const isUser = Object.values(user).every((el) => Boolean(el));
        isUser ? setDisabled(false) : setDisabled(true);
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const url = `${baseUrl}/api/users/signin`;
            const payload = { ...user };
            const response = await axios.post(url, payload);
            handleLogin(response.data.elarniv_users_token, router);
            toast.success(response.data.message, {
                style: {
                    border: "1px solid #4BB543",
                    padding: "16px",
                    color: "#4BB543",
                },
                iconTheme: {
                    primary: "#4BB543",
                    secondary: "#FFFAEE",
                },
            });
        } catch (err) {
            let {
                response: {
                    data: { message },
                },
            } = err;
            toast.error(message, {
                style: {
                    border: "1px solid #ff0033",
                    padding: "16px",
                    color: "#ff0033",
                },
                iconTheme: {
                    primary: "#ff0033",
                    secondary: "#FFFAEE",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    const [cardDiv, setCardDiv] = React.useState(true);
    const [gPayDiv, setGPayDiv] = React.useState(false);

    const showCardDiv = () => {
        if (!cardDiv) {
            setGPayDiv(false);
        }
        setCardDiv(!cardDiv);
    }

    const showUpiDiv = () => {
        if (!gPayDiv) {
            setCardDiv(false);
        }
        setGPayDiv(!gPayDiv);
    }

    return (
        <>
            <div className="payment-form">
                <div className="card-div">
                    <div className={`row ${cardDiv ? 'mb-4' : ''}`} onClick={showCardDiv}>
                        <div className="col-lg-6 col-md-12">
                            <label> Credit/ Debit Card </label>
                        </div>

                        <div className="col-lg-6 col-md-12 text-md-end">
                            <img src="/images/visaCard.png" className="me-3" />
                            <img src="/images/masterCard.png" />
                        </div>
                    </div>

                    {cardDiv &&
                        <div className="card-content">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Name on Card <span> * </span> </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        name="name"
                                        value={user.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Card Number <span> * </span> </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Card Number"
                                        name="care_number"
                                        value={user.care_number}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Expiry Date <span> * </span> </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="01/12"
                                                name="expiry_date"
                                                value={user.expiry_date}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>CVC/CVV <span> * </span> </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="123"
                                                name="cvv"
                                                value={user.cvv}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* <motion.button
                            type="submit"
                            disabled={disabled}
                            whileTap={{ scale: 0.9 }}
                        >
                            Submit
                            {loading ? <LoadingSpinner /> : ""}
                        </motion.button> */}

                            </form>
                        </div>
                    }
                </div>
            </div>

            <div className="payment-form mt-4">
                <div className="upi-div">
                    <div className={`row ${gPayDiv ? 'mb-4' : ''}`} onClick={showUpiDiv}>
                        <div className="col-6">
                            <label> UPI </label>
                        </div>

                        <div className="col-6 text-end">
                            <img src="/images/gPayLogo.png" />
                        </div>
                    </div>

                    {gPayDiv &&
                        <div className="card-content">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>UPI ID / UPI Number <span> * </span> </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your UPI ID / Number"
                                        name="upi_id"
                                        value={user.upi_id}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* <motion.button
                            type="submit"
                            disabled={disabled}
                            whileTap={{ scale: 0.9 }}
                        >
                            Submit
                            {loading ? <LoadingSpinner /> : ""}
                        </motion.button> */}

                            </form>
                        </div>
                    }
                </div>
            </div>

            <div className="payment-form mt-4">
                <div className="paypal-div">
                    <div className="row">
                        <div className="col-6">
                            <label> Paypal </label>
                        </div>

                        <div className="col-6 text-end">
                            <img src="/images/paypalLogo.png" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentForm;

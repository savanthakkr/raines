import React from "react";
import { motion } from "framer-motion";

const INITIAL_USER = {
	first_name: "",
	last_name: "",
	email: "",
	password: "",
};

const BusinessRegisterForm = () => {
	const [user, setUser] = React.useState(INITIAL_USER);
	const [disabled, setDisabled] = React.useState(true);
	const [loading, setLoading] = React.useState(false);



    const handleChange = (e) => {
		const { name, value } = e.target;
		setUser((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const url = `${baseUrl}/api/users/signup`;
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

    return (
        <>
            <div className="register-form">
                <h2>Register Your Company on Raines</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Company Name"
                            name="company_name"
                            value={user.company_name}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>ACN</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Australian Company Number"
                            name="australian_company_number"
                            value={user.acn}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>ABN</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Australian Business Number"
                            name="australian_business_number"
                            value={user.abn}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Registered Address</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your company’s registered address"
                            name="registered_address"
                            value={user.registered_address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Operating Address</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your company’s operating address"
                            name="operating_address"
                            value={user.operating_address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Enter your phone number"
                            name="phone_number"
                            value={user.phone_number}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email address"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Department Manager's Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Department Manager's Name"
                            name="managers_name"
                            value={user.managers_name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Accounts Payable Contact</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Accounts Payable Contact"
                            name="accounts_contact"
                            value={user.accounts_contact}
                            onChange={handleChange}
                        />
                    </div>

                    <motion.button
                        type="submit"
                        disabled={disabled}
                        whileTap={{ scale: 0.9 }}
                    >
                        
                        Continue
                        {loading ? <LoadingSpinner /> : ""}
                    </motion.button>
                </form>
            </div>
        </>
    )
}

export default BusinessRegisterForm;
import React from "react";
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

const LoginForm = () => {
	const [user, setUser] = React.useState(INITIAL_USER);
	const [disabled, setDisabled] = React.useState(true);
	const [loading, setLoading] = React.useState(false);
	const [role, setRole] = React.useState("user");
	const router = useRouter();
	const [showModal, setShowModal] = React.useState(false);
	const [resetModal, setResetModal] = React.useState(false);

	React.useEffect(() => {
		if (router.pathname.includes("instructor-login")) {
			setRole("instructor");
		} else {
			setRole("user");
		}
	}, [router.pathname]);

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

	return (
		<>
			<div className="login-form">
				<h2>Login</h2>

				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Email</label>
						<input
							type="text"
							className="form-control"
							placeholder="Email"
							name="email"
							value={user.email}
							onChange={handleChange}
						/>
					</div>

					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Password"
							name="password"
							value={user.password}
							onChange={handleChange}
						/>
					</div>

					<motion.button
						type="submit"
						disabled={disabled}
						whileTap={{ scale: 0.9 }}
					>
						Log In
						{loading ? <LoadingSpinner /> : ""}
					</motion.button>

					<div className="col-lg-12 col-md-12 col-sm-12 remember-me-wrap">
						<p className="description">
							Can't remember your password,{' '}
							<button className="btn-as-link" onClick={() => setShowModal(true)}>
								<a className="lost-your-password">
									Forget Password?
								</a>
							</button>
						</p>
					</div>
				</form>
				{showModal && (
					<div className="modal-overlay">
						<div className="modal-content">
							<div className="forget-pwd-form">
								<h2 className="mb-3">Forget Your Password?</h2>
								<p>That’s okay, it happens. Click the button below to reset your password. We will send you a link to your registered email for resetting your password.</p>
								<p>Please check your spam folder if you don’t receive your link.</p>
								<form>
									<motion.button
										type="submit" onClick={() => { setShowModal(false); setResetModal(true);}}
										whileTap={{ scale: 0.9 }}
									>
										Send me the Reset Link
									</motion.button>
									<p className="text-center mt-3 fst-italic">Send reset link again after 00:30 Seconds</p>
								</form>
							</div>
						</div>
					</div>
				)}
				{resetModal && (
					<div className="modal-overlay">
						<div className="modal-content">
							<div className="forget-pwd-form">
								<h2 className="mb-3">Reset Password</h2>
								<div className="form-group">
										<label>Email</label>
										<input
											type="email"
											className="form-control"
											placeholder="Email"
										/>
									</div>
									<div className="form-group">
										<label>Password</label>
										<input
											type="password"
											className="form-control"
											placeholder="Password"
										/>
									</div>
									<p className="fst-italic">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ? $ % ^ & )</p>
									<div className="form-group">
										<label>Confirm Password</label>
										<input
											type="password"
											className="form-control"
											placeholder="Re-enter Password"
										/>
									</div>
									<p className="fst-italic">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ? $ % ^ & )</p>
								<form>
									<motion.button
										type="submit" onClick={() => setResetModal(true)}
										whileTap={{ scale: 0.9 }}
									>
										Reset and Login
									</motion.button>
									<p className="text-center mt-3 fst-italic">Send reset link again after 00:30 Seconds</p>
								</form>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default LoginForm;

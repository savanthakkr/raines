import React, { useState } from "react";
import toast from "react-hot-toast";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import axios from "axios";
import { parseCookies } from "nookies";
import LoadingSpinner from "@/utils/LoadingSpinner";
import baseUrl from "@/utils/baseUrl";
import InstructorNav from "@/components/_App/InstructorNav";
import { useRouter } from "next/router";

const RaiseSupportRequest = ({ user }) => {
	const router = useRouter();
	const { role } = router.query;
	const { elarniv_users_token } = parseCookies();
	const [userUpdate, setUserUpdate] = useState(user);
	const [loading, setLoading] = React.useState(false);
	const [profilePreview, setProfilePreview] = React.useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserUpdate((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			setLoading(true);
			const url = `${baseUrl}/api/users/update`;
			const data = { ...userUpdate };
			const payload = {
				headers: { Authorization: elarniv_users_token },
			};
			const response = await axios.put(url, data, payload);

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
			{role=='instructor'?(
				<InstructorNav/>
			):(
				<Navbar user={user} />
			)}

			<div className="pt-70 pb-70">
				<div className="container">
					<h2 className="fw-bold mb-4">Raise Support Request</h2>

					<div className="basic-profile-information-form">
						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
											Your Name
										</label>
										<input
											type="text"
											className="form-control"
											name="your_name"
											placeholder="Your Name"
											// value={userUpdate.first_name}
											onChange={handleChange}
										/>
									</div>

									<div className="form-group">
										<label className="form-label fw-semibold">
											Email Address
										</label>
										<input
											type="email"
											className="form-control"
											name="email"
											placeholder="Enter your email address"
											// value={userUpdate.first_name}
											onChange={handleChange}
										/>
									</div>

									<div className="form-group">
										<label className="form-label fw-semibold">
											Upload Screenshot (Optional)
										</label>
										<input
											type="file"
											className="form-control"
											name="screenshot"
											// value={userUpdate.first_name}
											onChange={handleChange}
										/>
										<p className="description">
											Upload image size 1000x1000 pixels!
										</p>
									</div>
								</div>

								<div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
											Issue Type
										</label>
										<select
											className="form-select"
											name="issue_type"
										// value={short}
										// onChange={(e) => setShort(e.target.value)}
										>
											<option value="">Choose your issue type</option>
											<option value="value">I can't login</option>
											<option value="value">I'm stuck in a course</option>
											<option value="value">Issue with my assessment</option>
											<option value="value">Payment or billing help</option>
											<option value="value">Something else</option>
										</select>
									</div>

									<div className="form-group">
										<label className="form-label fw-semibold">
											Describe Your Issue
										</label> <br />
										<textarea
											className="form-control"
											name="biography"
											cols="30"
											rows="5"
											placeholder="Write your message..."
										// value={
										// 	instructor.instructor_description
										// }
										// onChange={handleChange}
										/>
										<p className="description">
											Write about your issue here
										</p>
									</div>
								</div>

								<div className="col-12 mt-2">
									<button
										type="submit"
										className="btn default-btn px-5"
									>
										{/* <i className="flaticon-right-arrow"></i> */}
										Submit Request <span></span>
										{loading ? <LoadingSpinner /> : ""}
									</button>
								</div>
							</div>
						</form>
					</div>
				</div >
			</div >

			<Footer />
		</>
	);
};

export default RaiseSupportRequest;

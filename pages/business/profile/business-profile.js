import React, { useState } from "react";
import toast from "react-hot-toast";
import Footer from "@/components/_App/Footer";
import axios from "axios";
import { parseCookies } from "nookies";
import LoadingSpinner from "@/utils/LoadingSpinner";
import baseUrl from "@/utils/baseUrl";
import { useRouter } from 'next/router';
import BusinessNav from "@/components/_App/BusinessNav";

const InstructorProfile = ({ user }) => {
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
			<BusinessNav/>

			<div className="ptb-100">
				<div className="container">
					<h2 className="fw-bold mb-4">Profile & Settings</h2>

					<div className="basic-profile-information-form">
						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
											Company Name
										</label>
										<input
											type="text"
											className="form-control"
											name="company_name"
											placeholder="Company Name"
											// value={userUpdate.first_name}
											onChange={handleChange}
										/>
									</div>
                                </div>
                                <div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
                                            Entity Type
										</label>
										<input
											type="text"
											className="form-control"
											name="entity_type"
											placeholder="Choose your type of company"
											// value={userUpdate.last_name}
											onChange={handleChange}
										/>
									</div>
                                </div>
                                <div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
											ACN
										</label>
										<input
											type="text"
											className="form-control"
											name="acn"
											placeholder="Australian Company Number"
											// value={userUpdate.acn}
											onChange={handleChange}
										/>
									</div>
								</div>
                                <div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
                                            Registered Address
										</label>
										<input
											type="text"
											className="form-control"
											name="registered_address"
											placeholder="Enter your company’s registered address"
											// value={userUpdate.registered_address}
											onChange={handleChange}
										/>
									</div>
								</div>
                                <div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
                                            ABN
										</label>
										<input
											type="text"
											className="form-control"
											name="abn"
											placeholder="Australian Business Number"
											// value={userUpdate.abn}
											onChange={handleChange}
										/>
									</div>
								</div>
                                <div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
                                            Operating Address
										</label>
										<input
											type="text"
											className="form-control"
											name="operating_address"
											placeholder="Enter your company’s operating address"
											// value={userUpdate.operating_address}
											onChange={handleChange}
										/>
									</div>
								</div>
                                <div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
                                            Phone Number
										</label>
										<input
											type="number"
											className="form-control"
											name="phone_number"
											placeholder="Enter your phone number"
											// value={userUpdate.phone_number}
											onChange={handleChange}
										/>
									</div>
								</div>
                                <div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
                                            Linkdln
										</label>
										<input
											type="text"
											className="form-control"
											name="linkdln"
											placeholder="http://www.example.com"
											// value={userUpdate.operating_address}
											onChange={handleChange}
										/>
									</div>
								</div>
                                <div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
                                            Email Address
										</label>
										<input
											type="email"
											className="form-control"
											name="email"
											placeholder="Enter your email address"
											// value={userUpdate.operating_address}
											onChange={handleChange}
										/>
									</div>
								</div>
                                <div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
                                            YouTube
										</label>
										<input
											type="text"
											className="form-control"
											name="youtube"
											placeholder="http://www.example.com"
											// value={userUpdate.operating_address}
											onChange={handleChange}
										/>
									</div>
								</div>
                                <div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
                                            Department Manager's Name
										</label>
										<input
											type="text"
											className="form-control"
											name="managers_name"
											placeholder="Enter your Department Manager's Name"
											// value={userUpdate.operating_address}
											onChange={handleChange}
										/>
									</div>
								</div>
                                <div className="col-sm-12 col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
                                            Accounts Payable Contact
										</label>
										<input
											type="text"
											className="form-control"
											name="payable_contact"
											placeholder="Enter your Accounts Payable Contact"
											// value={userUpdate.operating_address}
											onChange={handleChange}
										/>
									</div>
								</div>

								<div className="col-12 mt-2">
									<button
										type="submit"
										className="btn default-btn px-5"
									>
										{/* <i className="flaticon-right-arrow"></i> */}
										Save <span></span>
										{loading ? <LoadingSpinner /> : ""}
									</button>
								</div>
							</div>

							{/* <div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
											First Name
										</label>
										<input
											type="text"
											className="form-control"
											name="first_name"
											// value={userUpdate.first_name}
											onChange={handleChange}
										/>
									</div>

									<div className="form-group">
										<label className="form-label fw-semibold">
											Last Name
										</label>
										<input
											type="text"
											className="form-control"
											name="last_name"
											// value={userUpdate.last_name}
											onChange={handleChange}
										/>
									</div>

									<div className="form-group">
										<label className="form-label fw-semibold">
											Biography
										</label>
										<textarea
											type="text"
											className="form-control"
											name="bio"
											// value={userUpdate.bio}
											onChange={handleChange}
											rows="4"
										/>
										<p className="form-text mt-2">
											Your biography should have at least
											50 characters, links and coupon
											codes are not permitted.
										</p>
									</div>

									<div className="form-group" name="gender">
										<label className="form-label fw-semibold">
											Language
										</label>
										<select className="form-select">
											<option defaultValue="Male">
												Male
											</option>
											<option defaultValue="Female">
												Female
											</option>
										</select>
									</div>
								</div>

								<div className="col-md-6">
									<div className="form-group">
										<label className="form-label fw-semibold">
											Website URL
										</label>
										<input
											type="text"
											className="form-control"
											id="websiteURL"
											placeholder="http://www.example.com/"
											name="website"
											// value={userUpdate.website}
											onChange={handleChange}
										/>
									</div>

									<div className="form-group">
										<label className="form-label fw-semibold">
											Twitter
										</label>
										<input
											type="text"
											className="form-control"
											name="twitter"
											// value={userUpdate.twitter}
											onChange={handleChange}
											placeholder="http://www.twitter.com/"
										/>
									</div>

									<div className="form-group">
										<label className="form-label fw-semibold">
											Facebook
										</label>
										<input
											type="text"
											className="form-control"
											name="facebook"
											// value={userUpdate.facebook}
											onChange={handleChange}
											placeholder="http://www.facebook.com/"
										/>
									</div>

									<div className="form-group">
										<label className="form-label fw-semibold">
											Linkedin
										</label>
										<input
											type="text"
											className="form-control"
											name="linkedin"
											// value={userUpdate.linkedin}
											onChange={handleChange}
											placeholder="http://www.linkedin.com/"
										/>
									</div>

									<div className="form-group">
										<label className="form-label fw-semibold">
											Youtube
										</label>
										<input
											type="text"
											className="form-control"
											name="youtube"
											// value={userUpdate.youtube}
											onChange={handleChange}
											placeholder="http://www.youtube.com/"
										/>
									</div>
								</div>

								<div className="col-12">
									<button
										type="submit"
										className="btn default-btn"
									>
										{/* <i className="flaticon-right-arrow"></i> */}
							{/* Save <span></span>
										{loading ? <LoadingSpinner /> : ""}
									</button>
								</div>
							</div> */}
						</form>
					</div>
				</div >
			</div >

			<Footer />
		</>
	);
};

export default InstructorProfile;

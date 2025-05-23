import React from "react";

const PersonalDetails = () => {
	const [profilePreview, setProfilePreview] = React.useState("");
	const [loading, setLoading] = React.useState(false);

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
            <div className="basic-profile-information-form">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                {profilePreview ? (
                                    <img
                                        src={profilePreview}
                                        className="img-thumbnail mw-200px"
                                    />
                                ) : (
                                    <img
                                        src="/images/avatar.jpg"
                                        alt="image"
                                        className="img-thumbnail mw-200px"
                                    />
                                )}
                            </div>

                            <div className="form-group">
                                <label className="form-label fw-semibold">
                                    Photo ID (must have DOB and current address) Ideally A Current Australian Drivers License
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name="photo_id"
                                    // value={userUpdate.first_name}
                                    onChange={handleChange}
                                />
                                <p className="description">
                                    Upload image size 200x200 pixels!
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label className="form-label fw-semibold">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="first_name"
                                    placeholder="First Name"
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
                                    placeholder="Last Name"
                                    // value={userUpdate.last_name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label fw-semibold">
                                    Gender
                                </label>
                                <select
                                    className="form-select"
                                    name="short"
                                // value={short}
                                // onChange={(e) => setShort(e.target.value)}
                                >
                                    <option value="">Choose gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-group">
                                <label className="form-label fw-semibold">
                                    Biography
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
                                    Your biography should have at least 50 characters, links and coupon codes are not permitted.
                                </p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label className="form-label fw-semibold">
                                    Website URL
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="http://www.example.com"
                                    name="website_url"
                                    // value={userUpdate.first_name}
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
                                    placeholder="http://www.example.com"
                                    // value={userUpdate.first_name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label className="form-label fw-semibold">
                                    Facebook
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="facebook"
                                    placeholder="http://www.example.com"
                                    // value={userUpdate.last_name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label fw-semibold">
                                    LinkedIn
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="linkedin"
                                    placeholder="http://www.example.com"
                                    // value={userUpdate.last_name}
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
        </>
    )
}

export default PersonalDetails;
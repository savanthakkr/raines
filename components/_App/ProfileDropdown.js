import React, { useEffect, useState } from "react";
import Link from "@/utils/ActiveLink";
import { handleLogout } from "@/utils/auth";
import { useRouter } from "next/router";

const ProfileDropdown = ({
	userId,
	first_name,
	email,
	role,
	profile_photo,
}) => {
	const isAdmin = role === "admin";
	const isBusiness = role === "business";
	const isStudent = role === "student";

	const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

	return (
		<>
			<div className="dropdown profile-dropdown">
				<div className="img ptb-15">
					{profile_photo ? (
						<img src={profile_photo} alt={first_name} />
					) : (
						<img src="/images/avatar.jpg" alt={first_name} />
					)}
				</div>

				<ul className="dropdown-menu">
					<li>
						<Link href="/profile/basic-information/">
							<a className="dropdown-item author-dropdown-item">
								<div className="d-flex align-items-center">
									<div className="img">
										{profile_photo ? (
											<img
												src={profile_photo}
												alt={first_name}
											/>
										) : (
											<img
												src="/images/avatar.jpg"
												alt={first_name}
											/>
										)}
									</div>

									<span className="ps-3">
										<span className="fw-semibold fs-16 mb-1 d-block">
											{first_name}
										</span>
										<span className="d-block fs-13 mt-minus-2">
											{email}
										</span>
									</span>
								</div>
							</a>
						</Link>
					</li>

					<li>
						<hr className="dropdown-divider" />
					</li>

					{isBusiness && (
						<>
							<li>
								<Link href="/business/courses/">
									<a 
										className={`dropdown-item ${currentPath == "/business/courses/" && "active"}`}
									>
										{/* <i className="bx bx-book"></i> */}
										My Courses
									</a>
								</Link>
							</li>

							<li>
								<Link href="/business/course/create/">
									<a 
										className={`dropdown-item ${currentPath == "/business/course/create/" && "active"}`}
									>
										{/* <i className="bx bx-folder-plus"></i>  */}
										Create New Course
									</a>
								</Link>
							</li>
						</>
					)}

					{isAdmin && (
						<li>
							<Link href="/admin/">
								<a 
									className={`dropdown-item ${currentPath == "/admin/" && "active"}`}
								>
									{/* <i className="bx bxs-dashboard"></i>  */}
									My Dashboard
								</a>
							</Link>
						</li>
					)}

					<li>
						<Link href="/learning/my-courses/">
							<a 
								className={`dropdown-item ${currentPath == "/learning/my-courses/" && "active"}`}
							>
								{/* <i className="bx bx-book"></i> */}
								My Courses
							</a>
						</Link>
					</li>

					<li>
						<Link href="/profile/certificates/">
							<a 
								className={`dropdown-item ${currentPath == "/profile/certificates/" && "active"}`}
							>
								{/* <i className="bx bx-book"></i> */}
								Certificates
							</a>
						</Link>
					</li>

					<li>
						<Link href="/learning/wishlist/">
							<a 
								className={`dropdown-item ${currentPath == "/learning/wishlist/" && "active"}`}
							>
								{/* <i className="bx bxs-heart"></i> */}
								My Wishlist
							</a>
						</Link>
					</li>

					<li>
						<Link href="/learning/my-purchase-history/">
							<a 
								className={`dropdown-item ${currentPath == "/learning/my-purchase-history/" && "active"}`}
							>
								{/* <i className="bx bx-credit-card-front"></i> */}
								My Purchases
							</a>
						</Link>
					</li>

					<li>
						<Link href="/profile/basic-information/">
							<a 
								className={`dropdown-item ${currentPath == "/profile/basic-information/" && "active"}`}
							>
								{/* <i className="bx bxs-user-account"></i>  */}
								Profile & settings
							</a>
						</Link>
					</li>

					<li>
						<Link href="/learning/raise-support-request">
							<a 
								className={`dropdown-item ${currentPath == "/learning/raise-support-request" && "active"}`}
							>
								{/* <i className="bx bxs-user-account"></i>  */}
								Raise Support Request
							</a>
						</Link>
					</li>

					{/* <li>
						<Link href="/course/course-enrollment/">
							<a 
								className={`dropdown-item ${currentPath == "/course/course-enrollment" && "active"}`}
							>
								<i className="bx bxs-user-account"></i> Enrollment Form
							</a>
						</Link>
					</li> */}

					<li>
						<hr className="dropdown-divider" />
					</li>

					<li>
						<button
							type="submit"
							onClick={handleLogout}
							className="dropdown-item"
						>
							{/* <i className="bx bx-log-out"></i>  */}
							Log out
						</button>
					</li>
				</ul>
			</div>
		</>
	);
};

export default ProfileDropdown;

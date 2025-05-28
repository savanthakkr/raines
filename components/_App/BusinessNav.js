import React from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { motion } from "framer-motion";
import Link from "@/utils/ActiveLink";
import Cart from "./Cart";
import SearchForm from "./SearchForm";
import BusinessProfileDropdown from "./BusinessProfileDropdown";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const BusinessNav = ({ user:userProp }) => {
	const user = userProp || {
		first_name: 'Business',
		email: 'business@gmail.com',
		profile_photo: '',
		role: 'Business'
	  };
	const [menu, setMenu] = React.useState(true);

	const toggleNavbar = () => {
		setMenu(!menu);
	};

	React.useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
	});

	const classOne = menu
		? "collapse navbar-collapse"
		: "collapse navbar-collapse show";
	const classTwo = menu
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right";

	return (
		<>
			<div id="navbar" className="navbar-area">
				<div className="edemy-nav">
					<div className="container">
						<div className="navbar navbar-expand-lg navbar-light">
							<Link href="/">
								<a
									onClick={toggleNavbar}
									className="navbar-brand"
								>
									<img src="/images/rainesLogo.png" alt="logo" />
								</a>
							</Link>

							<button
								onClick={toggleNavbar}
								className={classTwo}
								type="button"
							>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
							</button>

							<div
								className={classOne}
								id="navbarSupportedContent"
							>
								<SearchForm />

								<ul className="navbar-nav">
									<motion.li
										className="nav-item"
										whileHover={{
											scale: 1.1,
											transition: { duration: 0.5 },
										}}
										whileTap={{ scale: 0.9 }}
									>
										<Link
											href="/business/courses/business-courses"
											activeClassName="active"
										>
											<a
												onClick={toggleNavbar}
												className="nav-link"
											>
												Courses
											</a>
										</Link>
									</motion.li>
								</ul>
							</div>

							<div className="others-option d-flex align-items-center">
                                <Cart />

								<div className="option-item">
									{user ? (
										<BusinessProfileDropdown {...user} />
									) : ( 
										<Link href="/authentication">
											<a className="default-btn">
												Login/Register <span></span>
											</a>
										</Link> 
									)} 
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BusinessNav;

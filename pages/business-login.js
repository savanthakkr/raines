import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import LoginForm from "@/components/Authentication/LoginForm";
import Footer from "@/components/_App/Footer";
import BusinessRegisterForm from "@/components/BecomeAInstructor/BusinessRegisterForm";
import BusinessNav from "@/components/_App/BusinessNav";

export default function BusinessLoginPage({ user }) {
	return (
		<>
			<BusinessNav/>

			<PageBanner
				pageTitle="Authentication"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Authentication"
				imageUrl='/images/breadcrumb/loginBreadcrumb.jpg'
			/>

			<div className="profile-authentication-area ptb-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-6 col-md-12">
							<LoginForm />
						</div>

						<div className="col-lg-6 col-md-12">
							<BusinessRegisterForm />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

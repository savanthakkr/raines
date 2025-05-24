import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import LoginForm from "@/components/Authentication/LoginForm";
import Footer from "@/components/_App/Footer";
import InstructorRegisterForm from "@/components/BecomeAInstructor/InstructorRegisterForm";

export default function InstructorLoginPage({ user }) {
	return (
		<>
			<Navbar user={user} />

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
							<InstructorRegisterForm />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

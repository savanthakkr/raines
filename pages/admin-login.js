import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import LoginForm from "@/components/Authentication/LoginForm";
import RegisterForm from "@/components/Authentication/RegisterForm";
import Footer from "@/components/_App/Footer";

export default function AdminLoginPage({ user }) {
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
					<div className="row d-flex flex-row justify-content-center">
						<div className="col-lg-6 col-md-12">
							<LoginForm />
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}

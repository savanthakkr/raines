import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import LoginForm from "@/components/Authentication/LoginForm";
import Footer from "@/components/_App/Footer";
import AdminNav from "@/components/_App/AdminNav";

export default function AdminLoginPage({ user }) {
	return (
		<>
			<AdminNav/>

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

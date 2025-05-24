import React from "react";
import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import ForgotPasswordForm from "@/components/Authentication/ForgotPasswordForm";
import Footer from "@/components/_App/Footer";

export default function InstructorForgotPasswordPage() {
	return (
		<>
			<Navbar/>

			<PageBanner
				pageTitle="Forgot Password"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Forgot Password"
			/>

			<ForgotPasswordForm />

			<Footer />
		</>
	);
}

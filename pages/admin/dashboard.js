import AdminNav from "@/components/_App/AdminNav";
import Footer from "@/components/_App/Footer";
import Charts from "@/components/Admin/Dashboard/Charts";
import CoursesTable from "@/components/Admin/Dashboard/CoursesTable";
import StatCards from "@/components/Admin/Dashboard/StatCards";
import UsersBusinessesTabs from "@/components/Admin/Dashboard/UsersBusinessTab";

const Dashboard = () => {
	return (
		<>
			<AdminNav/>
			<div className="dashboard-area">
				<StatCards />
				{/* <Charts /> */}
				<CoursesTable />
				<UsersBusinessesTabs />
				<Footer />
			</div>
		</>
	);
};

export default Dashboard;

import AdminNav from "@/components/_App/AdminNav";
import Footer from "@/components/_App/Footer";
import UsersBusinessesTabs from "@/components/Admin/Dashboard/UsersBusinessTab";

const ManageBusiness = () => {
    return(
        <>
            <AdminNav/>
            <div className="user-business-area">
                <UsersBusinessesTabs/>
            </div>
            <Footer/>
        </>
    )
}

export default ManageBusiness;
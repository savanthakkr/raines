import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const AdminSearchForm = () => {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        const query = router.query;
        router.push({
            pathname: "/courses",
            query: { ...query, search: search },
        });
    };
    return (
        <div className="edemy-nav">
            <div className="navbar">
                <form className="search-box" onSubmit={handleSearch}>
                    <input
                        type="text"
                        className="input-search"
                        placeholder="Search Employees, Designation, Departments"
                        name="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit">
                        <i className="flaticon-search"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminSearchForm;

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AdminSearchForm from '@/components/Admin/Dashboard/AdminSearchForm';

export default function ManageEmployeesTab() {
    const [activeTab, setActiveTab] = useState('Users');
    const [profilePreview, setProfilePreview] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserUpdate((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const url = `${baseUrl}/api/users/update`;
            const data = { ...userUpdate };
            const payload = {
                headers: { Authorization: elarniv_users_token },
            };
            const response = await axios.put(url, data, payload);

            toast.success(response.data.message, {
                style: {
                    border: "1px solid #4BB543",
                    padding: "16px",
                    color: "#4BB543",
                },
                iconTheme: {
                    primary: "#4BB543",
                    secondary: "#FFFAEE",
                },
            });
        } catch (err) {
            let {
                response: {
                    data: { message },
                },
            } = err;
            toast.error(message, {
                style: {
                    border: "1px solid #ff0033",
                    padding: "16px",
                    color: "#ff0033",
                },
                iconTheme: {
                    primary: "#ff0033",
                    secondary: "#FFFAEE",
                },
            });
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        // Dynamically import bootstrap JS only in the browser
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    const router = useRouter();


    useEffect(() => {
        if (router.pathname === '/instructor/employees/manage-employees') {
            setActiveTab('Users');
        } else if (router.pathname === '/instructor/employees/manage-users') {
            setActiveTab('Manage');
        } else if (router.pathname === '/instructor/employees/report') {
            setActiveTab('Reports');
        }
    }, [router.pathname]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (tab === 'Users') {
            router.push('/instructor/employees/manage-employees');
        } else if (tab === 'Manage') {
            router.push('/instructor/employees/manage-users');
        } else if (tab === 'Reports') {
            router.push('/instructor/employees/report');
        }
    };

    const users = [
        {
            id: 1,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            courseName: 'CPCWHS1001',
            designation: 'Associate Developer',
            department: 'Development',
            status: "Active"
        },
        {
            id: 2,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            courseName: 'BSBWHS411',
            designation: 'Associate Developer',
            department: 'Development',
            status: "Deactivated"
        },
        {
            id: 3,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            courseName: 'RIIRES402E',
            designation: 'Associate Developer',
            department: 'Development',
            status: "Active"
        },
        {
            id: 4,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            courseName: 'RIIRIS501E',
            designation: 'Associate Developer',
            department: 'Development',
            status: "Active"
        },
        {
            id: 5,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            courseName: 'CPCWHS1001',
            designation: 'Associate Developer',
            department: 'Development',
            status: "Active"
        },
        {
            id: 6,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            courseName: 'RIIRES402E',
            designation: 'Associate Developer',
            department: 'Development',
            status: "Active"
        },
        {
            id: 7,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            courseName: 'BSBWHS411',
            designation: 'Associate Developer',
            department: 'Development',
            status: "Deactivated"
        }
    ];

    const reports = [
        {
            id: 1,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            assignedCourses:2,
            completedCourses:3,
            inProgress:0,
            certificatesEarned:1,
            status: "Active"
        },
        {
            id: 2,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            assignedCourses:1,
            completedCourses:1,
            inProgress:2,
            certificatesEarned:3,
            status: "Deactivated"
        },
        {
            id: 3,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            assignedCourses:3,
            completedCourses:0,
            inProgress:3,
            certificatesEarned:4,
            status: "Active"
        },
        {
            id: 4,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            assignedCourses:0,
            completedCourses:2,
            inProgress:4,
            certificatesEarned:0,
            status: "Active"
        },
        {
            id: 5,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            assignedCourses:4,
            completedCourses:4,
            inProgress:0,
            certificatesEarned:1,
            status: "Active"
        },
        {
            id: 6,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            assignedCourses:1,
            completedCourses:1,
            inProgress:1,
            certificatesEarned:2,
            status: "Active"
        },
        {
            id: 7,
            empId: '#2431',
            name: "Jhon Doe",
            email: "jhon@acme.inc",
            assignedCourses:3,
            completedCourses:3,
            inProgress:2,
            certificatesEarned:3,
            status: "Deactivated"
        }
    ];

    return (
        <div className="mt-4 user-business-tab">
            <h4 className="font-semibold text-lg mb-4">Manage Employees</h4>
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                <div className="mb-4 border-b border-gray-300 flex space-x-4">
                    <button
                        onClick={() => handleTabChange('Users')}
                        className={`px-3 py-2 border-b-4 transition-all duration-200 ${activeTab === 'Users'
                            ? 'activeTab font-semibold'
                            : 'tab text-gray-600'
                            }`}
                    >
                        Add Users
                    </button>
                    <button
                        onClick={() => handleTabChange('Manage')}
                        className={`px-3 py-2 border-b-4 transition-all duration-200 ${activeTab === 'Manage'
                            ? 'activeTab font-semibold'
                            : 'tab text-gray-600'
                            }`}
                    >
                        Manage
                    </button>
                    <button
                        onClick={() => handleTabChange('Reports')}
                        className={`px-3 py-2 border-b-4 transition-all duration-200 ${activeTab === 'Reports'
                            ? 'activeTab font-semibold'
                            : 'tab text-gray-600'
                            }`}
                    >
                        Reports
                    </button>
                </div>
                {activeTab === 'Manage' && (
                    <div className="d-flex flex-column flex-lg-row admin-search-form">
                        <AdminSearchForm />

                        <Link href="/">
                            <a className="default-btn assign-course-btn rounded-0 ms-lg-3">
                                Assign Course<span></span>
                            </a>
                        </Link>
                    </div>
                )}
                 {activeTab === 'Reports' && (
                    <div className="d-flex flex-column flex-lg-row admin-search-form">
                        <AdminSearchForm />

                        <Link href="/">
                            <a className="default-btn assign-course-btn rounded-0 ms-lg-3">
                                Download Report <span></span>
                            </a>
                        </Link>
                    </div>
                )}
            </div>

            {activeTab === 'Users' && (
                <div className="basic-profile-information-form">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    {profilePreview ? (
                                        <img
                                            src={profilePreview}
                                            className="img-thumbnail mw-200px"
                                        />
                                    ) : (
                                        <img
                                            src="/images/avatar.jpg"
                                            alt="image"
                                            className="img-thumbnail mw-200px"
                                        />
                                    )}
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Photo ID (must have DOB and current address) Ideally A Current Australian Drivers License
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="photo_id"
                                        // value={userUpdate.first_name}
                                        onChange={handleChange}
                                    />
                                    <p className="description">
                                        Upload image size 200x200 pixels!
                                    </p>
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Account active/inactive
                                    </label>
                                    <select
                                        className="form-select"
                                        name="account_active_inactive"
                                    // value={short}
                                    // onChange={(e) => setShort(e.target.value)}
                                    >
                                        <option value="">Choose Account Active/Inactive</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Employee ID
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="employee_id"
                                        placeholder="Employee ID"
                                        // value={userUpdate.employee_id}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Employee Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="employee_name"
                                        placeholder="Employee Name"
                                        // value={userUpdate.employee_name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Company Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="company_email"
                                        placeholder="Your Company Email Address"
                                        // value={userUpdate.company_email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Personal Number
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="phone_number"
                                        placeholder="Your Phone Number"
                                        // value={userUpdate.phone_number}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6">
                                <div className="form-group">
                                    {profilePreview ? (
                                        <img
                                            src={profilePreview}
                                            className="img-thumbnail mw-200px"
                                        />
                                    ) : (
                                        <img
                                            src="/images/avatar.jpg"
                                            alt="image"
                                            className="img-thumbnail mw-200px"
                                        />
                                    )}
                                </div>
                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Medicare card/HRWL etc
                                    </label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name="medicare_card"
                                        onChange={handleChange}
                                    />
                                    <p className="description">
                                        Upload image size 200x200 pixels!
                                    </p>
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Designation
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="designation"
                                        placeholder="Your Designation"
                                        // value={userUpdate.designation}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Payroll number/SAP Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="payroll_number"
                                        placeholder="Your Payroll number/SAP number"
                                        // value={userUpdate.employee_name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Work group location
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="work_group_location"
                                        placeholder="Your Work group location"
                                        // value={userUpdate.company_email}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Allocated code reference number
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="reference_number"
                                        placeholder="Your Allocated code reference number"
                                        // value={userUpdate.reference_number}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Date Started
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="date_started"
                                        placeholder="Date Started"
                                        // value={userUpdate.reference_number}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className="form-label fw-semibold">
                                        Date Finished
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="date_finished"
                                        placeholder="Date Finished"
                                        // value={userUpdate.date_finished}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="col-12 mt-2">
                                <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
                                    <div className="d-flex flex-row align-items-center">
                                        <button
                                            type="submit"
                                            className="btn default-btn px-5"
                                        >
                                            {/* <i className="flaticon-right-arrow"></i> */}
                                            Import
                                            <span></span>
                                            {loading ? <LoadingSpinner /> : ""}
                                        </button>
                                        <div className="save-draft ms-3">
                                            <Link href="" className="link">Save Draft</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
            {activeTab === 'Manage' && (
                <table className="w-100 border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-center">Select</th>
                            <th className="p-3">ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Course Name</th>
                            <th className="p-3">Designation</th>
                            <th className="p-3">Department</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="p-3 text-center">
                                    <input type="checkbox" className="custom-checkbox" id={`cb-${user.id}`} />
                                    <label htmlFor={`cb-${user.id}`} className="check-label"></label>
                                </td>
                                <td className="p-3">{user.empId}</td>
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3">{user.courseName}</td>
                                <td className="p-3">{user.designation}</td>
                                <td className="p-3">{user.department}</td>
                                <td className="p-3">{user.status}</td>
                                <td className="p-3 text-center action position-relative dropdown">
                                    <button
                                        className="btn p-0 border-0 bg-transparent action-bar-btn fw-bold"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        ⋮
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link href="/instructor/employees/personal-details">
                                                <a className="dropdown-item"><img src="/images/img/edit_view_report.svg" className="me-2"/>Edit/View Profile<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/user/user-profile">
                                                <a className="dropdown-item"><img src="/images/img/assign_course.svg" className="me-2"/>Assign Course<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/user/user-profile">
                                                <a className="dropdown-item"><img src="/images/img/view_ongoing_course.svg" className="me-2"/>View Ongoing Courses<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/user/user-profile">
                                                <a className="dropdown-item"><img src="/images/img/send_reminder.svg" className="me-2"/>Send Reminder<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/user/user-profile">
                                                <a className="dropdown-item"><img src="/images/img/deactivate_account.svg" className="me-2"/>Deactivate Account<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/user/user-profile">
                                                <a className="dropdown-item"><img src="/images/img/delete_account.svg" className="me-2"/>Delete Account<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            {activeTab === 'Reports' && (
                <table className="w-100 border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 text-center">Select</th>
                            <th className="p-3">ID</th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Email</th>
                            <th className="p-3 text-center">Assigned Course</th>
                            <th className="p-3 text-center">Completed Course</th>
                            <th className="p-3 text-center">In Progress</th>
                            <th className="p-3 text-center">Certificates Earned</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map((user, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="p-3 text-center">
                                    <input type="checkbox" className="custom-checkbox" id={`cb-${user.id}`} />
                                    <label htmlFor={`cb-${user.id}`} className="check-label"></label>
                                </td>
                                <td className="p-3">{user.empId}</td>
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3 text-center">{user.assignedCourses}</td>
                                <td className="p-3 text-center">{user.completedCourses}</td>
                                <td className="p-3 text-center">{user.inProgress}</td>
                                <td className="p-3 text-center">{user.certificatesEarned}</td>
                                <td className="p-3 text-center action position-relative dropdown">
                                    <button
                                        className="btn p-0 border-0 bg-transparent action-bar-btn fw-bold"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        ⋮
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link href="/instructor/employees/course-report/">
                                                <a className="dropdown-item"><img src="/images/img/edit_view_report.svg" className="me-2"/>Edit/View Full Report<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/user/user-profile">
                                                <a className="dropdown-item"><img src="/images/img/download_report.svg" className="me-2"/>Download Report<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/user/user-profile">
                                                <a className="dropdown-item"><img src="/images/img/assign_course.svg" className="me-2"/>Assign Course<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/user/user-profile">
                                                <a className="dropdown-item"><img src="/images/img/view_ongoing_course.svg" className="me-2"/>View Ongoing Courses<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/user/user-profile">
                                                <a className="dropdown-item"><img src="/images/img/deactivate_account.svg" className="me-2"/>Deactivate Account<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/user/user-profile">
                                                <a className="dropdown-item"><img src="/images/img/delete_account.svg" className="me-2"/>Delete Account<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

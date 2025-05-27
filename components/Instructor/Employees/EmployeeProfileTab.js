import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import UserCourseList from '@/components/Admin/UserProfile/UserCoursesList';

export default function EmployeeProfileTab() {
    const [activeTab, setActiveTab] = useState('Details');
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
            setActiveTab('Details');
        } else if (router.pathname === '/instructor/employees/employees-course') {
            setActiveTab('Course');
        } else if (router.pathname === '/instructor/employees/course-report') {
            setActiveTab('Report');
        }
    }, [router.pathname]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (tab === 'Details') {
            router.push('/instructor/employees/personal-details');
        } else if (tab === 'Course') {
            router.push('/instructor/employees/employees-course');
        } else if (tab === 'Report') {
            router.push('/instructor/employees/course-report');
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

    const courses = [
        {
            id: 1,
            courseName: 'CPCWHS1001',
            date_allocated: "25-04-2025",
            completed_date: "25-04-2025",
            completion: '100%',
            status: 'C',
        },
        {
            id: 2,
            courseName: 'BSBWHS411',
            date_allocated: "25-04-2025",
            completed_date: "25-04-2025",
            completion: '80%',
            status: 'NYC',
        },
        {
            id: 3,
            courseName: 'RIIRES402E',
            date_allocated: "25-04-2025",
            completed_date: "-",
            completion: '0%',
            status: 'C',
        },
        {
            id: 4,
            courseName: 'RIIRIS501E',
            date_allocated: "25-04-2025",
            completed_date: "25-04-2025",
            completion: '100%',
            status: 'NYC',
        }
    ];

    return (
        <div className="mt-4 user-business-tab">
            <h4 className="font-semibold text-lg mb-4">Employee Profile</h4>
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
                <div className="mb-4 border-b border-gray-300 flex space-x-4">
                    <button
                        onClick={() => handleTabChange('Details')}
                        className={`px-3 py-2 border-b-4 transition-all duration-200 ${activeTab === 'Details'
                            ? 'activeTab font-semibold'
                            : 'tab text-gray-600'
                            }`}
                    >
                        Personal Details
                    </button>
                    <button
                        onClick={() => handleTabChange('Course')}
                        className={`px-3 py-2 border-b-4 transition-all duration-200 ${activeTab === 'Course'
                            ? 'activeTab font-semibold'
                            : 'tab text-gray-600'
                            }`}
                    >
                        Employee's Course
                    </button>
                    <button
                        onClick={() => handleTabChange('Report')}
                        className={`px-3 py-2 border-b-4 transition-all duration-200 ${activeTab === 'Report'
                            ? 'activeTab font-semibold'
                            : 'tab text-gray-600'
                            }`}
                    >
                        Course Report
                    </button>
                </div>
            </div>

            {activeTab === 'Details' && (
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
            {activeTab === 'Course' && (
                <>
                    <UserCourseList />
                </>
            )}
            {activeTab === 'Report' && (
                <table className="w-100 border">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3">Course Name</th>
                            <th className="p-3">Date Allocated</th>
                            <th className="p-3 text-center">Completed Date</th>
                            <th className="p-3 text-center">Completion</th>
                            <th className="p-3 text-center">Status</th>
                            <th className="p-3 text-center">Result</th>
                            <th className="p-3 text-center">Certificate</th>
                            <th className="p-3 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((user, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="p-3">{user.courseName}</td>
                                <td className="p-3">{user.date_allocated}</td>
                                <td className="p-3 text-center">{user.completed_date}</td>
                                <td className="p-3 text-center">{user.completion}</td>
                                <td className="p-3 text-center">{user.status}</td>
                                <td className="p-3 text-center">
                                    <select id="result" name="result" className="result_dropdown">
                                        <option value="">Select</option>
                                        <option value="passed">Passed</option>
                                        <option value="failed">Failed</option>
                                    </select>
                                </td>
                                <td className="p-3 text-center download-certificate">Download</td>
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
                                            <Link href="/admin/user/user-profile">
                                                <a className="dropdown-item"><img src="/images/img/download_report.svg" className="me-2" />Download Report<span></span>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/admin/user/user-profile">
                                                <a className="dropdown-item"><img src="/images/img/assign_course.svg" className="me-2" />Assign Course Again<span></span>
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

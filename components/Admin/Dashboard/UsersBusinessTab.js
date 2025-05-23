import { useState, useEffect } from 'react';
import AdminSearchForm from './AdminSearchForm';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function UsersBusinessesTabs() {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('Businesses');

  useEffect(() => {
    if (router.pathname === '/admin/manage/manage-users') {
      setActiveTab('Users');
    } else {
      setActiveTab('Businesses');
    }
  }, [router.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'Users') {
      router.push('/admin/manage/manage-users');
    } else {
      router.push('/admin/manage/manage-businesses');
    }
  };
  const users = [
    {
      id: 1,
      name: "Jhon Doe",
      email: "jhon@acme.inc",
      assignedCourses: 2,
      completedCourses: 3,
      inProgress: 0,
      certificates: 1,
      status: "Active"
    },
    {
      id: 2,
      name: "Jhon Doe",
      email: "jhon@acme.inc",
      assignedCourses: 1,
      completedCourses: 2,
      inProgress: 2,
      certificates: 3,
      status: "Deactivated"
    },
    {
      id: 3,
      name: "Jhon Doe",
      email: "jhon@acme.inc",
      assignedCourses: 1,
      completedCourses: 1,
      inProgress: 2,
      certificates: 3,
      status: "Active"
    },
    {
      id: 4,
      name: "Jhon Doe",
      email: "jhon@acme.inc",
      assignedCourses: 1,
      completedCourses: 1,
      inProgress: 2,
      certificates: 3,
      status: "Active"
    },
    {
      id: 5,
      name: "Jhon Doe",
      email: "jhon@acme.inc",
      assignedCourses: 1,
      completedCourses: 1,
      inProgress: 2,
      certificates: 3,
      status: "Active"
    },
    {
      id: 6,
      name: "Jhon Doe",
      email: "jhon@acme.inc",
      assignedCourses: 1,
      completedCourses: 1,
      inProgress: 2,
      certificates: 3,
      status: "Active"
    },
    {
      id: 7,
      name: "Jhon Doe",
      email: "jhon@acme.inc",
      assignedCourses: 1,
      completedCourses: 1,
      inProgress: 2,
      certificates: 3,
      status: "Deactivated"
    }
  ];
  
  return (
    <div className="mt-4 user-business-tab">
      <h4 className="font-semibold text-lg mb-4">Manage Users/Businesses</h4>
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-2">
        <div className="mb-4 border-b border-gray-300 flex space-x-4">
          <button
            onClick={() => setActiveTab('Businesses')}
            className={`px-3 py-2 border-b-4 transition-all duration-200 ${activeTab === 'Businesses'
              ? 'activeTab font-semibold'
              : 'tab text-gray-600'
              }`}
          >
            Businesses
          </button>
          <button
            onClick={() => setActiveTab('Users')}
            className={`px-3 py-2 border-b-4 transition-all duration-200 ${activeTab === 'Users'
              ? 'activeTab font-semibold'
              : 'tab text-gray-600'
              }`}
          >
            Users
          </button>
        </div>
        <div className="d-flex flex-row admin-search-form">
          <AdminSearchForm />
          {activeTab === 'Users' && (
          <Link href="/">
            <a className="default-btn back-btn rounded-0 ms-3">
              Download Report <span></span>
            </a>
          </Link>
          )}
        </div>
      </div>


      <div className="table-responsive overflow-x-auto">
        {activeTab === 'Businesses' ? (
          <table className="w-100 border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">ACN</th>
                <th className="p-3">ABN</th>
                <th className="p-3">Company Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Department Manager's Name</th>
                <th className="p-3">Accounts Payable Contact</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(7)].map((_, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-3">123 456 789</td>
                  <td className="p-3">12 345 678 901</td>
                  <td className="p-3">Acme Inc.</td>
                  <td className="p-3">john@acme.inc</td>
                  <td className="p-3">Jhon Doe</td>
                  <td className="p-3">Jhon Doe</td>
                  <td className="p-3 text-center action position-relative dropdown">
                    <button
                      className="btn p-0 border-0 bg-transparent"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ⋮
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item d-flex flex-row align-items-center" type="button"><i className="bx bx-edit me-2"></i>Login as Business</button>
                      </li>
                      <li>
                        <button className="dropdown-item d-flex flex-row align-items-center" type="button"><i className="bx bx-trash me-2"></i>Delete Account</button>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-100 border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-center">Select</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Assigned Courses</th>
                <th className="p-3">Completed Courses</th>
                <th className="p-3">In Progress</th>
                <th className="p-3">Certificates Earned</th>
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
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.assignedCourses}</td>
                  <td className="p-3">{user.completedCourses}</td>
                  <td className="p-3">{user.inProgress}</td>
                  <td className="p-3">{user.certificates}</td>
                  <td className="p-3">{user.status}</td>
                  <td className="p-3 text-center action position-relative dropdown">
                    <button
                      className="btn p-0 border-0 bg-transparent"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ⋮
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item d-flex flex-row align-items-center" type="button"><i className="bx bx-edit me-2"></i>Edit/View Profile</button>
                      </li>
                      <li>
                        <button className="dropdown-item d-flex flex-row align-items-center" type="button"><i className="bx bx-download me-2"></i>Download Report</button>
                      </li>
                      <li>
                        <button className="dropdown-item d-flex flex-row align-items-center" type="button"><i className="bx bx-book-open me-2"></i>View Ongoing Courses</button>
                      </li>
                      <li>
                        <button className="dropdown-item d-flex flex-row align-items-center" type="button"><i className="bx bx-block me-2"></i>Deactivate Account</button>
                      </li>
                      <li>
                        <button className="dropdown-item d-flex flex-row align-items-center" type="button"><i className="bx bx-trash me-2"></i>Delete Account</button>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  );
}

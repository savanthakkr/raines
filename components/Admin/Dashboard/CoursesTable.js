import AdminSearchForm from "./AdminSearchForm";
import Link from "next/link";
export default function CoursesTable() {
    const courses = [
      { name: 'CPCWHS1001', instructor: 'Alan Raines', enrollments: 225, passing: '60%', date: '25-04-2025', status: 'Active' },
      { name: 'BSBWHS411', instructor: 'Alan Raines', enrollments: 100, passing: '80%', date: '25-04-2025', status: 'Inactive' },
      { name: 'RIIRES402E', instructor: 'Alan Raines', enrollments: 300, passing: '40%', date: '25-04-2025', status: 'Active' },
      { name: 'RIIRIS501E', instructor: 'Alan Raines', enrollments: 200, passing: '90%', date: '25-04-2025', status: 'Inactive' },
    ];
  
    return (
      <div className="mb-6 course-table">
        <div className="d-flex flex-column flex-lg-row justify-content-start justify-content-lg-between align-items-lg-center mb-3">
          <h4 className="font-semibold text-lg mb-0">Courses</h4>
          <div className="d-flex flex-column flex-lg-row mt-2">
            <AdminSearchForm/>
            <Link href="/admin/courses/create-course">
							<a className="default-btn rounded-0 ms-lg-3">
								Create Your Course <span></span>
							</a>
						</Link>
          </div>
        </div>
        <div className="table-responsive overflow-x-auto">
          <table className="min-w-100 w-100 border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Course Name</th>
                <th className="p-3 text-left">Instructor Name</th>
                <th className="p-3 text-left">Enrollments</th>
                <th className="p-3 text-left">Passing Percentage</th>
                <th className="p-3 text-left">Date Created</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, idx) => (
                <tr key={idx} className={`${idx === 0 ? 'mt-5' : 'mt-0'} mb-0`}>
                  <td className="p-3 course_name">{course.name}</td>
                  <td className="p-3">{course.instructor}</td>
                  <td className="p-3">{course.enrollments}</td>
                  <td className="p-3">{course.passing}</td>
                  <td className="p-3">{course.date}</td>
                  <td className="p-3">{course.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
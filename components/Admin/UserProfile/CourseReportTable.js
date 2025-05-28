import { useEffect } from "react";

export default function CourseReportTable() {
    useEffect(() => {
        // Dynamically import bootstrap JS only in the browser
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
      }, []);
    const courses = [
      { name: 'CPCWHS1001', dateAllocated: '25-04-2025', completedDate: '25-04-2025', completion: '100%', result: 'C', status: 'Passed' },
      { name: 'BSBWHS411', dateAllocated: '25-04-2025', completedDate: '25-04-2025', completion: '80%', result: 'NYC', status: 'Failed' },
      { name: 'RIIRES402E', dateAllocated: '25-04-2025', completedDate: '-', completion: '0%', result: 'C', status: '-' },
      { name: 'CPCWHS1001', dateAllocated: '25-04-2025', completedDate: '25-04-2025', completion: '100%', result: 'NYC', status: 'Passed' },
    ];
  
    return (
      <div className="mb-6 course-table course-report-table">
        <div className="table-responsive overflow-x-auto">
          <table className="min-w-100 w-100 border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Course Name</th>
                <th className="p-3 text-center">Date Allocated</th>
                <th className="p-3 text-center">Completed Date</th>
                <th className="p-3 text-center">Completion</th>
                <th className="p-3 text-center">Result</th>
                <th className="p-3 text-center">Status</th>
                <th className="p-3 text-center">Certificate</th>
                <th className="p-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, idx) => (
                <tr key={idx} className={`${idx === 0 ? 'mt-5' : 'mt-0'} mb-0`}>
                  <td className="p-3 text-left course_name">{course.name}</td>
                  <td className="p-3 text-center">{course.dateAllocated}</td>
                  <td className="p-3 text-center">{course.completedDate}</td>
                  <td className="p-3 text-center">{course.completion}</td>
                  <td className="p-3 text-center">{course.result}</td>
                  <td className="p-3 text-center">{course.status}</td>
                  <td className="p-3 text-center download-certificate">Download</td>
                  <td className="p-3 text-center action position-relative dropdown">
                    <button
                      className="btn p-0 border-0 bg-transparent action-bar-btn fw-bold"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ⋮
                    </button>
                    <ul className="dropdown-menu left-shift">
                      <li>
                        <button className="dropdown-item d-flex flex-row align-items-center" type="button"><img src="/images/img/assign-result-icon.svg" className="me-3"/>Assign Result</button>
                      </li>
                      <li>
                        <button className="dropdown-item d-flex flex-row align-items-center" type="button"><img src="/images/img/assign-reattempt-icon.svg" className="me-3"/>Assign Reattempt</button>
                      </li>
                      <li>
                        <button className="dropdown-item d-flex flex-row align-items-center" type="button"><img src="/images/img/download-report-icon.svg" className="me-3"/>Download Report</button>
                      </li>
                      <li>
                        <button className="dropdown-item d-flex flex-row align-items-center" type="button"><img src="/images/img/assign-course-again-icon.svg" className="me-3"/>Assign Course Again</button>
                      </li>
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
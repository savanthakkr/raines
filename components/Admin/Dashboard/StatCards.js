import { useState, useEffect } from "react";

export default function StatCards() {
  useEffect(() => {
    // Dynamically import bootstrap JS only in the browser
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  const [selectedRange, setSelectedRange] = useState('Last 7 Days');

  const ranges = ['Last 7 Days', 'Last Month', 'Last 3 Months', 'Last 6 Months'];

  return (
    <div className="row mb-4">
      {[
        { label: "Total Enrollments", src:'/images/img/total_enrollments.svg', value: 25 },
        { label: "Total Registered Users", src:'/images/img/total_registered_user.svg', value: 25 },
        { label: "Total Registered Businesses", src:'/images/img/total_registered_business.svg', value: 25 },
        { label: "Active vs Inactive Users", src:'/images/img/active_users.svg', value: '300k/150k'},
        { label: "Total Instructors", src:'/images/img/total_instructors.svg', value: 25 },
        { label: "Total Courses Created", src:'/images/img/total_courses.svg', value: 25 },
      ].map(({ label, src, value }, index, arr) => (
        <div key={label} className="col-md-4 mt-4">
          <div className="card shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="mb-0">{label}</h6>
              {index < arr.length - 2 && (
              <div className="dropdown">
                <button
                  className="btn btn-sm dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {selectedRange}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {ranges.map((range) => (
                    <li key={range}>
                      <button
                        className={`dropdown-item ${selectedRange === range ? 'active' : ''}`}
                        onClick={() => setSelectedRange(range)}
                      >
                        {range}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              )}
            </div>
            <div className="mt-3 d-flex flex-row align-items-center">
              <img src={src} className="me-3"/>
              <h3 className="fw-bold mb-0 value">{value}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

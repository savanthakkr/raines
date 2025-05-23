import React from 'react';

const CourseProgressSidebar = ({ courseTitle, modules, progress }) => {
    return (
        <aside className="progress-sidebar">
            <div className="top-info">
                <p>Your Progress 2 of 4 Complete. <a href="" class="certificate-link">Get Certificate</a></p>
                <div className="progress mb-3">
                    <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: '100%' }}
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                        {progress}%
                    </div>
                </div>
            </div>

            {/* <h5 className="course-title">{courseTitle}</h5> */}

            {/* <ul className="module-list">
                {modules.map((mod, idx) => (
                    <li key={idx} className={`module-item ${mod.completed ? 'completed' : ''}`}>
                        <div>{idx + 1}. {mod.title}
                        </div>
                        <div>
                            {mod.completed && (
                                <div
                                style={{
                                    backgroundColor: '#1AAF5D',
                                    borderRadius: '50%',
                                    padding: '0',              
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '20px',            
                                    height: '20px',
                                  }}
                                >
                                    <CheckCircle size={16} color="white" style={{ display: 'block' }} />
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul> */}
            
            <div className="checkout-section">
                <a href="/learning/course/course-assessment" className="default-btn w-100 mt-2">Complete Assessment<span></span></a>
            </div>

            {/* <div className="pending-result-section">
                <a href="/learning/course/course-assessment" className="default-btn w-100 mt-2">Pending for Result<span></span></a>
                <p className="text-center"><small>You will be notified through email once the result is out.</small></p>
            </div>

            <div className="passed-result-section">
                <a href="/learning/course/course-assessment" className="default-btn w-100 mt-2">Passed<span></span></a>
                <p className="text-center"><small>To view/download your certificate, click on <a href=""><b>View Certificate</b></a></small></p>
            </div> */}
        </aside>
    );
};

export default CourseProgressSidebar;

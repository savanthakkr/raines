import React from 'react';
import CourseOverview from '@/components/Learning/CourseOverview';
import CourseVideo from '@/components/Course/CourseVideo';
import WhatYouWillLearn from '@/components/Course/WhatYouWillLearn';
import Requirements from '@/components/Course/Requirements';
import WhoIsThisCourseFor from '@/components/Course/WhoIsThisCourseFor';

const CourseTheory = ({ user: current_user, course }) => {
    const {
        overview,
        is_class,
        slug,
        what_you_will_learn,
        who_is_this_course_for,
        requirements
    } = course;
    return (
        <>
            <div className="course-theory-details">
                <div className="row d-flex flex-row justify-content-between align-items-end">
                    <div className="col-sm-8">
                        <a className="navbar-brand">
                            <img src="/images/rainesLogo.png" alt="logo" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <p className="mb-0">Raines Resources Pty Ltd</p>
                        <p className="mb-0">ACN: 610326460</p>
                        <p className="mb-0">
                            <a className="mail-link" href="mailto:info@rainesresources.com.au">info@rainesresources.com.au</a>
                        </p>
                    </div>
                    <div className="col-sm-12">
                        <h4 className="title">1.1 Introduction</h4>
                        <p>The training course is based on the national unit of competency:<br/><b>CPCWSH1001 - Prepare to Work Safely in the Construction Industry.</b></p>
                        <p>The unit of competency directly relates to the induction training program specified by the National Code of Practice (ASCC s.6 of the Austrelian Workplace Safety Standards Act 2005).</p>
                        <div className="row">
                            <div className="col-sm-8">
                                This course covers the general WHS induction information you require to work on a civil construction site in all states and territories in Australia. This induction unit of competency also allows you to work on all mine sites where construction activities exist.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="courses-details-desc-style-two mt-0">
                
                    <CourseOverview overview={overview} />

                    {!is_class && (
                        <div className="mb-4">
                            <h3>Courses Video</h3>
                            {slug && (
                                <CourseVideo
                                    current_user={current_user}
                                    course={course}
                                />
                            )}
                        </div>
                    )}

                    <WhatYouWillLearn
                        what_you_will_learn={what_you_will_learn}
                    />

                    <Requirements requirements={requirements} />

                    <WhoIsThisCourseFor
									title='Assessment Components'
									content={who_is_this_course_for}
								/>
                </div>
            </div>
        </>
    );
};

export default CourseTheory;

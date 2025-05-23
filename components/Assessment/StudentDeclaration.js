import { useRouter } from 'next/router';

const StudentDeclaration = ({ user }) => {
    const router = useRouter();

    return (
        <>
            <div className="container">
                <div className="student-declaration-area">
                    <h3>Declaration of readiness for final assessment</h3>
                    <p className="mt-4">I <input type="text" className="textbox" />, (student) declare that I have completed the required training in the theory component of this unit of competence. I am confident that my skills and knowledge are at a level where I can attempt the final theory assessment for this course. I understand that in the event I do not satisfactorily complete this assessment that I may require further training. I further declare that I have read and understand the online unit of competency prior to attempting this assessment</p>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label className="form-label fw-semibold">
                                    Student Signature:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="student_sign"
                                    placeholder="Your Name"
                                />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label className="form-label fw-semibold">
                                    Date of Assessment:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="today_date"
                                    placeholder="Write Today’s Date"
                                />
                            </div>
                        </div>
                    </div>

                    <p className="mt-2">I,<input type="text" className="textbox" /> (Trainer) declare that the following is true, indicating that the above-mentioned learner has completed formal training and is ready for final assessment. Formal training has been completed. The above-mentioned learner has declared that they feel they are ready for final assessment.</p>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label className="form-label fw-semibold">
                                    Trainer Signature:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="student_sign"
                                    placeholder="Your Name"
                                />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <label className="form-label fw-semibold">
                                    Date of Assessment:
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="today_date"
                                    placeholder="Write Today’s Date"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <label className="form-label fw-bold my-3">
                                Have the consequences of the assessments been explained?
                            </label>
                        </div>
                        <div className="col-sm-12">
                            <div className="form-group radio-btn">
                                <label className="form-label fw-semibold">
                                    Location of Assessment
                                </label>
                                <div className="row">
                                    <div className="col-sm-12 col-md-2">
                                        <div className="radio-group">
                                            <fieldset>
                                                <input type="radio" id="assessment-location-yes" className="form-control" name="assessment-location" value="yes" />
                                                <label for="assessment-location-yes" className="radio-btn-label">Online</label>
                                            </fieldset>
                                            <fieldset>
                                                <input type="radio" id="assessment-location-no" className="form-control" name="assessment-location" value="no" />
                                                <label for="assessment-location-no" className="radio-btn-label">Other</label>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-10 mt-2 mt-md-0">
                                        <div className="form-group mb-0">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="location-of-assessment"
                                                placeholder="Write the location of your Assessment"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-sm-12">
                            <label className="form-label fw-bold">
                            RTO:<br/>
                            Raines Resources (RTO number)
                            </label>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between course-assessment-button">
                        <button
                            onClick={() => router.back()}
                            className="default-btn back-btn"
                        >
                            Back<span></span>
                        </button>
                        <a href="/assessment/assessment-instruction" className="default-btn">Submit & Continue<span></span></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentDeclaration;
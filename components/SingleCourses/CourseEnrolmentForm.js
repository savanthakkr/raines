import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const CourseEnrolmentForm = ({ user: current_user, course }) => {
    const [step, setStep] = useState(1);
    const router = useRouter();

    const nextStep = () => {
        if (step === 3) {
            router.push('/learning/my-courses')
        } else {
            setStep(prev => prev + 1);
        }
    };
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = async () => {

    }

    return (
        <>
            <div className="courses-enrollment-form ptb-100">
                <div className="container">
                    <h4 className="fw-bold mb-3">{course.title}</h4>
                    {step !== 3 && (
                        <h4 className="fw-bold mb-5">RAINES RESOURCES STUDENT ENROLMENT FORM</h4>
                    )}
                    <form onSubmit={handleSubmit}>

                    </form>
                    <form onSubmit={handleSubmit}>
                        {step == 1 && (
                            <>
                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Given Names:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="given_name"
                                                placeholder="Your Name"
                                            // value={userUpdate.first_name}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Surname:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="surname"
                                                placeholder="Your surname"
                                            // value={userUpdate.first_name}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Full Address:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="address"
                                                placeholder="Your full address"
                                            // value={userUpdate.first_name}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Suburb and Post Code:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="post_code"
                                                placeholder="Suburb and Post Code"
                                            // value={userUpdate.first_name}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Postal Address:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="postal_address"
                                                placeholder="Your full address"
                                            // value={userUpdate.first_name}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Suburb and Post Code:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="post_code"
                                                placeholder="Suburb and Post Code"
                                            // value={userUpdate.first_name}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Contact Number:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="contact_number"
                                                placeholder="Your Contact Number"
                                            // value={userUpdate.first_name}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-4">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Email:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="email"
                                                placeholder="Your Email"
                                            // value={userUpdate.first_name}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-12 col-lg-4">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                USI:
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="usi"
                                                placeholder="Your Email"
                                            // value={userUpdate.first_name}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Date of Birth:
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                name="usi"
                                                placeholder="Your Date of Birth"
                                            // value={userUpdate.first_name}
                                            // onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group radio-btn">
                                            <label className="form-label fw-semibold">
                                                Are you still enrolled in secondary or senior secondary education:
                                            </label>
                                            <div className="radio-group">
                                                <fieldset>
                                                    <input type="radio" id="yes" className="form-control" name="secondary_education" value="yes" />
                                                    <label for="yes" className="radio-btn-label">Yes</label>
                                                </fieldset>
                                                <fieldset>
                                                    <input type="radio" id="no" className="form-control" name="secondary_education" value="no" />
                                                    <label for="no" className="radio-btn-label">No</label>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Gender
                                            </label>
                                            <select
                                                className="form-select"
                                                name="gender"
                                            // value={short}
                                            // onChange={(e) => setShort(e.target.value)}
                                            >
                                                <option value="">Choose gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Which country were you born?
                                            </label>
                                            <select
                                                className="form-select"
                                                name="country"
                                            // value={short}
                                            // onChange={(e) => setShort(e.target.value)}
                                            >
                                                <option value="">Choose country</option>
                                                <option value="india">India</option>
                                                <option value="australia">Australia</option>
                                                <option value="usa">USA</option>
                                                <option value="canada">Canada</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group radio-btn">
                                            <label className="form-label fw-semibold">
                                                Have you successfully completed any of the qualification listed below
                                            </label>
                                            <div className="radio-group">
                                                <fieldset>
                                                    <input type="radio" id="qualification-yes" className="form-control" name="qualification" value="yes" />
                                                    <label for="qualification-yes" className="radio-btn-label">Yes</label>
                                                </fieldset>
                                                <fieldset>
                                                    <input type="radio" id="qualification-no" className="form-control" name="qualification" value="no" />
                                                    <label for="qualification-no" className="radio-btn-label">No</label>
                                                </fieldset>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                If yes choose from the below options accordingly <br /> qualification
                                            </label>
                                            <select
                                                className="form-select"
                                                name="qualification"
                                            // value={short}
                                            // onChange={(e) => setShort(e.target.value)}
                                            >
                                                <option value="">Choose any applicable qualifications from the list</option>
                                                <option value="graduate">Graduate</option>
                                                <option value="post_graduate">Post Graduate</option>
                                                <option value="under_graduate">Under Graduate</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group radio-btn">
                                            <label className="form-label fw-semibold">
                                                Do you speak a language other than English at home?
                                            </label>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-4">
                                                    <div className="radio-group">
                                                        <fieldset>
                                                            <input type="radio" id="language-yes" className="form-control" name="language" value="yes" />
                                                            <label for="language-yes" className="radio-btn-label">Yes</label>
                                                        </fieldset>
                                                        <fieldset>
                                                            <input type="radio" id="language-no" className="form-control" name="language" value="no" />
                                                            <label for="language-no" className="radio-btn-label">No</label>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-8 mt-2 mt-md-0">
                                                    <div className="form-group">
                                                        <select
                                                            className="form-select"
                                                            name="qualification"
                                                        // value={short}
                                                        // onChange={(e) => setShort(e.target.value)}
                                                        >
                                                            <option value="">Choose you language from the list </option>
                                                            <option value="english">English</option>
                                                            <option value="hindi">Hindi</option>
                                                            <option value="gujarati">Gujarati</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Of the following categories which BEST describes your current employment status?
                                            </label>
                                            <select
                                                className="form-select"
                                                name="qualification"
                                            // value={short}
                                            // onChange={(e) => setShort(e.target.value)}
                                            >
                                                <option value="">Choose only one status from the list </option>
                                                <option value="employed">Employed</option>
                                                <option value="unemployed">Unemployed</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Are you Aboriginal or Torres Strait islander origin?
                                            </label>
                                            <select
                                                className="form-select"
                                                name="country"
                                            // value={short}
                                            // onChange={(e) => setShort(e.target.value)}
                                            >
                                                <option value="">Choose one option from the list</option>
                                                <option value="india">India</option>
                                                <option value="australia">Australia</option>
                                                <option value="usa">USA</option>
                                                <option value="canada">Canada</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Of the following categories select the one which BEST describes the main reason you are undertaking this course/traineeship/apprenticeship?
                                            </label>
                                            <select
                                                className="form-select"
                                                name="country"
                                            // value={short}
                                            // onChange={(e) => setShort(e.target.value)}
                                            >
                                                <option value="">Of the following categories select the one which BEST describes the main reason you are undertaking this course/traineeship/apprenticeship?</option>
                                                <option value="india">India</option>
                                                <option value="australia">Australia</option>
                                                <option value="usa">USA</option>
                                                <option value="canada">Canada</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                Do you consider yourself to have a disability, impairment or long-term condition?
                                            </label>
                                            <select
                                                className="form-select"
                                                name="country"
                                            // value={short}
                                            // onChange={(e) => setShort(e.target.value)}
                                            >
                                                <option value="">Choose that suits you best from the list</option>
                                                <option value="india">India</option>
                                                <option value="australia">Australia</option>
                                                <option value="usa">USA</option>
                                                <option value="canada">Canada</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6">
                                        <div className="form-group">
                                            <label className="form-label fw-semibold">
                                                What’s your highest COMPLETED school level?
                                            </label>
                                            <select
                                                className="form-select"
                                                name="country"
                                            // value={short}
                                            // onChange={(e) => setShort(e.target.value)}
                                            >
                                                <option value="">Choose only one option from the list </option>
                                                <option value="india">India</option>
                                                <option value="australia">Australia</option>
                                                <option value="usa">USA</option>
                                                <option value="canada">Canada</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-2 text-end">
                                        <button
                                            type="btn"
                                            className="btn default-btn px-5"
                                            onClick={nextStep}
                                        >
                                            Next <span></span>
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}

                        {
                            step === 2 && (
                                <>
                                    <h6 className="fw-bold mb-3"> In this exercise, you will be undertaking a self-analysis of your current skills. We will use this information to identify a suitable course/duration for you. If you are unsure of your current skills, please inform any of the RR Trainers or the Training Manager. </h6>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6 col-lg-4">
                                            <div className="form-group">
                                                <label className="form-label fw-semibold">
                                                    Years of experience in the industry
                                                </label>
                                                <select
                                                    className="form-select"
                                                    name="years_of_experience"
                                                // value={short}
                                                // onChange={(e) => setShort(e.target.value)}
                                                >
                                                    <option value="">Select from the list</option>
                                                    <option value="0">Fresher</option>
                                                    <option value="1">1 year</option>
                                                    <option value="2">2 years</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4">
                                            <div className="form-group radio-btn">
                                                <label className="form-label fw-semibold">
                                                    Completed similar course before?
                                                </label>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-4">
                                                        <div className="radio-group">
                                                            <fieldset>
                                                                <input type="radio" id="completed-similar-yes" className="form-control" name="similar-course" value="yes" />
                                                                <label for="completed-similar-yes" className="radio-btn-label">Yes</label>
                                                            </fieldset>
                                                            <fieldset>
                                                                <input type="radio" id="completed-similar-no" className="form-control" name="similar-course" value="no" />
                                                                <label for="completed-similar-no" className="radio-btn-label">No</label>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-8 mt-2 mt-md-0">
                                                        <div className="form-group">
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                name="completed_course_date"
                                                                placeholder="If Yes, when"
                                                            // value={userUpdate.first_name}
                                                            // onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6 col-lg-4">
                                            <div className="form-group radio-btn">
                                                <label className="form-label fw-semibold">
                                                    Existing High Risk Work License?
                                                </label>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-4">
                                                        <div className="radio-group">
                                                            <fieldset>
                                                                <input type="radio" id="high-risk-yes" className="form-control" name="high-risk" value="yes" />
                                                                <label for="high-risk-yes" className="radio-btn-label">Yes</label>
                                                            </fieldset>
                                                            <fieldset>
                                                                <input type="radio" id="high-risk-no" className="form-control" name="high-risk" value="no" />
                                                                <label for="high-risk-no" className="radio-btn-label">No</label>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-8 mt-2 mt-md-0">
                                                        <div className="form-group">
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                name="high_risk_license"
                                                                placeholder="If Yes, specify class(es)"
                                                            // value={userUpdate.first_name}
                                                            // onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-responsive mt-4">
                                        <table className="table table-bordered">
                                            <thead className="table-light">
                                                <tr className="text-center">
                                                    <th>High Risk</th>
                                                    <th>Number of years operating machine</th>
                                                    <th>Details of How the Control(s) will be Implemented</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-light">
                                                {['LF', 'LO', 'EWP', 'DG', 'Rg', 'Cranes', '', ''].map((risk, index) => (
                                                    <tr key={index}>
                                                        <td>
                                                            {risk ? (
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={risk}
                                                                    readOnly
                                                                />
                                                            ) : (
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    placeholder=""
                                                                    name={`high_risk_${index}`}
                                                                />
                                                            )}
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name={`years_operating_${index}`}
                                                                placeholder=""
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                name={`control_details_${index}`}
                                                                placeholder=""
                                                            />
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="table-responsive mt-4">
                                        <table className="table table-bordered">
                                            <thead className="table-light">
                                                <tr className="text-center">
                                                    <th>Non-High Risk</th>
                                                    <th>Number of years operating machine</th>
                                                    <th>Details of How the Control(s) will be Implemented</th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-light">
                                                {['GTA / CSE', 'WAH', 'Firefighting', 'TH', 'Loadshifting', 'Others'].map((risk, index) => {
                                                    if (risk !== 'Others') {
                                                        return (
                                                            <tr key={index}>
                                                                <td>
                                                                    {risk ? (
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={risk}
                                                                            readOnly
                                                                        />
                                                                    ) : (
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            placeholder=""
                                                                            name={`high_risk_${index}`}
                                                                        />
                                                                    )}
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name={`years_operating_${index}`}
                                                                        placeholder=""
                                                                    />
                                                                </td>
                                                                <td>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        name={`control_details_${index}`}
                                                                        placeholder=""
                                                                    />
                                                                </td>
                                                            </tr>
                                                        );
                                                    } else {
                                                        return (
                                                            <>
                                                                {[1, 2, 3].map((i) => (
                                                                    <tr key={`others-${i}`}>
                                                                        {i === 1 && (
                                                                            <td rowSpan="3">
                                                                                <input
                                                                                    type="text"
                                                                                    className="form-control"
                                                                                    value="Others"
                                                                                    readOnly
                                                                                />
                                                                            </td>
                                                                        )}
                                                                        <td>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                name={`years_operating_others_${i}`}
                                                                                placeholder=""
                                                                            />
                                                                        </td>
                                                                        <td>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                name={`control_details_others_${i}`}
                                                                                placeholder=""
                                                                            />
                                                                        </td>
                                                                    </tr>
                                                                ))}
                                                            </>
                                                        );
                                                    }
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label className="form-label fw-bold">
                                                Pre-Practical Checklist
                                            </label>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group radio-btn">
                                                <label className="form-label fw-semibold">
                                                    Do you have any existing medical conditions which may interfere with your ability to participate in practical activities
                                                </label>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-4">
                                                        <div className="radio-group">
                                                            <fieldset>
                                                                <input type="radio" id="medical-condition-yes" className="form-control" name="medical-condition" value="yes" />
                                                                <label for="medical-condition-yes" className="radio-btn-label">Yes</label>
                                                            </fieldset>
                                                            <fieldset>
                                                                <input type="radio" id="medical-condition-no" className="form-control" name="medical-condition" value="no" />
                                                                <label for="medical-condition-no" className="radio-btn-label">No</label>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-8 mt-2 mt-md-0">
                                                        <div className="form-group">
                                                            <select
                                                                className="form-select"
                                                                name="medical_conditions"
                                                            // value={short}
                                                            // onChange={(e) => setShort(e.target.value)}
                                                            >
                                                                <option value="">If yes, briefly describe</option>
                                                                <option value="heart_condition">Heart Condition</option>
                                                                <option value="other">Other</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group radio-btn">
                                                <label className="form-label fw-semibold">
                                                    Do you have fear of heights?
                                                </label>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-4">
                                                        <div className="radio-group">
                                                            <fieldset>
                                                                <input type="radio" id="fear-yes" className="form-control" name="fear" value="yes" />
                                                                <label for="fear-yes" className="radio-btn-label">Yes</label>
                                                            </fieldset>
                                                            <fieldset>
                                                                <input type="radio" id="fear-no" className="form-control" name="fear" value="no" />
                                                                <label for="fear-no" className="radio-btn-label">No</label>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group radio-btn">
                                                <label className="form-label fw-semibold">
                                                    Any other comments / concers (if applicable)
                                                </label>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-4">
                                                        <div className="radio-group">
                                                            <fieldset>
                                                                <input type="radio" id="any-comments-yes" className="form-control" name="any-comments" value="yes" />
                                                                <label for="any-comments-yes" className="radio-btn-label">Yes</label>
                                                            </fieldset>
                                                            <fieldset>
                                                                <input type="radio" id="any-comments-no" className="form-control" name="any-comments" value="no" />
                                                                <label for="any-comments-no" className="radio-btn-label">No</label>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-8 mt-2 mt-md-0">
                                                        <div className="form-group">
                                                            <select
                                                                className="form-select"
                                                                name="any-concerns"
                                                            // value={short}
                                                            // onChange={(e) => setShort(e.target.value)}
                                                            >
                                                                <option value="">If yes, briefly describe</option>
                                                                <option value="heart_condition">Heart Condition</option>
                                                                <option value="other">Other</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group radio-btn">
                                                <label className="form-label fw-semibold">
                                                    Do you have difficulties entering confined spaces?
                                                </label>
                                                <div className="row">
                                                    <div className="col-sm-12 col-md-4">
                                                        <div className="radio-group">
                                                            <fieldset>
                                                                <input type="radio" id="difficulties-yes" className="form-control" name="difficulties" value="yes" />
                                                                <label for="difficulties-yes" className="radio-btn-label">Yes</label>
                                                            </fieldset>
                                                            <fieldset>
                                                                <input type="radio" id="difficulties-no" className="form-control" name="difficulties" value="no" />
                                                                <label for="difficulties-no" className="radio-btn-label">No</label>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label fw-semibold">
                                                    Name of Supervisor / Manager:
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="supervisor_name"
                                                    placeholder="Full Name"
                                                // value={userUpdate.first_name}
                                                // onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="form-label fw-semibold">
                                                    Contact Detail:
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="mobile_email"
                                                    placeholder="Mobile  or Email"
                                                // value={userUpdate.first_name}
                                                // onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 mt-2">
                                            <button
                                                type="btn"
                                                className="btn default-btn back-btn px-5"
                                                onClick={prevStep}
                                            >
                                                Back <span></span>
                                            </button>
                                        </div>
                                        <div className="col-6 mt-2 text-end">
                                            <button
                                                type="btn"
                                                className="btn default-btn px-5"
                                                onClick={nextStep}
                                            >
                                                Next <span></span>
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        {
                            step === 3 && (
                                <>
                                    <div class="enrolment-content-area">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="agreement-content">
                                                    <h4>Agreement</h4>
                                                    <p>I understand that:</p>
                                                    <ul>
                                                        <li>
                                                            If the course I am enrolled in has any requirements for evidence of on-the-job experience or practice with a particular machine, I need to provide the evidence, in the form required by RR, before I can be issued with an accredited Statement of Attainment.
                                                        </li>
                                                        <li>I have to satisfy any pre-requisite units if they exist.</li>
                                                        <li>Without the Unique Student Identifier (USI), I will not be able to receive my Statement of Attainment.</li>
                                                        <li>I am expected to contribute and participate in class discussion and group activities</li>
                                                        <li>I must act in a manner which does not adversely affect the learning of other participants in the course or interferes with the rights or obligations of RR or its Trainer/Assessors.</li>
                                                        <li>I will need to demonstrate my knowledge and understanding of the material and may be required to complete a practical exercise before I can be assessed for competence.</li>
                                                        <li>Assessment involves written exercises but if I have difficulty understanding any of the materials or require further assistance, I can and should find help.</li>
                                                        <li>If I am assessed as ‘Not Yet Competent’, I should talk to the Assessor/Training Manager about the options available to me, which may include further opportunity to practice my skills or request a copy of the Appeal Procedures.</li>
                                                        <li>I will have access to student feedback forms, which I can either request or may be asked to complete at the end of my training.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="privacy-notice-content">
                                                    <h4>Agreement</h4>
                                                    <h6>Why we collect your personal information</h6>
                                                    <p>As a registered training organisation (RTO), we collect your personal information so we can process and manage your enrolment in a vocational education and training (VET) course with us.</p>
                                                    <h6>How we use your personal information</h6>
                                                    <p>We use your personal information to enable us to deliver VET courses to you and, otherwise, as needed, to comply with our obligations as an RTO</p>
                                                    <h6>How we disclose your personal information</h6>
                                                    <p>We are required by law (under the National Vocational Education and Training Regulator Act 2011 (Cth) (NVETR Act)) to disclose the personal information we collect about you to the National VET Data Collection kept by the National Centre for Vocational Education Research Ltd (NCVER). The NCVER is responsible for collecting, managing, analysing and communicating research and statistics about the Australian VET sector.</p>
                                                    <p>We are also authorised by law (under the NVETR Act) to disclose your personal information to the relevant state or territory training authority.</p>
                                                    <h6>How the NCVER and other bodies handle your personal information</h6>
                                                    <p>The NCVER will collect, hold, use and disclose your personal information in accordance with the law, including the Privacy Act 1988 (Cth) (Privacy Act) and the NVETR Act. Your personal information may be used and disclosed by NCVER for purposes that include populating authenticated VET transcripts; administration of VET; facilitation of statistics and research relating to education, including surveys and data linkage; and understanding the VET market.
                                                        The NCVER is authorised to disclose information to the Australian Government Department of Education, Skills and Employment (DESE), Commonwealth authorities, State and Territory authorities (other than registered training organisations) that deal with matters relating to VET and VET regulators for the purposes of those bodies, including to:</p>
                                                    <ul>
                                                        <li>Administer VET, including program administration, regulation, monitoring and evaluation</li>
                                                        <li>Facilitate statistics and research relating to education, including surveys and data linkage</li>
                                                        <li>Understand how the VET market operates, for policy, workforce planning and consumer information</li>
                                                    </ul>
                                                    <p>The NCVER may also disclose personal information to persons engaged by NCVER to conduct research on NCVER’s behalf.</p>
                                                    <p>The NCVER does not intend to disclose your personal information to any overseas recipients.</p>
                                                    <p>For more information about how the NCVER will handle your personal information please refer to the NCVER’s Privacy Policy at www.ncver.edu.au/privacy.
                                                        If you would like to seek access to or correct your information, in the first instance, please contact your RTO using the contact details listed below.</p>
                                                    <p>DESE is authorised by law, including the Privacy Act and the NVETR Act, to collect, use and disclose your personal information to fulfil specified functions and activities. For more information about how the DESE will handle your personal information, please refer to the DESE VET Privacy Notice at https://www.dese.gov.au/national-vet-data/vet-privacy-notice.</p>
                                                    <h6>Surveys</h6>
                                                    <p>You may receive a student survey which may be run by a government department or an NCVER employee, agent, third-party contractor or another authorised agency. Please note you may opt out of the survey at the time of being contacted.</p>
                                                    <h6>Contact information</h6>
                                                    <p>At any time, you can contact Raines Resources (RR) to</p>
                                                    <ul>
                                                        <li>Request access to your personal information</li>
                                                        <li>Correct your personal information</li>
                                                        <li>Make a complaint about how your personal information has been handled</li>
                                                        <li>Ask a question about this Privacy Notice</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="agreement-content">
                                                    <h4>Student Declaration and Consent</h4>
                                                    <p className="mb-0">I agree to the Agreement and declare that the information I have provided to the best of my knowledge is true and correct.</p>
                                                    <p>I consent to the collection, use and disclosure of my personal information in accordance with the Privacy Notice above.</p>
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label fw-semibold">
                                                                    STUDENT SIGNATURE:
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="student_sign"
                                                                    placeholder="Your Signature"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label fw-semibold">
                                                                    Date:
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="today_date"
                                                                    placeholder="Today’s Date"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label fw-semibold">
                                                                    PARENT/GUARDIAN SIGNATURE*:
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="parents_sign"
                                                                    placeholder="Your Parent's Signature"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="form-group">
                                                                <label className="form-label fw-semibold">
                                                                    Date:
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="todays_date"
                                                                    placeholder="Today’s Date"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div class="col-sm-12">
                                                            <p className="mt-0 mb-4">*Parental/guardian consent is required for all students under the age of 18.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 mt-2">
                                                <button
                                                    type="btn"
                                                    className="btn default-btn back-btn px-5"
                                                    onClick={prevStep}
                                                >
                                                    Back <span></span>
                                                </button>
                                            </div>
                                            <div className="col-6 mt-2 text-end">
                                                <button
                                                    type="btn"
                                                    className="btn default-btn px-5"
                                                    onClick={nextStep}
                                                >
                                                    Submit<span></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                    </form>
                </div>
            </div>
        </>
    );
};

export default CourseEnrolmentForm;

import { useRouter } from 'next/router';

const CourseAssessmentContent = () => {
    const router = useRouter();
    return (
        <>
            <div className="course-assessment-area">
                <div className="row">
                    <div className="col-12 text-center">
                        <img src="/images/img/course-assessment-icon.svg" />
                        <h3 className="mt-4">RIIRIS402E Carry out the risk management process.</h3>
                        <h5 className="mt-3">Final Theory Assessment A + Practical Assessment B </h5>
                        <p className="mt-3">You will have 90 minutes to complete this assessments.</p>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between course-assessment-button">
                    <button
                        onClick={() => router.back()}
                        className="default-btn back-btn"
                    >
                        Back<span></span>
                    </button>
                    <a href="/assessment" className="default-btn">Start The Exam<span></span></a>
                </div>
            </div>
        </>
    )
}

export default CourseAssessmentContent;
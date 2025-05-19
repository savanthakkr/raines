import { useRouter } from 'next/router';

const PracticalAssessmentInstruction = () => {
    const router = useRouter();

    return (
        <>
            <div className="container">
                <div className="theory-assessment-instruction">
                    <div>
                        <h4>RIIRIS402E Carry out the risk management process.</h4>
                        <h5>Practical Assessment B</h5>
                        <p className="my-3">The practical assessment consists of two assignments. </p>
                    </div>
                    <div>
                        <h6>Conditions of Assessment</h6>
                        <ol>
                            <li>
                                The assessor will provide you with instructions about what you are required to do.
                            </li>
                            <li>
                                You are required to undertake an assessment for carrying out the risk management process in the resources and infrastructure industry.
                            </li>
                            <li>
                                Each person must be observed and be assessed as being competent in each task even in situations where the work is completed by a team. (Classroom based delivery only)
                            </li>
                            <li>
                                If you are unclear about what you must do, ask the assessor before you start.
                            </li>
                            <li>
                                The assessment is a closed book assessment. You may not use any references, books or course notes during the assessment, unless the resource is an authorized tool for assessment completion.
                            </li>
                            <li>
                                You should be able to complete all assignments within 4 hours. <br />
                                The time stated is a guide only. If you cannot complete the assignments at the slated time this will be considered when assessing your overall competency.
                            </li>
                            <li>
                                All assessments must be satisfactorily demonstrated. If you do not satisfactorily complete an 	assignment a result of ‘Not yet competent’ will be the result.
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h6>Personal Protective Equipment (PPE).</h6>
                        <p className="mt-3">This assessment is online, and classroom based. All PPE must comply with the risk assessment protocols of the workplace or assessment environment.</p>
                        <p className="mb-3">
                            If you do not have the appropriate PPE the assessment cannot be undertaken.
                        </p>
                    </div>
                    <div>
                        <h6>Cessation of the Assessment.</h6>
                        <p className="mt-3">If at any time during any assessment, you act in a way that puts yourself, other candidates, assessors or equipment or property in a position where injury harm or damage may occur, the assessment will be stopped immediately.
                            Your assessor will identify and record these actions. Your course attendance will be cancelled, you will forfeit all monies paid or due to be paid in relation to this scheduled training event.
                        </p>
                        <p className="mb-3">
                            In the event of illness or direct family emergencies your rights under our company policies will enable you to reschedule the assessment for a later time. You may be required to complete all or part thereof of the practical assessment again at that time. This will be at the discretion of RR.
                        </p>
                    </div>
                    <div>
                        <h6>Achieving a Satisfactory Outcome</h6>
                        <p className="mt-3 mb-0">In order to achieve a satisfactory outcome for the practical assessment you will need to: </p>
                        <ul className="mb-3">
                            <li>Complete all tasks and assignments, satisfactorily in their entirety within a timely manner, mirroring real world conditions, expectations and outcomes.</li>
                            <li>
                            Complete all tasks and assignments safely, using the correct methodology ensuring your own safety and the safety of others at all times.  
                            </li>
                            <li>Work with others where necessary, to safely and effectively achieve all the desired assignment results.</li>
                            <li>(classroom based delivery)</li>
                        </ul>
                    </div>
                    <div>
                        <h6>Electronic Signatures</h6>
                        <p className="mt-3">
                            Electronic signatures are permitted when conducting the assessments online or when completing the assessment in the classroom.Electronic signatures are permitted when conducting the assessments online or when completing the assessment in the classroom.
                        </p>
                    </div>
                    <div className="d-flex flex-row justify-content-end course-assessment-button mt-5">
                        <a href="/assessment/assessment-instruction" className="default-btn">Next<span></span></a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default PracticalAssessmentInstruction;
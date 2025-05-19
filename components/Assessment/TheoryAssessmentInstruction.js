import { useRouter } from 'next/router';

const TheoryAssessmentInstruction = () => {
    const router = useRouter();

    return (
        <>
            <div className="container">
                <div className="theory-assessment-instruction">
                    <div>
                        <h4>RIIRIS402E Carry out the risk management process.</h4>
                        <h5>Final Theory Assessment A</h5>
                        <p className="my-3">The following assessment RIIRIS402E is a DEMIRS (Department of Energy, Mines, Industry Regulations and Safety) authorized unit of competency which is the equivalent of BSBWHS414 of which both units of competency are recognized by DEMIRS. Under the Work Health and Safety (Mines) Regulations 2022 [r.675ZZJ(1)] for Statutory Supervisors.</p>
                    </div>
                    <div>
                        <h6>Candidate Instructions: </h6>
                        <p className="mt-3 mb-0">This assessment requires you to demonstrate the skills and knowledge required to prepare to work safely in the construction/mining industries.</p>
                        <p className="mb-0">
                            The test has been divided into 2 main parts: </p>
                        <ol>
                            <li>
                                Theory Assessment. (part A)
                            </li>
                            <li>
                                Practical Assessment. (part B)
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h6>Theory Assessment:</h6>
                        <p className="mt-3 mb-0">Your assessor will decide with you whether you will complete the theory assessment in an oral or written format. </p>
                        <p className="mb-0">
                            If you complete the assessment orally, your assessor will record your answers for you using a suitable method at an appropriate time, prior to attempting the practical assessment. You are required to sign-off on the recorded answers to indicate that they have accurately captured your response.</p>
                        <p className="mb-3">
                            If you undertake a written assessment, you must write your own answers using the assessment tool provided</p>
                    </div>
                    <div>
                        <h6>Conditions of Assessment </h6>
                        <p className="mt-3 mb-0">You may start at any time.</p>
                        <p className="mb-0">
                            During this time, you are allowed to ask the assessor about any questions in the assessment that you do not understand. In the event the assessment is conducted online the candidate may pause the assessment and communicate their question via email or by phone prior to the commencement of the assessment.
                        </p>
                        <p className="mb-0">
                            You will then have 105 minutes to answer the 38 questions. You must address all the questions. If you cannot complete the assessment at the stated time you may be given more time at the discretion of the assessor. Online assessments may time out after 110 minutes of commencement.
                        </p>
                        <p className="mb-0">
                            Note: this may be a factor in assessing overall competency.
                        </p>
                        <p className="mb-0">
                            All questions must be answered without any assistance. You cannot use any references, books or course notes.
                        </p>
                        <p className="mb-0">
                            You may use a calculator during the assessment, provided it is not a scientific calculator.
                        </p>
                        <p className="mb-3">
                            Your assessor will check your answers after you have finished and ask you to explain anything that is unclear.
                        </p>
                    </div>
                    <div>
                        <h6>Achieving a Satisfactory Outcome</h6>
                        <p className="mt-3 mb-0">In order to achieve a satisfactory outcome for the theory assessment you will need to:</p>
                        <ul className="mb-0">
                            <li>Complete all questions correctly.</li>
                            <li>
                                Demonstrate sufficient knowledge of the subject.
                            </li>
                            <li>Use reasonable methods or considerations in coming to the answers.</li>
                        </ul>

                        <p className="mb-3">
                            Correctly explain principles when questioned by your assessor in the instance where your original answer is unclea
                        </p>
                    </div>
                    <div>
                        <h6>Electronic Signatures</h6>
                        <p className="mt-3">Electronic signatures are permitted when conducting the assessments online or when completing the assessment in the classroom.</p>
                    </div>
                    <div className="d-flex flex-row justify-content-between course-assessment-button mt-5">
                    <button
                        onClick={() => router.back()}
                        className="default-btn back-btn"
                    >
                        Back<span></span>
                    </button>
                    <a href="/assessment/practical-assessment" className="default-btn">Start<span></span></a>
                </div>
                </div>
                
            </div>
        </>
    );
}

export default TheoryAssessmentInstruction;
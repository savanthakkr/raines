import { useRouter } from 'next/router';

const RiskMatrixDetails = ({ user }) => {
    const router = useRouter();

    return (
        <>
            <div className="container">
                <div className="risk-matrix-details">
                    <div>
                        <div className="d-flex flex-row justify-content-between">
                            <h5>Risk Matrix</h5>
                            <div className="d-flex flex-row align-items-center timing">
                                <img src="/images/img/clock.svg" className="me-1" />
                                90:00
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                    <table className="table table-bordered risk-matrix-table mt-3">
                        <thead>
                            <tr>
                                <th colspan="6" className="consequence">Consequence</th>
                            </tr>
                            <tr>
                                <th className="main-head">Likelihood</th>
                                <th className="head">1. Insignificant</th>
                                <th className="head">2. Minor<br /><small>First Aid Required</small></th>
                                <th className="head">3. Moderate<br /><small>Medical Attention and Time Off Work</small></th>
                                <th className="head">4. Major<br /><small>Long Term Illness or Serious Injury</small></th>
                                <th className="head">5. Catastrophic<br /><small>Kill or Cause Permanent Disability or illness</small></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className="text-start">1. Rare</th>
                                <td className="low">Low</td>
                                <td className="low">Low</td>
                                <td className="moderate">Moderate</td>
                                <td className="moderate">Moderate</td>
                                <td className="moderate">Moderate</td>
                            </tr>
                            <tr>
                                <th className="text-start">2. Unlikely</th>
                                <td className="low">Low</td>
                                <td className="low">Low</td>
                                <td className="moderate">Moderate</td>
                                <td className="moderate">Moderate</td>
                                <td className="high">High</td>
                            </tr>
                            <tr>
                                <th className="text-start">3. Possible</th>
                                <td className="low">Low</td>
                                <td className="moderate">Moderate</td>
                                <td className="high">High</td>
                                <td className="high">High</td>
                                <td className="extreme">Extreme</td>
                            </tr>
                            <tr>
                                <th className="text-start">4. Likely</th>
                                <td className="moderate">Moderate</td>
                                <td className="moderate">Moderate</td>
                                <td className="high">High</td>
                                <td className="high">High</td>
                                <td className="extreme">Extreme</td>
                            </tr>
                            <tr>
                                <th className="text-start">5. Almost Certain</th>
                                <td className="moderate">Moderate</td>
                                <td className="high">High</td>
                                <td className="high">High</td>
                                <td className="extreme">Extreme</td>
                                <td className="extreme">Extreme</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                  

                    <h5 className="mt-1 mb-3"><b>Actionable events</b></h5>
                    <table className="table table-bordered actionable-events-table">
                        <thead>
                            <tr className="risk-heading">
                                <th className="risk-level">Risk Level</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="extreme text-white fw-bold">Extreme</td>
                                <td>
                                    <strong>This is an unacceptable risk level.</strong><br />
                                    The task, process or activity <strong>must not</strong> proceed.
                                </td>
                            </tr>
                            <tr>
                                <td className="high fw-bold text-white">High</td>
                                <td>
                                    <strong>This is an unacceptable risk level.</strong><br />
                                    The proposed activity can only proceed, provided that:
                                    <ol className="mb-0">
                                        <li>The risk level has been reduced to as low as reasonably practicable using the hierarchy of risk controls.</li>
                                        <li>The risk controls must include those identified in legislation, Australian Standards, Codes of Practice etc.</li>
                                        <li>The risk assessment has been reviewed and approved by the Supervisor.</li>
                                        <li>A Safe Working Procedure or Work Method Statement has been prepared. The supervisor must review and document the effectiveness of the implemented risk controls.</li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td className="moderate fw-bold">Moderate</td>
                                <td>
                                    <strong>This is an unacceptable risk level.</strong><br />
                                    The proposed activity can only proceed, provided that:
                                    <ol className="mb-0">
                                        <li>The risk level has been reduced to as low as reasonably practicable using the hierarchy of risk controls.</li>
                                        <li>The risk assessment has been reviewed and approved by the Supervisor.</li>
                                        <li>A Safe Working Procedure or Work Method Statement has been prepared</li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td className="low fw-bold">Low</td>
                                <td>
                                    The proposed task or process needs to be managed by documented routine procedures, which must include application of the hierarchy of controls.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-flex flex-row justify-content-between course-assessment-button mt-5">
                        <button
                            onClick={() => router.back()}
                            className="default-btn back-btn"
                        >
                            Back<span></span>
                        </button>
                        <a href="/assessment/assessment-instruction" className="default-btn">Next<span></span></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RiskMatrixDetails;
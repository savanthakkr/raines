import { useRouter } from 'next/router';
import { useState } from 'react';

const INITIAL_VALUE = {
    title: "",
    short_desc: "",
    overview: "",
    online_price: 0.0,
    latest_price: 0.0,
    face_to_face_price: 0.0,
    lessons: "",
    duration: "",
    language: "",
    image: "",
    access_time: "",
    requirements: "",
    what_you_will_learn: "",
    who_is_this_course_for: "",
    catId: "",
    course_duration: "",
};
const questions = [
    "What 4 documents can you refer to when undertaking risk management processes?",
    "What are the 3 main stages of the risk management process?",
    "Why is it important to consult with various personnel during the risk management process?",
    "What is meant by the term ‘parameters’ in risk assessment?",
    "Defining the scope of works enables you to focus on?",
];
const handleChange = (e) => {
    const { name, value, files } = e.target;
    const file = e.target.files[0];

    // For Uploading Course Image
    if (name === "image") {
        const image = files[0].size / 1024 / 1024;
        if (image > 2) {
            toast.error(
                "The photo size greater than 2 MB. Make sure less than 2 MB.",
                {
                    style: {
                        border: "1px solid #ff0033",
                        padding: "16px",
                        color: "#ff0033",
                    },
                    iconTheme: {
                        primary: "#ff0033",
                        secondary: "#FFFAEE",
                    },
                }
            );
            e.target.value = null;
            return;
        }
        setCourse((prevState) => ({
            ...prevState,
            image: files[0],
        }));
        setImagePreview(window.URL.createObjectURL(files[0]));
    } else {
        setCourse((prevState) => ({ ...prevState, [name]: value }));
    }

    // For Uploading Course Material

    if (file && file.type === "application/pdf") {
        setSelectedFile(file);
    } else {
        alert("Only PDF files are allowed.");
        e.target.value = null; // clear input
        setSelectedFile(null);
    }
};

const FinalTheoryAssessment = () => {
    const router = useRouter();
    const [course, setCourse] = useState(INITIAL_VALUE);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            let photo;
            if (course.image) {
                photo = await handleImageUpload();

                photo = photo.replace(/^http:\/\//i, "https://");
            }

            const {
                title,
                short_desc,
                overview,
                latest_price,
                face_to_face_price,
                lessons,
                duration,
                access_time,
                requirements,
                what_you_will_learn,
                who_is_this_course_for,
                catId,
                course_duration,
            } = course;
            const payloadData = {
                title,
                short_desc,
                overview,
                latest_price,
                face_to_face_price,
                lessons,
                duration,
                image: photo,
                access_time,
                requirements,
                what_you_will_learn,
                who_is_this_course_for,
                catId,
                course_duration,
                is_class,
            };

            const payloadHeader = {
                headers: { Authorization: elarniv_users_token },
            };

            const url = `${baseUrl}/api/courses/new`;
            const response = await axios.post(url, payloadData, payloadHeader);
            setLoading(false);

            toast.success(response.data.message, {
                style: {
                    border: "1px solid #4BB543",
                    padding: "16px",
                    color: "#4BB543",
                },
                iconTheme: {
                    primary: "#4BB543",
                    secondary: "#FFFAEE",
                },
            });

            if (is_class) {
                router.push(`/instructor/courses`);
            } else {
                router.push(
                    `/instructor/course/upload/${response.data.course.id}`
                );
            }
        } catch (err) {
            // console.log(err);
            let {
                response: {
                    data: { message },
                },
            } = err;
            toast.error(message, {
                style: {
                    border: "1px solid #ff0033",
                    padding: "16px",
                    color: "#ff0033",
                },
                iconTheme: {
                    primary: "#ff0033",
                    secondary: "#FFFAEE",
                },
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="container">
                <div className="practical-assessment-instruction">
                    <div>
                        <div className="d-flex flex-row justify-content-between">
                            <h4>Final Theory Assessment A</h4>
                            <div className="d-flex flex-row align-items-center timing">
                                <img src="/images/img/clock.svg" className="me-1" />
                                90:00
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="mt-3">
                        <div className="row">
                            {questions.map((question, index) => (
                                <div className="col-md-12" key={index}>
                                    <div className="form-group">
                                        <label className="form-label fw-semibold">
                                            {index + 1}. {question}
                                        </label>
                                        <textarea
                                            className="form-control"
                                            placeholder="Answer"
                                            name={`question_${index}`}
                                            value={course[`question_${index}`] || ""}
                                            onChange={handleChange}
                                            rows={4}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </form>
                    <div className="d-flex flex-row justify-content-between course-assessment-button mt-5">
                        <button
                            onClick={() => router.back()}
                            className="default-btn back-btn"
                        >
                            Back<span></span>
                        </button>
                        <a href="/assessment/practical-assessment" className="default-btn">Next<span></span></a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default FinalTheoryAssessment;
import { useState } from "react";
import dynamic from "next/dynamic";
import controls from "@/utils/RTEControl";


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

const RichTextEditor = dynamic(() => import("@mantine/rte"), {
    ssr: false,
    loading: () => null,
});

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

const AdminCreateAssessment = () => {
    const [course, setCourse] = useState(INITIAL_VALUE);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-12 admin-course-create">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Paragraph Here:
                            </label>
                            <RichTextEditor
                                controls={controls}
                                value={course.overview}
                                onChange={(e) =>
                                    setCourse((prevState) => ({
                                        ...prevState,
                                        overview: e,
                                    }))
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="question"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="question"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="question"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="question"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 admin-course-create">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Paragraph Here:
                            </label>
                            <RichTextEditor
                                controls={controls}
                                value={course.overview}
                                onChange={(e) =>
                                    setCourse((prevState) => ({
                                        ...prevState,
                                        overview: e,
                                    }))
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-12 admin-course-create">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Paragraph Here:
                            </label>
                            <RichTextEditor
                                controls={controls}
                                value={course.overview}
                                onChange={(e) =>
                                    setCourse((prevState) => ({
                                        ...prevState,
                                        overview: e,
                                    }))
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Yes/No question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Have the consequences of the assessments been explained?"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Yes/No question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Are you aware of what the assessment consists of and the preparation you should undertake?"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Yes/No question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Have your rights and the appeal system been explained?"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Yes/No question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Are you aware of how the assessment may be modified to address your special needs?"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Yes/No question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Are you aware of, accept and understand that the training activities conducted by RR are potentially physically strenuous and/or emotionally stressful?"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Yes/No question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Do you declare that you have an average level of fitness and have no physical disabilities that could preclude you from conducting this online assessment."
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Yes/No question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Do you agree to participate in each of the two activities (practical and Theoretical) with a positive attitude and act responsibly."
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Yes/No question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="In any event do you agree that if you suffer an injury or illness as a result of, or in connection with the online or the Face to Face delivery activities that the staff of RR are 
 not liable what so ever. In the event that the RR staff become aware of any health issue, 
 RR can arrange first aid and emergency transport as deemed necessary on your behalf at your cost? 
"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Yes/No question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Are you aware that you are required to report any incidents, hazards or near misses to the course facilitator?"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-12 admin-course-create">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Paragraph Here:
                            </label>
                            <RichTextEditor
                                controls={controls}
                                value={course.overview}
                                onChange={(e) =>
                                    setCourse((prevState) => ({
                                        ...prevState,
                                        overview: e,
                                    }))
                                }
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Yes/No question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Candidate Signature:"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label className="form-label fw-semibold">
                                Write Yes/No question here:
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="date"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default AdminCreateAssessment;
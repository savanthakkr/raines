import React, { useState, useEffect } from "react";
import controls from "@/utils/RTEControl";
import dynamic from "next/dynamic";
import Link from "next/link";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
    ssr: false,
    loading: () => null,
});
import axios from "axios";
import { parseCookies } from "nookies";
import baseUrl from "@/utils/baseUrl";
import LoadingSpinner from "@/utils/LoadingSpinner";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

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

const AdminCourseCreate = ({ btnText, is_class }) => {
    const { elarniv_users_token } = parseCookies();
    const [course, setCourse] = useState(INITIAL_VALUE);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [categories, setCategories] = useState([]);
    const [imagePreview, setImagePreview] = React.useState("");
    const router = useRouter();
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const isCourse = Object.values(course).every((el) => Boolean(el));
        isCourse ? setDisabled(false) : setDisabled(true);
    }, [course]);

    useEffect(() => {
        const fetchData = async () => {
            const payload = {
                headers: { Authorization: elarniv_users_token },
            };
            const response = await axios.get(
                `${baseUrl}/api/categories`,
                payload
            );
            setCategories(response.data.categories);
        };

        fetchData();
    }, []);

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

    const handleImageUpload = async () => {
        const data = new FormData();
        data.append("file", course.image);
        data.append("upload_preset", process.env.UPLOAD_PRESETS);
        data.append("cloud_name", process.env.CLOUD_NAME);
        let response;
        if (course.image) {
            response = await axios.post(process.env.CLOUDINARY_URL, data);
        }
        const imageUrl = response.data.url;

        return imageUrl;
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

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Course Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Course Title"
                            name="title"
                            value={course.title}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Lessons
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="5"
                            name="lessons"
                            value={course.lessons}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Course Type
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Online and Face-to-Face"
                            name="type"
                            value={course.type}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Online Price
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="0"
                            aria-describedby="online_price_help"
                            name="latest_price"
                            value={course.online_price}
                            onChange={handleChange}
                        />
                        <div id="online_price_help" className="form-text">
                            The online price will show like this <del>49.99</del>. If you set latest price
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Latest Price
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="29.99"
                            aria-describedby="latest_price_help"
                            name="latest_price"
                            value={course.latest_price}
                            onChange={handleChange}
                        />
                        <div id="latest_price_help" className="form-text">
                            The latest price will show as the course price.
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Face-to-Face Price
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="49.99"
                            aria-describedby="face_to_face_price"
                            name="face_to_face_price"
                            value={course.face_to_face_price}
                            onChange={handleChange}
                        />
                        <div id="face_to_face_price_help" className="form-text">
                            Face-to-Face price will show like this <del>49.99</del>. If you set latest price
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Duration
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="4 Hours or 2 Weeks"
                            name="duration"
                            value={course.duration}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Access Time
                        </label>
                        <select
                            className="form-select"
                            name="access_time"
                            value={course.access_time}
                            onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="Lifetime">Lifetime</option>
                            <option value="Three Months">Three Months</option>
                            <option value="Six Months">Six Months</option>
                            <option value="1 Year">1 Year</option>
                        </select>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Language
                        </label>
                        <select
                            className="form-select"
                            name="access_time"
                            value={course.language}
                            onChange={handleChange}
                        >
                            <option value="">Select</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                        </select>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group radio-btn">
                        <label className="form-label fw-semibold">
                            Will there be a certificate for the course?
                        </label>
                        <div className="row">
                            <div className="col-sm-12 col-md-4">
                                <div className="radio-group">
                                    <fieldset>
                                        <input type="radio" id="certificate-yes" className="form-control" name="assessment-location" value="yes" />
                                        <label for="certificate-yes" className="radio-btn-label">Yes</label>
                                    </fieldset>
                                    <fieldset>
                                        <input type="radio" id="certificate-no" className="form-control" name="assessment-location" value="no" />
                                        <label for="certificate-no" className="radio-btn-label">No</label>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Course Image
                        </label>
                        <input
                            type="file"
                            className="form-control file-control"
                            name="image"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="form-text">
                            Upload image size 750x500!
                        </div>

                        <div className="mt-2">
                            <img
                                src={
                                    imagePreview
                                        ? imagePreview
                                        : "/images/courses/courses15.jpg"
                                }
                                alt="image"
                                className="img-thumbnail w-100px me-2"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Course Category
                        </label>
                        {/* <select
							className="form-select"
							name="catId"
							value={course.catId}
							onChange={handleChange}
						>
							<option value="">Select</option>
							{categories.length > 0 &&
								categories.map((cat) => (
									<option key={cat.id} value={cat.id}>
										{cat.name}
									</option>
								))}
						</select> */}
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Write your category here"
                            name="category"
                            value={course.catId}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* <div className="col-md-12">
					<div className="form-group">
						<label className="form-label fw-semibold">
							Short Description
						</label>
						<textarea
							className="form-control"
							name="short_desc"
							value={course.short_desc}
							onChange={handleChange}
						/>
						<div className="form-text">
							The description will highlight all available areas.
						</div>
					</div>
				</div> */}

                <div className="col-md-12 admin-course-create">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Overview
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
                            Upload Course Material
                        </label>
                        <input
                            type="file"
                            accept="application/pdf"
                            className="form-control file-control"
                            name="image"
                            onChange={handleChange}
                            required={true}
                        />
                        <div className="form-text">
                            Only supports pdf
                        </div>
                        {selectedFile && (
                            <div className="mt-2 d-flex align-items-center">
                                <i className="bi bi-file-earmark-pdf-fill text-danger fs-3 me-2"></i>
                                <span>{selectedFile.name}</span>
                            </div>
                        )}

                    </div>
                </div>

                <div className="col-md-6">
                    <div className="form-group">
                        <label className="form-label fw-semibold">
                            Course Assessment Duration
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="4 Hours or 2 Weeks"
                            name="course_duration"
                            value={course.course_duration}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="col-12 mt-4">
                    <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <button
                                type="submit"
                                className="default-btn"
                            >
                                {/* <i className="flaticon-right-arrow"></i> */}
                                {btnText || "Create Course"} <span></span>
                                {loading ? <LoadingSpinner /> : ""}
                                <span></span>
                            </button>
                            <div className="save-draft ms-3">
                                <Link href="" className="link">Save Draft</Link>
                            </div>
                        </div>
                        <div className="mt-3 mt-md-0">
                            <Link href="/admin/assessment/create-assessment/">
                                <button className="default-btn back-btn">+ Add Assessment<span></span></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AdminCourseCreate;

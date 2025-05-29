import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import controls from "@/utils/RTEControl";
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";
import { useRouter } from 'next/router';

const questionTypes = [
    { label: 'Short Question', type: 'short' },
    { label: 'Broad Question', type: 'broad' },
    { label: 'Yes/No Question', type: 'yesno' },
    { label: 'MCQ Question', type: 'mcq' },
    { label: 'Table', type: 'table' },
    { label: 'Paragraph', type: 'paragraph' },
    { label: 'Blank Field', type: 'blank' },
    { label: 'New Page', type: 'page' },
];


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
    const router = useRouter();

    useEffect(() => {
        // Dynamically import bootstrap JS only in the browser
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    const [questions, setQuestions] = useState([]);

    const addQuestion = (type) => {
        const newQuestion = {
            id: uuidv4(),
            type,
            label: '',
            ...(type === 'paragraph' && { content: '' }),
            ...(type === 'mcq' && { options: ['', '', '', ''] }),
            ...(type === 'table' && {
                rows: 2,
                cols: 2,
                data: Array(2).fill().map(() => Array(2).fill()),
            })
        };
        setQuestions([...questions, newQuestion]);
    };
    const addTableRow = (id) => {
        setQuestions((prev) =>
            prev.map((q) =>
                q.id === id
                    ? {
                        ...q,
                        data: [...q.data, Array(q.data[0].length).fill('')],
                    }
                    : q
            )
        );
    };

    const addTableColumn = (id) => {
        setQuestions((prev) =>
            prev.map((q) =>
                q.id === id
                    ? {
                        ...q,
                        data: q.data.map((row) => [...row, '']),
                    }
                    : q
            )
        );
    };

    const addMergedRow = (questionId) => {
        setQuestions(prev =>
            prev.map(q =>
                q.id === questionId
                    ? {
                        ...q,
                        data: [
                            ...q.data,
                            [{ value: '', colSpan: q.data[0]?.length || 1 }]
                        ]
                    }
                    : q
            )
        );
    };

    const addMergedColumn = (questionId) => {
        setQuestions(prev =>
            prev.map(q => {
                if (q.id === questionId) {
                    const newData = q.data.map((row, index) => {
                        if (index === 0) {
                            // Merge in first row
                            return [...row, { value: '', colSpan: row.length + 1 }];
                        }
                        return [...row, { value: '', colSpan: 1 }];
                    });

                    return {
                        ...q,
                        data: newData,
                    };
                }
                return q;
            })
        );
    };

    const handleOptionChange = (id, index, value) => {
        setQuestions((prev) =>
            prev.map((q) =>
                q.id === id
                    ? {
                        ...q,
                        options: q.options.map((opt, i) => (i === index ? value : opt)),
                    }
                    : q
            )
        );
    };

    const handleLabelChange = (id, newLabel) => {
        setQuestions(
            questions.map((q) =>
                q.id === id ? { ...q, label: newLabel } : q
            )
        );
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-12 admin-course-create">
                        <div className="form-group">
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Paragraph Here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>

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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write question Here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write question Here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write question Here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write question Here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Paragraph Here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Paragraph Here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Yes/No question here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Yes/No question here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Yes/No question here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Yes/No question here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Yes/No question here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Yes/No question here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Yes/No question here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Yes/No question here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Yes/No question here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Paragraph here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Question here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
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
                            <div className="d-flex flex-row justify-content-between">
                                <label className="form-label fw-semibold">
                                    Write Question here:
                                </label>
                                <button
                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i class='bx bx-dots-horizontal-rounded'></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Edit Field</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Change Field Type</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Move Field Position</button>
                                    </li>
                                    <li>
                                        <button className="dropdown-item d-flex flex-row align-items-center" type="button">Delete Field</button>
                                    </li>
                                </ul>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Date"
                                name="question"
                                value={course.question}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                </div>
            </form>
            <div className="question-builder">
                <div className="questions-grid">
                    <div className="row">
                        {questions.map((question) => {
                            if (question.type === 'yesno') {
                                return (
                                    <div key={question.id} className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <div className="d-flex flex-row justify-content-between">
                                                <label className="form-label fw-semibold">
                                                    Write Yes/No question here:
                                                </label>
                                                <button className="btn p-0 border-0 bg-transparent fw-bold" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><button className="dropdown-item">Edit Field</button></li>
                                                    <li><button className="dropdown-item">Change Field Type</button></li>
                                                    <li><button className="dropdown-item">Move Field Position</button></li>
                                                    <li><button className="dropdown-item">Delete Field</button></li>
                                                </ul>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Have the consequences of the assessments been explained?"
                                                value={question.label}
                                                onChange={(e) => handleLabelChange(question.id, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                );
                            } else if (question.type === 'paragraph') {
                                return (
                                    <div key={question.id} className="col-md-12 admin-course-create mb-3">
                                        <div className="form-group">
                                            <div className="d-flex flex-row justify-content-between">
                                                <label className="form-label fw-semibold">
                                                    Write Paragraph Here:
                                                </label>
                                                <button className="btn p-0 border-0 bg-transparent fw-bold" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><button className="dropdown-item">Edit Field</button></li>
                                                    <li><button className="dropdown-item">Change Field Type</button></li>
                                                    <li><button className="dropdown-item">Move Field Position</button></li>
                                                    <li><button className="dropdown-item">Delete Field</button></li>
                                                </ul>
                                            </div>
                                            <RichTextEditor
                                                controls={controls}
                                                value={question.content}
                                                onChange={(value) => handleParagraphChange(question.id, value)}
                                            />
                                        </div>
                                    </div>
                                );
                            } else if (question.type === 'mcq') {
                                return (
                                    <div key={question.id} className="col-md-12 mb-3">
                                        <div className="form-group">
                                            <div className="d-flex flex-row justify-content-between">
                                                <label className="form-label fw-semibold">
                                                    Write MCQ Question And Answers Here:
                                                </label>
                                                <button
                                                    className="btn p-0 border-0 bg-transparent fw-bold"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><button className="dropdown-item">Edit Field</button></li>
                                                    <li><button className="dropdown-item">Change Field Type</button></li>
                                                    <li><button className="dropdown-item">Move Field Position</button></li>
                                                    <li><button className="dropdown-item">Delete Field</button></li>
                                                </ul>
                                            </div>

                                            {/* Question Input */}
                                            <input
                                                type="text"
                                                className="form-control mb-2"
                                                placeholder="Enter your MCQ question here"
                                                value={question.label}
                                                onChange={(e) => handleLabelChange(question.id, e.target.value)}
                                            />

                                            {/* Option Inputs */}
                                            {question.options.map((opt, index) => (
                                                <input
                                                    key={index}
                                                    type="text"
                                                    className="form-control mb-2"
                                                    placeholder={`Option ${index + 1}`}
                                                    value={opt}
                                                    onChange={(e) => handleOptionChange(question.id, index, e.target.value)}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                );
                            } else if (question.type === 'table') {
                                return (
                                    <div key={question.id} className="mb-4">
                                        <label className="fw-semibold">Add, Edit, Modify Table Here:</label>
                                        <table className="table table-bordered mt-2">
                                            <tbody>
                                                {question.data.map((row, rowIndex) => (
                                                    <tr key={rowIndex}>
                                                        {row.map((cell, colIndex) => (
                                                            <td key={colIndex}>
                                                                <input
                                                                    className="form-control border-0"
                                                                    placeholder="Write Your Text Here"
                                                                    value={cell}
                                                                    onChange={(e) =>
                                                                        handleTableCellChange(question.id, rowIndex, colIndex, e.target.value)
                                                                    }
                                                                />
                                                            </td>
                                                        ))}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>


                                        <div className="dropdown mt-2 d-flex flex-row justify-content-end">
                                            <button
                                                className="btn expand-table-btn"
                                                type="button"
                                                id={`dropdown-${question.id}`}
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                +
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby={`dropdown-${question.id}`}>
                                                <li>
                                                    <button className="dropdown-item" onClick={() => addTableRow(question.id)}>
                                                        Add Row Below
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item" onClick={() => addTableColumn(question.id)}>
                                                        Add Column In Right
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item" onClick={() => addMergedRow()}>
                                                        Add Merged Row
                                                    </button>
                                                </li>
                                                <li>
                                                    <button className="dropdown-item" onClick={() => addMergedColumn()}>
                                                        Add Merged Column
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={question.id} className="col-md-6 mb-3">
                                        <div className="form-group">
                                            <div className="d-flex flex-row justify-content-between">
                                                <label className="form-label fw-semibold">
                                                    Write Question here:
                                                </label>
                                                <button className="btn p-0 border-0 bg-transparent fw-bold" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="bx bx-dots-horizontal-rounded"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><button className="dropdown-item">Edit Field</button></li>
                                                    <li><button className="dropdown-item">Change Field Type</button></li>
                                                    <li><button className="dropdown-item">Move Field Position</button></li>
                                                    <li><button className="dropdown-item">Delete Field</button></li>
                                                </ul>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Write question..."
                                                value={question.label}
                                                onChange={(e) => handleLabelChange(question.id, e.target.value)}
                                            />
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>

                <div className="question-buttons mt-1 d-flex flex-wrap gap-2">
                    {questionTypes.map((q) => (
                        <button
                            key={q.type}
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => addQuestion(q.type)}
                        >
                            + Add {q.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between mt-4">
                <div>
                    <button className="default-btn back-btn" onClick={() => router.back()}>Back<span></span></button>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <div className="save-draft me-3">
                        <Link href="" className="link">Save as Draft</Link>
                    </div>
                    <button
                        type="submit"
                        className="default-btn"
                    >
                        Save & Next<span></span>
                    </button>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-between mt-4">
                <div>
                    <Link href="">
                        <button className="default-btn back-btn">Back to Editor<span></span></button>
                    </Link>
                </div>
                <div className="d-flex flex-row align-items-center">
                    <div className="save-draft me-3">
                        <Link href="/admin/courses/create-course/">
                            <button
                                type="submit"
                                className="default-btn"
                            >
                                Publish<span></span>
                            </button>
                        </Link>
                    </div>


                </div>
            </div>
        </>
    )
}

export default AdminCreateAssessment;
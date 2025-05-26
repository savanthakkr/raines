import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";

const InstructorCourseCard = ({
    id,
    title,
    slug,
    short_desc,
    latest_price,
    before_price,
    lessons,
    image,
    user,
    enrolments = [],
    onFav,
    onUnFav,
    userId,
}) => {
    const [fav, setfavs] = useState(false);

    useEffect(() => {
        if (userId) {
            const payload = {
                params: {
                    userId: userId,
                    courseId: id,
                },
            };

            const url = `${baseUrl}/api/favourites/new`;
            axios.get(url, payload).then((result) => {
                setfavs(result.data);
                // console.log(result.data);
            });
        }
    }, []);
    return (
        <div className="col-lg-3 col-md-6 d-flex">
            <div className="single-courses-box h-80">
                <div className="courses-image">
                    <Link href={`/instructor/courses/${slug}`}>
                        <a className="d-block image">
                            <img src={image} alt={title} />
                        </a>
                    </Link>
                </div>
                <div className="courses-content">
                    <div className="course-author d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                            <img
                                src={
                                    user.profile_photo
                                        ? user.profile_photo
                                        : "/images/user6.jpg"
                                }
                                className="rounded-circle"
                                alt="image"
                            />
                            <div>
                                <div>
                                    <span>{`${user.first_name} ${user.last_name}`}</span>
                                </div>
                                <div className="d-flex">
                                    <small>Instructor</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-start">
                        <Link href={`/instructor/courses/${slug}`}>
                            <a title={title}>{title.slice(0, 40)}...</a>
                        </Link>
                    </h3>

                    <p className="text-start">{short_desc.slice(0, 108)}</p>
                </div>
            </div>
        </div>
    );
};

export default InstructorCourseCard;

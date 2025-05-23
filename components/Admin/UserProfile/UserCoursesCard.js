import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import baseUrl from "@/utils/baseUrl";

const UserCourseCard = ({
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
                    <Link href={`/course/${slug}`}>
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

                    <h4 className="text-start">
                        <Link href={`/course/${slug}`}>
                            <a title={title}>{title.slice(0, 40)}</a>
                        </Link>
                    </h4>

                    <p className="text-start">{short_desc.slice(0, 108)}</p>

                    <div className="progress mb-2">
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: '30%' }}
                            aria-valuenow="40"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        >
                            30%
                        </div>
                    </div>
                    <div className="progress-status">In Progress</div>
                </div>
            </div>
        </div>
    );
};

export default UserCourseCard;

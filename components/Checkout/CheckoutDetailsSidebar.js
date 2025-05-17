import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    calculateCartTotal,
    calculateCartTotalMinus,
} from "@/utils/calculateCartTotal";
import CheckoutList from "./CheckoutList";
import PlaceOrderBtn from "./PlaceOrderBtn";
import Link from "next/link";
import PageBanner from "../Common/PageBanner";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import RegisterForm from "../Authentication/RegisterForm";
import PaymentForm from "./PaymentForm";

const CheckoutDetailsSidebar = ({ course }) => {
    const {
        slug,
        title,
        short_desc,
        image,
        overview,
        what_you_will_learn,
        who_is_this_course_for,
        requirements,
        latest_price,
        is_class,
        updated_at,
        category,
        user,
        enrolments,
        cancelation_desc,
        course_desc
    } = course;
    return (
        <>
            <div className="checkout-details-area">
                <div className="checkout-details-header">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={image} className="img-fluid image" />
                        </div>
                        <div className="col-md-8 mt-2 mt-md-0">
                            <h4 className="mb-1">{title}</h4>
                            <p className="mb-1">{short_desc}</p>
                            <ul className="d-flex flex-row ps-0 mb-2">
                                <li>
                                    10 Lessons
                                </li>
                                <li>
                                    18 Students
                                </li>
                            </ul>
                            <h6 className="mb-1">${latest_price}</h6>
                        </div>
                        <div className="col-md-1 mt-2 mt-md-0">
                            <i className="bx bx-trash"></i>
                        </div>
                    </div>
                    <div className="course-type-dropdown align-items-center mt-4">
                        <span>
                            Course Type
                        </span>
                        <div className="select-box mt-2">
                            <select
                                className="form-select"
                                name="short"
                            // value={short}
                            // onChange={(e) => setShort(e.target.value)}
                            >
                                <option value="" disabled>Choose course type</option>
                                <option value="online_class">Online Class</option>
                                <option value="face_to_face">Face To Face</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkout-details-bottom-area">
                <div class="d-flex flex-row justify-content-between mb-1">
                    <h6>Price</h6>
                    <p>${latest_price}</p>
                </div>
                <div class="d-flex flex-row justify-content-between mb-0">
                    <h6>GST</h6>
                    <p>10%</p>
                </div>
                <hr />
                <div class="d-flex flex-row justify-content-between mb-1">
                    <h6 className="mb-0">Total</h6>
                    <p>${latest_price}</p>
                </div>
            </div>
            <div class="checkout-section">
                <div class="checkbox-wrapper">
                    <input type="checkbox" id="terms" required />
                    <label for="terms">
                        <b>By Clicking This You Are Agree To Our</b> Terms of Service and Privacy Policy
                    </label>
                </div>
                <a href="/course/course-enrollment" class="default-btn w-100 mt-3">Checkout Now<span></span></a>
            </div>
        </>
    );
};

export default CheckoutDetailsSidebar;
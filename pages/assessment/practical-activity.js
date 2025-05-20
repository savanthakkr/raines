import Navbar from "@/components/_App/Navbar";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/_App/Footer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import toast from "react-hot-toast";
import PracticalActivityInstruction from "@/components/Assessment/PracrticalActivityInstruction";

export default function PracticalActivity({ user }) {
    // const [course, setCourse] = useState({});
    // const router = useRouter();
    // const { slug } = router.query;

    // useEffect(() => {
    //     	const fetchCourse = async () => {
    //     		try {
    //     			const payload = {
    //     				params: { slug: slug },
    //     			};
    //     			const url = `${baseUrl}/api/courses/course`;
    //     			const response = await axios.get(url, payload);
    //     			setCourse(response.data.course);
    //     		} catch (err) {
    //     			let {
    //     				response: {
    //     					data: { message },
    //     				},
    //     			} = err;
    //     			toast.error(message, {
    //     				style: {
    //     					border: "1px solid #ff0033",
    //     					padding: "16px",
    //     					color: "#ff0033",
    //     				},
    //     				iconTheme: {
    //     					primary: "#ff0033",
    //     					secondary: "#FFFAEE",
    //     				},
    //     			});
    //     		}
    //     	};

    //     	fetchCourse();
    //     }, [slug]);

    const course = {
        title: 'CPCWHS1001 - Prepare to Work Safely in the Construction Industry.',
        slug: 'slug',
        short_desc: 'CPCWHS1001 - Prepare to Work Safely in the Construction Industry.',
        image: '/images/courses/courseImage1.png',
        overview: '<p>This course CPCWHS1001 “Prepare to work safely in the construction Industry”. Is commonly referred to as a “White Card” The aim of this course is to educate and inform persons new to the construction industry in how to work safely in the construction and other related building industries.</p><p>At the successful completion of this course, you will be issued an A4 sized Statement of attainment as well as a wallet sized card which displays your name and your industry registration number that is national recognized in all States and Territories.</p>',
        what_you_will_learn: '<ul><li>Basic principles of health and safety in the construction industries in all States and Territories.</li><li>Codes of practice for induction of Construction Work.&nbsp;</li><li>WHS regulations and Duty of Care requirements.&nbsp;</li><li>Hazard identification.&nbsp;</li><li>Risk management.&nbsp;</li><li>Safe work practices.&nbsp;</li><li>Operating plant and equipment. In line with the manufacturer’s recommendation.&nbsp;</li><li>Storing of materials and equipment.&nbsp;</li><li>Common workplace signage.&nbsp;</li><li>Workplace emergencies.&nbsp;</li><li>Workplace incidents.&nbsp;</li><li>First aid response.&nbsp;</li><li>Fire safety equipment</li></ul>',
        who_is_this_course_for: '<p>Theory<br>Practical</p>',
        cancelation_desc: '<p>Refer to our Refunds Policy.</p>',
        course_desc: '<p>Online: $100<br>Face to Face: $130</p>',
        requirements: '<p><strong>Course times:</strong><br>Start 08:00 to 16:00 ( Please arrive 15 minutes earlier to register and ID verification).&nbsp;<br><strong>Online:</strong><br>Between 4-6 hours depending on your circumstances and pace.&nbsp;<br><strong>Age requirements:</strong><br>Be at least 16 years of age.&nbsp;<br><strong>Literacy:</strong><br>Participants must have a basic level of English proficiency (written and verbal communication)&nbsp;<br><strong>Numeracy:</strong><br>Participants require the knowledge of how to use a calculator.&nbsp;<br><strong>Delivery:</strong>&nbsp;<br>Option 1. Face to Face training and assessment in a simulated workplace environment. (Min 8)&nbsp;<br>Option 2. Online.&nbsp;<br><strong>Payment Method:</strong><br>Cash, credit card, direct funds transfer with a bank receipt, or a company purchase order refer to our finance policy for further details.&nbsp;<br><strong>What to bring:</strong><br>1 Photo ID (e.g. Driver’s Licence, Passport (current or expired no more than 2 years), WA proof of age card or other Australian Government issued ID card with photo)&nbsp;<br><strong>Clothing:</strong><br>Long sleeve shirt, long pants and safety boots.&nbsp;<br><strong>Training Location:</strong><br>TBA</p>',
        latest_price: 50,
        is_class: true,
        updated_at: '27/02/2025',
        category: {
            name: 'Construction Industry',
            slug: 'construction-industry'
        },
        user: {
            first_name: 'Alan',
            last_name: 'Raines',
            profile_photo: '',
            bio: 'John Doe is an experienced instructor specializing in Raines . Passionate about teaching, they engage students with interactive learning, real-world applications, and innovative strategies to foster success.'
        },
        enrolments: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        access_time: '0/3',
        duration: '4-6 Hours',
        lessons: '10'
    }

    return (
        <>
            <Navbar user={user} />

            <PageBanner
                pageTitle="RIIRIS402E"
                homePageUrl="/"
                homePageText="Home"
                middlePageText="Courses"
                activePageText="RIIRIS402E"
                imageUrl='/images/breadcrumb/coursesBreadcrumb.jpg'
            />

            <PracticalActivityInstruction />

            <Footer />
        </>
    );
}
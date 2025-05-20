import React, { useEffect, useState } from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import Player from "@/components/Learning/Player";
import { useRouter } from "next/router";
import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import CourseProgressSidebar from "./course-progrss-sidebar";
import CourseTheory from "./course-theory";
import StickyBox from "react-sticky-box";

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

const modules = [
	{ title: 'Introduction', completed: true },
	{ title: 'Risk Management', completed: true },
	{ title: 'Why Documents', completed: true },
	{ title: 'WHS Personnel', completed: true },
	{ title: 'Common Workplace Signage', completed: true },
	{ title: 'Reporting All Hazards, Incidents And Injuries', completed: true },
	{ title: 'Workplace Emergencies', completed: true },
	{ title: 'Workplace Incidents', completed: true },
];


const Index = ({ user }) => {
	const [videos, setVideos] = useState([]);
	// const [course, setCourse] = useState({});
	// const [modules, setModules] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState("");
	const [active, setActive] = useState("");
	const [tab, setTab] = useState("overview");
	const {
		query: { slug },
	} = useRouter();
	const courseTitle = 'CPCWHS1001 "White Card"';
	const progress = 100;

	const fetchVideos = async () => {
		const url = `${baseUrl}/api/learnings/videos/${slug}`;
		const response = await axios.get(url);
		setVideos(response.data.videos);
		setSelectedVideo(response.data.videos[0].video);
		setActive(response.data.videos[0].id);
		setCourse(response.data.course);
		setModules(response.data.modules || []);
	};

	useEffect(() => {
		fetchVideos();
	}, [slug]);

	const selectVideo = async (videoId) => {
		// console.log(videoId);
		try {
			const payload = {
				params: { userId: user.id, courseId: course.id },
			};
			const url = `${baseUrl}/api/learnings/video/${videoId}`;
			const response = await axios.get(url, payload);
			const {
				data: { video },
			} = response;

			setSelectedVideo(video.video);
			setActive(video.id);

			// console.log(video);
		} catch (err) {
			console.log(err.response.data);
		}
	};
	console.log('Parent course data:', course);
	return (

		<>
			<Navbar user={user} />

			<div className="mt-4 pb-5 video-area">
				<div className="container-fluid">
					<div className="row">
						{/* <div className="col-lg-9 col-md-8"> */}
						<div className="video-content">
							{selectedVideo && (
								<Player videoSrc={selectedVideo} />
							)}

							<br />
							{/* <ul className="nav-style1">
									<li>
										<Link href={`/learning/course/${slug}`}>
											<a
												onClick={(e) => {
													e.preventDefault();
													setTab("overview");
												}}
												className={
													tab == "overview"
														? "active"
														: ""
												}
											>
												Overview
											</a>
										</Link>
									</li>
									<li>
										<Link href={`/learning/course/${slug}`}>
											<a
												onClick={(e) => {
													e.preventDefault();
													setTab("asset");
												}}
												className={
													tab == "asset"
														? "active"
														: ""
												}
											>
												Assets
											</a>
										</Link>
									</li>
									<li>
										<Link href={`/learning/course/${slug}`}>
											<a
												onClick={(e) => {
													e.preventDefault();
													setTab("discussion");
												}}
												className={
													tab == "discussion"
														? "active"
														: ""
												}
											>
												Discussion
											</a>
										</Link>
									</li>
									<li>
										<Link href={`/learning/course/${slug}`}>
											<a
												onClick={(e) => {
													e.preventDefault();
													setTab("rating");
												}}
												className={
													tab == "rating"
														? "active"
														: ""
												}
											>
												Leave a rating
											</a>
										</Link>
									</li>
									<li>
										<Link href={`/learning/course/${slug}`}>
											<a
												onClick={(e) => {
													e.preventDefault();
													setTab("feedback");
												}}
												className={
													tab == "feedback"
														? "active"
														: ""
												}
											>
												Leave a feedback
											</a>
										</Link>
									</li>
								</ul>

								{course && tab == "asset" ? (
									<CourseAsset {...course} />
								) : tab == "discussion" ? (
									<CourseDiscussion {...course} />
								) : tab == "rating" ? (
									<CourseRating {...course} />
								) : tab == "feedback" ? (
									<CourseFeedback {...course} />
								) : (
									<CourseOverview {...course} />
								)} */}

							<div className="row">
								<div className="col-lg-8 col-md-12">
									<CourseTheory user={user} course={course} />
								</div>
								<div className="col-lg-4 col-md-12">
									<CourseProgressSidebar courseTitle={courseTitle} modules={modules} progress={progress} />
								</div>
							</div>
						</div>
						{/* </div> */}

						<div className="col-lg-3 col-md-4">
							<StickyBox offsetTop={20} offsetBottom={20}>
								<div className="video-sidebar">
								{user?.id && course?.id && (
									<ProgressManager
										videos_count={videos.length}
										userId={user.id}
										courseId={course.id}
										selectedVideo={selectedVideo}
									/>
								)}

									<div className="course-video-list">
										<h4 className="title mb-3">
											{course && course.title}
										</h4>
										<ul>
											{videos.length > 0 &&
												videos.map((video) => (
													<VideoList
														key={video.id}
														{...video}
														onPlay={() =>
															selectVideo(
																video.id
															)
														}
														activeClass={active}
													/>
												))}
										</ul>
									</div>
								</div>
							</StickyBox>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};

export default Index;

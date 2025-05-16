import baseUrl from "@/utils/baseUrl";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const Partner = () => {
	const [partners, setPartners] = useState([
		{
			id: 1,
			partner_name: 'Aesop',
			partner_image: '/images/partner/partner1.png'
		},
		{
			id: 2,
			partner_name: 'Glossier',
			partner_image: '/images/partner/partner2.png'
		},
		{
			id: 3,
			partner_name: 'Kinfolk',
			partner_image: '/images/partner/partner3.png'
		},
		{
			id: 4,
			partner_name: 'Everlane',
			partner_image: '/images/partner/partner4.png'
		},
		{
			id: 5,
			partner_name: 'Pegasus',
			partner_image: '/images/partner/partner5.png'
		},
		{
			id: 6,
			partner_name: 'Comedy',
			partner_image: '/images/partner/partner6.png'
		}
	]);

	useEffect(() => {
		const fetchPartners = async () => {
			const url = `${baseUrl}/api/partners`;
			const response = await axios.get(url);
			setPartners(response.data.partners);
		};
		fetchPartners();
	}, []);

	if (partners.length == 0) return;
	return (
		<>
			<div className="partner-area pt-70 pb-70 border-bottom">
				<div className="container">
					<Swiper
						slidesPerView={3}
						spaceBetween={30}
						breakpoints={{
							768: {
								slidesPerView: 4,
							},
							1024: {
								slidesPerView: 6,
							},
						}}
						className="mySwiper partner-slides"
					>
						{partners.length > 0 &&
							partners.map((partner) => (
								<SwiperSlide key={partner.id}>
									<motion.div
										className="single-partner-item"
										initial="hidden"
										whileInView="visible"
										transition={{
											type: "spring",
											duration: 3,
											bounce: 0.3,
										}}
										variants={{
											visible: { opacity: 1, scale: 1 },
											hidden: { opacity: 0, scale: 0 },
										}}
									>
										<img
											src={partner.partner_image}
											alt={partner.name}
										/>
									</motion.div>
								</SwiperSlide>
							))}
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default Partner;

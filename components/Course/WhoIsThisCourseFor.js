import React from "react";

const WhoIsThisCourseFor = ({ title, content }) => {
	
	return (
		<>
			<h3>{title}</h3>
			<div
				dangerouslySetInnerHTML={{ __html: content }}
			></div>
		</>
	);
};

export default WhoIsThisCourseFor;

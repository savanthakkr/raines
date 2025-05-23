import React from "react";

const Requirements = ({ requirements }) => {
	return (
		<>
			<h3>Training Details</h3>
			<div dangerouslySetInnerHTML={{ __html: requirements }}></div>
		</>
	);
};

export default Requirements;

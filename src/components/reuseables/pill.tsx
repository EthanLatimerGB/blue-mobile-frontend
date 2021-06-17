import React from 'react';

interface PillVariables {
	text: String;
}

const Pill: React.FC<PillVariables> = (props) => {
	return(
		<div className="itemTagComponent">{props.text}</div>
	);
};

export default Pill;
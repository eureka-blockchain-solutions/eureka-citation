import React from 'react';
import './circleHeader.css';

const CircleHeaderSpinner = () => {
	return (
		<div className="lds-ripple">
			<div />
			<div />
		</div>
	);
};

export default CircleHeaderSpinner;

import React from 'react';
import './circle.css';

const CircleSpinner = () => {
	return (
		<div className="lds-ripple">
			<div />
			<div />
		</div>
	);
};

export default CircleSpinner;

import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
	return (
		<div>
			Hey
			<div>
				<Link to='/validator'>Validator</Link>
				<Link to='/registration'>Registration</Link>
				<Link to='/csvreader'>Csv Reader</Link>
			</div>
		</div>
	);
};

export default Welcome;

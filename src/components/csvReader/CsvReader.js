import React from 'react';
import CSVReader from 'react-csv-reader';
import { Link } from 'react-router-dom';

const CsvReader = () => {
	const handleForce = data => {
		console.log(data);
	};

	const handleDarkSideForce = err => {
		console.log(err);
	};
	return (
		<div>
			<CSVReader
				cssClass='csv-reader-input'
				label='Select CSV with secret Death Star statistics'
				onFileLoaded={handleForce}
				onError={handleDarkSideForce}
				inputId='ObiWan'
				inputStyle={{ color: 'red' }}
			/>
			<Link to='/'>Back</Link>
		</div>
	);
};

export default CsvReader;

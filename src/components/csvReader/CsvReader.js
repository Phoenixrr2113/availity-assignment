import React, { Component } from 'react';
import CSVReader from 'react-csv-reader';
import { CSVLink, CSVDownload } from 'react-csv';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

class CsvReader extends Component {
	state = {
		data: '',
	};
	// handleForce = data => {
	// 	let head = data.slice(0, 1);
	// 	let newData = data.slice(1, -1);
	// 	let newHead = Object.assign({}, ...head);
	// 	let names = newData.map((el, i) => {
	// 		newHead['UserID'] = el[0];
	// 		newHead['Name'] = el[1];
	// 		newHead['Version'] = el[2];
	// 		newHead['Insurance_Company'] = el[3];
	// 	});

	// 	console.log('newObj', names);
	// 	this.setState({
	// 		data,
	// 	});
	// };

	CSVToArray = (strData, strDelimiter) => {
		strDelimiter = strDelimiter || ',';
		const objPattern = new RegExp(
			'(\\' +
				strDelimiter +
				'|\\r?\\n|\\r|^)' +
				'(?:"([^"]*(?:""[^"]*)*)"|' +
				'([^"\\' +
				strDelimiter +
				'\\r\\n]*))',
			'gi',
		);
		const arrData = [[]];
		const arrMatches = null;
		while (arrMatches === objPattern.exec(strData)) {
			const strMatchedDelimiter = arrMatches[1];
			let strMatchedValue;
			if (strMatchedDelimiter.length && strMatchedDelimiter != strDelimiter) {
				arrData.push([]);
			}
			if (arrMatches[2]) {
				strMatchedValue = arrMatches[2].replace(new RegExp('""', 'g'), '"');
			} else {
				strMatchedValue = arrMatches[3];
			}
			arrData[arrData.length - 1].push(strMatchedValue);
		}
		return arrData;
	};

	toObj = data => {
		const head = data.shift();
		let collection = [];
		let entry = {
			UserID: '',
			Name: '',
			Version: '',
			Insurance_Company: '',
		};
		let elOnList;
		while (data.length > 0) {
			elOnList = data.shift();

			entry.UserID = elOnList[0];
			entry.Name = elOnList[1];
			entry.Version = elOnList[2];
			entry.Insurance_Company = elOnList[3];
			collection.push(entry);

			entry = {
				UserID: '',
				Name: '',
				Version: '',
				Insurance_Company: '',
			};
		}

		let setup = [];
		for (let i = 0; i <= collection.length - 1; i++) {
			for (let j = 0; j <= collection.length; j++) {
				if (
					collection[i].Name !== undefined &&
					collection[j].Name !== undefined
				) {
					return;
				}
				if (collection[i].Name === collection[j].Name)
					setup.push(collection[i]);
			}
		}
		console.log(setup);
		// setup.splice(0, -1);
		// console.log(setup.slice(-1, 1));

		this.setState({
			data: collection,
		});
		return data;
	};
	render() {
		console.log(this.state.data);
		const csvData = [
			['UserID', 'Name', 'Version', 'Insurance_Company'],
			[`${uuid.v4()}`, 'Ahmed Tomi', 1, 'Geico'],
			[`${uuid.v4()}`, 'Raed Labes', 2, 'State Farm'],
			[`${uuid.v4()}`, 'Raed Labes', 2, 'State Farm'],
			[`${uuid.v4()}`, 'adam gov', 3, 'State Farm'],
			[`${uuid.v4()}`, 'Yezzi Min l3', 3, 'Allstate'],
		];
		return (
			<div>
				<CSVReader
					cssClass='csv-reader-input'
					label='Select CSV'
					onFileLoaded={this.toObj}
					inputId='ObiWan'
					inputStyle={{ color: 'red' }}
				/>
				{/* {this.state.data.length === 0 && (
					<CSVLink data={csvData}>Download me</CSVLink>
				)} */}
				<Link to='/'>Back</Link>
				<div>
					{this.state.data &&
						this.state.data.map(files => (
							<div key={files.UserID}>
								Name: {files.Name} Insurance: {files.Insurance_Company} Version:{' '}
								{files.Version}
							</div>
						))}
				</div>
				{/* <div onDragOver={this.CSVToArray}>Drop here</div> */}
			</div>
		);
	}
}

export default CsvReader;

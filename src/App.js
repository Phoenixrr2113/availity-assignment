import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import StringValidator from './components/stringValidator/StringValidator';

import RegistrationForm from './components/registration/RegistrationForm';
import Welcome from './components/Welcome';
import CsvReader from './components/csvReader/CsvReader';

class App extends Component {
	state = {
		user: {
			email: '',
			phone: '',
			name: '',
			busAddr: '',
			npiNum: '',
		},
		submitted: false,
	};

	handleChanges = event => {
		this.setState({
			user: {
				...this.state.user,
				[event.target.name]: event.target.value,
			},
		});
	};

	handleRegister = event => {
		event.preventDefault();
		this.props.Register(this.state.user);
		if (!!this.props.errMessage) {
			this.setState(
				{
					user: {
						email: '',
						phone: '',
						name: '',
						busAddr: '',
						npiNum: '',
					},
					submitted: true,
				},
				() => {
					setTimeout(() => this.setState({ submitted: false }), 2000);
				},
			);
		}
	};

	render() {
		return (
			<div>
				<Welcome />
				<Switch>
					<Route
						exact
						path='/registration'
						render={props => (
							<RegistrationForm
								{...props}
								user={this.state.user}
								submitted={this.state.submitted}
								handleInputChange={this.handleChanges}
								handleRegister={this.handleRegister}
								error={this.props.errMessage}
							/>
						)}
					/>

					<Route exact path='/validator' component={StringValidator} />
					<Route exact path='/csvreader' component={CsvReader} />
				</Switch>
			</div>
		);
	}
}

export default App;

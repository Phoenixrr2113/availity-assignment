import React, { Component } from 'react';
import './App.css';
import RegistrationForm from './components/registration/RegistrationForm';

class App extends Component {
	state = {
		user: {
			emailAddress: '',
			password: '',
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

	handleGoogleLogin = () => {
		this.props.googleLogin();
	};

	handleEmailLogin = event => {
		event.preventDefault();
		this.props.emailLogin(this.state.user);
		if (!!this.props.errMessage) {
			this.setState(
				{
					user: {
						emailAddress: '',
						password: '',
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
				<RegistrationForm
					password={this.state.user.password}
					email={this.state.user.emailAddress}
					user={this.state.user}
					submitted={this.state.submitted}
					handleInputChange={this.handleChanges}
					handleRegister={this.props.handleRegister}
					isRegistering={this.props.isRegistering}
					handleGoogleLogin={this.handleGoogleLogin}
					handleEmailLogin={this.handleEmailLogin}
					error={this.props.errMessage}
				/>
			</div>
		);
	}
}

export default App;

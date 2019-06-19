import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StringValidator extends Component {
	state = {
		input: '',
		error: '',
	};

	checkStr = (e, str) => {
		e.preventDefault();
		let open = 0;
		let close = 0;
		for (let i = 0; i < str.length; i++) {
			if (str[i] === '') {
				return;
			} else if (str[i] === '(') {
				open++;
			} else if (str[i] === ')') {
				close++;
			}
		}
		if (open === 0 && close == 0) {
			this.setState({
				error: 'You havent entered a parentheses',
			});
		} else if (open === close) {
			this.setState({
				error: 'All parentheses matches.',
			});

			return true;
		} else if (open !== close) {
			this.setState({
				error: 'Parentheses does not matches.',
			});

			return true;
		} else {
			this.setState({
				error: 'No parentheses detected',
			});
			return false;
		}
	};

	onInputChange = e => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	render() {
		return (
			<div style={{ margin: '20%' }}>
				<form
					style={{ width: '60%' }}
					onSubmit={e => this.checkStr(e, this.state.input)}>
					<input
						type='text'
						name='input'
						onChange={this.onInputChange}
						id='str'
						value={this.state.input}
					/>
					<button type='submit'>Click or Press enter</button>
				</form>
				<h3 style={{ color: 'red' }}>{this.state.error}</h3>
				<Link to='/'>Back</Link>
			</div>
		);
	}
}

export default StringValidator;

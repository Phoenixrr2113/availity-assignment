import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing(3),
		marginRight: theme.spacing(3),
		[theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
			width: 600,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
		error: {
			padding: theme.spacing(2),
			color: 'red',
		},
		errorPaper: {
			padding: theme.spacing(2),
		},
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(
			3 * 2,
		)}px`,
	},
	avatar: {
		margin: theme.spacing(),
		backgroundColor: '#72BDA2',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(),
	},
	name: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	submit: {
		marginTop: theme.spacing(3),
		color: 'white',
		backgroundColor: '#72BDA2',
		'&:hover': {
			color: '#72BDA2',
			backgroundColor: 'white',
		},
	},
});

class RegistrationForm extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div>
				<main className={classes.main}>
					<CssBaseline />
					<Paper className={classes.paper}>
						<Avatar className={classes.avatar} />
						<Typography component='h1' variant='h5'>
							Register
						</Typography>
						<h4 style={{ color: 'red' }}>
							{this.props.error === 'auth/user-not-found' && 'User not found'}
						</h4>
						<ValidatorForm
							className={classes.form}
							ref='form'
							onSubmit={this.props.handleEmailLogin}>
							<div className={classes.name}>
								<FormControl margin='normal' required>
									<TextValidator
										label='First Name'
										onChange={this.props.handleInputChange}
										name='firstName'
										value={this.props.firstName}
										validators={['required', 'isFirst']}
										errorMessages={['this field is required']}
									/>
								</FormControl>
								<FormControl margin='normal' required>
									<TextValidator
										label='Last Name'
										onChange={this.props.handleInputChange}
										name='lastName'
										value={this.props.lastName}
										validators={['required', 'isLast']}
										errorMessages={['this field is required']}
									/>
								</FormControl>
							</div>
							<FormControl margin='normal' required fullWidth>
								<TextValidator
									label='NPI Number'
									onChange={this.props.handleInputChange}
									name='npiNumber'
									value={this.props.npiNumber}
									validators={['required', 'isNpi']}
									errorMessages={['this field is required', 'NPI is not valid']}
								/>
							</FormControl>
							<div className={classes.name}>
								<FormControl margin='normal' required>
									<TextValidator
										label='Address'
										type='text'
										onChange={this.props.handleInputChange}
										name='busAddress'
										value={this.props.email}
										validators={['required']}
										errorMessages={['this field is required']}
									/>
								</FormControl>
								<FormControl margin='normal' required>
									<TextValidator
										label='Phone'
										onChange={this.props.handleInputChange}
										name='phone'
										value={this.props.phone}
										validators={['required']}
										errorMessages={['this field is required']}
									/>
								</FormControl>
							</div>
							<FormControl margin='normal' required fullWidth>
								<TextValidator
									label='Email'
									onChange={this.props.handleInputChange}
									name='emailAddress'
									value={this.props.email}
									validators={['required', 'isEmail']}
									errorMessages={[
										'this field is required',
										'email is not valid',
									]}
								/>
							</FormControl>

							<br />
							<Button
								disabled={this.props.submitted}
								type='submit'
								fullWidth
								variant='contained'
								className={classes.submit}>
								{(this.props.submitted && 'Your form is submitted!') ||
									(!this.props.submitted && 'Sign in')}
							</Button>
						</ValidatorForm>
					</Paper>
				</main>
			</div>
		);
	}
}

RegistrationForm.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegistrationForm);

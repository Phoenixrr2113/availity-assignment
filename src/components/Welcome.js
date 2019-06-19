import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	link: {
		marginLeft: theme.spacing(4 * 4),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function ButtonAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static'>
				<Toolbar className={classes.toolbar}>
					<Link className={classes.link} to='/validator'>
						<Typography>Validator</Typography>
					</Link>
					<Link className={classes.link} to='/registration'>
						<Typography>Registration</Typography>
					</Link>
					<Link className={classes.link} to='/csvreader'>
						<Typography>Csv Reader</Typography>
					</Link>
				</Toolbar>
			</AppBar>
		</div>
	);
}

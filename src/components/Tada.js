import React from 'react';
import { pingServer } from '../services/request';

export default class Tada extends React.Component {

	state = {
		message: 'Waiting...',
	}

	componentDidMount() {
		this.setState({ message: 'Fetching...' });
		pingServer()
			.then(() => {
				this.setState({ message: 'API is alive !'})
			})
			.catch(() => {
				this.setState({ message: 'Error pinging API' });
			})
	}

	render() {
		return <div>{this.state.message}</div>
	}
}
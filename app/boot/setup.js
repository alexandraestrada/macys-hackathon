import React, {Component} from "react";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";

import configureStore from "./configstore";
import App from "../index";

class Setup extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: false,
			store: configureStore(() => this.setState({ isLoading: false })),
			isReady: false,
		};
	}

	render() {
		return (
				<Provider store={this.state.store}>
					<App />
				</Provider>
			
		);
	}
}

export default Setup;
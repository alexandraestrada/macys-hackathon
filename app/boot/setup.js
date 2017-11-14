import Expo from "expo";
import React from "react";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";

import configureStore from "./configstore";
import App from "../../App";

export interface Props {}

export interface State {
	store: Object,
	isLoading: boolean,
	isReady: boolean,
}
class Setup extends React.Component<Props, State> {
	constructor() {
		super();
		this.state = {
			isLoading: false,
			store: configureStore(() => this.setState({ isLoading: false })),
			isReady: false,
		};
	}

	render() {
		if (!this.state.isReady || this.state.isLoading) {
			return <Expo.AppLoading />;
		}
		return (
				<Provider store={this.state.store}>
					<App />
				</Provider>
			
		);
	}
}

export default Setup;
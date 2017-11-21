import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		borderRadius: 5,
		borderWidth: 5,
		flex: 1,
		padding: 10,
		backgroundColor: '#F5F5F5',
		borderColor: '#F5F5F5'
	}
});

export class Button extends Component {
	render() {
		return (
			<TouchableHighlight
				onPress={ this.props.onPress }
			>
				<View style={styles.container}>
					<Text>
						{ this.props.children }
					</Text>
				</View>
			</TouchableHighlight>
		)
	}
};

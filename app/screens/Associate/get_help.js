import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Body, Title, List, ListItem, Thumbnail, Left, Right} from 'native-base';


export interface State {}
class Get_Help extends React.Component<Props, State> {
	static navigationOptions = () => ({
	    headerStyle: {
	      backgroundColor: '#CC0000',
	      height: 65,
	    }
	  });

	render() {
		const {navigate} = this.props.navigation;
    const associate = this.props.navigation.state.params.associate;
    const category = { category: 'pricing' };

		return (
			<Container style={styles.container}>
				<Content>

					<Text style={styles.welcome}>What do you need help with?</Text>
					<View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
						<Button style={styles.option} onPress={() => this.props.navigation.navigate('Pricing', { associate, category })}>
							<Text style={styles.optionText} >Pricing</Text>
						</Button>
						<Button style={styles.option} >
							<Text style={styles.optionText}>Returns</Text>
						</Button>
					</View>

					<View style={{flex:1, flexDirection: 'row', justifyContent: 'center', marginTop: 10,}}>
						<Button style={styles.option} >
							<Text style={styles.optionText}>My Day</Text>
						</Button>
						<Button style={styles.option} >
							<Text style={styles.optionText}>Macys{"\n"} Credit Card</Text>
						</Button>
					</View>
                </Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
  	backgroundColor: '#CC0000',
  },
  welcome: {
    margin: 45,
    fontSize: 20,
    fontWeight: 'bold',
  },
  option:{
    backgroundColor: '#F4F6F8',
    height: 140,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  optionText: {
  	fontSize: 20,
  }
});

export default Get_Help;
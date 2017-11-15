import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Body, Title, List, ListItem, Thumbnail, Left, Right} from 'native-base';


export interface State {}
class Pricing extends React.Component<Props, State> {
	render() {
		const {navigate} = this.props.navigation;

		return (
			<Container style={styles.container}>
				<Content>
					<Header style={styles.header}>
						<Body>
							<Text style={styles.headerText} >Pricing</Text>
						</Body>
					</Header>

					<View style={{flex:1, flexDirection: 'column', justifyContent: 'center', marginLeft: 10, marginTop: 20}}>
						<Button style={styles.option} >
							<Text style={styles.optionText} >I need a manager for price override</Text>
						</Button>
						<Button style={styles.option} >
							<Text style={styles.optionText}>I need to apply a coupon exemption</Text>
						</Button>
						<Button style={styles.option} >
							<Text style={styles.optionText}>Other</Text>
						</Button>

						<Button style={styles.send}>
							<Text style={styles.sendText} >Send to Manager</Text>
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
  headerText: {
  	fontSize: 20,
  	fontWeight: 'bold',
  },
  welcome: {
    margin: 45,
    fontSize: 20,
    fontWeight: 'bold',
  },
  option:{
    backgroundColor: '#F4F6F8',
    height: 100,
    width: 335,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  optionText: {
  	fontSize: 20,
  },
  send: {
  	backgroundColor: '#CC0000',
  	height: 50,
    width: 335,
    margin: 13,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sendText: {
  	color: 'white',
  	fontSize: 20,
  }
});

export default Pricing;
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Body, Title, List, ListItem, Thumbnail, Left, Right, Input, Item} from 'native-base';


export interface State {}
class Pricing extends React.Component<Props, State> {
	constructor() {
      super()
      this.state = {
         myText: 'Enter details of your question'
      }
   	}

    updateTextNeedManager = () => {
      this.setState({myText: 'I need a price override'})
   	}

   	updateTextCouponExemption = () => {
   		this.setState({myText: 'I need to apply a coupon exemption'})
   	}

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
							<Text style={styles.optionText} onPress = {this.updateTextNeedManager}>I need a price override</Text>
						</Button>
						<Button style={styles.option} >
							<Text style={styles.optionText} onPress = {this.updateTextCouponExemption}>I need to apply a coupon exemption</Text>
						</Button>
						<Button style={styles.option} >
							<Text style={styles.optionText}>Other</Text>
						</Button>

						<Item regular style={styles.message}>
							<Input placeholder={this.state.myText} />
						</Item>

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
    height: 60,
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
  },
  message: {
  	width: 335,
  	height: 150,
  	marginLeft: 13,
  	marginTop: 10,
  },
});

export default Pricing;
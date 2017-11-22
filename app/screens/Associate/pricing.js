import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Body, Title, List, ListItem, Thumbnail, Left, Right, Input, Item} from 'native-base';



export interface State {}
class Pricing extends React.Component<Props, State> {

	constructor() {
    super()
    this.state = {
       myText: 'Enter details of your question...',
       buttonStatus: 0
    }
    this.socket = SocketIOClient('https://young-brook-73094.herokuapp.com');
    this.socket.on('questionSubmitted', ({ question }) => 
      this.props.navigation.navigate('New_Question', { question }));
 	}

  pressButtonOne = () => {
    this.setState({ buttonStatus: 1,
                    myText: 'I need a price override'
    })
  }

  pressButtonTwo = () => {
    this.setState({ buttonStatus: 2,
                    myText: 'I need to apply a coupon exemption'
    })
  }

  pressButtonThree= () => {
    this.setState({ buttonStatus: 3,
                    myText: 'Enter details of your questions'
    })
  }

  updateTextNeedManager = () => {
    this.setState({ myText: 'I need a price override' })
 	}

 	updateTextCouponExemption = () => {
 		this.setState({myText: 'I need to apply a coupon exemption'})
 	}

 	updateTextOther = () => {
 		this.setState({myText: 'Enter details of your question'})
 	}

	static navigationOptions = () => ({
	    title: 'Pricing',
	    headerStyle: {
	      backgroundColor: '#CC0000',
	      height: 65
	    },
      headerTintColor: '#FFFFFF',
	    headerTitleStyle: {
	       color: 'white',
	    },
	    headerBackTitleStyle: {
	    	color: 'white',
	    }
	  });
    submitQuestion = () => {
      const associateId = this.props.navigation.state.params.associate._id
      const { category } = this.props.navigation.state.params.category;

      this.socket.emit('newQuestion', { 
        message: { 
          sender: associateId, 
          recipient: '5a151a66891ec8ea34d9622f', 
          text: this.state.myText
        },
        question: {
          text: this.state.myText,
          assigner: associateId,
          assignee: '5a151a66891ec8ea34d9622f',
          category: category,
          status: 'open'
        }
      });

    }

	render() {
		const {navigate} = this.props.navigation;
    console.log(this.props)

		return (
			<Container style={styles.container}>
				<Content>

					<View style={{flex:1, flexDirection: 'column', justifyContent: 'center', marginLeft: 10, marginTop: 20}}>
            <TouchableHighlight
              activeOpacity={1}
              style={ this.state.buttonStatus === 1 ? styles.buttonPress : styles.button }
              onPress ={this.pressButtonOne.bind(this)}
            >
              <View>
                <Text style={styles.buttonText}>I need a price override</Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              activeOpacity={1}
              style={ this.state.buttonStatus === 2 ? styles.buttonPress : styles.button }
              onPress= {this.pressButtonTwo.bind(this)}
            >
							<Text style={styles.buttonText}>I need to apply a coupon exemption</Text>
            </TouchableHighlight>

            <TouchableHighlight
              style={ this.state.buttonStatus === 3 ? styles.buttonPress : styles.button }
              onPress = {this.pressButtonThree.bind(this)}
            >            
							<Text style={styles.buttonText}>Other</Text>
						</TouchableHighlight>

						<Item regular style={styles.message}>
							<Input placeholder={this.state.myText} />
						</Item>

						<Button style={styles.send} onPress={this.submitQuestion}>
							<Text style={styles.sendText}>Send to Manager</Text>
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
  	color: 'white',
  	marginTop: -10,
  },
  welcome: {
    margin: 45,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: '#F4F6F8',
    height: 60,
    width: 340,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'grey',
    shadowOpacity: 0.3,
  },
  buttonPress: {
    backgroundColor: '#FBEAE5',
    borderColor: '#E37572',
    borderWidth: 1,
    height: 60,
    width: 340,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'grey',
    shadowOpacity: 0.3,
    margin: 10,
    borderRadius: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    
  },
  buttonText:{
    fontSize: 20,
    marginLeft: 10,
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
  	flex: 1,
  	justifyContent: 'flex-start',
  	flexDirection: 'row',
  	alignItems: 'flex-start',
    borderRadius: 5,

  },
});

export default Pricing;
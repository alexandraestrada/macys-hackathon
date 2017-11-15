import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Body, Title, List, ListItem, Thumbnail, Left, Right, Tab, Tabs, TabHeading, StatusBar} from 'native-base';
import Tab1 from './unread_questions';
import Tab2 from './read_questions';
import Tab3 from './resolved_questions';

class Manager_Landing extends React.Component {
    constructor() {
        super();
        this.socket = SocketIOClient('https://young-brook-73094.herokuapp.com');
        console.log('socket', this.socket)
        console.log('this.state', this.state);
    }

    componentDidMount() {
        const userId = this.props.navigation.state.params.manager._id;
        fetch('https://young-brook-73094.herokuapp.com/api/users/' + userId + '/questions')
            .then(response => response.json())
            .then(responseJson => this.setState({ questions: responseJson}));

        this.socket.on('questionSubmitted', ({ question }) => {
            console.log('question here?', question);
            this.setState(prevState => { 
                const newState = [question].concat(prevState.questions);
                console.log('newstate', newState)
                return {questions: newState};
            })
            console.log('state', this.state);
        })
    }

	render() {
		const {navigate} = this.props.navigation;

		return (
			<Container style={styles.container}>
        <Content>
				  <Text style={styles.welcome}>Ongoing Questions</Text>

          <List>
            {  this.state && this.state.questions.map((question, i) => {
                return (
                    <ListItem avatar key={'list-item-' + i}>
                        <Left>
                            <Thumbnail source={{ uri: 'http://hr.macys.net/insite/images/logon6_welcome.jpg' }} />
                        </Left>
                        <Body>
                            <Text>{question.assigner.name.first} {question.assigner.name.last}</Text>
                            <Text note>{question.text}</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                )
                })
            }
            </List>
          </Content>
			</Container>
		);
	}
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  welcome: {
  	marginTop: 20,
    marginLeft: 70,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  list:{
    marginTop: -50,
  },
});

export default Manager_Landing;
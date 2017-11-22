import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Body, Title, List, ListItem, Thumbnail, Left, Right, Tab, Tabs} from 'native-base';
import Tab1 from './unread_questions';
import Tab2 from './read_questions';
import Tab3 from './resolved_questions';

export interface State {}
class Ongoing_Questions extends React.Component<Props, State> {
	static navigationOptions = () => ({
	    title: 'Ongoing Questions',
	    headerStyle: {
	      backgroundColor: '#CC0000',
	      height: 65
	    },
	   	headerTitleStyle: {
	       color: 'white',
	    }
	  });
    constructor() {
        super();
        this.socket = SocketIOClient('https://young-brook-73094.herokuapp.com');
        console.log('socket', this.socket)
        console.log('this.state', this.state);
  
    }

    componentDidMount() {
      const associateId = this.props.navigation.state.params.associate._id;

      fetch('https://young-brook-73094.herokuapp.com/api/users/' + associateId + '/questions/assigner')
        .then(response => response.json())
        .then(responseJson => this.setState({ questions: responseJson }));

      this.socket.on('questionSubmitted', ({ question }) => {
        this.setState(prevState => { 
          const newState = [question].concat(prevState.questions);
          return {questions: newState};
        })
      })
    }

    goToQuestion = (question) => {
      return this.props.navigation.navigate('Manager_Question', {questionId: question._id});
    }

	render() {
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container}>
        <Content>
          <List>
            {  this.state && this.state.questions.map((question, i) => {
                return (
                    <ListItem avatar key={'list-item-' + i} onPress={() => this.goToQuestion(question)}>
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
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
    header: {
   	backgroundColor: '#CC0000',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  list:{
    marginTop: -50,
  },
  footer: {
	marginTop: 345,
  },
  footerTextSelected: {
  	color: '#CC0000',
  	fontSize: 10,
  },
  footerText: {
  	color: '#B8BCC3',
  	fontSize: 10,
  },
});

export default Ongoing_Questions;
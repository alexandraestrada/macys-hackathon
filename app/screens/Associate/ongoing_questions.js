import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';

import {
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
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
    headerStyle: {
      backgroundColor: '#CC0000',
      height: 65,
    },
    headerTintColor: '#FFFFFF',
  });

  constructor() {
    super();

    this.socket = SocketIOClient('https://young-brook-73094.herokuapp.com');
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
    return this.props.navigation.navigate('Associate_Question', {questionId: question._id});
  }

  convertTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }

	render() {
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.welcome}>Ongoing Questions</Text>
          <View style={styles.listContainer}>
            { this.state && this.state.questions.map((question, i) => {
                return (
                  <TouchableWithoutFeedback 
                    key={'list-item-' + i} 
                    onPress={() => this.goToQuestion(question)}
                  >
                    <View style={styles.listItem} >
                      <Image 
                        style={styles.image}
                        source={{uri: question.assignee.image}}
                      />
                      <View>
                        <Text style={styles.text} numberOfLines={1}>{ question.text }</Text>
                        <Text style={styles.name}>{ question.assignee.name.first }</Text>
                      </View>
                      <Text style={styles.time}>{this.convertTime(question.created_at)}</Text>
                    </View>
                  </TouchableWithoutFeedback>
                )
              })
            }
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
    color: 'black',
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
  },
  image: {
    marginRight: 15,
    height: 50,
    width: 50,
    borderRadius: 50/2,
    borderWidth: 0.5,
  },
  listContainer: {
    paddingRight: 20,
    paddingLeft: 20,
  },
  listItem: {
    borderBottomWidth: 1,
    borderColor: '#DFE3E8',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: 40,
    width: 200,
  },
  name: {
    fontSize: 18,
    color: 'gray',
  },
  time: {
    paddingTop: 20,
    textAlign: 'right',
    alignSelf: 'center',
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
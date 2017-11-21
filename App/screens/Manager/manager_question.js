import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Body, Title, List, ListItem, Thumbnail, Left, Right, Input, Item} from 'native-base';

import { Button } from '../../components/Button';

export interface State {}
class Manager_Question extends React.Component<Props, State> {
  constructor() {
      super()

      this.state = { 
        inputText: '',
        messages: [],
      };
      this.socket = SocketIOClient('https://young-brook-73094.herokuapp.com');
  }

  componentDidMount() {
    this.socket.on('questionUpdated', ({ question }) => {
      this.setState({ messages: question.messages })
    });

    const questionId = this.props.navigation.state.params.questionId;

    fetch('https://young-brook-73094.herokuapp.com/api/questions/' + questionId)
      .then(response => response.json())
      .then(responseJson => this.setState({ ...responseJson }));
  }

  submitQuestion = () => {
      this.socket.emit('newMessage', { 
        questionId: this.state._id,
        message: { 
          sender: this.state.assignee._id, 
          recipient: this.state.assigner._id, 
          text: this.state.inputText
        }
      });
      this.setState({ inputText: '' })
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container style={styles.container}>
        <Content>
              <Header style={styles.header}>
                <Body>
                  <Text style={styles.headerText}>Price Override</Text>
                </Body>
              </Header>

                <List>
                {
                  this.state && this.state.messages.map((message, i) => {
                    return (
                      <ListItem avatar style={styles.listItem} key={'list-item-key-' + i}>

                        <Left>
                          <Thumbnail large source={{ uri: 'http://www.sunburstshutterscharlotte.com/img/Neil%20NC%20Headshot--18.jpg?t=1506633857' }}
                          />
                        </Left>
                        <View style={styles.mediaObject}>
                            <Text>{message.sender.name.first}, {message.sender.title}</Text>
                            <Text note>{message.text}</Text>
                        </View>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                    )
                  })
                }
                </List>
                <View style={styles.suggestionContainer}>
                  <Button>Need more info</Button>
                  <Button>On my way</Button>
                  <Button>Be there in 5</Button>
                </View>
                <Input
                  onChangeText={ text => this.setState({ inputText: text }) }
                  placeholder="Enter your response"
                  value={ this.state.inputText }
                  style={styles.input}
                />
                <Button onPress={this.submitQuestion}>
                      <Text>Respond</Text>
                </Button>


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
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: -10,
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
  listItem: {
    width: 100,
  },
  suggestionContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: "row",
  },
  footer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-end',
  },
  mediaObject: {
    flex: 1,
    flexDirection: "row",
  }
});

export default Manager_Question;
import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Body, Title, List, ListItem, Thumbnail, Left, Right, Input, Item} from 'native-base';

import { Button } from '../../components/Button';

export interface State {}
class Manager_Question extends React.Component<Props, State> {
  static navigationOptions = () => ({
    title: 'Question',
    headerStyle: {
      backgroundColor: '#CC0000',
      height: 65,
    },
    headerTintColor: '#FFFFFF',
  });

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
          sender: this.state.assigner._id, 
          recipient: this.state.assignee._id, 
          text: this.state.inputText
        }
      });
      this.setState({ inputText: '' })
  }

  formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }

  render() {
    const {navigate} = this.props.navigation;
    console.log('this.state', this.state);

    return (
      <Container style={styles.container}>
        <Content>
          <Header style={styles.header}>
            <Text style={styles.headerText}>{this.state && this.state.text}</Text>
            <View style={styles.assignerContainer}>
              <View style={styles.assigner}>
                <Image
                  style={styles.image}
                  source={{ uri: this.state.assigner && this.state.assigner.image }}
                />
                <Text style={styles.assignerName}>
                  { this.state.assigner && this.state.assigner.name.first + 
                    ' the ' + this.state.assigner.accountType
                  }
                </Text>
              </View>
              <Text>{this.formatTime(this.state && this.state.created_at)}</Text>
            </View>
          </Header>
          <View style={styles.contentContainer}>
            <ScrollView style={{height: 320}}>
              { this.state && this.state.messages.map((message, i) => {
                  if (i > 0) {
                    return (
                      this.state.assigner.associateId === message.sender.associateId
                      ? <View style={styles.messageContainer}>
                          <Image 
                            style={{
                              height: 35,
                              width: 35,
                              borderRadius: 35/2,
                              marginRight: 10,
                            }}
                            source={{ uri: message.sender.image }} 
                          />
                          <Text style={styles.message}>{ message.text }</Text>
                        </View>
                      : <View 
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            padding: 20,
                            justifyContent: 'flex-end',
                          }}
                        >
                          <Text style={styles.message}>{ message.text }</Text>
                          <Image 
                            style={{
                              height: 35,
                              width: 35,
                              borderRadius: 35/2,
                              marginLeft: 10,
                            }}
                            source={{ uri: message.sender.image }} 
                          />
                        </View>
                    )
                  }
                })
              }
            </ScrollView>
            <View style={{paddingTop: 15}}>
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
            </View>
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
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
    height: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
  headerText: {
    fontSize: 20,
  },
  welcome: {
    marginTop: 20,
    marginLeft: 70,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  assigner: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  assignerName: {
    marginLeft: 10,
  },
  assignerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  message: {
    backgroundColor: '#F5F5F5',
    color: 'gray',
    padding: 13,
    fontSize: 19,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  image: {
    height: 35,
    width: 35,
    borderRadius: 35/2,
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
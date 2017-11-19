import React, { Component } from 'react';
import SocketIOClient from 'socket.io-client';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Body, Title, List, ListItem, Thumbnail, Left, Right, Input, Item} from 'native-base';


export interface State {}
class Manager_Question extends React.Component<Props, State> {
constructor() {
      super()
      this.socket = SocketIOClient('https://young-brook-73094.herokuapp.com');
      
  }
  componentDidMount() {
    const questionId = this.props.navigation.state.params.questionId;

    fetch('https://young-brook-73094.herokuapp.com/api/questions/' + questionId)
      .then(response => response.json())
      .then(responseJson => this.setState({ ...responseJson }));
  }

  submitQuestion = () => {
      alert('this gets hit')
      console.log('state', this.state);
      this.socket.emit('newMessage', { 
        questionId: this.state._id,
        message: { 
          sender: this.state.assignee._id, 
          recipient: this.state.assigner._id, 
          text: "on my way"
        }
      });

  }

  render() {
    const {navigate} = this.props.navigation;
    console.log(this.state);

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
                        <Body>
                            <Text>{message.sender.name.first}, {message.sender.title}</Text>
                            <Text note>{message.text}</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                    )
                  })
                }
                </List>
                <Input placeholder="On My Way" />
                <Button onPress={this.submitQuestion}>
                      <Text>Respond</Text>
                </Button>
              <Footer style={styles.footer}>
                  <FooterTab>
                      <Button>
                      <Text>Open Issues</Text>
                      </Button>
                      <Button>
                      <Text>Closed Issues</Text>
                      </Button>
                      <Button active>
                      <Text>Navigate</Text>
                      </Button>
                      <Button>
                      <Text>Contact</Text>
                      </Button>
                  </FooterTab>
              </Footer>

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
  notification: {
    backgroundColor: '#FCF0CD',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 90,   
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
  footer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-end',
  }
});

export default Manager_Question;
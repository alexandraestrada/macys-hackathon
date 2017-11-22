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
    title: 'My Questions',
    headerStyle: {
      backgroundColor: '#CC0000',
      height: 65,
      fontSize: 28,
    },
    headerTintColor: '#FFFFFF',
  });

  constructor() {
    super();

    this.socket = SocketIOClient('https://young-brook-73094.herokuapp.com');
  }

  componentDidMount() {
    const associateId = this.props.navigation.state.params.manager._id;

    fetch('https://young-brook-73094.herokuapp.com/api/users/' + associateId + '/questions/assignee')
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

  convertTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>Ongoing Questions </Text>
          </View>
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
                        source={{uri: question.assigner.image}}
                      />
                      <View>
                        <Text style={styles.text} numberOfLines={1}>{ question.category }</Text>
                        <Text style={styles.name}>{ question.assigner.name.first }</Text>
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
  welcomeContainer: {
    borderBottomWidth: 1,
    borderColor: '#DFE3E8',
    paddingRight: 20,
    paddingLeft: 20,
  },
  welcome: {
    color: 'black',
    fontSize: 20,
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


// import React, { Component } from 'react';
// import SocketIOClient from 'socket.io-client';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import { Container, Header, Content, Footer, FooterTab, Button, Body, Title, List, ListItem, Thumbnail, Left, Right, Tab, Tabs, TabHeading, StatusBar} from 'native-base';
// import Tab1 from './unread_questions';
// import Tab2 from './read_questions';
// import Tab3 from './resolved_questions';

// class Manager_Landing extends React.Component {
//     constructor() {
//         super();
//         this.socket = SocketIOClient('https://young-brook-73094.herokuapp.com');
//     }

//     componentDidMount() {
//         const userId = this.props.navigation.state.params.manager._id;
//         console.log('userid here', userId)
//         fetch('https://young-brook-73094.herokuapp.com/api/users/' + userId + '/questions/assignee')
//             .then(response => response.json())
//             .then(responseJson => this.setState({ questions: responseJson}));

//         this.socket.on('questionSubmitted', ({ question }) => {
//             console.log('question here?', question);
//             this.setState(prevState => { 
//                 const newState = [question].concat(prevState.questions);
//                 console.log('newstate', newState)
//                 return {questions: newState};
//             })
//             console.log('state', this.state);
//         })
//     }
//     goToQuestion = (question) => {
//       return this.props.navigation.navigate('Manager_Question', {questionId: question._id});

//     }
    

// 	render() {
// 		const {navigate} = this.props.navigation;

// 		return (
// 			<Container style={styles.container}>
//         <Content>
// 				  <Text style={styles.welcome}>Ongoing Questions</Text>

//           <List>
//             {  this.state && this.state.questions.map((question, i) => {
//                 return (
//                     <ListItem avatar key={'list-item-' + i} onPress={() => this.goToQuestion(question)}>
//                         <Left>
//                             <Thumbnail source={{ uri: 'http://hr.macys.net/insite/images/logon6_welcome.jpg' }} />
//                         </Left>
//                         <Body>
//                             <Text>{question.assigner.name.first} {question.assigner.name.last}</Text>
//                             <Text note>{question.text}</Text>
//                         </Body>
//                         <Right>
//                             <Text note>3:43 pm</Text>
//                         </Right>
//                     </ListItem>
//                 )
//                 })
//             }
//             </List>
//           </Content>
// 			</Container>
// 		);
// 	}
// }


// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#F5FCFF',
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   welcome: {
//   	marginTop: 20,
//     marginLeft: 70,
//     marginBottom: 20,
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
//   list:{
//     marginTop: -50,
//   },
// });

// export default Manager_Landing;
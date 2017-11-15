import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Body, Title, List, ListItem, Thumbnail, Left, Right, Input, Item} from 'native-base';

export interface State {}
class New_Question extends React.Component<Props, State> {

  componentDidMount() {
    const questionId = this.props.navigation.state.params.question._id;

    fetch('https://young-brook-73094.herokuapp.com/api/questions/' + questionId)
      .then(response => response.json())
      .then(responseJson => this.setState({ ...responseJson }));
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

				<View style={styles.notification}>
					<Text>Your request has just been sent to Karen the manager.</Text>
				</View>

                <List>
                {
                  this.state && this.state.messages.map((message, i) => {
                    return (
                      <ListItem avatar style={styles.listItem} >
                        <Left>
                          <Thumbnail large source={{ uri: 'http://www.sunburstshutterscharlotte.com/img/Neil%20NC%20Headshot--18.jpg?t=1506633857' }}
                          />
                        </Left>
                        <Body>
                            <Text>{message.sender.name.first} {message.sender.name.last}</Text>
                            <Text note>{this.state.category} - {message.text}</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
                    )
                  })
                }
                </List>

				<Image source={require('./../../../images/envelope_image.svg')} style={{height: 500}}/>
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
});

export default New_Question;
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Body, Title, List, ListItem, Thumbnail, Left, Right, Tab, Tabs} from 'native-base';
import Tab1 from './unread_questions';
import Tab2 from './read_questions';
import Tab3 from './resolved_questions';

export interface State {}
class Ongoing_Questions extends React.Component<Props, State> {
	render() {
		const {navigate} = this.props.navigation;

		return (
			<Container style={styles.container}>
				<Content>
			        <Header style={styles.header}></Header>

				<Text style={styles.welcome}>Ongoing Questions</Text>

                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'http://hr.macys.net/insite/images/logon6_welcome.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Kumar Pratik</Text>
                            <Text note>Price override - manager needed</Text>
                        </Body>
                        <Right>
                            <Text note>3:43 pm</Text>
                        </Right>
                    </ListItem>
            
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'http://hr.macys.net/insite/images/logon6_welcome.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Sally Su</Text>
                            <Text note>I have a tricky return</Text>
                        </Body>
                        <Right>
                            <Text note>3:50 pm</Text>
                        </Right>
                    </ListItem>
            
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: 'http://hr.macys.net/insite/images/logon6_welcome.jpg' }} />
                        </Left>
                        <Body>
                            <Text>Roger Anderson</Text>
                            <Text note>Coupon Exemption - need advice from Manager</Text>
                        </Body>
                        <Right>
                            <Text note>4:30 pm</Text>
                        </Right>
                    </ListItem>
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
    header: {
  	backgroundColor: '#CC0000',
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

export default Ongoing_Questions;
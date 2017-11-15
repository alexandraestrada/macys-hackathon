import React, { Component } from 'react';
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
	    }
	  });

	render() {
		const {navigate} = this.props.navigation;

		return (
			<Container style={styles.container}>
				<Content>

                <List>
                    <ListItem avatar>
                        <Left>
                            <Image source={require('./../../../images/bill-avatar.png')} style={{height: 30, width: 30, marginLeft: 5}}/>
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
                            <Image source={require('./../../../images/jane-avatar.png')} style={{height: 30, width: 30, marginLeft: 5}}/>
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
                            <Image source={require('./../../../images/karen-avatar.png')} style={{height: 30, width: 30, marginLeft: 5}}/>
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


	            <Footer style={styles.footer}>
	                <FooterTab>
	                    <Button onPress={() => this.props.navigation.navigate('New_Question', {})}>
	                    <Image source={require('./../../../images/new_deselected.png')} style={{height: 25, width: 28, marginBottom: 4}}/>
	                    <Text style={styles.footerText}>New</Text>
	                    </Button>
	                    <Button>
	                    <Image source={require('./../../../images/envelope_selected.png')} style={{height: 27, width: 23, marginBottom: 4}}/>
	                    <Text style={styles.footerTextSelected}>Ongoing</Text>
	                    </Button>
	                    <Button>
	                    <Image source={require('./../../../images/search_deselected.png')} style={{height: 26, width: 26, marginBottom: 4}}/>
	                    <Text style={styles.footerText}>Search</Text>
	                    </Button>
	                    <Button>
	                    <Image source={require('./../../../images/ongoing_deselected.png')} style={{height: 27, width: 23, marginBottom: 4}}/>
	                    <Text style={styles.footerText}>Account</Text>
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
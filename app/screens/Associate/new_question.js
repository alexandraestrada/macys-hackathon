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

				<View style={styles.notification}>
					<Text style={styles.notificationText}>Your request has just been sent to Karen the manager.</Text>
				</View>

                <List>
                    <ListItem avatar style={styles.listItem} >
                        <Left>
                        </Left>
                        <Body>
                            <Text note style={styles.message}>I need a price override</Text>
                            <Image source={require('./../../../images/bill-avatar.png')} style={{height: 30, width: 30, marginLeft: 5}}/>
                            <Text style={styles.sender}>Bill the Associate</Text>
                        </Body>
                        <Right>
                            <Text note>11:30 am</Text>
                        </Right>
                    </ListItem>
                </List>

                <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
                	<Image source={require('./../../../images/envelope.png')} style={{height: 95, width: 120, marginTop: 50}}/>
                </View>

                <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', marginTop: 20}}>
                	<Text style={{fontSize: 18, color: '#99A3AC', paddingRight: 50, paddingLeft: 50, textAlign: 'center'}}>Karen hasnt responded to your question yet</Text>
                </View>

	            <Footer style={styles.footer}>
	                <FooterTab>
	                    <Button onPress={() => this.props.navigation.navigate('New', {})}>
	                    <Image source={require('./../../../images/new_selected.png')} style={{height: 25, width: 28, marginBottom: 4}}/>
	                    <Text style={styles.footerTextSelected}>New</Text>
	                    </Button>
	                    <Button onPress={() => this.props.navigation.navigate('Ongoing_Questions', {})}>
	                    <Image source={require('./../../../images/ongoing_deselected.png')} style={{height: 27, width: 23, marginBottom: 4}}/>
	                    <Text style={styles.footerText}>Ongoing</Text>
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
    backgroundColor: 'white',
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
  notificationText: {
  	padding: 15,
  	fontSize: 20,
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
	marginTop: 100,
  },
  footerTextSelected: {
  	color: '#CC0000',
  	fontSize: 10,
  },
  footerText: {
  	color: '#B8BCC3',
  	fontSize: 10,
  },
  message: {
  	fontSize: 20,
  	marginBottom: 10,
  },
  sender: {
  	fontSize: 15,
  	marginTop: -25,
  	marginLeft: 60,
  	marginBottom: 10,
  	color: '#637381',
  }
});

export default New_Question;
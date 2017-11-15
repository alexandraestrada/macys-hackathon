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
					<Text>Your request has just been sent to Karen the manager.</Text>
				</View>

                <List>
                    <ListItem avatar style={styles.listItem} >
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
                </List>

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

export default New_Question;
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Body, Title, List, ListItem, Thumbnail, Left, Right, Icon} from 'native-base';


export interface State {}
class Get_Help extends React.Component<Props, State> {
	static navigationOptions = () => ({
	    headerStyle: {
	      backgroundColor: '#CC0000',
	      height: 65,
	    },
	    headerTitleStyle: {
	       color: 'white',
	    },

	  });

	render() {
		const {navigate} = this.props.navigation;
    const associate = this.props.navigation.state.params.associate;
    const category = { category: 'pricing' };

		return (
			<Container style={styles.container}>
				
				<Content>

					<Text style={styles.welcome}>What do you need help with?</Text>
					<View style={{flex:1, flexDirection: 'row', justifyContent: 'center'}}>
						<Button style={styles.option} onPress={() => this.props.navigation.navigate('Pricing', { associate, category })}>
							<Text style={styles.optionText} >Pricing</Text>
						</Button>
						<Button style={styles.option} >
							<Text style={styles.optionText}>Returns</Text>
						</Button>
					</View>

					<View style={{flex:1, flexDirection: 'row', justifyContent: 'center', marginTop: 10,}}>
						<Button style={styles.option} >
							<Text style={styles.optionText}>My Day</Text>
						</Button>
						<Button style={styles.option} >
							<Text style={styles.optionText}>Macys{"\n"} Credit Card</Text>
						</Button>
					</View>
                </Content>
                <Footer style={styles.footer}>
	                <FooterTab>
	                    <Button onPress={() => this.props.navigation.navigate('New', {})}>
	                    <Image source={require('./../../../images/new_selected.png')} style={{height: 25, width: 28, marginBottom: 4}}/>
	                    <Text style={styles.footerTextSelected}>New</Text>
	                    </Button>
	                    <Button onPress={() => this.props.navigation.navigate('Ongoing_Questions', { associate })}>
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
			</Container>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
  	backgroundColor: '#CC0000',
  },
  welcome: {
    margin: 45,
    fontSize: 21,
    fontWeight: 'bold',
    

  },
  option:{
    backgroundColor: '#F4F6F8',
    height: 140,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset:{  width: 1,  height: 1,  },
	shadowColor: 'grey',
	shadowOpacity: 0.5,
  },
  optionText: {
  	fontSize: 21,
  	textAlign: "center",
  },
  footer: {
	marginTop: 50,
  },
  footerTextSelected: {
  	color: '#CC0000',
  	fontSize: 10,
  },
  footerText: {
  	color: '#B8BCC3',
  	fontSize: 10,
  }
});

export default Get_Help;
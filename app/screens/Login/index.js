import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Item, Body, Title, Button, Text, View, Icon, Footer, Form, Input } from "native-base";

class Login extends React.Component {

	constructor() {
    super()
    this.state = {
       text: ''
    }
    this.loginUser = this.loginUser.bind(this);
 	}

	loginUser() {
		return fetch('https://young-brook-73094.herokuapp.com/api/users/' + this.state.text)
			.then((response) => response.json())
			.then(responseJson => {
				if (responseJson[0].accountType === 'Associate') {
					this.props.navigation.navigate('Get_Help', { associate: responseJson[0] });
				} else {
					this.props.navigation.navigate('Management_Landing', { manager: responseJson[0] });
				}
			})
	}

<<<<<<< HEAD
export interface State {}
class Login extends React.Component<Props, State> {

	constructor() {
    super()
    this.state = {
       text: ''
    }
    this.loginUser = this.loginUser.bind(this);
 	}

	loginUser() {
		return fetch('https://young-brook-73094.herokuapp.com/api/users/' + this.state.text)
			.then((response) => response.json())
			.then(responseJson => {
				if (responseJson[0].accountType === 'Associate') {
					this.props.navigation.navigate('Get_Help', { associate: responseJson[0] });
				} else {
					// this.props.navigation.navigate('Get_Help', {})
				}
			})
	}

=======
>>>>>>> managment-sockets
	render() {
		const {navigate} = this.props.navigation;

		return (
			<Container style={{backgroundColor: "#fff"}}>
			<Image source={require('./../../../images/login_store_img.jpeg')} style={{height: 200, width: null}}/>
				<Content style={{ paddingLeft: 20, paddingRight: 20}} >
					<Container >
					<Form >
            <Item>
              <Input
              	onChangeText={text => this.setState({ text: text.toLowerCase() })}
              	value={this.state.text}
	              placeholder="Associate ID" 
              />
						</Item>
            <Item>
              <Input placeholder="Password" secureTextEntry={true} />
			</Item>
			<Button transparent dark >
            	<Text>Forgot password?</Text>
          	</Button>
				<Button 
					full 
					style={{marginTop: 60, borderRadius: 10, backgroundColor: "#c00"}}
					onPress={this.loginUser}
				>
					<Text>Sign In</Text>
				</Button>
          </Form>
      				</Container>
                </Content>
			</Container>
		);
	}
}

export default Login;
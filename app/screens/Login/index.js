import React, {Component} from "react";
import { Image, Platform } from "react-native";
import { NavigationActions } from 'react-navigation';
import { Container, Content, Header, Item, Body, Title, Button, Text, View, Icon, Footer, Form, Input } from "native-base";

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Home'})
  ]
});

class Login extends Component {
	render() {
		console.log(">> ", this.props);
		return (
			<Container style={{backgroundColor: "#fff"}}>
			<Image source={require('./../../../images/login_store_img.jpeg')} style={{height: 200, width: null}}/>
				<Content style={{ paddingLeft: 20, paddingRight: 20}} >
					<Container >
					<Form >
            <Item>
              <Input placeholder="User ID" />
			</Item>
            <Item>
              <Input placeholder="Password" secureTextEntry={true} />
			</Item>
			<Button transparent dark >
            	<Text>Forgot password?</Text>
          	</Button>
				<Button full style={{marginTop: 60, borderRadius: 10, backgroundColor: "#c00"}}
				onPress={() => this.props.onLogin()}>
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
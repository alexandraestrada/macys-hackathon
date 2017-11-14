import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Item, Body, Title, Button, Text, View, Icon, Footer, Form, Input } from "native-base";

export interface Props {
	loginForm: any,
	onLogin: Function,
}

export interface State {}
class Login extends React.Component<Props, State> {
	render() {
		const {navigate} = this.props.navigation;

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
				onPress={() => this.props.navigation.navigate('Home', {})}>
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
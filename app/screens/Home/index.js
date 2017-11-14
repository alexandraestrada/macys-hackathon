import React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Item, Body, Title, Button, Text, View, Icon, Footer, Form, Input } from "native-base";

export interface State {}
class Home extends React.Component<Props, State> {
	render() {
		return (
			<Container style={{backgroundColor: "#fff"}}>
            <Content>
                <Text>Home Screen</Text>
            </Content>
			</Container>
		);
	}
}

export default Home;
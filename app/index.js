import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from './containers/LoginContainer';
import Home from './screens/Home';


const App = StackNavigator({
        Login: { 
            screen: Login 
        },
        Home: {
            screen: Home
        }
    }, 
    {
        initialRouteName: "Login",
        headerMode: "float",
    });

export default () => ( 
    <Root >
        <App />
    </Root>
);
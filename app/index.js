import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from './screens/Login';


const App = StackNavigator(
    {
        Login: { screen: Login },
    }, 
    {
        initialRouteName: "Login",
        headerMode: "none",
    }
);

export default () => ( 
    <Root >
        <App />
    </Root>
);
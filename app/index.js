import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from './screens/Login';
import Home from './screens/Home';
import Get_Help from './screens/Associate/get_help';
import Ongoing_Questions from './screens/Associate/ongoing_questions';
import Pricing from './screens/Associate/pricing';
import New_Question from './screens/Associate/new_question'
import Management_Landing from './screens/Manager/home';
import Manager_Question from './screens/Manager/manager_question';
import Associate_Question from './screens/Associate/associate_question';


const App = StackNavigator({
    Login: { 
        screen: Login 
    },
    Home: {
        screen: Home
    },
    Get_Help: { 
        screen: Get_Help
    },
    Pricing: { 
        screen: Pricing
    },
    Manager_Question: {
        screen: Manager_Question
    },
    Associate_Question: {
        screen: Associate_Question
    },
    Ongoing_Questions: { 
        screen: Ongoing_Questions 
    },
    New_Question: {
        screen: New_Question
    },
    Management_Landing: {
        screen: Management_Landing
    }},
    {
        initialRouteName: "Login",
        headerMode: "float",
    });


export default class extends React.Component {

    render() {
        return (
            <Root >
                <App socketConnection={this.socket}/>
            </Root>
        )
    } 
};

import React,{Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation'; // Version can be specified in package.json

import Home from '../Screens/Home';
import {StyleSheet, Text, View,Button} from 'react-native';
import DatePicker from '../Screens/DatePicker';
import Timesheet from '../Screens/Timesheet';
import WixCalendar from '../Component/WixCalender';
import Submitted from '../Screens/Submitted';


import SideMenu from './SideMenu';
import SignUp from '../Screens/SignUp';
import OnBoarding from '../Screens/OnBoarding';
import LoginScreen from '../Screens/LoginScreen';
const RootStack = createStackNavigator({
	Login:{
		screen:LoginScreen,
		navigationOptions:{
			header:null
		}
	},
	OnBoarding:{
		screen:OnBoarding,
		navigationOptions:{
			header:null
		}
	},
	Submitted:{
		screen:Submitted,
		navigationOptions: {
			header: null
	}
	},
	Home: {
		screen: Home,
		navigationOptions: {
				header: null
		}
},
DatePicker:{
	screen:DatePicker,
	navigationOptions: {
		header: null
},
Calender:{
	screen:WixCalendar,
	navigationOptions:{
		header:null
	}
}
},

SignUp:{
	screen:SignUp,
	navigationOptions:{
		header:null
	}
},

Timesheet:{
	screen:Timesheet,
	navigationOptions: {
		header: null
}
}
},{
	initialRouteName: 'Login'
}
)



const AppContainer = createAppContainer(RootStack);


export default class Navigation extends Component {
	
    render() {
				
        return (
					<AppContainer></AppContainer>
				)
    }
}
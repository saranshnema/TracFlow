import React,{Component} from 'react';
import {createAppContainer, createStackNavigator, DrawerNavigator} from 'react-navigation'; // Version can be specified in package.json
import Timesheet from '../Screens/Timesheet';

export default DrawerNavigator({
  Page1: {
    screen: TimeSheet
  },
  
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});

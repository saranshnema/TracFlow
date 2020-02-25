import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,Image, TouchableOpacity,TouchableHighlight} from 'react-native';
export default class DatePickerFooter extends Component{
	render(){
		return(
			<View style={{flexDirection:"row"}}> 
			<Text style={{textAlign:"center",marginLeft:10}}>{this.props._getDateMonth() } </Text>
			<TouchableHighlight onPress={()=>{this.props.navigation.navigate('Timesheet')}}>
			<Text style={{marginLeft:30,backgroundColor:'white',color:'blue'}}>Go to timesheet</Text>
			</TouchableHighlight>
			</View>
		)
	}
}
import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,Image, TouchableOpacity,TextInput} from 'react-native';
import { Icon } from 'react-native-elements';
import AntIcon from "react-native-vector-icons/AntDesign";
import DialPad from './DialPad';

export default class SignUp extends Component{
	constructor(props){
		super(props);
		this.state={
			phoneNumber:""
		}
	}
	componentWillMount(){
		
	}
	setPhoneNumber = (val) => {
		console.log(val)
		ph = this.state.phoneNumber
		this.setState({
			phoneNumber:ph+val
		})
	}
	render(){
		var setPhoneNumber = this.setPhoneNumber
		return(
			<View style={{flex:1}}>
			<View style={styles.container}>
			<Text style={styles.tracFlowText}>Enter your phone number </Text>
			<View style={{flexDirection:"row",marginTop:50,borderBottomWidth:1,borderTopWidth:1,borderRightWidth:1,borderLeftWidth:1,borderColor:"#2196f3"}}>
			<TextInput
        style={{height: 40,width:"60%", borderColor: 'gray', borderWidth: 0,borderColor:"",textAlign:"center"}}
				placeholder="999-999-9999"
				value = {this.state.phoneNumber}
			/>
			<AntIcon name="arrowright" color="black" size={30} style={{padding:3}}></AntIcon>
			</View>
			</View>
			
			<DialPad  setPhoneNumber = {setPhoneNumber.bind(this)}/>
			
			</View>
			
		)
	}
} 
const styles = StyleSheet.create({
	container:{
		marginTop:250,
		flex:1,
		alignItems: "center",
		backgroundColor: '#ffffff',
		
		
	},
	tracFlowText:{

		fontSize:20,
		fontWeight:"bold",
		
		color: "#333333",
		
		
		margin:"1%",

	},
})
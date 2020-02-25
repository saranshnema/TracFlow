import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,Image, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class DialPad extends Component{
	pressedVIew = () => {
		alert("hello")
	}
	render(){
		return(
			<View style={{flex:1}}>
			
			<View style={styles.row}>
			<TouchableOpacity style={styles.li} onPress={this.props.setPhoneNumber}>
			<View ><Text>1</Text></View>
			</TouchableOpacity>
			
			<View style={styles.li}><Text>2</Text><Text>ABC</Text></View>
			
			
			<View style={styles.li}><Text>3</Text><Text>DEF</Text></View>
			
			</View>
			
			<View style={styles.row}>
			<View style={styles.li}><Text>4</Text><Text>GHI</Text></View>
			<View style={styles.li}><Text>5</Text><Text>JKL</Text></View>
			<View style={styles.li}><Text>6</Text><Text>MNO</Text></View>
			</View>
			<View style={styles.row}>
			<View style={styles.li}><Text>7</Text><Text>PQRS</Text></View>
			<View style={styles.li}><Text>8</Text><Text>TUV</Text></View>
			<View style={styles.li}><Text>9</Text><Text>WXYZ</Text></View>
			</View>
			<View style={styles.row}>
			<View style={styles.liDark}></View>
			<View style={styles.li}><Text>0</Text></View>
			<View style={styles.liDark}><Ionicons name="ios-backspace" size={30} color="black" /></View>
			</View>
			</View>
	
			)
		}
	}
const styles = StyleSheet.create({
	row:{
		width:"100%",
		
		
		flexDirection: "row"
	},
	li:{
		width: "33.33%",
    height: 60,
		backgroundColor: 'white',
		borderColor:"black",
		borderWidth:0.2,
		
		flex:1,
		alignItems:"center",
		justifyContent:"center"
 
	},
	liDark:{
		width: "33.33%",
    height: 60,
		backgroundColor: '#d8d8d8',
		borderColor:"black",
		borderWidth:1,
		
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	}
})
import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,Image, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class Submitted extends Component{
	render(){
		return(
			
			<View style={styles.container}>
			<Image style={{width: 150, height: 150,marginTop:80,marginBottom:80, alignSelf:"center"}} source ={require("../Assets/lunchbox.png")} />
			<View style={styles.SubmiitedInfo}>
			<View style={styles.image}>	
			<Image 
					source={require('../Assets/success.png')} />
		
					</View>
			<Text style={{fontSize:20}}> Transfer Submitted</Text>		
			</View>	
			<View style={styles.bottomButton}>
			<Button title="Home" onPress={() => {this.props.navigation.navigate('Home')}}></Button>
			</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		
		flex:1,
		alignItems: "center",
		backgroundColor: 'rgb(72, 137, 242)',
		
	},
	SubmiitedInfo:{
		alignItems:'center',
		height:"35%",
		width:"70%",
		backgroundColor:"white",
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
		shadowRadius: 5, 
	
		borderRadius: 4,
		borderWidth: 0.5,
		marginBottom:80
	},
	image:{
		marginTop:"30%",
		marginBottom:"30%"
	},
	bottomButton:{
		backgroundColor:"white",
		marginTop:"3%",
		marginBottom:30,
		height:70,
		width:350,
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
		shadowRadius: 5, 
		
		borderRadius: 14,
		borderWidth: 0.5,
		justifyContent:"center",
		alignItems: "center",
	}
})
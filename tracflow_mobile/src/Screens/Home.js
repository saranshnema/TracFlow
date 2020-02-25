import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,Image, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import HomeButton from './HomeButtons';

export default class Home extends Component{
	render(){
		return(
			
			
			<View style={styles.container}>
			
			
			<View style={styles.image} >
			
			<Image style={{width:200,height:100}} source ={require("../Assets/image.png")} />
			</View>
			<Text style={styles.tracFlowText}>Here are some of the projects assigned to you. </Text>
			<View style={{marginBottom:80}}>
			<HomeButton navigation={this.props.navigation} buttonName={"Tickets"}></HomeButton>
			<HomeButton navigation={this.props.navigation} buttonName={"Timesheets"}></HomeButton>
			<HomeButton navigation={this.props.navigation} buttonName={"Safety RFI"}></HomeButton>
			<HomeButton navigation={this.props.navigation} buttonName={"DRC"}></HomeButton>
			</View>
			
			
			</View>
			
		)
	}
}

const styles = StyleSheet.create({
	container:{
		padding:30,
		flex:1,
		alignItems: "center",
		backgroundColor: '#ffffff',
		
	},
	div:{
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
		shadowRadius: 5, 
		width: 320, height: 50,
		borderRadius: 4,
		borderWidth: 0.5,
		marginBottom:80
	},
	button:{
		backgroundColor: 'white',
		flexDirection:'row',
		
    
    alignItems: 'center'
	},
	image:{
		flexDirection:"row",
		width:"100%",
		alignItems:"center",
		marginTop:80,
		marginBottom:30,
		justifyContent:"center"
		
	},
	tracFlowText:{
		flex:1,
		fontSize:20,
		fontWeight:"bold",
		
		color: "#333333",
		
		
		margin:"1%",
		justifyContent:"center",
		alignItems:"center",
		textAlign:"center",
		alignSelf:"center",
	},
})
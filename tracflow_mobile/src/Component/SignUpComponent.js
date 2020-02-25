import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,Image, TouchableOpacity} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class SignUpComponent extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<View style={styles.container}>
			
			<Image style={styles.image}  source ={require("../Assets/mainScreen.png")} />
			<View style={{
				height:"20%",
				width:"100%"
			}}>
			<Text style={styles.tracFlowText}>Tracflo helps foreman to manage <Text > his crew. </Text></Text>
			</View>
			<View style={[{ width: "70%",height:"6%", margin: 10, backgroundColor: "#2196f3",justifyContent:"center"}]}>
			<Button
				onPress={this.buttonClickListener}
				title="LOGIN"
				color="#ffffff"
			/>
			
		</View>
		<View style={[{ width: "70%",height:"6%", margin: 10, backgroundColor: "#ffffff",justifyContent:"center"}]}>
		<Button
			onPress={this.buttonClickListener}
			title="SIGN UP	"
			color="#333333"
		/>
		
	</View>
		
				
			</View>
      
		)
	}
}
const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems: "center",
		padding:10
	},
	tracFlowText:{
		flex:1,
		fontSize:20,
		fontWeight:"bold",
		
		color: "#333333",
		marginTop:"20%",
		
		margin:"1%",
		justifyContent:"center",
		alignItems:"center",
		textAlign:"center",
		alignSelf:"center",
	},
	button:{
		marginBottom:100
	},
	image:{
		width:"100%",
		height: "40%",
		marginTop:"30%",
	},
})
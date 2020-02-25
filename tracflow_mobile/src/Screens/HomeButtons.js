import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,Image, TouchableOpacity} from 'react-native';


export default class HomeButton extends Component{
	constructor(props){
		super(props);
		state={
			color:'white'
		}
	}
	_press = () => {
		
	}
	componentWillMount(){
		console.log(this)
	}
	render(){
		return(
			<View  style={styles.div}>
				<TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={()=>{this.props.navigation.navigate('DatePicker')}}>
					<Image style={styles.image}
						source={require('../Assets/success.png')}
					
					/>
				
					<Text  style={{ marginLeft:60}}> {this.props.buttonName} </Text>
				
				</TouchableOpacity>
				</View>
		)
	}

} 

const styles = StyleSheet.create({
	container:{
		justifyContent:"center",
		flex:1,
		padding:0,
		alignItems: "center",
		backgroundColor: '#d8d8d8',
		
	},
	div:{
		
		width: 300, height: 50,
		borderRadius: 4,
		marginBottom:40

		
	},
	button:{
		backgroundColor:"#2196f3",
		flexDirection:'row',
		height:70,
	
		width:320,
		alignItems: 'center',
		
		borderRadius: 4,
		width: 300, height: 50,
		
		
	
	},
	image:{
		height:40,
		width:40,
		marginLeft:50
	}
})
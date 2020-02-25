import React,{Component} from 'react';
import {StyleSheet, Text, View, Button, Image, AsyncStorage, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

export default class OnBoarding extends Component{
	constructor(props){
		super(props);

	}
	componentWillMount(){
		this.checkForFirstSignIn()
	}
	checkForFirstSignIn = async () =>{
		let checkSigin =  await AsyncStorage.getItem('data');
		console.log(checkSigin)
		console.log(JSON.parse(checkSigin) === null)
		if(!JSON.parse(val) === null){
			this.props.navigationn.navigate('SignUp')
		}
	}
	render(){
		return(
			<Swiper loop={false} autoplay={true} showsPagination={true} activeDotColor="black" >
			<View style={styles.imageContainer}>
				<Image style={styles.image} source ={require("../Assets/image.png")} />
			</View>
			<View style={styles.imageContainer}>
			
			<Image style={styles.image} source ={require("../Assets/mainScreen.png")} />
			
			</View>
			
			</Swiper>
		)
	}


}
const styles = StyleSheet.create({
	imageContainer:{
		flex:1,
		alignItems:"center",
		justifyContent: "center"
	},
	image: {
    flex: 1,
    width: "100%",
    margin:10,
    resizeMode: 'contain'
}
})
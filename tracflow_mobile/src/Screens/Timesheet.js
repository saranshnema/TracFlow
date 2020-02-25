import React,{Component} from 'react'
import {StyleSheet, Text, View,Button,Image, TouchableOpacity} from 'react-native';
import Timesheetav from '../Component/TimesheetNav';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements'
export default class Timesheet extends Component{
	constructor(props){
		super(props);
		this.state = {
			checked: false,
			
		}
	}
	componentDidMount(){
		
	}
	render(){
	
		return(
		<View style={styles.container}>
			<View style={{marginTop:80,flex:1}}>
			<Image style={{ alignSelf:"center",marginBottom:30}} source ={require("../Assets/image.png")} />
			<View style={{flexDirection:"row",justifyContent:"space-between",marginLeft:10}}> 
			
			<CheckBox
				center
				checkedColor={"white"}
				uncheckedColor={"white"}
				containerStyle={styles.checkBox}
				onPress={() => {
					console.log(this.state.checked)
					this.setState({
						checked: !this.state.checked
					})
					console.log(this)
				}}
				title='Select All'
				checkedIcon='check-square'
				uncheckedIcon='square'
				checked={this.state.checked}
			/>
    
  
		
    <CheckBox
			center
			containerStyle={styles.checkBox}
			checkedColor={"white"}
			uncheckedColor={"white"}
			onPress={() => {
				this.setState({
					checked: !this.state.checked
				})
			}}
			title='8 Hours Week'
			checkedIcon='check-square'
			uncheckedIcon='square'
			checked={this.state.checked}
		/>
    
  	
			</View>
			<ScrollView style={{paddingVertical:3,margin:30}} contentContainerStyle={{flexGrow: 1}}>
				
				<Timesheetav  name ={"Lee Sheridan"} time = {"9am-5pm"} checked={this.state.checked}></Timesheetav>
				<Timesheetav name ={"Lee Sheridan"} time = {"9am-5pm"} checked={this.state.checked}></Timesheetav>
				<Timesheetav name ={"Lee Sheridan"} time = {"9am-5pm"} checked={this.state.checked}></Timesheetav>
				<Timesheetav name ={"Lee Sheridan"} time = {"9am-5pm"} checked={this.state.checked}></Timesheetav>
				<Timesheetav name ={"Lee Sheridan"} time = {"9am-5pm"} checked={this.state.checked}></Timesheetav>
				<Timesheetav name ={"Lee Sheridan"} time = {"9am-5pm"} checked={this.state.checked}></Timesheetav>
				<Timesheetav name ={"Lee Sheridan"} time = {"9am-5pm"} checked={this.state.checked}></Timesheetav>
				<Timesheetav name ={"Lee Sheridan"} time = {"9am-5pm"} checked={this.state.checked}></Timesheetav>
			</ScrollView>
			</View>
			<View style={styles.bottomButton}>
			<Button title="SUBMIT" onPress={() => {this.props.navigation.navigate('Submitted')}}></Button>
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
	checkBox:{
		backgroundColor:'rgb(72, 137, 242)',
		borderColor:'rgb(72, 137, 242)'
	},
	timeSheetRow:{
		flexDirection:"row",
		marginTop:10,
		alignItems: "center",
		justifyContent:"space-between",
		backgroundColor:"white",
		
		height:40,
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
		shadowRadius: 5, 
		
		borderRadius: 4,
		borderWidth: 0.5,

	},
	checkBoxHeader:{
		flexDirection:"row",
		marginTop:10,
		marginLeft:5,
		alignItems: "center",
		justifyContent:"space-between",
		
		
		height:40,
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
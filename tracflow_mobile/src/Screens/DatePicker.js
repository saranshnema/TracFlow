import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,Image, TouchableOpacity} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import DatePickerFooter from '../Component/DatePickerFooter';
import { TouchableHighlight } from 'react-native-gesture-handler';
export default class DatePicker extends Component{
	constructor(props){
		super(props);
		this.date = ""
	}
	componentDidMount(){
		
	}
	_timeSheetsNotFilled = () => {
		/*
		API Call
		*/ 
		return("15")
	}
	_getDateMonth = () => {
		let date = new Date().getDate();
		let month = new Date().getMonth();
		var monthDictiinary = {1:'January',2:'February',3:'March',3:'April',4:'May',5:'June'}
		this.date = date + "  " + monthDictiinary[ month];
		return (this.date)
	}
	render(){
		return(
			<View style={styles.container}>
			<Image style={{width: 70, height: 60, alignSelf:"center",marginBottom:30,marginTop:150}} source ={require("../Assets/lunchbox.png")} />
			<Calendar style={styles.calender}
			markingType={'custom'}
			markedDates={{'2019-04-03': {
				customStyles: {
					container: {
						backgroundColor: 'aqua',
						elevation: 2,
						borderRadius:3
					},
					text: {
						color: 'black',
						
					},
				}}}}
			></Calendar>
			<View style={styles.footer}>
				
			
			<Text style={{
				fontWeight:'700',
				fontSize:34
			}}>{this._timeSheetsNotFilled()}</Text>
			
			<View>
			<Text style={{
				fontWeight:'500',
				fontSize:24
			}}>Timesheet not filled</Text>
			<DatePickerFooter _getDateMonth={this._getDateMonth} navigation={this.props.navigation}></DatePickerFooter>
			</View>
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
	calender:{
		height: 350,
		width: 350,
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
		shadowRadius: 5, 
		borderRadius: 4,
		borderWidth: 0.5,
	},
	footer:{
		backgroundColor:"white",
		marginTop:60,
		height: 90,
		 width: 350,
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
		shadowRadius: 5, 
		borderRadius: 4,
		borderWidth: 0.5,
		flexDirection:"row",
		justifyContent:"space-around",
		alignItems: "center",
		
	}
})
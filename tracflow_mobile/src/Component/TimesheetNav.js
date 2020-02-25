import React,{Component} from 'react';
import {StyleSheet, Text, View,Button,Image, TouchableOpacity,TouchableHighlight} from 'react-native';
import { CheckBox } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';
export default class Timesheetav extends Component{
	constructor(props){
		super(props);
		this.state={
			hiddenComponent:false,
			editTab:false,
			checked:this.props.checked
		}
	}
	componentWillMount(){
		
	}
	render(){
		
		
		return(
			<View>
			<View  style={styles.containerTimeSheet}>
			<View style={styles.timeSheetRow}>
			<CheckBox
				center
				
				checkedColor={"white"}
				uncheckedColor={"grey"}
				containerStyle={styles.checkBox}
				onPress={() => {
					this.setState({
						checked: !this.state.checked
					})
				}}
				checkedIcon='check-square'
				uncheckedIcon='square'
				checked={this.props.checked}
			/>
			<Text>{this.props.name} </Text>
			
			<Text>{this.props.time}</Text>
			
			<TouchableHighlight 
								style ={styles.Edit}
								onPress={()=>{this.setState(
									{
										hiddenComponent:true
									}
								)}}				
				>
            <Text>Edit</Text>
          </TouchableHighlight> 
			</View>
			{this.state.hiddenComponent ?
				<View style={styles.hiddenView}>
				<Text>Enter Hours</Text>
				<TextInput style={styles.hiddenViewText}></TextInput>
				</View>
				:
				null
			}
			</View>
			</View>
			
		)
	}
} 

const styles = StyleSheet.create({
	containerTimeSheet:{
		height:80,
		
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
		shadowRadius: 5, 
		borderRadius: 4,
		borderWidth: 0.5,
		flexDirection:"column",
		backgroundColor:"white",
		
		
	},
	hiddenViewText:{
		backgroundColor: 'rgb(72, 137, 242)',
		width:"30%",
		shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
		shadowRadius: 5, 
		borderRadius: 8,
		borderWidth: 0.5,
		color:"white",
		
	},
	hiddenView:{
		
		alignItems:"center",
		marginBottom:"6%"
		
	},
	checkBox:{
		backgroundColor:'white',
		borderColor:'red',
		width:"1%"
		
	},
	timeSheetRow:{
		flexDirection:"row",
		marginTop:10,
		alignItems: "center",
		justifyContent:"space-between",
		backgroundColor:"white",
		flex:1
	},
	Edit:{
		height:20,
		justifyContent:"center",
		alignItems:"center",
		width:80,
		 borderRadius:20,
		 marginRight:10,
		 backgroundColor : "rgb(72, 137, 242)",
		 
 }
})
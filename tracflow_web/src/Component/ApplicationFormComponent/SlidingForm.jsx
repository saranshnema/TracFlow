import React,{Componenet} from 'react';
import './ApplicationForm.css';
import GeoAddressComplete from '../GeoAddressCompleteComponent/GeoAddressComplete';
// import { connect } from 'http2';
import {connect} from "react-redux";
import { updateFormDetails } from '../../redux/actions/formActions';



class SlidingForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    
    }

    onChangeLastName = (e) => {
        this.props.updateFormDetails({testLastName: e.target.value});
    }
    
    render(){
        return(
       
            <div style= {{width : "100%",backgroundColor: "#FBFBFD",padding: "2%",marginRight: "7%",boxShadow:" 0 0 5px 3px rgba(0,0,0,0.13)"}}>
                <div className="side-componenet-div">
                    <div className="inner-div"> 
                        <label>First Name <br/>
                        <input className="input-css" type="text" value={this.props.firstName} disabled></input>
                        {/* <GeoAddressComplete/>  */}
                        </label> 
                        
                    </div>
                    <div className="inner-div">
                        <label>Last Name</label> <br />
                        <input className="input-css" type="text" value={this.props.lastName} disabled></input>
                    </div>
                </div>
                <div className="side-componenet-div">
                    <div className="inner-divRadio"> 
                        <label>Gender</label> <br />
                        <div style={{display:"inline-flex"}}>
                        <label className="SortFilterContainer"> Male
                            <input type="radio" name = "gender"></input>
                            <span className="checkmark"></span>
                        </label>
                        <label className="SortFilterContainer"> Female
                            <input type="radio" name = "gender"></input>
                            <span className="checkmark"></span>
                        </label>
                        <label className="SortFilterContainer"> Other
                            <input type="radio" name = "gender"></input>
                            <span className="checkmark"></span>
                        </label>
                        </div>
                    </div>
                </div> 
                <div className="side-componenet-div">
                    <div className="inner-div"> 
                        <label>Email</label> <br />
                        <input className="input-css" disabled value={this.props.email} type="text"></input>
                    </div>
                    <div className="inner-div">
                        <label>Mobile</label> <br />
                        <input className="input-css" disabled value={this.props.mobile} type="text"></input>
                    </div>
                </div>  
                <div className="side-componenet-div">
                    <div className="inner-div"> 
                        <label>Date of Birth</label> <br />
                        <input className="input-css" type="text"></input>
                    </div>
                    <div className="inner-div">
                        <label>What is your nickname</label> <br />
                        <input className="input-css" type="text"></input>
                    </div>
                </div>   
            </div>
        );
    }
}


const mapStateToProps=(state)=>{
	return {
        firstName: state.SignInDetailsReducer.firstName,
        lastName: state.SignInDetailsReducer.lastName,
        email: state.SignInDetailsReducer.email,
        mobile: state.SignInDetailsReducer.mobile
	};
};



const mapDispatchToProps = (dispatch) => ({
	updateFormDetails :( updatedValue)=> updateFormDetails(dispatch,  updatedValue )
}
);

export default connect(mapStateToProps, mapDispatchToProps)(SlidingForm);
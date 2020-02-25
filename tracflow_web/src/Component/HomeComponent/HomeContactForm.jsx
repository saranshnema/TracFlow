import React,{Component} from 'react';
import './HomeContactForm.css'
import {connect} from "react-redux";
import {updateSignInDetails} from "../../redux/actions/SignInActions";


class HomeContactForm extends Component{

    firstName = (e) => {
        this.props.updateSignInDetails({firstName: e.target.value});
    }
    lastName = (e) => {
        this.props.updateSignInDetails({lastName: e.target.value});
    }
    email = (e) => {
        this.props.updateSignInDetails({email: e.target.value});
    }
    password = (e) => {
        this.props.updateSignInDetails({password: e.target.value});
    }
    confirmPassword = (e) => {
        this.props.updateSignInDetails({confirmPassword: e.target.value});
    }
    mobile = (e) => {
        this.props.updateSignInDetails({mobile: e.target.value});
    }
    render(){
        return(
            <div className= "side-form">
                <div className="abc"> 
                    <label>First Name</label> <br />
                    <input className="text_input" type="text" onChange={(e) => this.firstName(e)}></input>
                </div>
                <div className="abc"> 
                    <label>Last Name</label> <br />
                    <input className="text_input" type="text" onChange={(e) => this.lastName(e)}></input>
                </div>
                <div className="abc"> 
                    <label>Email Address</label> <br />
                    <input className="text_input" type="text" onChange={(e) => this.email(e)}></input>
                </div>
                <div className="abc"> 
                    <label>Password</label> <br />
                    <input  className="text_input" type="password" onChange={(e) => this.password(e)}></input>
                </div>
                <div className="abc"> 
                    <label>Confirm Password</label> <br />
                    <input className="text_input" type="password" onChange={(e) => this.confirmPassword(e)}></input>
                </div>
                <div className="abc"> 
                    <label>Mobile Number</label> <br />
                    <input className="text_input" type="text" onChange={(e) => this.mobile(e)}></input>
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
	return {
		progress :state.FormDetailsReducer.timeLineProgress,
	};
};



const mapDispatchToProps = (dispatch) => ({
	updateSignInDetails :( updatedValue)=> updateSignInDetails(dispatch,  updatedValue )
}
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContactForm);

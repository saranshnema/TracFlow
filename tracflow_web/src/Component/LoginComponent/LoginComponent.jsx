import React,{Component} from 'react'
import Header from '../HeaderComponent/Header';
import SideBar from '../SideBarComponent/SideBar';
import './LoginComponent.css'
import forgotLogin from '../../assests/abstract-customer-support.png';
import Modal from 'react-responsive-modal';
import {connect} from "react-redux";
import {updateSignInDetails} from "../../redux/actions/SignInActions";
import Api from "../../Api/Api";


class LoginComponent extends React.Component{
    constructor(props){
        super(props);
       this.state = {
        isopen: false,
       }
    }

    onOpenModal = () => {
        this.setState({ isopen: true });
      };

    onCloseModal = () => {
        this.setState({ isopen: false });
      };

    onSignInEmail   = (e) => {
        this.props.updateSignInDetails({email: e.target.value})
    }

    onSignInPassword = (e) => {
        this.props.updateSignInDetails({password: e.target.value})
    }

    onLogin = () => {
        console.log(this.props.email)
        Api.onUserLogin(this.props.email, this.props.password);
    } 
   
    render(){
        return(
            <div style={{ overflow: 'hidden'}}>
                <Header></Header>
                <div className="containerDiv">
                    <SideBar text = ' "Tracflow can help you to crunch numbers and manage manpower efficiently" '></SideBar>
                    <div className="mainLoginFormDiv">
                        <div className= "sideLoginform">
                            <div className="login_text"> 
                                SIGN IN TO YOUR ACCOUNT
                            </div>
                            <div className="abcd"> 
                                <input className="text_Input" placeholder="Enter your email-id" onChange={(e) => this.onSignInEmail(e)} type="text"></input>
                            </div>
                            <div className="abcd"> 
                                <input className="text_Input" placeholder="Enter your password" onChange={(e) => this.onSignInPassword(e)}  type="password"></input>
                            </div>
                            <div className="nextLoginButtonContainer">
                                <input type="button" name="SIGN IN" onClick={this.onLogin}  value="SIGN IN"/>
                            </div>
                            <div className="forgotPassword" onClick={this.onOpenModal}>
                                Forgot your password?
                            </div>
                        </div>
                    </div>
                </div>  
                <Modal  open={this.state.isopen} onClose={this.onCloseModal} center 
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',}}>

                    <div style={{textAlign: 'center'}}><img src={forgotLogin} alt="Logo" className="imageModal" /></div>
                    <h2 className="loginDetailsHeader">Enter Your email-ID</h2>
                    <div className="enterEmailText">We will reset your password,enter your email-id</div>
                    <input type="text" className="inputLoginModal" />
                    <div className="submitButtonModal">
                        <input type="button" className="cancelButton" name="Cancel"  value="Cancel"/>
                        {/* <input type="button" name="Submit" className="submitButton" onClose={this.onCloseModal} onClick={this.onSuccessModal} value="Submit"/> */}
                        <input type="button" name="Submit" className="submitButton" onClick={this.onLogin} value="Submit"/>

                    </div>
                    {/* <div className="cancelButtonModal">
                            
                    </div> */}
                    
                </Modal>  
            </div>
        )
    }

}


const mapStateToProps=(state)=>{
	return {
        email: state.SignInDetailsReducer.email,
        password: state.SignInDetailsReducer.password,
    };
};



const mapDispatchToProps = (dispatch) => ({
	updateSignInDetails :( updatedValue)=> updateSignInDetails(dispatch,  updatedValue )
}
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
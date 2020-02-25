import React,{Component} from 'react'
import Header from '../HeaderComponent/Header';
import SideBar from '../SideBarComponent/SideBar';
import './HomeComponent.css'
import HomeContactForm from './HomeContactForm';
import mainScreen from "../../assests/mainScreen.png"
import {connect} from "react-redux";
import { updateFormDetails } from '../../redux/actions/formActions';


class Home extends React.Component{

    nextScreen = () => {
        this.props.history.push("/ApplicationForm");
    }
    
    render(){
        return(
            <div style={{ overflow: 'hidden'}}>
                <Header history={this.props.history}></Header>
                <div className="containerDiv">
                    <SideBar text = ' "Tracflow can help you to crunch numbers and manage manpower efficiently" '></SideBar>
                    <div className="mainFormDiv">
                        <div className="header-container">
                            <div> Get Started</div>
                        </div>
                        <div className="imageComponent">
                            <img src={mainScreen} className="image-details" />
                            <div className="detailsForm">
                            <HomeContactForm />
                            <div className="nextButtonContainer" onClick = {this.nextScreen}>
                                 <input type="button" name="Next"  value="Next"/>
                            </div>
                            </div>
                        </div>
                    </div>
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
	updateFormDetails :( updatedValue)=> updateFormDetails(dispatch,  updatedValue )
}
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
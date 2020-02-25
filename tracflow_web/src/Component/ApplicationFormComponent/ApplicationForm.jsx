import React,{Component} from 'react';
import Header from '../HeaderComponent/Header';
import SideBar from '../SideBarComponent/SideBar';
import './ApplicationForm.css';
import  foreMan from '../../assests/abstract-customer-support.png';
import  hugo from '../../assests/hugo-done.png';
import Modal from 'react-responsive-modal';
import ApplicationProgessSection from './ApplicationProgessSection';
import SlidingForm from './SlidingForm';
import ProjectComponent from '../ProjectComponent/ProjectComponent';
import MaterialsInformation from '../MaterialsInformationComponent/MaterialsInformation';
import MaterialsInformationTwo from '../Foreman/Foreman';
import UploadCrewDetails from '../UploadCrewDetails/UploadCrewDetails';
import {connect} from "react-redux";
import { updateFormDetails } from '../../redux/actions/formActions';

let initialForm = "";

class ApplicationForm extends Component{
    constructor(props){
        super(props);
      
        this.state = {
            isopen: false,
            isSuccessfull : false,
            formName: "slideform",
            selectedForm: false,
            backButtonFlag: true,
            sidebarText: ""
          };
    }
   

    onOpenModal = () => {
        this.setState({ isopen: true });
      };

      onCloseModal = () => {
        this.setState({ isopen: false });
      };
      onSuccessModal = () => {
        this.setState({ isSuccessfull: true });
        this.setState({ isopen: false });
      };

      onUnSuccessModal = () => {
        this.setState({ isSuccessfull: false });
      };

      checkForm = () => {
        if(this.state.formName === "slideform") {
          this.props.updateFormDetails({timeLineProgress: 25})
          initialForm = <ProjectComponent />
          this.setState({formName:"projectform", backButtonFlag:false})
        }
        if(this.state.formName === "projectform") {
          this.props.updateFormDetails({timeLineProgress: 50})
          initialForm = <MaterialsInformation />
          this.setState({formName:"materialsform"})
        }
        if(this.state.formName === "materialsform") {
          this.props.updateFormDetails({timeLineProgress: 75})
          initialForm = <MaterialsInformationTwo />
          this.setState({formName:"materialformtwo"})
        }
        if(this.state.formName === "materialformtwo") {
          this.props.updateFormDetails({timeLineProgress: 100})
          initialForm = <UploadCrewDetails />
          this.setState({formName:"uploadCrew"})
        }
      }

      backCheckForm = () => {
        if(this.state.formName === "uploadCrew") {
          this.props.updateFormDetails({timeLineProgress: 75})
          initialForm = <MaterialsInformationTwo />
          this.setState({formName:"materialformtwo"})
        }
        if(this.state.formName === "materialformtwo") {
          this.props.updateFormDetails({timeLineProgress: 50})
          initialForm = <MaterialsInformation />
          this.setState({formName:"materialsform"})
        }
        if(this.state.formName === "materialsform") {
          this.props.updateFormDetails({timeLineProgress: 25})
          initialForm = <ProjectComponent />
          this.setState({formName:"projectform"})
        }
        if(this.state.formName === "projectform") {
          this.props.updateFormDetails({timeLineProgress: 0})
          initialForm = <SlidingForm />
          this.setState({formName:"slideform", backButtonFlag:true})
        }
      }
    
    render(){
        const style = {
            content: {
              width: '40vw',
              height : '40vh'

            }
          };
          if(initialForm === "") {
            this.setState({formName:"slideform"})
            this.setState({sidebarText: '"Tracflow can help you to crunch numbers and manage manpower efficiently"' });
            initialForm = <SlidingForm />;
          } 

        return(
          
            <div style={{ overflow: 'hidden'}}>
                <Header history = {this.props.history}></Header>
                <div className="containerDiv">
                    <SideBar text = {this.state.sidebarText}></SideBar>
                    <div className="mainFormDiv">
                        <div>
                        <div className="header-container">
                            <div> Application Form</div>
                        </div>
                        <div className="mainDiv" >
                            <ApplicationProgessSection></ApplicationProgessSection>
                            {initialForm}

                        </div>
                        <div style={{display:"flex", justifyContent:"flex-end", width:"90%"}} > 
                       <div className="next-form" onClick={this.backCheckForm} hidden={this.state.backButtonFlag}>
                            <input type="button" name="Back" value="Back"/>
                       </div>
                       <div className="next-form" onClick={this.checkForm} >
                            <input type="button" name="Next" value="Next"/>
                       </div>
                       </div>
                       </div>
            
                    </div>
                   
                </div>
                <Modal  open={this.state.isopen} onClose={this.onCloseModal} center 
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',}}>

                    <div style={{textAlign: 'center'}}><img src={foreMan} alt="Logo" className="imageModal" /></div>
                    <h2 className="formanDetailsHeader">Enter Foreman's Contact Details</h2>
                    <div className="enterPhoneNumberText">Please enter a mobile number</div>
                    <input type="text" className="inputModal" />
                    <div className="submitButtonModal">
                        <input type="button" className="cancelButton" name="Cancel"  value="Cancel"/>
                        <input type="button" name="Submit" className="submitButton" onClose={this.onCloseModal} onClick={this.onSuccessModal} value="Submit"/>
                        
                    </div>
                    {/* <div className="cancelButtonModal">
                            
                    </div> */}
                    
                </Modal>  
                <Modal open={this.state.isSuccessfull} onClose={this.onUnSuccessModal} center 
                classNames={{
                    overlay: 'customOverlay',
                    modal: 'customModal',}}>
                    <div style={{textAlign: 'center'}}><img src={hugo} alt="Logo" className="imageModal" /></div>
                    <h2 style={{textAlign: 'center'}} className="formanDetailsHeader">Invitation Sent Successfully to Jim</h2>
                    </Modal> 
                    
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

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);
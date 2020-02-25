import React,{Componenet} from 'react';
// import './MaterialsInformation.css';
import ReCAPTCHA from "react-google-recaptcha";
import FileUploadProgress  from 'react-fileupload-progress';
import CSVReader from "react-csv-reader";

  

export default class UploadCrewDetails extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sampleData: "",
        }
    
		}
		
		inputOnChange = (value) => {
			console.log("Captcha value:", value);
		}
		 
    
    render(){
		const handleForce = data => {
			console.log(data);
			this.setState({sampleData : data})
		  };
		let newHeadData = "";
		  if(this.state.sampleData.length > 0) {
		   	newHeadData = this.state.sampleData.map(function(data, i) {
				return<tr><th>{data}</th></tr>
			})
		  }


        return(

       
            <div style ={{width: "100%", backgroundColor: "#FBFBFD", padding: "2%", marginRight: "7%", boxShadow: "0 0 5px 3px rgba(0,0,0,0.13)"}}>
                <div className="material-componenet-">
                    <div className=""> 
                        <h4 className="laborTypeText">Upload Crew Details</h4>  <br/>
                    </div>
                </div> 
				<CSVReader
					cssClass="react-csv-input"
					label="Select CSV with secret Death Star statistics"
					onFileLoaded={handleForce}
					/>
                <div className="material-componenet-div"> 
									<table id="customers">{newHeadData}</table>
                </div>      
								<div>
										<ReCAPTCHA
											sitekey="1234"
											onChange={this.inputOnChange}
										/>
								</div>       
            </div>
        );
    }
}
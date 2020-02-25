import React,{Componenet} from 'react';
import './ProjectComponent.css';
import GeoAddressComplete from "../GeoAddressCompleteComponent/GeoAddressComplete"


export default class ProjectComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    
    }
    
    render(){
        return(
       
            <div style= {{width : "100%",backgroundColor: "#FBFBFD",padding: "2%",marginRight: "7%",boxShadow:" 0 0 5px 3px rgba(0,0,0,0.13)"}}>
                <div className="project-componenet-div inputHeight">
                    <div className="inner-div"> 
                        <label>Project Name</label> <br />
                        <input className="input-css" placeholder="For eg. MIT blg" type="text"></input>
                    </div>
                    <div className="inner-div">
                        <label>Project Number</label> <br />
                        <input className="input-css" placeholder="124" type="text"></input>
                    </div>
                </div> 
                <div className="project-componenet-div projectAddress">
                    <div className="projectDetailsInput"> 
                        <label>Project Address <br/>
                        </label> 
                        <GeoAddressComplete />
                    </div>
                    
                </div>
                 <div className="project-componenet-div inputHeight">
                    <div className="inner-div"> 
                        <label>Zipcode</label> <br />
                        <input className="input-css" placeholder="02120" type="text"></input>
                    </div>
                    <div className="inner-div">
                        <label>Country</label> <br />
                        <input className="input-css" type="text"></input>
                    </div>
                </div>   
              
                
                  
              
            </div>
        );
    }
}
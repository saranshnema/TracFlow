import React,{Componenet} from 'react';
// import './MaterialsInformation.css';


export default class MaterialsInformationTwo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    
    }
    
    render(){
        return(
       
            <div style= {{width : "100%",backgroundColor: "#FBFBFD",padding: "2%",marginRight: "7%",boxShadow:" 0 0 5px 3px rgba(0,0,0,0.13)"}}>
                <div className="material-componenet-div">
                    <div className="laborTypeContainerTwo"> 
                        <label className="laborTypeText">Foreman Name</label> 
                            <ul className="laborType">
                                <li className="laborFieldsActive">Khalid</li>
                                {/* <li className="laborFields">+ Add New Labor Type</li> */}
                            </ul>
                    </div>
                    <div className="RateTypeContainerTwo"> 
                        <label className="laborTypeText">Rate Type</label> <br /> 
                        <div style={{padding:'8px'}}>
                        <label className="laborTypeText"><input type="radio" value="option1"  /> Regular Time</label> <br />
                        <label className="laborTypeText"><input type="radio" value="option1"/> Contract </label> <br />
                        </div>
                    </div>
                </div>  
                <div className="material-componenet-div"> 
                    <div className="measureQuantityTwo">
                        <h3 className="laborTypeText1">Phone Number</h3>
                            <input className="materialInput" type="text" />

                        <h3 className="laborTypeText1">Age</h3> 
                        <input className="materialInput" type="text" />

                        <h3 className="laborTypeText1">Nikcname</h3> 
                        <input className="materialInput" type="text" />

												<h3 className="laborTypeText1">Members in the Crew</h3> 
                        <input className="materialInput" type="text" />
                    </div>
                </div>             
            </div>
        );
    }
}
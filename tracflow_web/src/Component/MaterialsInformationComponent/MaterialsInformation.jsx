import React,{Componenet} from 'react';
import './MaterialsInformation.css';
// import GeoAddressComplete from '../GeoAddressCompleteComponent/GeoAddressComplete';


let laborFields = ["Foreman","Carpenters","Masons","Plumbers","Electicians"];


export default class MaterialsInformation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            addLaborInputFlag: true,
            // laborTypes:  ["Foreman","Carpenters","Masons","Plumbers","Electicians"],
            newLaborField: ""
        }
    
    }

    addLabor = () => {
        this.setState({addLaborInputFlag:false});
    }

    addedLaborField = (e) => {
        this.setState({newLaborField: e.target.value});
    }
    
    onAddNewLabor = () => {
        laborFields.unshift(this.state.newLaborField);
        this.setState({
            addLaborInputFlag: true
        })
    }
    render(){
        let labors = [];
        if(laborFields.length > 0) {
            labors = laborFields.map(function(labor, i){
                return <li key={i} className={(i === 0) ? "laborFieldsActive" : "laborFields"}>{labor}</li>
            })
        }

        return(
            <div style= {{width : "100%",backgroundColor: "#FBFBFD",padding: "2%",marginRight: "7%",boxShadow:" 0 0 5px 3px rgba(0,0,0,0.13)"}}>
                <div className="material-componenet-div">
                    <div className="laborTypeContainer"> 
                        <label className="laborTypeText">Labor Type</label>  
                        <input className="addLaborInput" hidden={this.state.addLaborInputFlag} placeholder="Add New Labor Type" onChange={(e) => this.addedLaborField(e)}  type="text" />
                        <input type="button" className="addLaborButton"  hidden={this.state.addLaborInputFlag} name="Add" value="Add" onClick={this.onAddNewLabor} />
                            <ul className="laborType">
                                {labors}
                                <li className="laborFieldsAdd" onClick={this.addLabor}>+ Add New Labor Type</li>
                            </ul>
                    </div>
                    <div className="RateTypeContainer"> 
                        <label className="laborTypeText">Rate Type</label> <br /> 
                        <div style={{padding:'8px'}}>
                        <label className="laborTypeText"><input type="radio" value="option1"  /> Regular Time</label> <br />
                        <label className="laborTypeText"><input type="radio" value="option1" /> Contract </label> <br />
                        </div>
                    </div>
                </div>  
                <div className="material-componenet-div"> 
                <div>
                     <h3 className="laborTypeText1">Material Type</h3>
                     <select className="materialSelect">
                        <option value="volvo">Option One</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 

                    <h3 className="laborTypeText1">Equipment Type</h3> 
                     <select className="materialSelect">
                        <option value="volvo">Option One</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                    <h3 className="laborTypeText1">Unit of Measure for Materials?</h3> 
                     <select className="materialSelect">
                        <option value="volvo">Option One</option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select> 
                    </div>

                    <div className="measureQuantity">
                        <h3 className="laborTypeText1">Quantity</h3>
                            <input className="materialInput" type="text" />

                        <h3 className="laborTypeText1">Quantity</h3> 
                        <input className="materialInput" type="text" />

                        <h3 className="laborTypeText1">Unit of Measure for Equipments</h3> 
                        <input className="materialInput" type="text" />
                    </div>
                </div>             
            </div>
        );
    }
}
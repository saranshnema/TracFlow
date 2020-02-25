import React,{Componenet} from 'react';
import './ApplicationForm.css';
import {Timeline,Bookmark} from 'react-vertical-timeline';
import {connect} from "react-redux";
import { updateFormDetails } from '../../redux/actions/formActions';

const form_category= ["Contact","Project Details","Materials Information", "Foreman", "Crew Details"];

class ApplicationProgressSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {

            
        }
    }
    _render_inisde() {
        return(
            form_category.map((inputType) => 
                
                <div className="filter_inside" style={{
                    paddingLeft: '40px'
                    
                }}>
                    <label className="SortFilterContainer"> {inputType}
                        <input type="radio" name = "radio"></input>
                        <span className="checkmark"></span>
                    </label>
                </div>
            )
        )
    }
    render(){

        return(
            // <div className="outer-filter-component"> 
            //     {this._render_inisde()}
            // </div>
            <div className="outer-filter-component">
                <Timeline height={300}  progress={this.props.progress} >
                    <Bookmark progress={0} >
                        Contact 
                    </Bookmark>
                    <Bookmark progress={25} >
                        Project
                    </Bookmark>
                    <Bookmark progress={50} >
                        Materials Information
                    </Bookmark>
                    <Bookmark progress={75} >
                        Foreman
                    </Bookmark>
                    <Bookmark progress={100} >
                        Crew Details
                    </Bookmark>
                </Timeline>
            </div>
            
            
        )
    }
}


const mapStateToProps=(state)=>{
	return {
		progress :state.FormDetailsReducer.timeLineProgress,
		// LoadedCouponsTrigger: state.DisplayCouponsReducer.LoadedCouponsTrigger,
		// loaded: state.SearchSortFilterReducer.loaded.loaded,
		// searchedCouponsLength: state.DisplayCouponsReducer.searchedCouponsLength
	};
};



const mapDispatchToProps = (dispatch) => ({
	updateFormDetails :( updatedValue)=> updateFormDetails(dispatch,  updatedValue )
}
);

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationProgressSection);
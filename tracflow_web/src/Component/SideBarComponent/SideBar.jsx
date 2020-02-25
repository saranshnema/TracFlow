import React from 'react'
import './SideBar.css'
export default class SideBar extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div className="sideBar">
                <p className="side_Text">
                    {this.props.text}
                </p>
            </div>
        )
    }
}
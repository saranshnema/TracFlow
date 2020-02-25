import React from 'react'
import {ReactComponent as Logo} from '../../assests/logo.svg'
import './Header.css'
import logo from "../../assests/image.png"

export default class Header extends React.Component{
    
    routeToLogin = () => {
        this.props.history.push("/login");
    }

    render(){
        return(
            <div className="headerContainer">               
                <img className="AppLogo" alt="noImageFound" src={logo} />
                <ul className="topnav">
                    <li><a className="FirstLi" href="">Our Team</a></li>
                    <li><a className="navItems" href="">How it Works</a></li>
                    <li><a className="navItems" href="">Schedule Demo</a></li>
                    <li><a className="navItems" href="">My Account</a></li>
                </ul>
                <div className="buttonContainer" onClick={this.routeToLogin}>
                <button className="LogInButton">Log in</button>
                </div>
            </div>
            )
    }

}


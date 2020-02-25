import React, { Component } from 'react';
import './App.css';
import Router from './router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLayerGroup, faCheck, faTimesCircle, faCheckCircle, faShapes, faThLarge, faFileInvoice, faRobot } from '@fortawesome/free-solid-svg-icons'

library.add(faLayerGroup, faCheck, faCheckCircle, faTimesCircle, faShapes, faFileInvoice, faRobot, faThLarge)

const AppContext = React.createContext();

export default class App extends Component{
  render(){
    return(
      <Router ></Router>
    )
  }
}

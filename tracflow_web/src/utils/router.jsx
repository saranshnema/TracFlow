import React , {Component} from "react";
import {HashRouter,Route, Switch} from "react-router-dom";

import {ROUTE_HOME_PAGE,ROUTE_APPLICATION_FORM,ROUTE_GEOLOCATION_FORM,ROUTE_LOGIN_FORM, ROUTE_TICKETS,ROUTE_CHANGE_ORDERS} from './routeConstants';
import Home from "../Component/HomeComponent/HomeComponent";
import ApplicationForm from "../Component/ApplicationFormComponent/ApplicationForm";
import GeoAddressComplete from "../Component/GeoAddressCompleteComponent/GeoAddressComplete";
import LoginComponent from '../Component/LoginComponent/LoginComponent';
import Tickets from "../Component/Tickets/Tickets";
import ChangeOrders from "../Component/ChangeOrders/ChangeOrders";

class Router extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <HashRouter >
            <Switch>
                <Route exact path = {ROUTE_HOME_PAGE} history={this.props.history} component={Home}/>
                <Route exact path = {ROUTE_APPLICATION_FORM} component={ApplicationForm} />
                <Route exact path = {ROUTE_GEOLOCATION_FORM} component={GeoAddressComplete} />
                <Route exact path = {ROUTE_LOGIN_FORM} component={LoginComponent} />
                <Route exact path = {ROUTE_TICKETS} component={Tickets} />
                <Route exact path = {ROUTE_CHANGE_ORDERS} component={ChangeOrders} />

            </Switch>
        </HashRouter>
        )
    }
}

export default Router;

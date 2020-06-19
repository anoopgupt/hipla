import React from 'react';
import nus_logo_rounded from "../../img/nus_logo_rounded.png";
import SideBarComponent from '../sidebar/sidebar';
import Meetings from '../meetings';
import CreateNewMeeting from '../createNewRequest';
import Dashboard from '../dashboard';
import AllReports from '../allReports';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    handleWidth(){
        console.log("===========>>>>");
        
    }

    render(){
        return (
            <div className="">
                <div className="row">
                    <div className="col-md-12 header d-flex" >
                        <div className="col-md-6 d-flex " >
                            <i className="fa fa-bars listIcon" style={{cursor: "pointer"}} onClick={()=> this.handleWidth()} ></i>
                            <img src={nus_logo_rounded} className="nus_rounded_logo" />
                        </div>
                        <div className="col-md-6">
                            <img  src="http://hipla.in:2900/image/profile_image/male.svg" className="pull-right  profile" />
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-12 d-flex">
                        <div className="col-md-3">
                            <SideBarComponent />        
                        </div>
                        <div className="col-md-9">
                            <Router >
                                <Switch>
                                    <Route exact path="/newrequest" > <CreateNewMeeting /> </Route>
                                    <Route exact path="/dashboard"> <Dashboard /> </Route>
                                    <Route exact path="/meetings"> <Meetings /> </Route>
                                    <Route exact path="/allreports"> <AllReports /> </Route>
                                </Switch>
                            </Router>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import bolt from '../../img/offline_bolt.svg'
import num_logo from '../../img/hipla_logo.svg'
// import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

export default class SideBarComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div class=" border-right" id="sidebar-wrapper">
                    <Router>
                        <ListGroup variant="flush" >
                            <ListGroup.Item>
                                <div className="row" style={{marginBottom: "-30px"}}>
                                    <div className="">
                                        <img  src="http://hipla.in:2900/image/profile_image/male.svg" className="visitor"  height="55px" alt="img" />
                                    </div>
                                    <div className="visitorName"> 
                                        <h5>anoop gupta</h5>
                                        <p className="visitortext text-muted" >VISITOR</p>
                                    </div>  
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-none" >
                                <Link to="/dashboard" > 
                                    <i class="fa fa-qrcode sideIcon"></i> <span className="m-r-lg">Dashboard</span>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-none">
                                <Link to="/newrequest" >
                                    <i class="fa fa-user-plus sideIcon"></i><span className="m-r-lg">Create Request</span>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-none">
                                <Link to="/allreports">
                                    <i class="fa fa-file-text sideIcon"></i> <span className="m-r-lg">All Reports</span>
                                </Link>
                            </ListGroup.Item>
                            <ListGroup.Item className="d-flex border-none">
                                <img src={bolt} className="m-r-md m-b-md"></img>
                                    <h6>Powered by &nbsp; </h6> 
                                <img className="hiplalogo" src={num_logo} alt="hipla" width="100px" height="60px" /> 
                            </ListGroup.Item>
                        </ListGroup>
                        </Router>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


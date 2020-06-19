import React from 'react';
import Modal from 'react-bootstrap/Modal'

export default class Meetings extends React.Component{
    constructor(props){
        super(props);
        this.state={
            meetings:[
                {
                    "requested_by_user_id": 1234,
                    "requested_by": "anoop",
                    "meeting_purpose": "daily hipla meeting",
                    "meeting_date": "2020-06-17", 
                    "meeting_time": "02:30 pm",
                    "status": 'waiting',
                    "guests":[
                        "tushar@repup.co",
                        "vivek@repup.co",
                        "anoop@repup.co",
                        "rakesh@repup.co",
                        "sachin@repup.co",
                        "neeraj@repup.co"
                    ]
                },
                {
                    "requested_by_user_id": 7534,
                    "requested_by": "Tushar",
                    "meeting_purpose": "daily task sync meeting",
                    "meeting_date": "2020-06-18", 
                    "meeting_time": "10:30 am",
                    "status": 'declined',
                    "guests":[
                        "tushar@repup.co",
                        "vivek@repup.co",
                        "anoop@repup.co",
                        "rakesh@repup.co",
                        "sachin@repup.co",
                        "neeraj@repup.co"
                    ]
                },
                {   
                    "requested_by_user_id": 5234,
                    "requested_by": "vivek",
                    "meeting_purpose": "product meeting",
                    "meeting_date": "2020-06-16", 
                    "meeting_time": "12:30 pm",
                    "status": 'confirmed',
                    "guests":[
                        "tushar@repup.co",
                        "vivek@repup.co",
                        "anoop@repup.co",
                        "rakesh@repup.co",
                        "sachin@repup.co",
                        "neeraj@repup.co"
                    ]
                },
                {   
                    "requested_by_user_id": 2534,
                    "requested_by": "Rakesh",
                    "meeting_purpose": "product meeting",
                    "meeting_date": "2020-06-16", 
                    "meeting_time": "12:30 pm",
                    "status": 'confirmed',
                    "guests":[
                        "tushar@repup.co",
                        "vivek@repup.co",
                        "anoop@repup.co",
                        "rakesh@repup.co",
                        "sachin@repup.co",
                        "neeraj@repup.co"
                    ]
                },
                {
                    "requested_by_user_id": 45878,
                    "requested_by": "anoop",
                    "meeting_purpose": "hipla api discussion meeting",
                    "meeting_date": "2020-06-17", 
                    "meeting_time": "02:30 pm",
                    "status": 'waiting',
                    "guests":[
                        "tushar@repup.co",
                        "vivek@repup.co",
                        "anoop@repup.co",
                        "rakesh@repup.co",
                        "sachin@repup.co",
                        "neeraj@repup.co"
                    ]
                }
            ],
            "props_user_id": 1234,
            "obj": {}
        }
    }

    handleMeetingDetails(obj){
        this.setState({"showModal": true, "obj": obj})
    }

    handleHideModal(){
        this.setState({"showModal": false})
    }

    handleStatusColor(status){
        console.log("=------",status);
        
        if(status == "confirmed"){
            return "text-success"
        }      
        if(status == "waiting"){
            return "text-warning"
        }  
        if(status == "declined"){
            return "text-danger"
        }
    }

    render(){
        return(
            <div className="container m-t-sm">
                <h3>Meetings </h3>
                <p className="text-muted">showing 10 meetings in one page </p>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Sender</th>
                            <th>Agenda</th>
                            <th>Date & Time </th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.meetings && this.state.meetings.length > 0 && this.state.meetings.map((obj, i)=>{
                            if (obj["requested_by_user_id"] == this.state.props_user_id){
                                return(
                                    <tr key={obj["requested_by_user_id"]} className="" style={{"backgroundColor": "#efefef"}}  data-toggle="modal" data-target="#exampleModal" style={{cursor: "pointer"}} onClick={()=> this.handleMeetingDetails(obj)}>
                                        <td>{obj["requested_by"]}</td>
                                        <td>{obj["meeting_purpose"]}</td>
                                        <td>{obj["meeting_date"]}, {obj["meeting_time"]}</td>
                                        <td className={ this.handleStatusColor(obj["status"])}>{obj["status"]}</td>
                                    </tr>
                                )
                            }
                            else{
                                return (
                                    <tr key={obj["requested_by_user_id"]} style={{cursor: "pointer"}}  data-toggle="modal" data-target="#exampleModal" onClick={()=> this.handleMeetingDetails(obj)}> 
                                        <td>{obj["requested_by"]}</td>
                                        <td>{obj["meeting_purpose"]}</td>
                                        <td>{obj["meeting_date"]}, {obj["meeting_time"]}</td>
                                        <td className={ this.handleStatusColor(obj["status"])}>{obj["status"]}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
               {this.state.showModal &&  <MeetingDetails 
                    show={this.state.showModal}
                    handleClose={()=> this.handleHideModal()}
                    obj={this.state.obj}
               />}
            </div>
        )
    }
}


class MeetingDetails extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        const meetingObj = this.props.obj
        return(
            <div className="row">
                <Modal show={this.props.show} onHide={()=> this.props.handleClose()} size="lg">
                    <Modal.Header closeButton>
                    <Modal.Title>Meeting Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <b>Agenda : </b> <span>{meetingObj["meeting_purpose"]}</span><br /><br />
                            <b>Sender : </b> <span>{meetingObj["requested_by"]}</span>  <span className="m-l-lg"> <b>Date & Time : </b> {meetingObj["meeting_date"]}, {meetingObj["meeting_time"]}</span> <br /><br />
                            <b>Participants : </b>{meetingObj["guests"].length} <br /><br />
                            <b>Participants Email : </b>
                        </div><br />
                        <div className="m-l-lg">
                            {meetingObj["guests"].map((email, i)=>{
                                return(
                                    <div>
                                        <i class="fa fa-envelope"> {email}</i><p></p>
                                    </div>
                                )
                            })}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    <button className="btn btn-md btn-primary" variant="secondary" onClick={()=> this.props.handleClose()}>
                        Close
                    </button>
                   
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
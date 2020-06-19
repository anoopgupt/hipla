import React from 'react';

export default class AllReports extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    handleNewMeeting(){
        console.log("add new");   
    }

    render(){
        return(
            <div className="">
                <div className="row">
                    <div className="col-md-12 d-flex m-t-lg">
                        <div className="col-md-6">
                            <div className="row">
                                <h3 className="text-color">Meetings</h3>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <button className="btn btn-md btn-primary pull-right" onClick={()=> this.handleNewMeeting()}>Create New Meeting</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex m-t-sm m-b-sm">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <button className="btn btn-outline-primary btn-sm pull-right m-l-sm " type="button" onClick={()=> this.handleClick()} >Print</button>
                            <button className="btn btn-outline-primary btn-sm pull-right m-l-sm" type="button" onClick={()=> this.handleClick()} >PDF</button>
                            <button className="btn btn-outline-primary btn-sm pull-right m-l-sm" type="button" onClick={()=> this.handleClick()} >Excel</button>
                            <button className="btn btn-outline-primary btn-sm pull-right m-l-sm" type="button" onClick={()=> this.handleClick()} > CSV</button>
                            <button className="btn btn-outline-primary btn-sm pull-right m-l-sm"  type="button"  onClick={()=> this.handleClick()} >Copy</button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <table className="table table-strriped">
                            <thead>
                                <tr>
                                    <th>Sender</th>
                                    <th>Participant</th>
                                    <th>Agenda</th>
                                    <th>Date & Time</th>
                                    <th>CheckIn Time</th>
                                    <th>CheckOut Time</th>
                                    <th>Assigned BLE</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
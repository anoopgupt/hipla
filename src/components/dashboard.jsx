import React from 'react';

export default class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    handleAddNew(){
        console.log("add new");
        
    }

    render(){
        return(
            <div className="">
                <div className="row">
                    <div className="col-md-12 d-flex m-t-lg">
                        <div className="col-md-6">
                            <div className="row d-flex">
                                <h3 className="text-color  ">Dashboard</h3>
                                <span className="upcoming-events">MY UPCOMING EVENTS</span>
                            </div>
                        </div>
                        <div className="col-md-6 ">
                            <button className="btn btn-md btn-primary pull-right" onClick={()=> this.handleAddNew()}>Add New</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="card">
                    <div className="card-body">
                        <table className="table table-strriped">
                            <thead>
                                <tr>
                                    <th>Sender</th>
                                    <th>Participant</th>
                                    <th>Agenda</th>
                                    <th>Date & Time</th>
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
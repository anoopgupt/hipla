import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'

export default class CreateNewMeeting extends React.Component{
    constructor(props){
        super(props);
        this.state={
            "email":"",
            "phone_value":"",
            "purpose":"",
            "date":"",
            "start":"",
            "end":"",
            "username":"",
            "gender":"",
            "showFullnameRow": false,
            "existedParticipants": [
                {"email": "anoop@repup.co", "phone": 919956593076 }
            ],
            "msg":"",
            "arr":[]
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdd(e){
        e.preventDefault();
        this.isDisable()
        var existedParticipants = this.state.existedParticipants;
        var purpose = this.state.purpose
        var phone = this.state.phone_value;
        var email = this.state.email;
        var date = this.state.date
        var start = this.state.start
        var end = this.state.end
        var username = this.state.username
        var gender = this.state.gender

        var userObj = {
            "purpose": purpose,
            "email": email,
            "phone": phone,
            "date": date,
            "start":start,
            "end": end,
            "username": username,
            "gender": gender
        }
        console.log("----", userObj);
        
        var arr = this.state.arr
        for (var obj of existedParticipants){
            if(obj["email"] == email || obj["phone"] == phone){
                console.log("exists !! ");
                this.setState({"showFullnameRow": false, "msg": ""})
                arr.push(userObj)
            }
            else{
                this.setState({"showFullnameRow": true , 'msg': "this user does not exist add user below !"})
                console.log("not exists !! ");
            }
        }
    }

    handleSendReq(){
        console.log("clicked on send request !");
        
    }


    isDisable(){
        var arr = this.state.arr;
        
        if (arr.length >0){
            return false
        }
        else{
            return true
        }
    }

    render(){
        // console.log("==", this.state.arr);
        
        return(
            <div className="container">
                <h3 className="m-t-md text-color">Create New Meeting </h3>
                <hr />
                <div className="card bg-white shadow-sm">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <h6>Meeting Details</h6>
                            </div>
                            <div className="col-md-6">
                                <button className="btn btn-md btn-primary pull-right" disabled={this.isDisable()} onClick={()=> this.handleSendReq()}>Send Request</button>
                            </div>
                        </div>
                        <form>
                            <div class="row m-t-md m-b-md">
                                <div class="input-group col-md-12">
                                    <div class="input-group-prepend bg-white">
                                        <span class="input-group-text border-right-0 rounded-right bg-white" >
                                            <i class="fa fa-align-left text-muted"></i>
                                        </span>
                                    </div>
                                    <input 
                                        type="text" 
                                        class="form-control border-left-0" 
                                        placeholder="Purpose" 
                                        aria-describedby="basic-addon1"
                                        onChange={(e)=> this.handleChange(e)}
                                        name="purpose" 
                                    />
                                </div>
                            </div>
                            <div className="row m-t-lg m-b-md">
                                <div className="col-md-12 d-flex">
                                    <div className="">
                                        <label>Date</label>
                                        <input 
                                            type="date"
                                            className="form-control"
                                            placeholder="Date"
                                            onChange={(e)=> this.handleChange(e)}
                                            name="date"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label>Start Time</label>
                                        <input 
                                            type="time"
                                            className="form-control"
                                            placeholder="Start Time"
                                            onChange={(e)=> this.handleChange(e)}
                                            name="start"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label>End Time</label>
                                        <input 
                                            type="time"
                                            className="form-control"
                                            placeholder="End Time"
                                            onChange={(e)=> this.handleChange(e)}
                                            name="end"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row m-t-lg m-b-md">
                                <div className="col-md-12">
                                    <h6 className="">VISIT WITH </h6>
                                    {this.state.msg !== "" && 
                                        <label className="text-danger">{this.state.msg}</label>
                                    }
                                    <div className="row">
                                        <div className="col-md-4">
                                            <PhoneInput 
                                                value={this.state.phone_value}
                                                onChange={(value)=> this.setState({phone_value: value})}
                                                autoFocus={true}
                                                fullWidth={true}
                                                enableSearch={true}
                                                disableSearchIcon={true}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <div className="input-group">
                                                <div class="input-group-prepend bg-white">
                                                    <span class="input-group-text border-right-0 rounded-right bg-white" >
                                                        <i class="fa fa-at text-muted"></i>
                                                    </span>
                                                </div>
                                                <input
                                                    type="email"
                                                    className="form-control border-left-0"
                                                    onChange={(e)=> this.handleChange(e)}
                                                    name="email"
                                                    placeholder="Email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <button className="btn btn-md btn-primary" onClick={(e)=> this.handleAdd(e)}> <i className="fa fa-plus"></i> Add </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            { this.state.showFullnameRow === true && <div className="row m-t-lg m-b-md">
                                <div className="col-md-6">
                                    <input 
                                        type="text"
                                        name="username"
                                        placeholder="Full Name"
                                        onChange={(e)=> this.handleChange(e)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-6 d-flex" >
                                    <h6 className="m-r-md">Gender</h6>
                                    <div className="form-group">
                                        <div className="col-md-2 text-muted">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name="gender" 
                                                value="male"
                                                onChange={(e)=> this.handleChange(e)} 
                                            />
                                            <label>Male</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                            <div className="col-md-2 text-muted">
                                                <input 
                                                    className="form-check-input" 
                                                    type="radio" 
                                                    name="gender" 
                                                    value="female"
                                                    onChange={(e)=> this.handleChange(e)} 
                                                />
                                                <label>Female</label>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-2 text-muted">
                                                <input 
                                                    className="form-check-input" 
                                                    type="radio" 
                                                    name="gender" 
                                                    value="other"
                                                    onChange={(e)=> this.handleChange(e)} 
                                                />
                                                <label>Other</label>
                                            </div>
                                        </div>
                                    </div>
                            </div>}
                            
                            {this.state.arr.length > 0 && 
                            <div className="card card-body">
                                {this.state.arr.length > 0 && <span className="text-success">ADDED</span>}
                                    <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                            <th>Phone Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {this.state.arr.map((obj, i)=>{
                                        return(
                                            <tr>
                                                <td>{obj["email"] == "" ? "NA" : obj["email"] }</td>
                                                <td>{obj["phone"] == "" ? "NA" : obj["phone"]}</td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import transparent_logo from '../img/nus_logo_transparent.png';


export default class SignUpComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            phone_value: "",
            showPassword: false
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    handleContinue(e){
        e.preventDefault();
        console.log("===", this.state);
    }

    handleChangeCountryCode(e){
        console.log("----- ",e.target.value);
    }

    showPWD(){
        var eleType = document.getElementsByName("pwd")[0]["type"] 
        if (eleType == "password"){
            this.setState({"showPassword": true})
            return document.getElementsByName("pwd")[0]["type"] = "text"
        }else{
            this.setState({"showPassword": false})
            return document.getElementsByName("pwd")[0]["type"] = "password"
        }
    }

    render(){
        return(
            <div className="App">
                <div className="container">
                       <div className="card">
                           <div className="row">
                               <div className="col-md-12" style={{display: "flex" , marginTop: "60px"}}>
                                   <div className="col-md-7"> </div>
                                   <div className="col-md-5">
                                        <form>
                                            <div className="form-group">
                                                <img src={transparent_logo} width={"40%"} />
                                                <h1 className="" style={{color:"#0F3D7C"}} >Visitor signup!</h1>
                                                <hr />
                                                <h6 >Fill up the form to sign up as a visitor</h6>
                                                <div className="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text border-right-0 border-rounded bg-white"> 
                                                            <i className="fa fa-user"></i> 
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="email" 
                                                        className="form-control form-control-md border-left-0" 
                                                        placeholder="Your full name" 
                                                        onChange={(e)=> this.handleChange(e)} 
                                                        name="username"
                                                    /> 
                                                </div>
                                            </div>
                                            
                                            <div className="form-group">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <PhoneInput 
                                                            value={this.state.phone_value}
                                                            onChange={(value)=> this.setState({phone_value: value})}
                                                            autoFocus={true}
                                                            fullWidth={true}
                                                            enableSearch={true}
                                                            disableSearchIcon={true}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text border-right-0 border-rounded bg-white"> 
                                                            <i className="fa fa-envelope-o"></i> 
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="email" 
                                                        className="form-control form-control-md border-left-0" 
                                                        placeholder="Your email address" 
                                                        onChange={(e)=> this.handleChange(e)} 
                                                        name="email"
                                                    /> 
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text border-right-0 border-rounded bg-white"> 
                                                            <i className="fa fa-lock"></i> 
                                                        </span>
                                                    </div>
                                                    <input
                                                        type="password" 
                                                        className="form-control form-control-md border-left-0 border-right-0" 
                                                        placeholder="Choose a password " 
                                                        onChange={(e)=> this.handleChange(e)} 
                                                        name="pwd"
                                                    /> 
                                                    <div className="input-group-prepend"  style={{cursor: "pointer"}} onClick={()=> this.showPWD()}>
                                                        <span className="input-group-text border-left-0 bg-white">
                                                           {!this.state.showPassword ? <i class="fa fa-eye-slash" aria-hidden="true"></i> :  <i class="fa fa-eye" aria-hidden="true"></i>}
                                                        </span>
                                                    </div>
                                                </div>
                                              
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12" style={{display: "flex"}}>
                                                    <div className="col-md-3">
                                                        <h6>Gender</h6>
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="col-md-3 text-muted">
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
                                                        <div className="col-md-3 text-muted">
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
                                                        <div className="col-md-3 text-muted">
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
                                            </div>
                                            <div className="form-group">
                                                <button className="btn btn-md btn-block btn-primary" style={{backgroundColor: "#003D7C"}} onClick={(e)=> this.handleContinue(e)} >Continue</button>
                                            </div>
                                            <div className="form-group">
                                                <span>
                                                    To sign in using password <a className="text-bold" href="/" > click here </a>
                                                </span>
                                            </div>
                                        </form>
                                   </div>
                               </div>
                           </div>
                           <div className="row hipla-logo" >
                                <span className="text-center">Powered By <img src="https://hipla.io/image/logo.png" width="15%" height="40px" className="text-center" /></span>
                           </div>
                       </div>
                </div>
            </div>
        )
    }

}


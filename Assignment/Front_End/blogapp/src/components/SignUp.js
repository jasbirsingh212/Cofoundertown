import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Register  extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="signup-section ">
            <h1 className="signup">Sign up/Register</h1>
            
                <div className="container"> 
                <label htmlFor="email"><b>Email</b></label>
                <input name="email" type="email" value={this.state.email}  onChange={this.onChange} placeholder="  Enter Email" required></input>
                <label htmlFor="password"><b>Password</b></label>
                <input name="password" type="password" value={this.state.password} onChange={this.onChange} placeholder="  Enter Password" required></input>
                <label htmlFor="name"><b>Name</b></label>
                <input name="name" type="name" value={this.state.name} onChange={this.onChange} placeholder="Enter Name" required></input>
                <button className="signup-btn btn" onClick={this.onSubmit}>Sign up</button>

        <div className="error-occured">
            {}
        </div>
                <div className="account" >
                        <p> If you have an account please
                            <NavLink to="/SignIn"> Login </NavLink>
                        </p>
                </div>
    
                </div>
            </div>
          );
    }
}

export default Register;
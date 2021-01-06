import React from "react";
import {NavLink} from 'react-router-dom'
class signin extends React.Component {
  constructor(props, context) {
    super(props, context);
            this.state = {
            //   auth:{'email':'','password':''}
          };       
    }
 
    onChange=()=>{
       
    }
    onSubmit=(event)=>{
        console.log(event);
       
    }


   
    
render(){
    return (

        <div className="signin-section ">
        <h1 className="signin">Sign In/Login</h1>
            <div className="container"> 
            <label htmlFor="email"><b>Email</b></label>
            <input name="email" type="email" /*value={this.state.auth.email}*/ onChange={this.onChange} placeholder="Enter Email" required></input>
            <label htmlFor="password"><b>Password</b></label>
            <input name="password" type="password" /*value={this.state.auth.password}*/ onChange={this.onChange} placeholder="Enter Password" required></input>
            <button className="signin-btn btn" onClick={this.onSubmit}>Sign in</button>
        <div className='error-occured'>
            {}
        </div>
            <div className="no-account" >
                    <p> If you don't have an account please
                        <NavLink to="/SignUp"> SignUp</NavLink>
                    </p>
            </div>

            </div>
        </div>
    )
}
  }
export default signin;
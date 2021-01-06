import React, { Component } from 'react';
import {Redirect,NavLink} from 'react-router-dom';
import uuid from 'react-uuid';
import data from './../resources/data/data';

let logged =true;
function Create()
{
        let name="Jasbir Singh"; 
        if (!logged)
        {
          return <Redirect to='/home'  />
        }
        return( 
        
                <div id='Creat' >
                    <MyBlogForm name={name}></MyBlogForm>
                </div>
        )
}

class MyBlogForm extends Component {
        
        constructor(props){
        super(props);
        this.state={
                id:uuid(),
                author:this.props.name,
                date:new Date().toLocaleString(),
                tittle:'',
                subtittle:'',
                link:'',
                img:'',
                keywords:''
        }

        }

        onChange=(event)=>{
                const val =event.target.value;
                const key= event.target.name;
                this.setState({...this.state,[key]:val});
                
        }
        onSubmit=(event) => {
                console.log(this.state);
                data.push(this.state);
                console.log(data.length);
        }
        render() { 

                const{tittle,subtittle,link,img,keywords}=this.state;
                return ( 
                        <div className="signup-section">
                        <h1 className="signup">New Blog</h1>
                            <div className="container"> 
                            <label htmlFor="tittle"><b>Tittle</b></label>
                            <input name="tittle" type="text" value={tittle}  onChange={this.onChange} placeholder=" Enter  for article" required></input>
                            <label htmlFor="sub-tittle"><b>Sub-tittle</b></label>
                            <input name="subtittle" type="text" value={subtittle} onChange={this.onChange} placeholder=" Enter Sub-tittle article" required></input>
                            <label htmlFor="link"><b>Link related to article</b></label>
                            <input name="link" type="url" value={link} onChange={this.onChange} placeholder=" Enter links related to article" required></input>
                            <label htmlFor="image"><b>Images</b></label>
                            <input name="img" type="url" value={img} onChange={this.onChange} placeholder=" Enter images related to article" required></input>
                            <label htmlFor="keyword"><b>Keywords</b></label>
                            <input name="keywords" type="text" value={keywords} onChange={this.onChange} placeholder=" Enter Keywords related to article for better experence" required></input>
                            <button className="signup-btn btn" onClick={this.onSubmit}>Submit</button>
                    <div className="error-occured">
                        {}
                    </div>
                
                            </div>
                        </div>
                 );
        }
}
 

export default Create;
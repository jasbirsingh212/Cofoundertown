import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Artical from './artical';
import data from './../resources/data/data.js';
let logged = true; 
function profile()
{
        if (!logged)
        {
          return <Redirect to='/home'  />
        }
        return( 
        
                <div id='profile' >
                <h1>Profile Page</h1>
                <MyBlog></MyBlog>
                </div>
        )
}


function MyBlog()
{
     return<div className='myarticle'>
            {
                        data.map((d,index) => { 

                             return(
                                 <Artical key={d.id} artical={d}></Artical>
                             );
                            
                        })
            }
            </div>
}
export default profile;
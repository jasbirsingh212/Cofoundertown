import React, { Component } from 'react';
import Artical from './artical';
import data from './../resources/data/data.js';

function home()
{
    return (
        <div id='home'>
            <h1>Home Page</h1>
            <div className='homeart'>
            {
                        data.map((d,index) => { 

                             return(
                                 <Artical key={d.id} artical={d}></Artical>
                             );
                            
                        })
            }
            </div>
        </div>
    )
}

export default home;
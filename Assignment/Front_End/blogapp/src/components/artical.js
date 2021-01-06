import React, { Component } from 'react';
class artical  extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }

         
    }

    render() { 

        const {tittle,date,author,subtittle,img,link,keywords} = this.props.artical;
        return ( 

                <div className='artical'>
                    
                    <div className='mainhead'>
                    <a href={link}><h1>{tittle}</h1></a>
                    </div>

                    <div className='subhead_Img'>
                    <div className='subheader'>
                    <p>Author: {author}</p>
                    <p>Date:{date.toLocaleString()}</p>
                    <p>{subtittle}</p>
                    </div>
                    <div className='image'>
                    <img src={img} alt="image related to artical"></img>
                    </div>
                    </div>
                    
                    <div className='keywords'>
                    <h2>Keywords</h2>
                    <h4>{keywords}</h4>
                    </div>
                </div>

         );
    }
}
 
export default artical;
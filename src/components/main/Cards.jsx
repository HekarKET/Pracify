import React from 'react'
import Ellipse from './Ellipse'

function Cards({bg,logo ,title,img,description,ellipseitem}) {
    return (
        <div className="card">
            <div className={`main-intro ${bg}`}>
                    {logo?<div className="top-leaf"></div>:null }
        
                    <span className="main-welcome">{title}</span>

                    <p>{description}</p>

                    {img?
                    <div className="organic-cards">
                    {img.map((item,i)=>(<img key ={i} src={item} alt="" />))}
                    </div>
                    : null
                    }
                    
                    <Ellipse id={title} ellipseitem={ellipseitem}/>
                
            </div>
        </div>
    )
}

export default Cards

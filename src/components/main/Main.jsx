import React from 'react'
import OrganicCard from '../../assets/Group 205.png';
import OrganicCardTrans from '../../assets/Group 207.png';
import PureNature from '../../assets/Group 39.png';
import EcoDecision from '../../assets/Group 64.png';
import Greenary from '../../assets/Group 55.png';
import Comma from '../../assets/Group 86.png';
import BlogOne from '../../assets/blog-1.png';
import BlogTwo from '../../assets/blog-2.png';
import BlogThree from '../../assets/blog-3.png';
import Leaf from '../../assets/Group 134.png';
import Blog from './Blog'
import Card from './Cards'
import Profile from '../../assets/woman-in-brown-jacket.png';
import Ellipse from './Ellipse'
function Main() {
    const blog = [{title:'Blog Post one', description:'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',img:BlogOne},
    {title:'Blog Post one', description:'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',img:BlogTwo},
    {title:'Blog Post one', description:'Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod.',img:BlogThree}]
    return (
       <React.Fragment>
        <main>    
            <div className="cards-section">       
                <Card
                id={1}
                title='Welcome to Nature'
                description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                img = {[OrganicCardTrans,OrganicCard,OrganicCardTrans,OrganicCardTrans]}
                logo = {true}
                />
                <Card
                id={2}
                title='Proudly presented by'
                description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                img = {[PureNature,EcoDecision,Greenary,EcoDecision,PureNature]}
                ellipseitem = {['dark','light','dark','dark']}
                bg = 'faint'
                />
            </div> 
          
        
          
            
           
                <div className="review">
                    
                    <div className="comma">
                    <img src={Comma} alt="Comma" />
                    
                    </div>
                    <div className="profile">
                        <img src={Profile} alt="Profile" />
                    </div>
                    <div className="name">
                    <p>Jane Doe</p>
                    </div>
                    <div className="stars">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    </div>
                    <div className="comment">
                        <p>Thank you for all the amazing produce and products you deliver each week…  </p>
                        <p>you make my life so easy an bring goodness into our family eating. </p> 
                        <p>I’ve been roasting a lot of brussel sprouts and</p> 
                    
                    </div>
            
                    <Ellipse 
                    key={2}
                    ellipseitem={['light','trans','trans','trans']}/>
                    <div className="description">

                    </div>
                </div>
                
                
           
            <div className="subscribe">
                <div className="subscribe-title">
                <div className="main-intro">
                    <span className="main-welcome">Subscribe to Our Newsletter</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.</p>
                </div>
                </div>
                <form >
                    <input type="email" placeholder="Enter your email address"/>
                    <button>Subscribe</button>
                </form>

            </div>
            
            <div className="blog-profile">
                <div className="main-intro">
                <div className="top-leaf"></div>
                        <span className="main-welcome">Read Our Blog</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="blog-cards">
                {blog.map((item,i)=>(
                            <Blog
                            key = {i}
                            title= {item.title}
                            description = {item.description}
                            img = {item.img}
                            
                            />)
                )}
                </div>


            </div>
            </main>
 
       </React.Fragment>
    )
}

export default Main

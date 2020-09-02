import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

import Particles from 'react-particles-js';

function works() {
    return (
        <div>
            <Header/>
                <section className="work" >
                    <div className="wrapper" >                       

                        
                        <h3>My Works</h3>
                        <div className="web-work" >
                            
                            <div className="work-card">
                                <img src="../img/work/safe-charuta.PNG" alt="Safe Charuta" />
                                <div className="work-container">
                                    <h4><b>Safe Charuta</b></h4> 
                                    <p>Safe Charuta is a physical security equipment product and services provider based on Bangladesh</p>

                                    <button className="work-card-btn">
                                        <a  href="https://safecharuta.com" target="#" >  Visit Site   </a>    
                                    </button>                                                
                                </div>                               
                            </div>

                            <div className="work-card">
                                <img src="../img/work/syed-movers.PNG" alt="Safe Charuta" />
                                <div className="work-container">
                                    <h4><b>Syed Movers</b></h4> 
                                    <p>Transport and moving company based on Qatar</p>

                                    <button className="work-card-btn">
                                        <a  href="https://syedmovers.com/" target="#" >  Visit Site   </a>    
                                    </button> 
                                                                   
                                </div>                              
                            </div>

                            
                            <div className="work-card">
                                <img src="../img/work/happy-feets.PNG" alt="Safe Charuta" />
                                <div className="work-container">
                                    <h4><b>Happy Feets for kids</b></h4> 
                                    <p> NGO based on Canada </p>

                                    <button className="work-card-btn work-button">
                                        <a  href="https://happyfeetforkids.org/" target="#" >  Visit Site   </a>                                        
                                     </button>   
                                </div>  
                            </div>



                        </div>

                    </div>                  
                </section>
            <Footer/>
        </div>
    )
}

export default works

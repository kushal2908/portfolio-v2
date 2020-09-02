import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'

function contact() {
    return (
        <div>
            <Header/>
                <section className="contact">
                    <div className="wrapper" >

                      <h3> Need help? </h3> 

                      <div className="contact-description">

                          <p>
                              If you need help then shoot me a mail at <b style={{color: "tomato"}}> ssafabin@gmail.com </b> .
                              I will reply you within 12 hours.
                          </p>

                      </div>

                                   


                    </div>                
                </section>            
            <Footer/>
        </div>
    )
}

export default contact

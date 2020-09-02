import Header from './Components/Header'
import Footer from './Components/Footer'
import BgEffect from './Components/BgEffect'

import works from './works';


import TypeIt from "typeit-react";




export default function Home() {
  return (

    <div >

      <Header />
      
      <section className="hero" id="home">
      <BgEffect />
        <div className="wrapper" > 
          <div className="hero-content" >

            <h1> Hello I’m Safa.</h1>

              <TypeIt className="type-it"
              options={{
                strings: ["Front end Web Developer."],
                speed: 80,
                waitUntilVisible: true
              }}
            />

          </div>

        </div>     {/* HERO WRAPPER */}  
      </section> 
   

      <section className="about" id="about">
        <div className="wrapper">       

         <h2>About</h2>

            <div className="about-content">

              <p className="about-description" >
                My name is Sarder Safa Bin Salam. I'm a front end web developer from Dhaka, Bangladesh. 
                I work remotely on projects for my client.
              </p> 

              <div className="about-points" >

                <p className="about-points-content">
                  My layouts will work on any big or small device.
                </p> 

                <p className="about-points-content">
                  Strong preference for easy to use user interface
                </p>

                <p className="about-points-content">
                  Your website might be static. I love to make pages come alive
                </p>

              </div>    

              

              <div className="about-services">               
                <h3>Services</h3>
                  <p className="about-services-name">
                    Web Development
                  </p>
                  
                  <p className="about-services-description">
                    Providing complete solution on website using HTML, CSS, and Javascript I build fast, interactive websites. 
                    This also may include a CMS, API's or other integrations. <br/>
                    Besides I also use ReactJS, NodeJS, ExpressJS, MySQL, Firebase as per as client requirement              
                  </p> 

                  <p className="about-services-name">
                    Graphic Design
                  </p>
                  
                  <p className="about-services-description">
                    Yes, besides web I also really enjoy doing graphic desiging. I can provide you graphical solution maintaining latest trends.
                  </p> 

                <a className="work-btn" href="/works">My Works</a>
              </div>   
              
            </div>

        </div>
      </section>
     











    
    < Footer />

    </div>
  )
}

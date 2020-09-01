import Header from './Components/Header'
import Footer from './Components/Footer'
import BgEffect from './Components/BgEffect'


import TypeIt from "typeit-react";




export default function Home() {
  return (

    <div >

      <Header />

      <section className="hero" id="home">
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

              <BgEffect />
      
        <div className="wrapper">         

         <h2>About</h2>

            <div className="about-content">

              <p>
                My name is Sarder Safa Bin Salam. I'm a front end web developer from Dhaka, Bangladesh. 
                I work remotely on projects for my client.
              </p> 






            </div>

        </div>
      </section>
     











    
    < Footer />

    </div>
  )
}

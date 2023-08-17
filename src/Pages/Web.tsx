import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Web = () => {
 
  return (
    <div>
     
      <Navbar />
      <div className='w-full bg-cblink text-white px-8 text-3xl font-extralight py-4' style={{textAlign: 'center'}}>Web development</div>

       
<div className='Services'>
  {/* Top Row */}
  <div className='col-5'>
    <img src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-04.jpg" alt="Web Development" />
    <h4><b>Work out web app</b></h4>
    <p>this work out web  app which <br></br>help our clients to get what they are looking for. easily</p>
  </div>

  <div className='col-5'>
    <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-06.jpg' alt="web design" />
    <h4><b>Web design</b></h4>
     <p>We are proudly to offer our clients fully customisable better design for web apps</p>
  </div>

  <div className='col-5'>
    <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-02.jpg' alt="E-commerce web app" />
    <h4><b>E-commerce web app</b></h4>
     <p>this app help customers to get their products easily every where they are just by using their pc and phones</p>
  </div>

  {/* Bottom Row */}
  
    </div>
    <Footer />

    </div>

        

    
  )
}

export default Web

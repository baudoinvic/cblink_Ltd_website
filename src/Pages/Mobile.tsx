import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const Mobile = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full bg-cblink text-white px-8 text-3xl font-extralight py-4' style={{textAlign: 'center'}}>Mobile development</div>

      <div className='Services'>
       {/* Top Row */}
      <div className='col-5'>
    <img src="https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-05.jpg" alt="Web Development" />
    <h4><b>Music Mobile app</b></h4>
    <p>we specialize in crafting innovative and user-centric mobile applications that drive engagement and deliver seamless experiences.</p>
  </div>

  <div className='col-5'>
    <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-01.jpg' alt="moble app" />
    <h4><b>chat app</b></h4>
     <p>We are proudly to offer our clients fully customisable chat mobile apps which can help them to chat with their friends.</p>
  </div>

  <div className='col-5'>
    <img src='https://rainbowit.net/html/inbio/assets/images/portfolio/portfolio-02.jpg' alt="E-commerce web app" />
    <h4><b>E-commerce Mobile app</b></h4>
     <p>this is a E-commercr Mobile app which help our customers to get their products just by using their smartphone.</p>
  </div>

  {/* Bottom Row */}
  
    </div>
     <Footer />
    </div>
  )
}

export default Mobile

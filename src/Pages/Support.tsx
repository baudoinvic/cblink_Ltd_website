import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const Support = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full bg-cblink text-white px-8 text-3xl font-extralight py-4' style={{textAlign: 'center'}}>IT Consulting</div>

      <div className='Services'>
       {/* Top Row */}
      <div className='col-5'>
    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aXQlMjBjb25zdWx0aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="IT support" />
    <h4><b>Digital Transformation</b></h4>
    <p>Guiding businesses through the process of adopting digital technologies and practices.Helping businesses transition to a more digitized and customer</p>
  </div>

  <div className='col-5'>
    <img src='https://rainbowit.net/html/inbio/assets/images/blog/blog-03.jpg' alt="IT support" />
    <h4><b>Managed IT Services</b></h4>
     <p>Offering ongoing IT support, maintenance, and monitoring services. also Handling day-to-day IT operations and troubleshooting.</p>
  </div>

  <div className='col-5'>
    <img src='https://continuumgrc.com/wp-content/uploads/2020/08/Cyber-Security-and-Compliance-web.jpg' alt="E-commerce web app" />
    <h4><b>Security and Compliance</b></h4>
     <p>Developing and implementing cybersecurity strategies to safeguard data and systems also Conducting security assessments and vulnerability testing</p>
  </div>

  {/* Bottom Row */}
  
    </div>
     <Footer />
    </div>



  )
}

export default Support

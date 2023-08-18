import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Hosting = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full bg-cblink text-white px-8 text-3xl font-extralight py-4' style={{textAlign: 'center'}}>Web Hosting</div>

      <div className='Services'>
       {/* Top Row */}
      <div className='col-5'>
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/b4873b133640599.61c23487d0810.png" alt="Web hosting" />
    <h4><b>Shared Hosting</b></h4>
    <p>we use this shared hosting because  multiple websites share resources on a single server.</p>
  </div>

  <div className='col-5'>
    <img src='https://media.istockphoto.com/id/1252202552/photo/corridor-of-server-room-3d-illustration-with-node-base-programming-data-design-element.jpg?s=612x612&w=0&k=20&c=IytuQ3cUxhuxyVJuXSqYirpD_aQNnr2KM8xbneKiir4=' alt="web hosting" />
    <h4><b>Cloud Hosting</b></h4>
     <p>this Cloud hosting uses a network of interconnected virtual servers to host Dynamic websites.</p>
  </div>

  <div className='col-5'>
    <img src='https://twtv3.ams3.digitaloceanspaces.com/posts/web-hosting.jpeg' alt="web hosting" />
    <h4><b>WordPress Hosting</b></h4>
     <p>we use this specifically optimized for websites built using the WordPress content management system.</p>
  </div>

  {/* Bottom Row */}
  
    </div>
     <Footer />
    </div>









  )
}

export default Hosting

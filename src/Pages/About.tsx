import React from 'react'
import melo from './../assets/melo.jpeg';
import './About.css'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Product from '../Components/Product'
import products from '../utils/Products'
import { BsArrowDownShort } from 'react-icons/bs'

const About = () => {

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      let mybutton = document.querySelector("#myBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton?.classList.replace('hidden', "flex")
      } else {
        mybutton?.classList.replace('flex', "hidden")
      }
    }
  
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }



  return (
    
        <div>
        <Navbar />
        <div id='myBtn' onClick={topFunction} className={`hidden w-10 cursor-pointer h-10 rounded fixed bottom-4 right-4  items-center justify-center bg-cblink text-white`}>
        <BsArrowDownShort size={30} className='rotate-180' />
      </div>

        <div className='w-full bg-cblink text-white px-8 text-3xl font-extralight py-4' style={{textAlign: 'center'}}>About us</div>

         <div className='about-melo'>
        <img src={melo} alt="Melo" />
       
        <p>Cb-link Ltd is an IT company initiated to provide different software 
        solutions to the private and public business sectors. We primarily focused 
        on management softwares in order to equip businesses with strong management tools 
        so that they can grow based on their data reports analysis. we use to provide 
        different software solutions to the private and public business sectors.With 
        a strong focus on technology-driven advancements We primarily focused on management 
        softwares in order to equip businesses with strong management tools".</p>
     </div>
      <div className='product'>
      <img
        src='https://assets-global.website-files.com/5dbb30f00775d4c32191a4df/5dc34c7d51595b4e9ca53745_path-5185.svg'
        alt='Background Image'
        />
         <h2 style={{
          fontFamily: 'verdana',
          fontSize: '18px',
          
       }}>Our Services</h2>
      </div>
        
      <div className='Services'>
  {/* Top Row */}
  <div className='col-5'>
    <img src="https://cdn.dribbble.com/users/2518758/screenshots/11645273/media/3c982c97ed256d17d14203519f8d820a.jpg?compress=1&resize=400x300" alt="Web Development" />
    <h4><b>Web Development</b></h4>
    <p>better design and implementing <br></br>web sites for companies</p>
  </div>

  <div className='col-5'>
    <img src='https://cdn.dribbble.com/userupload/4717755/file/original-3ef529578336497a06a9203f8fca5f05.png?compress=1&resize=400x300&vertical=center' alt="Mobile Development" />
    <h4><b>Mobile Development</b></h4>
     <p>We are proud to offer our clients fully customisable mobile apps</p>
  </div>

  <div className='col-5'>
    <img src='https://cdn.dribbble.com/users/1615584/screenshots/17075020/media/85d7a2dd39648cf1262f093d03452bb1.jpg?resize=400x0' alt="UI/UX Design" />
    <h4><b>UI/UX Design</b></h4>
     <p>We take pride in our craft. Our Design team's deep expertise in product.</p>
  </div>

  {/* Bottom Row */}
  <div className='col-5'>
    <img src="https://www.belugacdn.com/blog/wp-content/uploads/2020/04/web-hosting.jpg" />
    <h4><b>Web Hosting</b></h4>
     <p>we usually developing and hosting websites all over the world</p>
  </div>

  <div className='col-5'>
    <img src='https://img.freepik.com/free-vector/cloud-services-isometric-composition-with-big-cloud-computing-infrastructure-elements-connected-with-dashed-lines-vector-illustration_1284-30495.jpg' alt="IT Support" />
    <h4><b>IT Support</b></h4>
     <p>we support technical management for achieving the target and businesses </p>
  </div>

  <div className='col-5'>
    <img src="https://www.creationtech.com/wp-content/uploads/2018/05/IoT-AdobeStock_140202697-1024x768-1-1024x768.jpg" />
    <h4><b>Software|Hardware Maintenance</b></h4>
     <p>Optimizing software performance and resource management. also Data backup and disaster recovery planning</p>
    </div>
  </div>
    
  <div className='product'>
      <img
        src='https://assets-global.website-files.com/5dbb30f00775d4c32191a4df/5dc34c7d51595b4e9ca53745_path-5185.svg'
        alt='Background Image'
        />
         <h2 style={{
          fontFamily: 'verdana',
          fontSize: '18px',
          
       }}>Our products</h2>
      </div>
     
      <div className='w-full mt-8 flex flex-col' >
          {
            products.map((product) => {
              return <Product key={Math.random()} product={product} />
            })
          }
        </div>
       
       <Footer />

    </div>
      
  ) 
}

export default About

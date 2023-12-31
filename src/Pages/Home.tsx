import React from 'react'
import './Home.css'
//  import { ControlledCarousel } from '../Components/Carousel'
import Footer from '../Components/Footer'
import Carousel from '../Components/Carousel'
import { FaBullseye, FaHeart, FaRocket } from 'react-icons/fa';
import Navbar from '../Components/Navbar'
import { BsCheck2All } from 'react-icons/bs'
import ProfileCard from '../Components/ProfileCard'
// import teamData from '../utils/teamdata'
// import skills from '../utils/skills'
// import Skill from '../Components/Skill'
// import Partner from '../Components/Partner'
// import partners from '../utils/partners'
import { BsArrowDownShort } from 'react-icons/bs'
import Product from '../Components/Product'
import products from '../utils/Products'
import { Box, ImageList, ImageListItem } from '@mui/material'

const Home = () => {

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
    <div className='h-fit flex items-center justify-center flex-col'>
      
      <Navbar />
      <div id='myBtn' onClick={topFunction} className={`hidden w-10 cursor-pointer h-10 rounded fixed bottom-4 right-4  items-center justify-center bg-cblink text-white`}>
        <BsArrowDownShort size={30} className='rotate-180' />
      </div>

        <div className='done'>
        <Carousel />
      </div>  

      
          {/* Sub Carousel Component */}

      <div className='space-between-components' style={{marginTop: '4.5rem'}}>
         {/* Add your Sub Carousel Component here */}
</div>
      
     
      <div id="aboutus">
      <div className='slide'>
      <div className='team-container' style={{margin: '4.3rem'}}>
      <img src="https://assets-global.website-files.com/5dbb30f00775d4c32191a4df/5dc34c7d51595b4e9ca53745_path-5185.svg" alt="Background Image"
   
  />
      <h2> WE ARE AN IT COMPANY</h2>
    </div>
    
         <p 
         style={{
          marginTop: '-33px',
          paddingLeft: '1%'

          }}>Here to serve you technology better, mainly focusing on software solutions technologies.</p>
          
          <div className="" style={{width: '80%'}}>
          <p style={{margin: '1.5%'}}>Cb-link Ltd is an IT company initiated to provide different software solutions to the
            private and public business sectors.With a strong focus on technology-driven advancements We 
            primarily focused on management softwares in order
            to equip businesses withstrong management 
            tools so that they can grow based on their data reports analysis.</p>
            </div>
         </div>
          <br></br>
        
        
        <div className='objectives'>
          <div className='col-4'>
             <h2><b>OUR CORE VALUES <FaRocket /> </b></h2>
              <p>Discipline, Honesty, Innovation, Empowerment, Social Responsibility, Customer Focus,Accountability And Simplicity.</p>
          </div>

          <div className='col-4'>
             <h2><b>OUR MISSION <FaHeart /></b></h2>
              <p>Our mission is to spark managements with technology mostly in software development field and IT support.</p>
          </div>

          <div className='col-4'>
             <h2><b>OUR VISION <FaBullseye /></b></h2>
              <p>Our vision is to equip millions of businesses around the world with the best business management tools.</p>
          </div>
        </div>

        </div>
        <br></br><br></br>
 

        {/*our products and melo products*/}

        <div id='meloproducts' className='w-full px-4 sm10:px-16 py-8 flex flex-col items-center justify-start  bg-[#f5f5f5]'>
      <div className='team-container' style={{margin: '2.5rem'}}>
        <img
       src="https://assets-global.website-files.com/5dbb30f00775d4c32191a4df/5dc34c7d51595b4e9ca53745_path-5185.svg" alt="Background Image"
      />
      
  <h2 style={{
   
    fontFamily: 'Times new roman sans serif'
    
    }}> MELO™ PRODUCTS<span className="arrow">→</span></h2>
  </div>
     <div className="melo">
        <p>our feature of using melo is to simplified B2B business to business we usually focus 
         on expense sales and billing management also we do our prduct on stock management and 
         accounting report with the public relations in our country.so why using melo? is because
         is easy and faster navigation also for customers relation services and quicky support.
  
        
         <div className='team-container' style={{margin: '2.5rem'}}>
        <img
       src="https://assets-global.website-files.com/5dbb30f00775d4c32191a4df/5dc34c7d51595b4e9ca53745_path-5185.svg" alt="Background Image"
      />
      
  <h2 style={{
   
    fontFamily: 'Times new roman sans serif'
    
    }}> MELO™ SOFTWARE<span className="arrow">→</span></h2>
  </div>
       Melo Software is a business application system developed and owned by CB-Link Ltd to enhance
        Business Management Procedures (sales, billing, inventory, accounting and reporting) 
        for SMEs businesses or centers.
        melo software offers a user friendly interface that simplifie the process of managing
        your pharmacy. you can easily track your stock levels, set up automatic orders to replenish
        low stock and generate sales reports to keep an eye in your business performance.

        </p>
     </div>
        <div className='w-full mt-8 flex flex-col' >
          {
            products.map((product) => {
              return <Product key={Math.random()} product={product} />
            })
          }
        </div>
      </div>


       {/* what we are doing*/}

       <div id="what we do">
       <div className='w-full px-2 sm10:px-8 py-8 flex flex-col items-center justify-start  bg-white'>
        <div className='melo-service'>
      <img
      src='https://assets-global.website-files.com/5dbb30f00775d4c32191a4df/5dc34c7d51595b4e9ca53745_path-5185.svg'
        alt='Background Image'
        />
        <h2 style={{
        
          fontSize: '18px',
          fontFamily: 'verdana',

          }}>What we do<span className="arrow">→</span></h2>
            <div className="super" style={{color: "#495d69",  margin: '3rem'}}>
       <span>we are good for designing implementing and developing websites and mobile apps<br></br> for companies even for customers</span>
       <span>we are here to help you with your next project just<br></br> feel free to keep with us in touch we will be always there for you</span>  
       </div>     
      </div> 
        
      </div>
      </div>

     
      <div className='section' >
          <div className='col-4'>
          
             <h2 style={{opacity: '0.5'}}>01</h2>
               <h2>Web Development</h2>
              <p><i className="fas fa-quote-left"
                style={{

                 opacity: '0.5',
                fontSize:'30px'

                }}></i>We usually design and makes implmentantion for web application for companies and for customers need .
                <i className="fas fa-quote-right" style={{
                    opacity: '0.5',
                    fontSize:'30px'
                }}></i></p>
          </div>

          <div className='col-4'>
             <h2 style={{opacity: '0.5'}}>02</h2>
             <h2>Mobile Development</h2>
              <p><i className="fas fa-quote-left"
               style={{
                opacity: '0.5',
                fontSize:'30px'
                
                }}>
                
                </i>We are proudly to offer our clients fully customisable mobile apps that cater to their unique needs and preferences.
               <i className="fas fa-quote-right" 
               style={{
                opacity: '0.5',
                fontSize:'30px'
               }}>
                
                </i></p>
          </div>

          <div className='col-4'>
             <h2 style={{opacity: '0.5'}}>03</h2>
             <h2>UI/UX Design</h2>
              <p><i className="fas fa-quote-left" 
              style={{
                opacity: '0.5',
                fontSize: '30px'
                
                
                }}></i>
                   Better Designs that adapt seamlessly across devices and cater to diverse user needs for our clients.
               <i className="fas fa-quote-right" 
                  style={{
                    opacity: '0.5',
                    fontSize: '30px'
                  }}></i>
                  </p>
             </div>
             </div>

          <br></br> 
          <br></br>

      {/* <div id='meloteam' className='team'>
      <div className='team-container'>
      <img
    src='https://assets-global.website-files.com/5dbb30f00775d4c32191a4df/5dc34c7d51595b4e9ca53745_path-5185.svg'
    alt='Background Image'
  />
  <h2 style={{
    fontFamily: 'verdana',
    fontSize: '18px'}}>OUR TEAM</h2>
  </div>
       
          <div className='teamdata'>
        <div className='w-full px-3 md:px-8 gap-1 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
         
            teamData.map((member) => {
              return <ProfileCard key={Math.random()} member={member} />
             
            })
          }
        </div>
        </div>
      </div> */}

             <br>
           </br>
           <br>
         </br>
                

        <div className='melo-service'>
         <img
        src='https://assets-global.website-files.com/5dbb30f00775d4c32191a4df/5dc34c7d51595b4e9ca53745_path-5185.svg'
        alt='Background Image'
        />
   
       <h2 style={{
        fontFamily: 'verdana',
         fontSize: '18px',
        // top: '2rem',
    }}>Our Services</h2>
     
       
      <div className="service">
      <p>this our services which we offer to our customers also we re here to help for your project improvement
       We are in IT company initiated to provide different software solutions to the private and public business 
      sectors. We primarily focused on management softwares in order to equip businesses with strong management tools 
      so that they can grow based on their data reports analysis.</p>
      </div>
   
   </div>
  
  <br></br>

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

      {/* Partners component */}
      <div className='w-full px-16 py-8 flex flex-col items-center justify-start  bg-[]'>
      <div className='melo-service'>
      <img
    src='https://assets-global.website-files.com/5dbb30f00775d4c32191a4df/5dc34c7d51595b4e9ca53745_path-5185.svg'
    alt='Background Image'
  />
       <h2 style={{
         fontFamily: 'verdana',
         margin: '3%',
        fontSize: '18px'}}> our Patners</h2>
       </div>
        
      </div>

          {/* patner */}
          <div className='patner'>
          <div className='col-4'>
          
          <img src="https://searchlogovector.com/wp-content/uploads/2018/09/health-mart-pharmacy-logo-vector.png"></img>
          </div>

          <div className='col-4'>
            
             <img src="https://www.shutterstock.com/image-vector/shopping-logo-ecommerce-logotype-shooping-260nw-1978607771.jpg"></img>
          </div>

          <div className='col-4'>
      
              <img src="https://pbs.twimg.com/media/Ci5tJaMWEAAEDPi.jpg"></img>
          </div>

          <div className='col-4'>
      
          <img src="https://t4.ftcdn.net/jpg/03/31/93/85/360_F_331938599_nmkc39B7E74s1G5P01b0YCJ6x0MNMqJz.jpg"></img>
          </div>
        </div>

       <br></br> <br></br>
     
    
      {/* <div id='melogallery' className='w-full px-4 sm10:px-16 py-8 flex flex-col items-center justify-start  bg-[#f5f5f5]'> */}

        {/* 
        </Box> */}
      {/* </div> */}
      <Footer />
    </div>
  )
}

export default Home

 

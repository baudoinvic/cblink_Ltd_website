import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import emailjs from '@emailjs/browser';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const sendEmail = (e: any) => {
        e.preventDefault();
        console.log(e.target);

        emailjs.sendForm('service_trj74bi', 'template_ui222ld', e.target, 'pkHdu1-TPhOLtJtEz')
            .then((result) => {
                console.log(`${result.text} Email sent successfully`);
            }, (error) => {
                console.log(`${error.text}, Email not sent`);
            });
        e.target.reset()
    };

    return (
        <div className=' w-full text-white  bg-[#1c2834] pt-16 pb-8 px-16 md:grid md:grid-cols-2 xl:flex items-start justify-center'>
            <div className='md:w-full my-4 xl:w-1/4 flex flex-col items-start justify-start'>
            <h1 style={{
                top: '-2rem',
                position: 'relative',
                fontSize: '40px',
                fontFamily: 'Times new roman sans serif',
                color: '#c1cf16', }}>Drop Us line</h1>
                 <p style={{
                    fontSize: '14px',
                    top: '-2rem',
                    position: 'relative',
                    color: '#d9d9d9'}}>_We would like to hear from you. what is your bold idea?</p>
                   
                {/* <img style={{opacity: '0.5'}} src="/src/assets/logo-head.gif" className="w-32 h-10" alt=""></img> */}
                <div className='my-2 flex flex-col items-start justify-start'
                
                style={{
                    color: '#d9d9d9',
                    fontFamily: 'Times new roman sans serif', fontSize: '13px',
                    top: '-2rem',
                    position: 'relative',
                    }}>
                    
                    <span className='my-1'>KIGALI, KICUKIRO DISTRICT</span>
                    <span className='my-1'> KICUKIRO Diamond House 2nd floor</span>
                    <span className='my-1'>RWANDA</span>
                    <span className='my-1' style={{fontSize: '17px'}}>Open 8AM to 5PM</span>
                </div>
                <div className='flex flex-col items-start justify-start'
                
                  style={{
                    
                    color: '#d9d9d9',
                    fontFamily:'Times New roman san Serif',
                    position: 'relative',
                    top: '-2rem'
                    
                    }}>
                     <div style={{ display: 'flex', alignItems: 'center' }}>
                     <FaPhone style={{ marginRight: '5px' }} />
                     <span>Phone: +250 780 067 233</span>
                  </div>
                 <div style={{ display: 'flex', alignItems: 'center' }}>
                     <FaEnvelope style={{ marginRight: '5px' }} />
                 <span>Email: cblinkltd@gmail.com</span>
                  </div>
                </div>
            </div>
            <div className='md:w-full my-4 xl:w-1/4 flex flex-col'>
                <span className='font-bold text-2xl'
                
                style={{
                     fontSize: '30px',
                     color:'#d9d9d9',
                    fontFamily: 'Times new roman sans serif'
            
                }}>Our Products</span>
                <ul className='list-none' 
                
                  style={{
                    
                    color: '#d9d9d9',
                    fontFamily: 'Times new roman sans serif'

                  }}>
                    <li className='flex my-2'>
                        <BiChevronRight className='text-green-600' /> <span>Melo Pharmacy</span>
                    </li>
                    <li className='flex my-2'>
                        <BiChevronRight className='text-green-600' /> <span>Melo Shop</span>
                    </li>
                    <li className='flex my-2'>
                        <BiChevronRight className='text-green-600' /> <span>Melo Supermarket</span>
                    </li>
                    <li className='flex my-2'>
                        <BiChevronRight className='text-green-600' /> <span>Melo Production</span>
                    </li>
                    <li className='flex my-2'>
                        <BiChevronRight className='text-green-600' /> <span>Melo Logistics</span>
                    </li>

                    <li className='flex my-2'>
                        <BiChevronRight className='text-green-600' /> <span>Melo Market</span>
                    </li>

                </ul>
            </div>
            <div className='flex items-start justify-start flex-col md:w-full xl:w-1/4'>
                <span className='font-medium text-xl' style={{
                    fontSize: '30px',
                    color: '#c1cf16',
                    fontFamily: 'Times new roman sans serif'}}>
                        Subscribe For Newsletter</span>

                <span style={{
                    
                    color: '#d9d9d9',
                    fontFamily: 'Times new roman sans serif'}}>_Provide your email here and subscribe to see latest news from us</span>
                <form onSubmit={sendEmail}>

                    <div className='flex items-center justify-center my-3'>
                        <input type="email" name='email' className='text-sm     sm:text-[18px] text-black px-2 outline-0 border-0 rounded-l-md w-32 mmsm:w-48 msm:w-64 sm:w-72 h-12' />
                        <button type='submit' className=' rounded-r-md bg-cblink text-white px-2 text-base sm:text-lg md:text-xl h-12'
                        
                        style={{
                            
                            backgroundColor: '#007bff',
                            color: '#d9d9d9'
                        
            
                        }}>Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Footer

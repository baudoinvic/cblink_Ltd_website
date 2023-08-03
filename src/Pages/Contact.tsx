import { CircularProgress, TextField } from '@mui/material'
import React, { FormEvent, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import './Contact.css'; 

const Contact = () => {

  const info = [
    {
      icon: 'bx bx-map text-cblink  border-blue-700 hover:bg-cblink hover:text-white rounded-full p-2 text-3xl cursor-pointer ',
      title: 'Location',
      text1: 'Kigali',
      text2: 'Kicukiro, Diamond House 2nd floor'
    }, {
      icon: 'bx bx-envelope text-cblink  border-blue-700 hover:bg-cblink hover:text-white rounded-full p-2 text-3xl cursor-pointer ',
      title: 'Email:',
      text1: 'cblinkltd@gmail.com',
      text2: 'cblinkltd@gmail.com'
    }, {
      icon: 'bx bx-mobile-alt text-cblink  border-blue-700 hover:bg-cblink hover:text-white rounded-full p-2 text-3xl cursor-pointer ',
      title: 'Call',
      text1: '+250780067233',
      text2: '+250723793348'
    },
  ]

  const [loader, setLoader] = useState(false)
  const handleSubmit = async (e: any) => {
    setLoader(true)
    e.preventDefault()
    // return
    emailjs.sendForm('service_trj74bi', 'template_dtuqfoc', e.target, 'pkHdu1-TPhOLtJtEz')
      .then((result) => {
        toast.success('Email sent successfully')
        console.log(`${result.text} Email sent successfully`);
      }, (error) => {
        console.log(`${error.text}, Email not sent`);
      });
    e.target.reset()
    setLoader(false)
  }
  
  return (
    <div className='h-fit flex flex-col items-center justify-start'>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
      <Navbar />
      <div className='w-full bg-cblink text-white px-8 text-3xl font-extralight py-4' style={{textAlign: 'center'}}>Contact Us</div>
      <iframe className='w-full h-96' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.462530885704!2d30.090315715287723!3d-1.9690224985645084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca78a8b9ce287%3A0x26a3fd1a207b9f0b!2sCB-LINK%20LTD!5e0!3m2!1sen!2srw!4v1664012432986!5m2!1sen!2srw" width="600" height="450" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className='w-full bg-white py-5 flex flex-col items-center justify-center h-fit'>
        <div className='mb-8 rounded w-10/12 shadow-lg p-3 md:p-2 flex flex-col lg:flex-row items-center  lg:items-start justify-between' >
        
     

          {
            info.map(information => (
              <div key={Math.random()} className='my-4 lg:my-0 w-full lg:w-3/12 flex flex-row items-start justify-start'>
                <div className='rounded-full items-center justify-center border-[1px] border-cblink'>
                  <i className={`${information.icon}`}></i>
                </div>
                <div className='px-3 w-11/12 flex flex-col items-start justify-start'>
                  <h2 className=''>{information.title}</h2>
                  <span className=''>{information.text1}</span>
                  <span className=''>{information.text2}</span>
                </div>
              </div>
            ))
          }
        </div>
        <div id='messaging' className='p-8 rounded w-full smm20:w-9/12 shadow-lg flex flex-col items-center justify-center'>
          <span className='text-3xl font-bold font-poppins mb-8'>Let's keep in touch</span>
          <form className='flex xl:w-7/12 flex-col items-center justify-center' onSubmit={handleSubmit}>
            <div className='flex w-full justify-between items-center'>
              <TextField required={true} className='my-2 w-[48%] border-2' autoComplete={'off'} type='text' name='from_name' id="outlined-basic" label="Name" variant="outlined" />
               <br></br>
              <TextField required={true} className='my-2 w-[48%] border-2' autoComplete={'off'} type='email' name='from_email' id="outlined-basic" label="Email" variant="outlined" />
        
            </div>
            <br></br>
            <TextField required={true} className='my-2 w-full border-2' autoComplete={'off'} type='text' name='subject' id="outlined-basic" label="Subject" variant="outlined" />
            <br></br>
            <TextField required={true} className='my-2 w-full border-2 h-80' sx={{ "& .MuiInputBase-root": { height: 150 } }} autoComplete={'off'} type='text' name='message' inputProps={{ style: { height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'start' } }} id="outlined-basic" label="write your Message" variant="outlined" />
            {loader
              ?
              <CircularProgress color='primary' />
              :
              <button className='' 
              
              style={{
                width: '200px', 
                height: '50px',
                padding: '10px 20px',
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'white',
                backgroundColor: '#007bff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                top: '-8rem', // Move the button 5rem (adjust this value as needed)
                position: 'relative', 
            
             }} type='submit'>Submit</button>
            }

          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact

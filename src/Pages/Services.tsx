import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Service from '../Components/Service'
import services from '../utils/services'

const Services = () => {
    return (
        <div className='h-fit flex flex-col items-center justify-start'>
            <Navbar />
            <div className='w-full bg-cblink text-white px-8 text-3xl font-extralight py-4'
            
            style={{
            
            fontFamily: 'verdana',
            textAlign: 'center'
            
             }}>Our services</div>
              <br></br>
            <div className='grid max-w-10xl w-10/12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    services.map(service => <Service service={service} />)
                }
            </div>
            <Footer />
        </div>
    )
}

export default Services

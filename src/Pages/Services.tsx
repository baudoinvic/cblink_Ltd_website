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

            <div className='grid w-10/12 grid-cols-2'>
                {
                    services.map(service => <Service service={service} />)
                }
            </div>
            <Footer />
        </div>
    )
}

export default Services

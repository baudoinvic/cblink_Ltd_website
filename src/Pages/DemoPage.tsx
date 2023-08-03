import React from 'react'
import DemoVideoComponent from '../Components/DemoVideoComponent'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const DemoPage = () => {
    return (
        <div className='w-screen flex flex-col items-center justify-start'>
            <Navbar />

            <DemoVideoComponent videoUrl={'https://youtu.be/k5PeywcbVYc'} />
            <Footer />
        </div>
    )
    
}

export default DemoPage

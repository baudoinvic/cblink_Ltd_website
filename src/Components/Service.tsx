import React, { ReactPropTypes } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Service = (props: any) => {
    return (
        <div className='w-full flex h-fit my-4 items-center justify-center'>
            <div className='w-10/12 p-8 shadow-lg bg-white flex flex-col items-start justify-start'>
                <div className='flex flex-row items-start justify-start my-3'>
                    <img src={props.service.image} className='object-cover w-16  h-16 rounded-full' alt="" />
                    <div className='mx-3 flex w-full flex-col items-start justify-start'>
                        <h2 className='text-xl text-black font-medium'>{props.service.name}</h2>
                        <h2 className='text-lg text-[#999] font-medium'>{props.service.subheading}</h2>
                    </div>
                </div>
                <span className='block'><FaQuoteLeft className='w-fit' color='#999' size={35} />{props.service.description}<FaQuoteRight className='float-right w-fit' color='#999' size={35} /></span>
            </div>
        </div>
    )
}

export default Service

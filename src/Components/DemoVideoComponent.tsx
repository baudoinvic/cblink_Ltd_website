import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
  videoUrl: string,
}

const DemoVideoComponent = (props: Props) => {
  return (
    <div className='w-full  flex flex-col items-center justify-center'>
      <video className='my-8 rounded w-7/12' src={props.videoUrl} controls={true}></video>
      <div className='w-7/12 flex items-center justify-around'>
     
       <a href="auth/signup" className='w-32 hover:bg-blue-700 h-12 mx-4 cursor-pointer text-lg rounded bg-cblink text-white flex items-center justify-center'>Get It</a>
        <Link to={'/#meloproducts'}><button className=' hover:bg-blue-700 h-12 mx-4 cursor-pointer text-lg rounded bg-cblink text-white flex items-center justify-center'>Try Another Product</button></Link>
      </div>
    </div>
  )
}
export default DemoVideoComponent

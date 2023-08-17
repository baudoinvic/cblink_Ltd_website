import React, { ReactPropTypes } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import './Service.css'
const Service = (props: any) => {
    return (
       
       
     <div className="cblink-ltd">
  <div className="col-3">
    <div className="description">
      {/* Service Image and Name */}
      <div className="">
        <img src={props.service.image} className="object-cover w-16 h-16 rounded-full" alt="" />
        <div className="">
          <h2 className="text-xl text-black font-medium">{props.service.name}</h2>
          <h2 className="text-lg text-[#999] font-medium">{props.service.subheading}</h2>
        </div>
      </div>
      {/* Service Description */}
      <span className="block">
        <FaQuoteLeft className="w-fit" color="#999" size={23} />
        {props.service.description}
        <FaQuoteRight className="float-right w-fit" color="#999" size={23} />
      </span>
    </div>
  </div>
</div>

    )
}

export default Service

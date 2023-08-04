import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../assets/logo-head.gif'
import { BsChevronDown, BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import './../App.css'
import { BiMenu, BiX } from 'react-icons/bi'

const Navbar = (props: any) => {

  const [smallNavToggle, setSmallNavToggle] = useState(false)


  const aboutLinkMobile = () => {
    const innerListMobile1 = document.querySelector('.inner-list-mobile-1')
    innerListMobile1?.classList.contains('hidden') ? innerListMobile1?.classList.replace('hidden', 'flex') : innerListMobile1?.classList.replace('flex', 'hidden')
  }
  const servicesLinkMobile = () => {
    const innerListMobile2 = document.querySelector('.inner-list-mobile-2')
    innerListMobile2?.classList.contains('hidden') ? innerListMobile2?.classList.replace('hidden', 'flex') : innerListMobile2?.classList.replace('flex', 'hidden')
  }

  return (
    <div className='bg-white z-[20] px-4 w-full top-0 py-4 shadow-lg sticky left-0 flex flex-row items-center justify-around'>
      <Link to={'/'} className='cursor-pointer' >
        <img src={logo} className='w-32 h-10' alt="" />
      </Link>
      <div className='flex'
       style={{
        color: '#495d69',
        fontFamily: 'Times new roman sans serif',
        fontSize: '15px'
      }}>
        <a href='tel://+250780067233' className='my-auto text-cblink xl:flex hidden'>+250780067233 </a><Link to={'/contact/#messaging'} className='my-auto  xl:flex hidden'
        
           style={{
           fontFamily: 'Times new roman sans serif',
           color:'#495d69',
           paddingRight: '1.2rem'
          }}>
            
             {' '}| SEND EMAIL |</Link>
        <div className='hidden sm10:flex items-center justify-center'>
       
          <ul className='list-none flex items-center justify-around'>
            <li className=''>
              <Link to={'/'} className={`  ${props.active === 'home' ? 'text-cblink' : ''}`}> HOME</Link>
            </li>
            <li className='link-holder my-2 relative mx-4 flex flex-col'>
              <Link to={'/'} className={`about-link font-medium ${props.active === 'home' ? 'text-cblink' : 'text-black hover:text-cblink'}`}><span className='flex items-center justify-center' style={{color: '#495d69'}}>ABOUT <BsChevronDown className='chevron1 ml-2 hover:rotate-180' /></span></Link>
              <ul className='z-10 py-2 shadow-lg shadow-slate-800 inner-list list-none rounded-b-md w-56 border-t-2 flex-col bg-white justify-start items-center border-t-cblink  absolute top-6'>
                <li className='w-3/4 my-2 '><a href={'#aboutus'} className={`font-medium  ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>About Us</a></li>
                <li className='w-3/4 my-2 '><a href={'#meloteam'} className={`font-medium  ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>Team</a></li>
                <li className='w-3/4 my-2 '><a href={'#meloproducts'} className={`font-medium  ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>Products</a></li>
              </ul>
            </li>
            <li className='link-holder my-2 relative mx-4 flex flex-col'>
              <Link to={'/'} className={`services-link font-medium ${props.active === 'home' ? 'text-cblink' : 'text-black hover:text-cblink'}`}><span className='flex items-center justify-center' style={{color:'#495d69'}} >SERVICES <BsChevronDown className='chevron2 ml-2 hover:rotate-180' /></span></Link>
              <ul className='py-2 shadow-lg  bg-white  shadow-slate-800 inner-list list-none rounded-b-md w-72 border-t-2 flex-col justify-start items-center border-t-cblink  absolute top-6'>
                <li className='w-3/4 my-2 '><Link to={'/services'} className={`font-base ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>Software Development</Link></li>
                <li className='w-3/4 my-2 '><Link to={'/services'} className={`font-base ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>Web Development</Link></li>
                <li className='w-3/4 my-2 '><Link to={'/services'} className={`font-base ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>Mobile Apps Development</Link></li>
                <li className='w-3/4 my-2 '><Link to={'/services'} className={`font-base ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>IT Consulatance</Link></li>
                <li className='w-3/4 my-2 '><Link to={'/services'} className={`font-base ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>Web Hosting</Link></li>
                
              </ul>
            </li>
            <li className=''><Link to={'/contact'} className='cursor-pointer'>REACH US</Link></li>
          </ul>
          <span className='smd:flex hidden mx-4'> | </span>
          <div className='smd:flex hidden item-center justify-center'>
            <a href="https://" target={'_blank'}><BsTwitter className='mx-2 text-slate-500 duration-75 hover:text-cblink' /></a>
            <a href="https://" target={'_blank'}><BsFacebook className='mx-2 text-slate-500 duration-75 hover:text-cblink' /></a>
            <a href="https://" target={'_blank'}><BsInstagram className='mx-2 text-slate-500 duration-75 hover:text-cblink' /></a>
            <a href="https://www.linkedin.com/in/santus-habumugisha-517049191/" target={'_blank'}><BsLinkedin className='mx-2 text-slate-500 duration-75 hover:text-cblink' /></a>
          </div>
        </div>

        {/* Small screen nav */}
        <div className={`${smallNavToggle ? 'flex' : 'hidden'} absolute top-16 right-3 shadow-lg bg-white px-4 py-6{`}>
          <ul className='list-none flex flex-col items-start justify-start'>
            <li className=''>
              <Link to={'/'} className={`font-medium ${props.active === 'home' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>HOME</Link>
            </li>
            <li className='link-holder my-2 relative flex flex-col'>
              <Link onClick={aboutLinkMobile} to={'/'} className={`about-link-mobile font-medium ${props.active === 'home' ? 'text-cblink' : 'text-black hover:text-cblink'}`}><span className='flex items-center justify-center'>ABOUT <BsChevronDown className='chevron1 ml-2 hover:rotate-180' /></span></Link>
              <ul className='z-10 py-2 shadow-lg shadow-slate-800 inner-list-mobile-1 hidden list-none rounded-b-md w-32 border-t-2 flex-col bg-white justify-start items-center border-t-cblink right-24 absolute top-4'>
                <li className='w-3/4 my-2 '><a href={'#aboutus'} className={`font-medium  ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>About Us</a></li>
                <li className='w-3/4 my-2 '><a href={'#meloteam'} className={`font-medium  ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>Team</a></li>
                <li className='w-3/4 my-2 '><a href={'#meloproducts'} className={`font-medium  ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>Products</a></li>
              </ul>
            </li>
             
            <li className='link-holder my-2 relative flex flex-col'>
              <Link onClick={servicesLinkMobile} to={'/'} className={`services-link-mobile font-medium ${props.active === 'home' ? 'text-cblink' : 'text-black hover:text-cblink'}`}><span className='flex items-center justify-center' >SERVICES <BsChevronDown className='chevron2 ml-2 hover:rotate-180' /></span></Link>
              <ul className='py-2 shadow-lg  bg-white  shadow-slate-800 inner-list-mobile-2 hidden list-none rounded-b-md w-72 border-t-2 flex-col justify-start items-center border-t-cblink  absolute -right-6 top-6'>
                <li className='w-3/4 my-2 '><Link to={'/services'} className={`font-base ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>Software Development</Link></li>
                <li className='w-3/4 my-2 '><Link to={'/services'} className={`font-base ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>Web Development</Link></li>
                <li className='w-3/4 my-2 '><Link to={'/services'} className={`font-base ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>Mobile Apps Development</Link></li>
                <li className='w-3/4 my-2 '><Link to={'/services'} className={`font-base ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>IT Consulatance</Link></li>
                <li className='w-3/4 my-2 '><Link to={'/services'} className={`font-base ${props.active === 'about' ? 'text-cblink' : 'text-black hover:text-cblink'}`}>Web Hosting</Link></li>
              </ul>
            </li>
            <li className=''><Link to={'/contact'} className='cursor-pointer'>REACH US</Link></li>
          </ul>
        </div>
        <span onClick={() => { setSmallNavToggle(!smallNavToggle) }} className={`sm10:hidden flex menu-toggle cursor-pointer`}>{
          smallNavToggle ?
            <BiX size={35} />
            :
            <BiMenu size={35} />}</span>
      </div>
    </div>
  )
}

export default Navbar

import React, { useState } from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import '../App.css';

const ProfileCard = (props: any) => {
  const [isZoomed, setZoomed] = useState(false);

  const handleImageClick = () => {
    setZoomed(!isZoomed);
  };

  return (
    <div
      className={`profileCard bg-[#f5f5f5] w-full flex flex-col items-center justify-center ${
        isZoomed ? 'zoom-in' : 'zoom-out'
      }`}
    >
      <div
        className={`relative w-11/12 md:w-9/12 my-3 self-center align-middle flex flex-col items-start justify-start ${
          isZoomed ? 'h-full' : 'h-[435px]'
        } shadow-lg`}
        style={{ height: '350px' }}
      >
        <div className='relative w-full h-2/3'>
          <img
            src={props.member.profileImage}
            className={`w-full rounded-t-lg object-cover h-full cursor-pointer ${
              isZoomed ? 'zoom-in' : 'zoom-out'
            }`}
            style={{ borderRadius: '20px' }}
            onClick={handleImageClick}
            alt=''
          />
          <div className='socialMedias absolute bottom-0 w-full h-12 bg-white/70 px-4 items-center justify-around'>
            <a href={props.member.socialMedias.instagram}>
              <BsInstagram className='duration-75' />
            </a>
            <a href={props.member.socialMedias.linkedin}>
              <BsLinkedin className='duration-75' />
            </a>
            <a href={props.member.socialMedias.twitter}>
              <BsTwitter className='duration-75' />
            </a>
           
          </div>
        </div>
        <div className='py-8 absolute bottom-0 w-full h-1/3 bg-white rounded-b-lg flex-col flex items-center justify-start'>
          <span
            className=''
            style={{
              fontWeight: 'bold',
              fontSize: '14px',
              fontFamily: 'verdana',
            }}
          >
            {props.member.name}
          </span>
          <span className='text-sm my-3 font-light' style={{ color: '#495d69' }}>
            {props.member.role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
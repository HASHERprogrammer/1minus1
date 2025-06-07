import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react'
gsap.registerPlugin(ScrollTrigger);

import { GoArrowUpRight } from "react-icons/go";
const Car = () => {

  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:'.carBlack',
      start:'top 50%',
      end:'bottom 50%',

    }
  });
  useGSAP(() => {
    tl.from('.blackcome', {
      opacity:0,
      x:'-100%',
      duration:1.2,
    })
    tl.from('.textAnimate', {
      opacity:0,
      y:'100%',
      duration:1.2,
    })
  })
  return (
    <>
      <div className='carBlack bg-[#F6F6F6] w-full h-[100vh] bg-ed-900 flex items-center justify-center '>
        <div className='blackcome relative w-[90%] h-[80%] bg-[#282524] flex items-center justify-center '>
          <div className='blackAnimate absolute top-10 w-[80%] h-[60%] '>
            <video autoPlay loop muted src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/t10_banner_f3cd4de4a5.webm"></video>
            <div className='absolute top-20 -left-10 textAnimate'>
              <h3 className='text-white font-bold text-[1.4vw]'>FEATURED PRODUCT - TURN 10 </h3>
              <p className='font-extralight tracking-[.3] text-white text-[5vw] leading-[5vw]'>Creative design, 3D <br /> animation & modern CMS</p>
              <a href="#" className='uppercase text-white font-bold border-b-2 border-white pb- mt-[1vw] inline-block'>View Projects</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Car
 
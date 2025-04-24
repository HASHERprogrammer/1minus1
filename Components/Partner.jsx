import React, { useRef } from 'react'
import Navbar from './Navbar'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Partner = () => {
  
  useGSAP(() => {
    gsap.from('.t img', {
      y: 200,
      duration: .6,
      opacity:0,
      scrollTrigger: {
        trigger: '.t img',

      },
      stagger: .3
    });

    gsap.from('.t2 img', {
      y: 200,
      duration: .6,
      opacity:0,
      scrollTrigger: {
        trigger: '.t img',

      },
      stagger: .3
    });

    gsap.from('.t3 img', {
      y: 200,
      duration: .6,
      opacity:0,
      scrollTrigger: {
        trigger: '.t img',

      },
      stagger: .3
    })
  })
  return (
    <>
      <div className='w-full h-[100vh]   bg-[#D3D8D7]'>
        <div className=' w-full px-32 sm:px-0 am:px-0 am:pt-0 h-[100vh] pt-10 '>
          <div className=' am:h-full   am:flex am:px-[16vh] am:gap-10 am:p-10 am:items-center  sm:w-[100vw] '>
            <div className='t flex  items-center justify-center am:justify-start gap-20 am:gap-8 overflow-hidden am:overflow-none am:flex-col am:w-[50vw] '>
              <img className='h-[vw] w-[12vw] am:w-[16vw]  ' src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/xboxstudios_14f0ae6c71.svg" alt="" />
              <img className='h-[vw] w-[12vw] am:w-[16vw]  ' src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/forza_new_a0a1ddff76.png" alt="" />
              <img className='h-[vw] w-[12vw] am:w-[16vw]  ' src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/turn10_d3a138ac2d.svg" alt="" />
              <img className='h-[vw] w-[12vw] am:w-[16vw]  ' src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/medium_fasttravel_29cfc45cba.png" alt="" />
            </div>
            <div className='t2 mt-[2vw] flex am:flex-col  items-center justify-center gap-20 am:gap-10  overflow-hidden am:hidden'>
              <img className='h-[vw] w-[12vw] am:w-[16vw] ' src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/inxile_logo_e4244e8471.png" alt="" />
              <img className='h-[vw] w-[12vw] am:w-[16vw] ' src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/small_Rocksteady_ef14bba52a.webp" alt="" />
              <img className='h-[vw] w-[12vw] am:w-[16vw] ' src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/compulsion_logo1_8966ff869a.png" alt="" />
              <img className='h-[vw] w-[12vw] am:w-[16vw] ' src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/studiotypes_9313d3a373.svg" alt="" />
            </div>
            <div className='t3 mt-[2vw] flex am:flex-col  items-center justify-center gap-20 am:gap-10 overflow-hidden am:w-[50vw]'>
              <img className='h-[vw] w-[12vw] am:w-[16vw] ' src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/lightspeed_logo_new_a2fce9d216.png" alt="" />
              <img className='h-[vw] w-[12vw] am:w-[16vw] ' src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/tencent_new_2b1e37a84a.png" alt="" />
              <img className='h-[vw] w-[12vw] am:w-[16vw] ' src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/PLAION_Logo_horizontal_RGB_pos_7a5f8aea77.png" alt="" />
              <img className='h-[vw] w-[12vw] am:w-[16vw] ' src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/bonus_new2_f619346e15.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Partner

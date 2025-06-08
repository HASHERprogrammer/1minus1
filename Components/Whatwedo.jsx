import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Whatwedo = () => {
  const ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.animate-container',
        start: 'top 60%',
        end: 'top 0%',
        once: true,
      }
    });

    tl.from('.animate', {
      opacity: 0,
      y: 100,
      duration: 2,
      stagger: 0.2,
    });
  });

  return (
    <>
      <div className='relative w-full h-[100vh] overflow-hidden'>
        <div 
          ref={ref} 
          className='animate-container w-[100vw] text-[#4A4A4A] absolute top-[vw] left-[10vw] am:left-0 px-10 am:px-3 py-3'
        >
          <h3 className='animate font-["Gilroy "] font-bold mt-[2vw]'>WHAT WE DO</h3>

          <div className='mt-[1vw]'>
            <p className='animate text-[4vw] font-extralight font-["Gilroy "]'>
              1minus1 is an award-winning <span className='font-bold'>creative marketing agency</span> dedicated to the games industry.
            </p>
          </div>

          <div className='mt-[2vw] relative am:bg-green-900'>
            <div className='gap-[2vw] absolute top-[2vw] left-[2vw] flex font-["Gilroy "] font-[400] am:flex am:flex-col'>
              
              <div className='animate'>
                <h4 className='text-[2vw] border-b-[1px] border-[#F0F0F0] pb-[1vw] w-[18vw] am:text-[4vw]'>Websites</h4>
                <div className='mt-[2vw] leading-[2.5vw] am:leading-none'>
                  <h3 className='font-["Gilroy "] text-[#6B6B6B] font-semibold'>Game Studio websites</h3>
                  <h3 className='font-["Gilroy "] text-[#6B6B6B] font-semibold'>Video Games websites</h3>
                  <h3 className='font-["Gilroy "] text-[#6B6B6B] font-semibold'>Web experiences</h3>
                </div>
              </div>

              <div className='animate'>
                <h4 className='text-[2vw] border-b-[1px] border-[#F0F0F0] pb-[1vw] w-[18vw] am:text-[4vw]'>Design</h4>
                <div className='mt-[2vw] leading-[2.5vw] am:leading-none'>
                  <h3 className='font-["Gilroy "] text-[#6B6B6B] font-semibold'>Brand identity</h3>
                  <h3 className='font-["Gilroy "] text-[#6B6B6B] font-semibold'>Web design</h3>
                  <h3 className='font-["Gilroy "] text-[#6B6B6B] font-semibold'>Campaign design</h3>
                </div>
              </div>

              <div className='animate'>
                <h4 className='text-[2vw] border-b-[1px] border-[#F0F0F0] pb-[1vw] w-[18vw] am:text-[4vw]'>Motion graphics</h4>
                <div className='mt-[2vw] leading-[2.5vw] am:leading-none'>
                  <h3 className='font-["Gilroy "] text-[#6B6B6B] font-semibold'>Video</h3>
                  <h3 className='font-["Gilroy "] text-[#6B6B6B] font-semibold'>3D</h3>
                  <h3 className='font-["Gilroy "] text-[#6B6B6B] font-semibold'>Animation</h3>
                </div>
              </div>

              <div className='animate'>
                <h4 className='text-[2vw] border-b-[1px] border-[#F0F0F0] pb-[1vw] w-[18vw] am:text-[4vw]'>Marketing</h4>
                <div className='mt-[2vw] leading-[2.5vw] am:leading-none'>
                  <h3 className='font-["Gilroy "] text-[#6B6B6B] font-semibold'>Video Game Campaigns</h3>
                  <h3 className='font-["Gilroy "] text-[#6B6B6B] font-semibold'>Campaign strategy</h3>
                  <h3 className='font-["Gilroy "] text-[#6B6B6B] font-semibold'>Influencer marketing</h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatwedo;

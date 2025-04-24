import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import React from 'react'
gsap.registerPlugin(ScrollTrigger);

const Hand = () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.main',
            start: "top 50%",
        }
    });
    useGSAP(() => {
        tl.from('.main', {
            x: "-100%",
            delay: 2,
            // scrollTrigger:".main",
            duration: 1,
        });
        tl.from('.inner', {
            x: "-200%",
            opacity:0,
            // scrollTrigger:".inner",  
            duration: 1.3,
        });
        tl.from('.line', {
            y: -100,
            opacity:0,
            duration: .3,
        })
        tl.from('.txt p' , {
            y:100,
            opacity:0,
            stagger:0.2,
        });
        tl.from('.videos' , {
            y:100,
            stagger:0.3,
            opacity:0,
        })

    })
    return (
        <>
            <div className='main w-full h-[100vh] bg-[#F6F6F6] flex justify-center items-center'>
                <div className='inner relative bg-center w-[80%] h-[80%] bg-[#DDDDDD] bg-[url("https://1minus1-2021.s3.eu-west-2.amazonaws.com/small_controller_high_f789a0cf38.png")] bg-no-repeat '>
                    <div  className={` videos  bg-[url("../public/gradientgreen.jpg")] bg-clip-text  font-bold text-transparent text-[5vw] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}>videos</div>
                    <div className='line text-[.8vw]  font-semibold tracking-tighter absolute top-5 right-[-3.6vw] rotate-[90deg]'>CASE STUDIES : VIDEO GAMES</div>
                    <div className='w-1/2 h-[25%]  absolute bottom-0   px-10'>
                        <div className='txt'>
                            <p className='font-bold font-["Gilroy "] text-[#4A4A4A] text-[3vw] '>Case Studies</p>
                            <p className='text-[#4A4A4A]'>Creative Marketing for video <br /> games - from AAA to Indie.</p>
                            <p href="" className='font-semibold border-b-2 border-black mt-[1vw] inline-block'>VIEW CASE STUDIES</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hand

'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger);

const Black = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.black',
                start: "top 50%",
            }
        });

        tl.from('.black', {
            opacity: 0,
            x: "-100%",
            delay: 2,
            duration: 1.5,
        });
        tl.from('.box1', {
            left: "30%",
        });
        tl.from('.box2', {
            right: "0%",
        });
    }, []);

    return (
        <>
            <div className='w-full h-[100vh] relative bg-red-900'>
                <div className='black bg-[#212121] w-full h-[100vh]'>
                    <div className='z-0 w-[80vw] h-[80vh] bg-geen-900 absolute top-1/2 left-1/2 am:left-0 am:-translate-x-0 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='box1 am:hidden w-[70%] h-[40%] bg-[#212121] absolute right-[60%] z-[1]'></div>
                        <div className='box2 am:hidden w-[70%] h-[60%] bg-[#212121] absolute bottom-0 -right-[60%] z-[10]'></div>
                        <div className='w-[60%] am:w-[100%] h-[100%] absolute top-0 right-10 am:left-10'>
                            <video autoPlay loop muted src="https://1minus1-2021.s3.eu-west-2.amazonaws.com/hotwheelz_a7a9952e87.mp4" className='w-full h-[80%] object-cover'></video>
                        </div>
                        <div className='flex g-red-900 gap-10 w-full h-full z-10 absolute top-0 left-0 am:pt-20 bg-ble-900'>
                            <div className='w-1/2 h-full am:pl-2 pl-20'>
                                <div className='text-white'>
                                    {['Results are everything .', "it's that", "simple."].map((item, index) => (
                                        <h3 key={index} className={`text-[5vw]
                                            ${index === 0 && " font-extralight font-['Gilroy '] am:w-[50vw] am:font-bold am:text-[8vw]"}
                                            ${index === 1 && " font-extralight"}
                                            ${index === 2 && " font-bold font-['Gilroy '] -mt-[7.7vw] ml-[16vw]"}`}>
                                            {item}
                                        </h3>
                                    ))}

                                    <p className='leading-[2vw] mt-[.7vw] w-[90%] text-[1.5vw] am:text-[3vw] am:font-bold am:leading-none'>
                                        From award-winning websites to complex web experiences, we've done it all. We've helped Games Studios use the web to hire, acquire players, and access new markets.
                                    </p>

                                    <a href="" className='mt-[1.5vw] inline-block font-["Giloy "] font-bold border-b-2 border-white'>
                                        VIEW SERVICES
                                    </a>
                                </div>
                            </div>

                            <div className='h-full b-blue-900'>
                                <div className='absolute bottom-20 right-5 am:bottom-[4vw] z-[0] am:ml-[40vw]'>
                                    <h1 className='font-["Gilroy "] font-bold text-white text-[12vw]'>40%</h1>
                                    <h4 className='ml-32 am:ml-0 font-["Gilroy "] am:text-[4.5vw] am:leading-none -mt-[3vw] text-white leading-[1.3vw] text-[1.3vw]'>
                                        increase in prospective <br /> employee engagement
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Black

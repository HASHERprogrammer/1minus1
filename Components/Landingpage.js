import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useRef } from 'react'
import { IoMdPlay } from "react-icons/io";
gsap.registerPlugin(ScrollTrigger);





// bgvideos
// https://1minus1-2021.s3.eu-west-2.amazonaws.com/dancer_6905da6b12.webm
// https://1minus1-2021.s3.eu-west-2.amazonaws.com/t10_banner_f3cd4de4a5.webm
const Landingpage = () => {

    const minus1 = useRef(null)



    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.all',
            }
        });
        tl.from(minus1.current, {
            opacity: 0,
            duration: 2,
        })
        tl.to('.loader', {
            opacity: 0,
            duration: .8,
            ease: 'back.inOut',
        })
    })


    return (
        <>

            <div className='relative all bg-[#282526] w-[100vw] h-[100vh]  '>
                <div className='absolute flex items-center justify-center  loader w-full h-[100vh] bg-[#000000fe] z-[999] '>
                    <div className='logo  '>
                        <svg ref={minus1} width="10em" height="10em" viewBox="0 0 104 21" class="header__svg"><g stroke="none" stroke-width="1" fill="#D3D8D7" fill-rule="evenodd"><g transform="translate(0.000000, 5.600000)"><path d="M7.97326641,15.02 L4.72396911,15.02 L4.72396911,3.1468 L0,
        4.89 L0,3.4736 C1.0291583,2.7028 2.60522008,1.5904 4.72396911,
        0.1298 L7.97326641,0.1298 L7.97326641,15.02" fill="#D3D8D7" class="one-a"></path></g> <path d="M34.9337606,11.6624 L34.9337606,13.5288 L38.1818533,
        13.5288 L38.1818533,10.5962 C38.1818533,9.0608 37.8353205,
        7.8302 37.1434595,6.9008 C36.3532201,5.8756 35.2072124,
        5.3662 33.703027,5.3662 C32.2978224,5.3662 30.4113668,
        6.0188 28.0382394,7.3242 C27.3068263,6.0188 26.1594131,
        5.3662 24.5976062,5.3662 C23.0552741,5.3662 21.3238147,
        5.941 19.4080463,7.0876 L19.4080463,5.7574 L16.1585483,
        5.7574 L16.1585483,20.62 L19.4080463,20.62 L19.4080463,
        8.784 C20.7859459,8.0726 21.9795367,7.7184 22.9833977,
        7.7184 C24.0665637,7.7184 24.7967722,8.1346 25.1702085,
        8.9642 C25.4063166,9.4994 25.5255753,10.3966 25.5255753,
        11.6624 L25.5255753,20.62 L28.7734672,20.62 L28.7734672,
        10.5648 C28.7734672,9.971 28.7106255,9.381 28.5863475,
        8.784 C29.9299151,8.0726 31.0978069,7.7184 32.0860077,
        7.7184 C33.9839073,7.7184 34.9337606,9.0326 34.9337606,11.6624" fill="#D3D8D7" class="m"></path> <path d="M41.7843089,20.62 L45.0348108,20.62 L45.0348108,5.7574 L41.7843089,
        5.7574 L41.7843089,20.62 Z M45.2452201,1.9324 C45.2452201,
        2.4048 45.0631197,2.8056 44.6973127,3.1412 C44.3353205,
        3.4736 43.9185174,3.6416 43.4448958,3.6416 C42.9544093,
        3.6416 42.5269653,3.4736 42.1615598,3.1412 C41.7983629,
        2.8056 41.6160618,2.4048 41.6160618,1.9324 C41.6160618,
        1.4416 41.7983629,1.028 42.1615598,0.6956 C42.5269653,
        0.3632 42.9544093,0.1958 43.4448958,0.1958 C43.9361853,
        0.1958 44.3598147,0.3632 44.7137761,0.6956 C45.0667336,
        1.028 45.2452201,1.4416 45.2452201,1.9324 Z" fill="#D3D8D7" class="i"></path> <path d="M60.9761236,6.9008 C60.1860849,5.8756 59.0410811,5.3662 57.5409112,
        5.3662 C56.0019923,5.3662 54.2145174,5.941 52.1816988,
        7.0876 L52.1816988,5.7574 L48.9336062,5.7574 L48.9336062,
        17.5636 L52.1816988,17.5636 L52.1816988,8.784 C53.8153822,
        8.0726 55.1627645,7.7184 56.2254517,7.7184 C57.3058069,
        7.7184 58.0362162,8.1346 58.4108571,8.9642 C58.6457606,
        9.4994 58.76261,10.3966 58.76261,11.6624 L58.76261,
        20.62 L62.0135135,20.62 L62.0135135,10.5962 C62.0135135,
        9.0608 61.6667799,7.8302 60.9761236,6.9008" fill="#D3D8D7" class="n"></path> <path d="M75.3267181,5.742 L75.3267181,16.9498 C73.6544865,
        17.8548 72.3171429,18.3088 71.3136834,18.3088 C70.211444,
        18.3088 69.4734054,17.9444 69.1011737,17.2144 C68.863861,
        16.7426 68.7460077,15.8938 68.7460077,14.673 L68.7460077,
        9.496 L65.4975135,9.496 L65.4975135,15.766 C65.4975135,
        17.3052 65.8430425,18.535 66.5330965,19.4608 C67.3225328,
        20.4858 68.4671351,21 69.9675058,21 C71.5086332,21 73.2951042,
        20.2354 75.3267181,18.7 L75.3267181,20.62 L78.5774208,
        20.62 L78.5774208,5.742 L75.3267181,5.742" fill="#D3D8D7" class="u"></path> <path d="M90.4492819,12.974 C90.2722008,12.8742 89.0237992,12.3834 86.7084942,
        11.496 C85.3803861,10.9848 84.7192432,10.3348 84.7192432,
        9.5486 C84.7192432,8.8032 85.1338378,8.2408 85.9666409,
        7.8674 C86.3607568,7.6838 86.8138996,7.5784 87.2989653,
        7.507 L87.2989653,5.3726 C87.263027,5.3726 87.2294981,
        5.3662 87.1937606,5.3662 C85.7488031,5.3662 84.5036139,
        5.7484 83.4563861,6.5162 C82.3270425,7.3828 81.7648803,
        8.5136 81.7648803,9.9088 C81.7648803,11.3888 82.4272278,
        12.5188 83.7529266,13.3064 C83.8902548,13.3856 85.1248031,
        13.8766 87.4579768,14.7816 C88.7812664,15.2942 89.4434131,
        15.9526 89.4434131,16.7606 C89.4434131,17.4292 89.148278,
        17.9508 88.5553977,18.324 C88.0408185,18.6782 87.4272587,
        18.8546 86.7161236,18.8546 C85.9449575,18.8546 85.1071351,
        18.7088 84.1958301,18.4174 C83.2283089,18.1092 82.4671815,
        17.718 81.9140541,17.2514 L81.9140541,19.614 C83.3949498,
        20.537 84.9874749,21 86.6880154,21 C88.2295444,21 89.5435985,
        20.6238 90.6303784,19.8774 C91.8368185,19.0108 92.4399382,
        17.842 92.4399382,16.3668 C92.4399382,14.8902 91.7749807,13.7588 90.4492819,12.974" fill="#D3D8D7" class="s"></path> <path d="M103.832154,20.62 L100.581251,20.62 L100.581251,8.7468 L95.8560772,
        10.49 L95.8560772,9.0736 C96.8880463,8.3028 98.4625019,7.1904 100.581251,
        5.7298 L103.832154,5.7298 L103.832154,20.62" fill="#D3D8D7" class="one-b"></path></g></svg>
                    </div>
                </div>
                <video autoPlay loop muted src='https://1minus1-2021.s3.eu-west-2.amazonaws.com/dancer_6905da6b12.webm' className='w-[100vw] h-full object-cover z-[0] '></video>

                <div className='am:g-red-900 textoverlay w-full h-full  absolute top-0 left-0 flex items-center justify-center px-10 '>
                    <div className=' inner-hero mt-[60vw] overflow-x-hidden    '>
                        <div className='absolute mt-[6vw]  left-20 am:left-0 top-16 w-[0%]  px-[10vw] py-10 '>
                            <div className='am:-mt-[10vw] lg:-mt-[6vw] -mt-[2vw]  '>
                                {['Distinct.', 'Always.', 'BRANDING,WEBSITES & MARKETING FOR VIDEOS GAMES'].map((item, index) => {
                                    return (
                                        <div className=''>
                                            <h2
                                                key={index}
                                                className={`text-white font-[Neue Montreal] 
                                            ${index === 0 && "am:text-[12vw] text-[6vw] tracking-wide font-light"} 
                                            ${index === 1 && "am:text-[10vw] text-[5vw] -mt-[2vw] am:-mt-[4vw] "} 
                                            ${index === 2 && "text-[.9vw] font-['Neue_Montreal'] font-bold tracking-wide    text-nowrap    am:text-[2.4vw] md:text-[1.5vw] lg:text-[1.5vw]"}`}
                                            >
                                                {item}
                                            </h2>
                                        </div>
                                    )
                                })}
                            </div>


                            <div className='flex am:flex-col am:items-start am:gap-4 gap-8 am:mt-[12vmax]  mt-[12vw] items-center md:mt-[7vw] lg:mt-[3vw]'>
                                <div className='text-white text-[2vw] am:text-[5vw] border-2 border-[#282526] rounded-full p-3 flex itmes-center justify-center ' >
                                    <IoMdPlay />
                                </div>
                                <div className=' am:w-[90vw] '>
                                    <p className='text-white font-bold text-[1.4vw] am:text-[4vw]'>Check out our showreel</p>
                                    <p className='text-white font-light font-["Neue_Montreal"] text-[1.vw] tracking-tight am:text-[3vw] leading-none text-wrap am:w-[100%] w-[27vw] sm:w-[30vw]  sm:text-wrap 2xl:text-[1.2vw] md:w-[50vw]    '>Innovate. Inspire. Create your story. Change the game.  Websites, web experiences, applications and marketing.</p>
                                </div>
                            </div>

                        </div>




                    </div>
                </div>
            </div>
        </>
    )
}

export default Landingpage

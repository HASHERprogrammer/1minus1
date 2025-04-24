'use client'
import Black from '@/Components/Black'
import Car from '@/Components/Car'
import Hand from '@/Components/Hand'
import Landingpage from '@/Components/Landingpage'
import Navbar from '@/Components/Navbar'
import Partner from '@/Components/Partner'
import Whatwedo from '@/Components/Whatwedo'
import React, { useEffect, useRef, useState } from 'react'


const page = () => {

  
  return (
    <div className='w-full'>
      <Navbar />
      <Landingpage />  
      <Partner  />
      <Whatwedo />
      <Black />
      <Hand />
      <Car />
    </div>
  )
}

export default page

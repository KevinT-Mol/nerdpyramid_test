import React from 'react'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <HeroSection/>  
      <Image src="/globe.svg" alt="Hero Image" width={400} height={300} className="mt-8 mx-auto rounded-lg shadow-lg" />
    
    </div>
  )
}

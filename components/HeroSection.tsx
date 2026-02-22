import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="bg-blue-500 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Company</h1>
        <p className="text-xl mb-8">We provide amazing services to our customers.</p>
        <Link href="/about" className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-300">
            Get Started
        </Link>
      </div>
    </section>
  )
}

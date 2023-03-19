import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <section className='mt-5'>
      <div className='bg-black flex justify-between p-24'>
        <div className='grid'>
          <h1 className='font-bold text-2xl text-white '>Follow Me</h1>
          <Link href={""} className='mt-2 text-gray-500 hover:text-white'>Facebook</Link>
          <Link href="" className='mt-1 text-gray-500 hover:text-white'>Twitter</Link>
          <Link href="" className='mt-1 text-gray-500 hover:text-white'>Linkedin</Link>
        </div>
        <div className='grid'>
          <h1 className='font-bold text-2xl text-white'>Links</h1>
          <Link href="" className='text-gray-500 mt-2 hover:text-white'>Github</Link>
          <Link href="" className='text-gray-500 mt-1 hover:text-white'>Linkedin</Link>
          <Link href="" className='text-gray-500 mt-1 hover:text-white'>Twitter</Link>
        </div>
        <div>
          <h1 className='font-bold text-2xl text-white mb-2'>Experience</h1>
          <Link href="" className='text-gray-500 hover:text-white'>Experience</Link>
        </div>
        <div>
          <h1 className='font-bold text-2xl text-white mb-2'>Contact</h1>
          <Link href="" className='text-gray-500 hover:text-white'>Contact</Link>
        </div>
      </div>
    </section>
  )
}

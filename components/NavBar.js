import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../public/assets/logo-1.svg'
const NavBar = () => {
  return (
    <div className=''>
      <div className="container flex flex-col py-6 mx-auto md:items-center lg:flex-row lg:justify-between">
        <Image src={Logo} width={160} alt="" />
        <div className="items-center hidden gap-10 md:flex">
          <div className="flex items-center gap-7">
            <Link href='/' className='text-[#7EC33F] font-semibold text-lg'>
              Home
            </Link>
            <Link href='/' className='text-[#183631] font-medium text-lg'>
              About
            </Link>
            <Link href='/' className='text-[#183631] font-medium text-lg'>
              Pricing
            </Link>
            <Link href='/' className='text-[#183631] font-medium text-lg'>
              Features
            </Link>
          </div>
          <button className='btn btn-active rounded-none bg-[#183631] hover:bg-[#FFB902] border-none'>Download Now</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
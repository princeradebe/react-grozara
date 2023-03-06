import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#7EC33F] text-[#183631] -mt-48 pt-48 flex flex-col'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 container mx-auto py-10  z-[100]">
                <div className="flex flex-col items-start gap-4">
                    <img className='h-8' src="/assets/logo-1.svg" alt="" />
                    <div className="flex items-start gap-2">
                        <img src="/assets/email.svg" alt="" />
                        <p className='text-xs font-medium md:text-lg'>help@grozara.com</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <img src="/assets/phone.svg" alt="" />
                        <p className='text-xs font-medium md:text-lg'>+27 10 822 2628</p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <p className='font-semibold text-md md:text-4xl'>Links</p>
                    <p className='text-xs md:text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Home</p>
                    <p className='text-xs md:text-lg font-medium cursor-pointer hover:text-[#FFB902]'>About</p>
                    <p className='text-xs md:text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Booking</p>
                    <p className='text-xs md:text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Blog</p>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <p className='font-semibold text-md md:text-4xl'>Legal</p>
                    <p className='text-xs md:text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Terms Of Use</p>
                    <p className='text-xs md:text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Privacy Policy</p>
                    <p className='text-xs md:text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Cookie Policy</p>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <p className='font-semibold text-md md:text-4xl'>Product</p>
                    <p className='text-xs md:text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Take Tour</p>
                    <p className='text-xs md:text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Features </p>
                    <p className='text-xs md:text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Reviews</p>

                </div>
                <div className="flex flex-col items-start gap-4">
                    <p className='font-semibold text-md md:text-4xl'>News Letter</p>
                    <p className='font-medium md:text-xl text-md'>Stay Up To Date</p>
                    <div className="flex flex-col items-start gap-2">
                        <input type="text" className='px-3 py-3 bg-white' placeholder='Your email' />
                        <button className='bg-[#183631] w-full text-white btn border-none flex gap-2 items-center capitalize hover:bg-[#FFB902]'>Subscribe</button>
                    </div>

                </div>
            </div>
            <hr className="h-px my-4 bg-[#183631] border-0 dark:bg-gray-700" />
            <div className="flex flex-col items-center pb-4 text-xs">
                <p className=''> &copy; Copyright {new Date().getFullYear()}  Grozara. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
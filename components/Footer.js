import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#7EC33F] text-[#183631] -mt-48 pt-48'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 container mx-auto py-10  z-[100]">
                <div className="flex flex-col gap-4 items-start">
                    <img className='h-10' src="/assets/logo-1.svg" alt="" />
                    <div className="flex gap-2 items-start">
                        <img src="/assets/email.svg" alt="" />
                        <p className='text-lg font-medium'>help@rownok.com</p>
                    </div>
                    <div className="flex gap-2 items-start">
                        <img src="/assets/phone.svg" alt="" />
                        <p className='text-lg font-medium'>+88018763646353</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <p className='text-4xl font-semibold'>Links</p>
                    <p className='text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Home</p>
                    <p className='text-lg font-medium cursor-pointer hover:text-[#FFB902]'>About</p>
                    <p className='text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Booking</p>
                    <p className='text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Blog</p>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <p className='text-4xl font-semibold cursor-pointer'>Legal</p>
                    <p className='text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Terms Of Use</p>
                    <p className='text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Privacy Policy</p>
                    <p className='text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Cookie Policy</p>
                    <p className='text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Blog</p>
                </div>
                <div className="flex flex-col gap-4 items-start">
                    <p className='text-4xl font-semibold'>Product</p>
                    <p className='text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Take Tour</p>
                    <p className='text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Live Chat </p>
                    <p className='text-lg font-medium cursor-pointer hover:text-[#FFB902]'>Reviews</p>

                </div>
                <div className="flex flex-col gap-4 items-start">
                    <p className='text-4xl font-semibold'>News Letter</p>
                    <p className='text-xl font-medium'>Stay Up To Date</p>
                    <div className="flex items-start flex-col gap-2">
                        <input type="text" className='px-3 py-3 bg-white' placeholder='Your email' />
                        <button className='bg-[#183631] w-full text-white btn border-none flex gap-2 items-center capitalize hover:bg-[#FFB902]'>Subscribe</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer
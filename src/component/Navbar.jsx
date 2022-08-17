import React from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const Navbar = () => {


    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
  return (
    <div className='w-full h-[80px] fixed z-10 bg-zinc-200 drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center '>
                <h1 className='font-bold mr-4 text-3xl sm:text-4xl'>BRAND.</h1>
                <ul className='hidden md:flex font-medium'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Support</li>
                    <li>Platforms</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className='hidden md:flex'>
                <button className='bg-transparent mr-4 text-black border-none'>Sign In</button>
                <button className='px-8 py-2'>Sign Up</button>
            </div>
            <div className='md:hidden' onClick={handleNav}>
                {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5' />}
            </div>
            <div  className={nav ? 'w-full bg-zinc-200 absolute px-8 top-[80px] left-0 md:hidden' : 'hidden'}>
                <ul>
                    <li className='border-b-2 border-zinc-300'>Home</li>
                    <li className='border-b-2 border-zinc-300'>About</li>
                    <li className='border-b-2 border-zinc-300'>Support</li>
                    <li className='border-b-2 border-zinc-300'>Platforms</li>
                    <li className='border-b-2 border-zinc-300'>Pricing</li>
                </ul>
                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar
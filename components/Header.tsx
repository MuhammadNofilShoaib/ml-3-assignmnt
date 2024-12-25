"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { FiAlignRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";



const Header = () => {

    const [click, setClick] = useState(false);
    const [cartClick, setCartClick] = useState(false);


    const ToogleMenu = () => {
        setClick(!click);
        if (cartClick) setCartClick(false); 
      }
  

    return (
        <div className="md:h-[100px] bg-white max-w-[1440px] mx-auto font-sans text-4xl overflow-hidden">
        <div className="flex justify-between items-center px-[20px] md:px-[54px] py-[29px] ">
          <div className="flex items-center gap-[5px]">
            <Link href="/" className="font-[700] text-[34px] text-[#000000] capitalize">Nofil Blogs</Link>
          </div>
      
          <div className="hidden lg:flex gap-[75px]">
            <Link href="/" className="capitalize font-[500] text-[16px] text-black leading-[24px] hover:-translate-y-1 hover:underline underline-offset-2 duration-300 ease-in-out">Home</Link>
            <Link href="/about" className="capitalize font-[500] text-[16px] text-black leading-[24px] hover:-translate-y-1 hover:underline underline-offset-2 duration-300 ease-in-out">About</Link>
            <Link href="/blog" className="capitalize font-[500] text-[16px] text-black leading-[24px] hover:-translate-y-1 hover:underline underline-offset-2 duration-300 ease-in-out">Blog</Link>
            <Link href="/contact" className="capitalize font-[500] text-[16px] text-black leading-[24px] hover:-translate-y-1 hover:underline underline-offset-2 duration-300 ease-in-out">Contact</Link>
          </div>
      
      
          <div className="lg:hidden flex justify-center items-center">
            <button onClick={ToogleMenu}>
              {click ? <IoClose className='hover:text-red-600 ease-in-out duration-300' /> : <FiAlignRight className='hover:text-orange-400 ease-in-out duration-300'/>}
            </button>
          </div>
        </div>
      
        <div
          className={`${
            click ? "opacity-100" : "opacity-0"
          } ease-in-out duration-300 flex flex-col justify-center items-center gap-5 absolute top-[80px] p-3 bg-white rounded-md border border-black/50 w-full lg:hidden z-40`}
        >
          <Link href="/" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Home</Link>
          <Link href="/about" className="capitalize font-[500] text-[16px] text-black leading-[24px]">About</Link>
          <Link href="/blog" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Blog</Link>
          <Link href="/contact" className="capitalize font-[500] text-[16px] text-black leading-[24px]">Contact</Link>

        </div>
      </div>
      

    )
}

export default Header

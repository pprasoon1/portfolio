import React from 'react'
import Image from 'next/image'
import { Socials } from '@/constants'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
<div className='flex flex-row gap-3 items-center'>
    <div className='relative'>
    <Image
    src='/horseLogo.jpg'
    alt='logo'
    width={36}
    height={36}
    className='w-full h-full object-contain rounded-full'
    />
    </div>
    <h1 className='text-white text-[20px] font-semibold'>Pranay <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "} 
              Prasoon
              {" "}

            </span></h1>
</div>
        <div className='flex flext-row gap-5 mb-2'>
            {Socials.map((social) => (
              <a key={social.name} href={social.link ? social.link : `mailto:pprasoon999@gmail.com`} target="_blank" rel="noopener noreferrer">
                <Image
                   
                    src={social.src}
                    
                    alt={social.name}
                    width={28}
                    height={28}
                />
                </a>
            ))}

        </div>
    </div>
  )
}

export default Navbar
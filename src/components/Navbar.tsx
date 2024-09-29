'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from './common/Button';

function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  console.log(showMenu);

  return (
    <nav className='flex items-center px-[8%] fixed top-0 left-0 w-full p-4 mx-auto max-w-[1500px] bg-white border-b  z-[100] border-b-[#F6F6F7]'>
      <div className='logo mr-10'>
        <Image src='/icons/Logo.svg' width={80} height={10} alt='Logo' />
      </div>
      <div
        className={`navlinks flex items-center justify-between flex-1 ${
          showMenu ? 'flex' : 'hidden'
        } lg:flex`}>
        <ul className='flex items-center'>
          <li className='p-3'>
            <Link className='font-medium text-black text-sm' href=''>
              Home
            </Link>
          </li>
          <li className='p-3'>
            <Link
              className='font-medium text-black text-sm flex items-center gap-2'
              href=''>
              Developers
              <Image
                src={'/icons/Arrow-down.svg'}
                height={24}
                width={24}
                alt='arrow icon'
              />
            </Link>
          </li>
          <li className='p-3'>
            <Link className='font-medium text-black text-sm' href=''>
              Solutions
            </Link>
          </li>
          <li className='p-3'>
            <Link className='font-medium text-black text-sm' href=''>
              Monetisation
            </Link>
          </li>
          <li className='p-3'>
            <Link className='font-medium text-black text-sm' href=''>
              Company
            </Link>
          </li>
        </ul>
        <div className='actions z-[100] flex items-center gap-3 max-lg:w-full max-lg:flex-col'>
          <Button className='border max-lg:w-full  border-gray-300 py-2 px-5 rounded-lg text-base font-medium'>
            Login
          </Button>
          <Button className='bg-black max-lg:w-full  text-white'>
            Sign up
          </Button>
        </div>
      </div>

      <button
        className='max-lg:block hidden ml-auto cursor-pointer items-center justify-center rounded-full border-2 border-gray-100 px-6 py-2  z-[100] font-lota text-[12px] font-semibold brk-1024:block brk-500:right-[20px'
        onClick={() => setShowMenu(!showMenu)}>
        menu
      </button>
    </nav>
  );
}

export default Navbar;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer() {
  return (
    <footer className=' px-[8%]'>
      <div className='py-20 flex flex-1 max-lg:flex-col'>
        <div className='flex items-start w-1/2 max-lg:mb-20 max-lg:justify-start max-lg:w-full'>
          <div className='logo mr-10'>
            <Image
              src='/icons/logo-white.svg'
              width={80}
              height={10}
              alt='Logo'
            />
          </div>
          <p className='text-lg text-white'>
            The fastest way to build travel apps
          </p>
        </div>
        <div className='flex items-start w-1/2 max-lg:w-full max-lg:justify-start justify-end gap-14'>
          <div className='links'>
            <h4 className='uppercase '>Product</h4>
            <ul>
              <li>
                <Link href={''}>Log in</Link>
              </li>
              <li>
                <Link href={''}>Pricing</Link>
              </li>
              <li>
                <Link href={''}>Use cases</Link>
              </li>
            </ul>
          </div>
          <div className='links'>
            <h4 className='uppercase'>Solutions</h4>
            <ul>
              <li>
                <Link href={''}>Travel API</Link>
              </li>
              <li>
                <Link href={''}>Payment links</Link>
              </li>
              <li>
                <Link href={''}>Switch</Link>
              </li>
            </ul>
          </div>
          <div className='links'>
            <h4 className='uppercase '>Support</h4>
            <ul>
              <li>
                <Link href={''}>FAQ</Link>
              </li>
              <li>
                <Link href={''}>Integrations</Link>
              </li>
            </ul>
          </div>
          <div className='links'>
            <h4 className='uppercase '>Company</h4>
            <ul>
              <li>
                <Link href={''}>About us</Link>
              </li>
              <li>
                <Link href={''}>Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-bottom w-full border-t border-t-text max-lg:justify-start max-lg:flex-col'>
        <h4 className='mb-0'>Copyright © 2023 liteAPI. All rights reserved</h4>
        <ul className='flex flex-row items-center gap-10 ml-5 max-lg:flex-wrap'>
          <li>
            <Link href={''}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={''}>Cookies Policy</Link>
          </li>
          <li>
            <Link href={''}>Terms of Use</Link>
          </li>
        </ul>
        <div className='ml-auto flex max-lg:ml-0 items-center max-lg:justify-start max-lg:items-start gap-5'>
          <img src={'/icons/facebook.svg'} alt='facebook logo' />
          <img src={'/icons/twitter.svg'} alt='twitter logo' />
          <img src={'/icons/instagram.svg'} alt='IG logo' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

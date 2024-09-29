import React from 'react';
import Button from '../common/Button';
import Feature from './Feature';
import ApiTest from '../common/ApiTest';
import CodeViewer from '../common/CodeViewer';
import MapWidget from '../common/MapWidget';
import HotelsCards from '../common/HotelsCards';

function HeroPage() {
  return (
    <section className=' flex flex-col justify-center items-center main-bg pb-24'>
      <div className='w-[50%] max-md:w-[90%] mx-auto mt-20 text-center'>
        <h5 className='text-primary text-sm'>Solutions</h5>
        <h1 className='font-semibold text-[40px] mb-8 mt-3'>
          From in-depth API access to a fully-branded white label website
        </h1>
        <div className='ctas'>
          <Button className='bg-black text-white'>Join now</Button>
          <Button className='bg-transaprent text-black'>View docs</Button>
        </div>
      </div>
      <div className='features flex items-center justify-center gap-16 max-lg:flex-wrap  max-md:w-full max-xl:gap-2 w-[80%] container mt-28 max-lg:mt-20'>
        <Feature
          icon='code-square.svg'
          title='Full code'
          description='Full custom API integration'>
          <ApiTest className='rounded-lg' />
          <CodeViewer language='javascript' />
        </Feature>
        <Feature
          icon='grid-web.svg'
          title='Low code'
          description='Add booking widgets within your current product'>
          <MapWidget />
        </Feature>
        <Feature
          icon='code-square.svg'
          title='No code'
          description='A fully customizable, ready-to-launch hotel booking website'>
          <HotelsCards />
        </Feature>
      </div>
    </section>
  );
}

export default HeroPage;

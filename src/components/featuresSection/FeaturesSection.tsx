'use client';
import React, { useRef } from 'react';
import FeatureSection from './FeatureSection';
import ApiTest from '../common/ApiTest';
import CodeViewer from '../common/CodeViewer';
import MapWidget from '../common/MapWidget';
import Image from 'next/image';
import Button from '../common/Button';
import { motion, useInView } from 'framer-motion';

function FeaturesSection() {
  const ref = useRef(null);

  // Check if the component is in view
  const isInView = useInView(ref, { once: false });
  return (
    <div className='py-20 flex flex-col gap-7 bg-white w-[85%] mx-auto'>
      <FeatureSection
        title='Custom Code—API Integration'
        subTitle='API integration'
        description='For developers seeking comprehensive control and the ability to tailor every aspect of their solution, our API offers direct integration capabilities, empowering you to customize and optimize every detail to meet your specific needs and preferences.'
        icon='code-square.svg'>
        <div className='flex-1 px-6 overflow-hidden max-lg:px-0'>
          <h5 className='text-[12px] font-normal'>01. Search request</h5>
          <ApiTest
            className='shadow-custom mt-2 p-3 rounded-2xl'
            fontSize='14px'
            rounded='8px'
          />
          <CodeViewer
            className='bg-white mt-7 overflow-hidden shadow-custom'
            language='javascript'
          />
        </div>
      </FeatureSection>
      <FeatureSection
        title='Widgets'
        subTitle='Low code — Widgets '
        description='If you’re looking for a quicker way to add travel functionality to your website or platform, our low code widgets are the perfect solution. Designed for easy implementation, these widgets allow you to enhance your site with powerful travel tools without needing extensive coding knowledge. Get up and running quickly with all the essential features your users need.'
        icon='grid-web.svg'>
        <div className='flex-1 px-6 max-lg:px-0'>
          <MapWidget size='large' />
        </div>
      </FeatureSection>
      <FeatureSection
        title='Whitelabel'
        subTitle='No code — Whitelabel'
        description='For businesses wanting a ready-to-use solution without the need for development, our no-code White Label offering delivers a complete travel booking platform right out of the box. Ideal for non-technical users or those who need to launch quickly, this option allows you to start offering travel services immediately, fully branded and tailored to your business.'
        icon='credit-card.svg'>
        <div className='flex-1 px-6 max-w-1/2 overflow-hidden h-fit max-lg:px-0'>
          <img
            src={'icons/web-app.svg'}
            className=' shadow-custom rounded-2xl h-full  max-lg:h-[90%] object-cover w-full'
            alt='webApp white lable'
          />
        </div>
      </FeatureSection>
      <div
        ref={ref}
        className='startSection overflow-hidden relative h-[427px] max-lg:h-[300px] max-lg:p-5 flex-col'>
        <Image
          className='absolute  object-cover left-0 w-full h-full opacity-[0.5] z-[0]'
          src={'/icons/bg-start.svg'}
          alt=''
          height={10}
          width={10}
        />
        <motion.div
          className='layers'
          initial={{ opacity: 0, y: '200%' }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? '0%' : '200%' }}
          transition={{ duration: 1 }}>
          <img
            className='w-full  max-lg:h-[100%]'
            src='icons/layers.svg'
            alt='Background'
          />
        </motion.div>
        <h2 className='text-4xl z-10 font-semibold max-lg:text-lg'>
          Start Earning Right Now
        </h2>
        <p className='text-base z-10 text-black mt-2 w-[35%] max-lg:text-xs max-lg:w-[60%] text-center'>
          Feeling ready to start earning ? Sign up now and get your API Key with
          ease
        </p>
        <Button className='bg-black z-10 text-white mt-8'>Get started</Button>
      </div>
    </div>
  );
}

export default FeaturesSection;

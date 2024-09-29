import Image from 'next/image';
import React, { FC } from 'react';
interface FeatureType {
  title: string;
  description: string;
  icon: string;
  children: React.ReactNode;
}

const Feature: FC<FeatureType> = ({ icon, title, description, children }) => {
  return (
    <div className='feature-card flex flex-col gap-4 border max-md:max-w-[100%] max-md:w-[80%] max-lg:w-[50%] max-w-[316px] w-[33%]  max-h-[368px] overflow-hidden bg-white border-[#D6D2FF] p-4 rounded-2xl  shadow-custom'>
      <div className='pb-3 border-b border-[#F6F6F7]'>
        <div className='flex items-center gap-2'>
          <Image
            src={`/icons/${icon}`}
            alt='Code Icon'
            width={20}
            height={20}
          />
          <span className='text-base font-semibold family-lota '>{title}</span>
        </div>
        <p className='text-text font-normal text-xs mt-2'>{description}</p>
      </div>
      {children}
    </div>
  );
};

export default Feature;

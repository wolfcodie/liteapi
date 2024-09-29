import Image from 'next/image';
import React, { FC } from 'react';
import Button from '../common/Button';
interface FeatureType {
  title: string;
  description: string;
  subTitle: string;
  icon: string;
  children: React.ReactNode;
  reversed?: boolean;
}
const FeatureSection: FC<FeatureType> = ({
  icon,
  title,
  subTitle,
  description,
  children,
  reversed,
}) => {
  return (
    <div className='featureSection overflow-hidden h-[561px] max-lg:h-fit max-lg:p-5 max-lg:flex-col'>
      <div className={`flex flex-col flex-1 gap-3 ${reversed && 'order-2'}`}>
        <div className='flex items-center gap-2'>
          <Image
            src={`/icons/${icon}`}
            alt='Code Icon'
            width={20}
            height={20}
          />

          <span className='text-base font-normal '>{title}</span>
        </div>
        <h1 className='text-3xl font-semibold'>{subTitle}</h1>
        <p className='text-text font-light text-base mt-2 max-lg:text-xs'>
          {description}
        </p>
        <Button className='bg-primary text-white mt-2 w-fit'>Explore</Button>
      </div>
      {children}
    </div>
  );
};

export default FeatureSection;

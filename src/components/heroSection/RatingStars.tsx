import Image from 'next/image';
import React from 'react';

function RatingStars() {
  return (
    <div className='flex gap-[2px]'>
      <Image src={'/icons/star.svg'} height={5} width={5} alt='' />
      <Image src={'/icons/star.svg'} height={5} width={5} alt='' />
      <Image src={'/icons/star.svg'} height={5} width={5} alt='' />
      <Image src={'/icons/star.svg'} height={5} width={5} alt='' />
      <Image src={'/icons/star.svg'} height={5} width={5} alt='' />
    </div>
  );
}

export default RatingStars;

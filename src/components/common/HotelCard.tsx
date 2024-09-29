import Image from 'next/image';
import React from 'react';

function HotelCard() {
  return (
    <div className='border border-[#F6F6F7] rounded-[4px] flex items-center p-[2px] w-full'>
      <div className='gallery grid grid-cols-2 grid-rows-2 gap-2'>
        <div className='col-span-2'></div>
        <div className='row-start-2 rounded-t-[4px]'>
          <Image src={'/images/image.png'} alt='' height={20} width={20} />
        </div>
        <div className='row-start-2'>3</div>
      </div>
    </div>
  );
}

export default HotelCard;

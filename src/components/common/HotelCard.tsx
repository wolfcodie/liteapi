import Image from 'next/image';
import React from 'react';
import RatingStars from '../heroSection/RatingStars';

function HotelCard() {
  return (
    <div className='border border-[#F6F6F7] rounded-[4px] flex items-center p-[2px] w-full h-[90px]'>
      <div className='hotels-gallery'>
        <div className=' main-picture relative'>
          <Image
            className='rounded-t-[4px]'
            src={'/images/image.png'}
            alt=''
            height={20}
            width={20}
          />
          <circle className='absolute top-1 left-1 z-20 bg-white rounded-full h-[10px] w-[10px] flex items-center justify-center'>
            <Image src={'/icons/heart.svg'} alt='' height={5} width={5} />
          </circle>
        </div>
        <div className='sub-gallery flex h-1/3 gap-1'>
          <Image
            className=' sub-picture rounded-bl-[4px]'
            src={'/images/room-1.png'}
            alt=''
            height={10}
            width={20}
          />
          <Image
            className='sub-picture rounded-br-[4px]'
            src={'/images/room-2.png'}
            alt=''
            height={10}
            width={20}
          />
        </div>
      </div>
      <div className='p-2 flex flex-col flex-1'>
        <div className='flex flex-col gap-[3px]'>
          <RatingStars />
          <h5 className='text-[11px] leading-4 text-black font-semibold '>
            Petinos Beach Hotel
          </h5>
          <div className='flex'>
            <div className='flex gap-1 items-center'>
              <Image src={'icons/location.svg'} alt='' height={6} width={6} />
              <h6 className='text-6 text-smallText'>
                208 Olson Boulevard, Toyburgh
              </h6>
              <span className='text-6'>-</span>
              <button className='text-6 text-red-300 underline'>
                Show on map
              </button>
            </div>
          </div>
          <div className='flex mt-3 w-full'>
            <div className='flex gap-1 items-center'>
              <div className='rate text-white'>6</div>
              <div className='flex flex-col'>
                <h6 className='text-6 font-semibold'>Excellent</h6>
                <h6 className='text-[5px] font-normal text-[#6C737F]'>
                  (173 reviews)
                </h6>
              </div>
            </div>
            <div className='flex flex-col ml-auto'>
              <div className='flex items-center gap-1 ml-auto'>
                <h6 className='text-[8px] font-normal line-through text-[#6C737F]'>
                  $1036
                </h6>
                <h6 className='text-[10px] font-semibold'>$829</h6>
              </div>
              <span className='text-6 text-smallText'>
                3 nights x 2 rooms, incl. taxes
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;

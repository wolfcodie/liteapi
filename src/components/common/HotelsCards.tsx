import React from 'react';
import HotelCard from './HotelCard';

function HotelsCards() {
  return (
    <div className='flex flex-col gap-1'>
      <HotelCard />
      <HotelCard />
      <HotelCard />
    </div>
  );
}

export default HotelsCards;

import React from 'react';
import Map from './Map';

function MapWidget() {
  return (
    <div className='mt-2 shadow-lg p-2 rounded-lg flex flex-col gap-1'>
      <div className='flex flex-col gap-1 text-center'>
        <div className='flex items-center justify-center gap-1'>
          <span className='border border-purple-400 bg-purple-100 text-purple-500 rounded-full px-1 p-[4px] text-[5px]'>
            travel
          </span>
          <span className='border border-blue-400 bg-blue-100 text-blue-500 rounded-full px-1 p-[4px] text-[5px]'>
            Destinations
          </span>
        </div>
        <h6 className='text-black text-[8px] font-semibold'>
          How To Visit London On A Day Trip From Athens
        </h6>
        <ul className='flex items-center gap-3 text-center mx-auto pb-1 border-b border-dotted'>
          <li className='text-[6px] text-text'>by David & Intan</li>
          <li className='list-disc text-[6px] text-text'>
            Published 20 Jan 2024
          </li>
          <li className='list-disc text-[6px] text-text'>8 min read</li>
        </ul>
      </div>
      <p className='text-[6px] text-[#9897A0]'>
        London's historic landmarks offer some of the best day trips from the
        city center. We preferred exploring quieter sites like the Roman Wall
        and St. Dunstan-in-the-East over more crowded attractions like the Tower
        of London.
      </p>
      <h6 className='text-black text-[8px] font-semibold text-center'>
        Search for your hotel
      </h6>
      <Map />
      <p className='text-[6px] mt-1 text-[#9897A0]'>
        For Christians, Corinth is especially interesting because you can walk
        in the footsteps of the Apostle Paul, who spent 18 months there as a
        missionary, and famously wrote the letters of First and Second
        Corinthians. <br />
        This travel guide will explain how to get to Corinth on a day trip from
        Athens, and what to expect when you visit!
      </p>
    </div>
  );
}

export default MapWidget;

import React from 'react';
import Map from './Map';

interface MapWidgetProps {
  size?: 'small' | 'large'; // Accept size prop
}

function MapWidget({ size = 'small' }: MapWidgetProps) {
  return (
    <div
      className={`mt-2 shadow-lg ${
        size === 'large'
          ? 'p-6 gap-4 rounded-2xl h-[120%]'
          : 'p-2 gap-1 rounded-lg'
      }  flex flex-col bg-white`}>
      <div className='flex flex-col gap-1 text-center'>
        <div className='flex items-center justify-center gap-1'>
          <span className='border border-purple-400 bg-purple-100 text-purple-500 rounded-full px-1 p-[4px] text-[5px]'>
            travel
          </span>
          <span className='border border-blue-400 bg-blue-100 text-blue-500 rounded-full px-1 p-[4px] text-[5px]'>
            Destinations
          </span>
        </div>
        <h6
          className={`text-black ${
            size === 'large' ? 'text-[12px]' : 'text-[8px]'
          } font-semibold`}>
          How To Visit London On A Day Trip From Athens
        </h6>
        <ul
          className={`flex items-center gap-3 text-center mx-auto pb-1 border-b border-dotted ${
            size === 'large' ? 'border-b-3' : ''
          }`}>
          <li
            className={`${
              size === 'large' ? 'text-[10px]' : 'text-[6px]'
            } text-text`}>
            by David & Intan
          </li>
          <li
            className={`list-disc ${
              size === 'large' ? 'text-[10px]' : 'text-[6px]'
            } text-text`}>
            Published 20 Jan 2024
          </li>
          <li
            className={`list-disc ${
              size === 'large' ? 'text-[10px]' : 'text-[6px]'
            } text-text`}>
            8 min read
          </li>
        </ul>
      </div>
      <p
        className={`${
          size === 'large' ? 'text-[10px]' : 'text-[6px]'
        } text-[#9897A0]`}>
        London's historic landmarks offer some of the best day trips from the
        city center. We preferred exploring quieter sites like the Roman Wall
        and St. Dunstan-in-the-East over more crowded attractions like the Tower
        of London.
      </p>
      <h6
        className={`text-black ${
          size === 'large' ? 'text-[12px]' : 'text-[8px]'
        } font-semibold ${size !== 'large' && 'text-center'}`}>
        Search for your hotel
      </h6>
      <Map />
      <p
        className={`${
          size === 'large' ? 'text-[10px]' : 'text-[6px]'
        } mt-1 text-[#9897A0]`}>
        For Christians, Corinth is especially interesting because you can walk
        in the footsteps of the Apostle Paul, who spent 18 months there as a
        missionary and famously wrote the letters of First and Second
        Corinthians. <br />
        This travel guide will explain how to get to Corinth on a day trip from
        Athens, and what to expect when you visit!
      </p>
    </div>
  );
}

export default MapWidget;

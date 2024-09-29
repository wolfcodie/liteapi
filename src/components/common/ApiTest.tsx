import React from 'react';

function ApiTest() {
  return (
    <div className='p-2 flex items-center border border-[#F6F6F7] rounded-lg gap-[6px]'>
      <span className='bg-successLight py-[9px] px-4 text-success text-[10px] font-semibold rounded-[4px]'>
        Get
      </span>
      <span className='text-text text-[10px] font-medium text-wrap  flex-1 overflow-hidden truncate'>
        https://api.liteapi.travel/v3.0/hotels/rates/hotel{'{ID}'}/roomtypes
      </span>
      <button className='bg-[#079455] py-[9px] text-[10px] px-4 font-semibold  text-white rounded-[4px]'>
        Send
      </button>
    </div>
  );
}

export default ApiTest;

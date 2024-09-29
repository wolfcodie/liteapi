import React from 'react';

function ApiTest({
  className,
  fontSize = '10px',
  rounded = '4px',
}: {
  className?: string;
  fontSize?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`p-2 flex items-center border border-[#F6F6F7] bg-white  gap-[6px] ${className}`}>
      <span
        className='bg-successLight py-[9px] px-4 text-success font-semibold '
        style={{ fontSize, borderRadius: rounded }}>
        Get
      </span>
      <span
        className='text-text font-medium text-wrap flex-1 overflow-hidden truncate apilink'
        style={{ fontSize }}>
        https://api.liteapi.travel/v3.0/hotels/rates/hotel{'{ID}'}/roomtypes
      </span>
      <button
        className='bg-[#079455] py-[9px] px-4 font-semibold text-white '
        style={{ fontSize, borderRadius: rounded }}>
        Send
      </button>
    </div>
  );
}

export default ApiTest;

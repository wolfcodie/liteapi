import React from 'react';

function Map() {
  return (
    <div className='border-dashed border border-primary rounded-lg w-full h-[100px] overflow-hidden '>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53181.18120247663!2d-7.6480512!3d33.583923199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1727581109439!5m2!1sen!2sma'
        width='100%'
        height='100%'
        style={{ border: 0 }}
        allowFullScreen={false}
        loading='lazy'></iframe>
    </div>
  );
}

export default Map;

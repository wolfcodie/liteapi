import React from 'react';
import HeroPage from './heroSection/HeroPage';
import FeaturesSection from './featuresSection/FeaturesSection';

function MainContent() {
  return (
    <main className='pt-[80px]'>
      <HeroPage />
      <FeaturesSection />
    </main>
  );
}

export default MainContent;

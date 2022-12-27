import React from 'react';

import ScreenProcess from '../Components/LandingPage/ScreenProcess';
import Testimonial from '../Components/LandingPage/Testimonial';

import Hero from '../Components/LandingPage/Hero';
import YourTechnologies from '../Components/LandingPage/YourTechnologies';
import HireBestDevelopers from '../Components/LandingPage/HireBestDevelopers';
import Footer from '../Components/LandingPage/Footer';
import FAQ from '../Components/LandingPage/FAQ';
import ProjectManager from '../Components/LandingPage/ProjectManager';
import TrustedWebsites from '../Components/LandingPage/TrustedWebsites';
import MainHeader from '../Components/LandingPage/MainHeader';

const LandingPage = () => {
  return (
    <div className='w-screen flex flex-col gap-28'>
      <MainHeader />
      <Hero />
      <HireBestDevelopers />
      <YourTechnologies />
      <ScreenProcess />
      <ProjectManager />
      <Testimonial />
      <TrustedWebsites />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;

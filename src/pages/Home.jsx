import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { TopNavbar } from '../components/TopNavbar';
import { WorkingExperience } from '../components/home/working-experience';
import { FeaturedProjects } from '../components/home/featured-projects/FeaturedProjects';
import { FeaturedProjectsBanner } from '../components/home/featured-projects/FeaturedProjectsBanner';
import { ServicesProvided } from '../components/home/ServicesProvided';
import { CollaborationContainer } from '../components/CollaborationContainer';
import { Footer } from '../components/Footer';
import { Hero } from '../components/home/Hero';

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-hidden">
      <img src="/portfolio/Group_20807.png" className="path__1" alt="" />
      
      <div className="bg__blue position-relative">
        <div className="wrapper__wrap-bg bg__blue-2">
          <div className="position-relative d-none d-md-block w-100 h-100">
            <img src="/portfolio/PATTERN_1.png" className="img" alt="" />
          </div>
        </div>
        <TopNavbar />
        <Hero />
      </div>
      <FeaturedProjectsBanner />
      <ServicesProvided />
      <FeaturedProjects />
      <WorkingExperience />
      {/* <Testimonial /> */}
      <CollaborationContainer />
      <Footer />
    </div>
  );
};

export default HomePage;

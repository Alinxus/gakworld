import React from 'react';
import About from '././components/About';
import FaqSection from '././components/FaqSection.jsx';
import Footer from '././components/Footer.jsx';
import Herosection from '././components/Herosection.jsx';
import Navbar from '././components/Navbar.jsx';
import Projects from '././components/Projects.jsx';
import Services from '././components/Services';
import Testimonial from '././components/Testimonial.jsx';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <FaqSection />
      <Projects />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Page;
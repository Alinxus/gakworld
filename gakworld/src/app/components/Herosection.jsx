// components/HeroSection.js
'use client'
import React, { useState } from 'react';

const HeroSection = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const backgroundImages = [
    '/public/climbing',
    '/washing',
    '/images/construction-3.jpg',
  ];

  const handleNextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
  };

  return (
    <section
      className={`bg-cover bg-center h-screen flex items-center justify-center text-white transition-all duration-500 ${backgroundImages[imageIndex]}`}
    >
      <div className="max-w-3xl text-center px-4 sm:px-0">
        <h1 className="text-5xl font-bold mb-4 sm:text-6xl">Quality construction begins with a quality relationship</h1>
        <p className="text-xl mb-8 sm:text-2xl">
          Discover our comprehensive construction services and see how we can transform your vision into reality.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleNextImage}
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition-colors duration-300"
          >
            Discover More
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-blue-500 text-white py-3 px-6 rounded-full transition-colors duration-300">
            Play Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
'use client'
import React, { useState } from 'react';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: '/john-doe.jpg',
      name: 'Gniu Kuku',
      location: 'Dallas, Texas, USA',
      rating: 4.9,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 2,
      image: '/jane-smith.jpg',
      name: 'Jane Smith',
      location: 'New York City, NY, USA',
      rating: 4.7,
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    // Add more testimonials as needed
  ];

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Testimonials
        </h2>
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="w-32 h-32 sm:mr-8 rounded-full overflow-hidden">
              <img src={currentTestimonial.image} alt={currentTestimonial.name} className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 sm:mt-0 text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900">{currentTestimonial.name}</h3>
              <p className="text-gray-600">{currentTestimonial.location}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 font-bold text-2xl">{currentTestimonial.rating.toFixed(1)}</span>
                <span className="ml-2 text-gray-500">/ 5.0</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-700">{currentTestimonial.text}</p>
          <div className="flex justify-center mt-6">
            <button
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-md mr-2"
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
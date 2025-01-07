'use client';

import React, { useState } from 'react';

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      image: '/images/testimonial1.jpg',
      name: 'Mr. Adewale Johnson',
      location: 'Lagos, Nigeria',
      rating: 5.0,
      text: 'Gakworld Nigeria Limited provided exceptional waste management services for our residential community. Their professionalism, punctuality, and environmentally conscious approach exceeded our expectations. We highly recommend their services to anyone seeking sustainable solutions.',
    },
    {
      id: 2,
      image: '/images/testimonial2.jpg',
      name: 'Mrs. Grace Uche',
      location: 'Abuja, Nigeria',
      rating: 4.8,
      text: 'The cleaning team from Gakworld is simply outstanding! Our office spaces are now spotless, and their attention to detail is unmatched. Their use of eco-friendly products is a bonus, ensuring a safe and healthy environment for our employees.',
    },
    {
      id: 3,
      image: '/images/testimonial3.jpg',
      name: 'Dr. Samuel Oladipo',
      location: 'Port Harcourt, Nigeria',
      rating: 4.9,
      text: 'We engaged Gakworld for pest control in our hospital, and the results were excellent. Their integrated pest management strategies are both effective and environmentally safe. We now have a pest-free facility and peace of mind.',
    },
    {
      id: 4,
      image: '/images/testimonial4.jpg',
      name: 'Engr. Michael Eze',
      location: 'Kano, Nigeria',
      rating: 4.7,
      text: 'Gakworld handled our waste disposal project with remarkable efficiency. Their team ensured all hazardous waste was disposed of responsibly, adhering to environmental regulations. We are thoroughly impressed with their services.',
    },
    {
      id: 5,
      image: '/images/testimonial5.jpg',
      name: 'Ms. Patricia Akpan',
      location: 'Enugu, Nigeria',
      rating: 5.0,
      text: 'Gakworld’s building and construction services are top-notch. They completed our commercial complex on time and within budget while maintaining the highest standards of quality. We look forward to working with them again on future projects.',
    },
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
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="w-32 h-32 sm:mr-8 rounded-full overflow-hidden">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 sm:mt-0 text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900">
                {currentTestimonial.name}
              </h3>
              <p className="text-gray-600">{currentTestimonial.location}</p>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500 font-bold text-2xl">
                  {currentTestimonial.rating.toFixed(1)}
                </span>
                <span className="ml-2 text-gray-500">/ 5.0</span>
              </div>
            </div>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed">
            “{currentTestimonial.text}”
          </p>
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

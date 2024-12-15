'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const router = useRouter();

  const services = [
    {
      title: 'Residential Developments',
      description: 'Bungalows, Maisonettes, Villas, Townhouses, Mansions, Apartments',
      link: '/services/residential'
    },
    {
      title: 'Commercial',
      description: 'Office complexes, retail spaces, and comprehensive commercial property solutions.',
      link: '/services/commercial'
    },
    {
      title: 'Institutional',
      description: 'Manufacturing facilities, warehouses, and specialized industrial infrastructure.',
      link: '/services/institutional'
    }
  ];

  const handleServiceHover = (index) => {
    setActiveService(index);
  };

  const handleServiceClick = (link) => {
    router.push(link);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 ${
                activeService === index ? 'border-2 border-blue-500' : ''
              }`}
              onMouseEnter={() => handleServiceHover(index)}
              onMouseLeave={() => handleServiceHover(null)}
              onClick={() => handleServiceClick(service.link)}
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition-colors duration-300">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
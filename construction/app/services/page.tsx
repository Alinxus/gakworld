'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
        <nav className="hidden md:flex gap-x-8 text-lg">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
        </nav>
        <button
          className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
          <nav className="flex flex-col gap-y-4 text-gray-700 font-medium">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">
              Home
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const ServiceCard = ({ service, onClick } : any) => (
  <div
    className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
    onClick={onClick}
  >
    <Image
      src={service.image}
      alt={service.title}
      width={400}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
      <p className="text-sm text-gray-600">{service.subtitle}</p>
    </div>
  </div>
);

const ServicePopup = ({ service, onClose } : any) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
        onClick={onClose}
      >
        ✖
      </button>
      <Image
        src={service.image}
        alt={service.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
      <p className="text-sm text-gray-600 mb-4">{service.description}</p>
      <p className="text-sm text-gray-600">{service.extendedDescription}</p>
    </div>
  </div>
);

export default function ServicesPages() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Our Services
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onClick={() => setSelectedService(service as any)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Service Popup */}
      {selectedService && (
        <ServicePopup
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}

const services = [
  {
    title: 'Professional Cleaning Services',
    subtitle: 'Thorough cleaning for homes, offices, and industries.',
    description:
      'We provide stripping, scrubbing, polishing, and buffing of tiles and marble floors, along with maintenance of property and janitorial services.',
    extendedDescription:
      'Our cleaning services include toilets, windows, and high-risen external wall cleaning. We use advanced materials and anti-fungal agents to ensure hygiene and safety. Additionally, we maintain the highest standards by employing trained professionals and modern equipment.',
    image: '/images/climbing.jpg',
  },
  {
    title: 'Pest Control Services',
    subtitle: 'Efficient pest control and rodent management solutions.',
    description:
      'Our pest control includes fumigation, deratization, and decontamination services for offices, gardens, warehouses, and homes.',
    extendedDescription:
      'We use eco-friendly baits, advanced equipment, and IPM (Integrated Pest Management) techniques to eliminate pests and prevent reoccurrence. We ensure your space remains safe, hygienic, and pest-free.',
    image: '/images/pest.jpeg',
  },
  {
    title: 'Waste Disposal Services',
    subtitle: 'Reliable waste collection and disposal.',
    description:
      'We handle weekly waste removal and provide industrial waste bins made from durable materials like steel and plastic.',
    extendedDescription:
      'Our waste disposal services ensure cleanliness and sustainability. We comply with environmental regulations, offering tailored solutions for industrial, residential, and commercial clients.',
    image: '/images/7.jpg',
  },
  {
    title: 'Construction and Drainage Services',
    subtitle: 'Expert solutions for building and drainage systems.',
    description:
      'We specialize in construction, drainage systems, and civil engineering services with an emphasis on quality and efficiency.',
    extendedDescription:
      'Our services include site preparation, earthmoving, tunneling, and drainage installations. We employ modern technologies to meet project demands while adhering to sustainable practices.',
    image: '/images/1.jpg',
  },
  {
    title: 'High-Risen External Wall Cleaning',
    subtitle: 'Professional external wall cleaning services.',
    description:
      'We restore the aesthetics of exterior walls and glass panels using anti-fungal agents and extendable equipment.',
    extendedDescription:
      'Our techniques include telescopic squeegees, wall washers, and anti-fungal treatments to remove greenish appearances and maintain aluminum frames. We ensure a professional finish for high-rise structures.',
    image: '/images/washing.jpg',
  },
  {
    title: 'Logistics Services',
    subtitle: 'Comprehensive logistics and supply chain management solutions.',
    description:
      'Streamline the movement of goods with our reliable logistics services, ensuring timely delivery and cost-efficiency.',
    extendedDescription:
      'Our logistics services include end-to-end transportation, advanced warehousing solutions, distribution networks, and supply chain optimization. With real-time tracking systems and a commitment to sustainability, we help businesses enhance operational productivity while reducing costs and environmental impact.',
    image: '/images/logistics.jpg',
  },
  {
    title: 'Oil and Gas Services',
    subtitle: 'Expert solutions for the oil and gas industry.',
    description:
      'Optimize operations in the oil and gas sector with our exploration, drilling, pipeline, and refinery services.',
    extendedDescription:
      'We provide a full spectrum of services in the oil and gas industry, including exploration, advanced drilling technologies, pipeline installation and maintenance, and storage solutions. Our team ensures compliance with environmental standards while delivering innovative solutions for sustainable operations and long-term efficiency.',
    image: '/images/offshore_platform.jpg',
  },
  
];

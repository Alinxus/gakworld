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
          <Link href="/waste-management" className="hover:text-blue-500">
            Waste Management
          </Link>
          <Link href="/cleaning-services" className="hover:text-blue-500">
            Cleaning Services
          </Link>
          <Link href="/pest-control" className="hover:text-blue-500">
            Pest Control
          </Link>
          <Link href="/waste-disposal" className="hover:text-blue-500">
            Waste Disposal
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
            <Link href="/waste-management" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">
              Waste Management
            </Link>
            <Link href="/cleaning-services" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">
              Cleaning Services
            </Link>
            <Link href="/pest-control" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">
              Pest Control
            </Link>
            <Link href="/waste-disposal" onClick={() => setIsMenuOpen(false)} className="hover:text-blue-500">
              Waste Disposal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

const ServicePage = ({ service } : any) => {
  return (
    <div className="bg-[#fafafa] text-gray-800">
      <Navbar />

      {/* Service Hero Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-100 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-semibold text-blue-600 mb-4">{service.title}</h1>
          <p className="text-lg text-gray-600">{service.subtitle}</p>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Extended Details Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">More About {service.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {service.extendedDescription}
          </p>
        </div>
      </section>
    </div>
  );
};

const services = [
  {
    title: 'Waste Management',
    subtitle: 'Comprehensive solutions for effective waste handling and disposal.',
    description:
      'We specialize in managing waste responsibly, from collection to disposal, ensuring a cleaner and sustainable environment.',
    extendedDescription:
      'Our waste management services include waste segregation, recycling programs, and environmentally friendly disposal methods. We work closely with businesses, residential communities, and industrial facilities to implement efficient waste management strategies tailored to their specific needs. With our state-of-the-art equipment and a team of trained professionals, we ensure minimal environmental impact and maximum efficiency.',
    image: '/images/7.jpg',
  },
  {
    title: 'Cleaning Services',
    subtitle: 'Professional cleaning services for homes and businesses.',
    description:
      'Our cleaning services include residential, commercial, and industrial spaces, ensuring pristine environments that enhance comfort and productivity.',
    extendedDescription:
      'We provide deep cleaning, carpet cleaning, window cleaning, and post-construction cleaning services. Our team uses eco-friendly cleaning products and advanced techniques to deliver exceptional results. Whether you need a one-time service or a recurring schedule, we tailor our cleaning plans to fit your requirements and maintain the highest standards of hygiene and cleanliness.',
    image: '/images/washing.jpg',
  },
  {
    title: 'Pest Control',
    subtitle: 'Efficient and eco-friendly pest management solutions.',
    description:
      'We provide comprehensive pest control services to eliminate infestations and prevent future occurrences, ensuring safety and hygiene.',
    extendedDescription:
      'Our pest control solutions cover a wide range of pests, including rodents, termites, bed bugs, and insects. We use integrated pest management (IPM) techniques that combine eco-friendly products with targeted treatments to ensure effective and long-lasting results. Our experts also provide preventive measures and ongoing monitoring to keep your spaces pest-free.',
    image: '/images/s_2.png',
  },
  {
    title: 'Waste Disposal',
    subtitle: 'Safe and reliable waste disposal services.',
    description:
      'Our waste disposal services ensure that all waste is managed and disposed of in compliance with environmental regulations.',
    extendedDescription:
      'We handle hazardous, non-hazardous, and medical waste disposal with the utmost care and compliance. Our services include secure transportation, waste treatment, and landfill management. We also offer consultancy to help organizations develop sustainable waste disposal practices, reducing their environmental footprint while adhering to legal requirements.',
    image: '/images/7.jpg',
  },
  {
    title: 'Building and Construction',
    subtitle: 'Expert solutions for all your building and construction needs.',
    description:
      'Our building and construction services cover residential, commercial, and industrial projects, ensuring durability and aesthetic appeal.',
    extendedDescription:
      'We specialize in constructing high-quality buildings tailored to our clients’ needs. From project planning and design to execution, we ensure attention to detail and adherence to industry standards. Our services include renovations, expansions, and turnkey solutions, delivered by a team of experienced architects, engineers, and builders. We utilize modern technologies and sustainable practices to meet timelines and budgets effectively.',
    image: '/images/s_3.jpg',
  },
  {
    title: 'Oil and Gas Services',
    subtitle: 'Comprehensive solutions for the oil and gas industry.',
    description:
      'Our oil and gas services include exploration, drilling, pipeline installation, and maintenance.',
    extendedDescription:
      'We provide specialized services to the oil and gas sector, ensuring efficiency and safety. From exploration and extraction to storage and transportation, our solutions are designed to optimize operations while minimizing environmental impact. Our team is equipped with advanced tools and knowledge to handle complex projects, including refinery upgrades, offshore drilling, and pipeline integrity management.',
    image: '/images/oil_gas.jpg',
  },
  {
    title: 'Logistics and Supply Chain',
    subtitle: 'Seamless logistics and supply chain management solutions.',
    description:
      'Our logistics services streamline the movement of goods, ensuring timely delivery and cost efficiency.',
    extendedDescription:
      'We offer end-to-end logistics solutions, including transportation, warehousing, and inventory management. Our supply chain services focus on optimizing processes to enhance productivity and reduce costs. With our extensive network and modern technologies, we ensure that goods reach their destinations safely and on time.',
    image: '/images/7.jpg',
  },
  // {
  //   title: 'Consultancy Services',
  //   subtitle: 'Professional consultancy to drive growth and innovation.',
  //   description:
  //     'Our consultancy services help businesses achieve their goals through expert advice and tailored strategies.',
  //   extendedDescription:
  //     'We provide consultancy across various sectors, including construction, waste management, and environmental sustainability. Our team of experts works closely with clients to identify challenges and develop actionable solutions. Services include project feasibility studies, risk assessments, and operational optimization to ensure long-term success.',
  //   image: '/images/consultancy.jpg',
  // },
];

export default function ServicesPages() {
  return (
    <div>
      {services.map((service, index) => (
        <ServicePage key={index} service={service} />
      ))}
    </div>
  );
}

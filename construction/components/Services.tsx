import Image from "next/image";
import { FC } from "react";

export const ServicesSection: FC = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/images/climbing.jpg" // Replace with your image path
                alt="Construction Services"
                width={300}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Construction Services
              </h3>
              <p className="text-gray-600 mt-2">
                Comprehensive building and civil construction, including design and project management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/images/7.jpg" // Replace with your image path
                alt="Drainage Systems"
                width={300}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Drainage Systems
              </h3>
              <p className="text-gray-600 mt-2">
                Expertise in designing, constructing, and maintaining efficient drainage systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/images/washing.jpg" // Replace with your image path
                alt="Environmental Cleaning"
                width={300}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Environmental Cleaning
              </h3>
              <p className="text-gray-600 mt-2">
                Professional cleaning services for residential, commercial, and industrial properties.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/images/3.jpg" // Replace with your image path
                alt="Renovation Services"
                width={300}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Renovation Projects
              </h3>
              <p className="text-gray-600 mt-2">
                Transforming spaces through innovative and efficient renovation solutions.
              </p>
            </div>
            {/* <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/pest-control.jpg" // Replace with your image path
                alt="Pest Control"
                width={300}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Pest Control
              </h3>
              <p className="text-gray-600 mt-2">
                Advanced fumigation, deratization, and decontamination services for pest-free environments.
              </p>
            </div> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/images/7.jpg" // Replace with your image path
                alt="Waste Management"
                width={300}
                height={200}
                className="rounded-md"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                Waste Management
              </h3>
              <p className="text-gray-600 mt-2">
                Efficient waste disposal solutions, including supply of industrial waste bins.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

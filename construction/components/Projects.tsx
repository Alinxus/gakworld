import Image from "next/image";
import { FC } from "react";
import Link from 'next/link'

export const ProjectsSection: FC = () => {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Featured Projects
          </h2>
          <p className="text-gray-600 mb-12">
            At GAKWORLD NIGERIA LIMITED, we deliver innovative solutions in construction,
            drainage, and cleaning services. Our expertise transforms ideas into reality, ensuring
            sustainable and impactful results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image
                src="/images/3.jpg" // Replace with your image path
                alt="Ita Osun Market Drainage Project"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Ita Osun Market, Ijebu Ode
                </h3>
                <p className="text-sm text-gray-600">Completed drainage construction project.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/logistics.jpg" // Replace with your image path
                alt="Kaduna Airforce Base Drainage"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Kaduna Airforce Base
                </h3>
                <p className="text-sm text-gray-600">Drainage system development successfully delivered.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/2.jpg" // Replace with your image path
                alt="Magboro Road and Drainage"
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Magboro Road & Drainage
                </h3>
                <p className="text-sm text-gray-600">Comprehensive road and drainage construction project.</p>
              </div>
            </div>
          </div>
          <Link className="mt-8 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-medium" href='/showcase'>
            Explore More Projects
          </Link>
        </div>
      </section>
    );
};

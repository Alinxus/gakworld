// components/AboutUs.js
import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p>
              DEBCO LIMITED COMPANY was Registered in the year 2023 under Companies Act 2015 as a Private Limited Company. DLC is a multi-disciplinary DESIGN AND BUILD CONSORTIUM hub which comprises of various construction professionals of Architects, Project Managers, Quantity Surveyors (QS), Mechanical Engineers, Electrical Engineers and Structural Engineers who at each in their various capacities and departments add their expertise and experience to the overall functioning and operations of the larger company.
            </p>
            <div className="mt-8">
              <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full transition-colors duration-300">
                Read more
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <h3 className="text-4xl font-bold mb-2">30+</h3>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <h3 className="text-4xl font-bold mb-2">22k</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <img
              src="/images/wilson-kariuki-kihenjo.jpg"
              alt="Wilson Kariuki Kihenjo"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-bold">Wilson Kariuki Kihenjo</h3>
              <p className="text-gray-600">Director</p>
            </div>
          </div>
          <div className="flex items-center">
            <img
              src="/images/raphael-kyalo-musyimi.jpg"
              alt="Raphael Kyalo Musyimi"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-bold">Raphael Kyalo Musyimi</h3>
              <p className="text-gray-600">Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
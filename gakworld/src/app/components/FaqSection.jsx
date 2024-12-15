'use client'
import React, { useState } from 'react';


const FaqSection = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="bg-white shadow-lg rounded-lg">
            <button
              className={`flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none ${
                activeSection === 0
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => toggleSection(0)}
            >
              <h3 className="text-lg font-medium">
                What other projects have you worked on?
              </h3>
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  activeSection === 0 ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeSection === 0 && (
              <div className="px-6 py-4 text-gray-700">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            )}
          </div>

          <div className="bg-white shadow-lg rounded-lg">
            <button
              className={`flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none ${
                activeSection === 1
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => toggleSection(1)}
            >
              <h3 className="text-lg font-medium">Do you have a project timeline?</h3>
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  activeSection === 1 ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeSection === 1 && (
              <div className="px-6 py-4 text-gray-700">
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
            )}
          </div>

          <div className="bg-white shadow-lg rounded-lg">
            <button
              className={`flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none ${
                activeSection === 2
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-gray-200'
              }`}
              onClick={() => toggleSection(2)}
            >
              <h3 className="text-lg font-medium">How do you price your projects?</h3>
              <svg
                className={`h-6 w-6 transform transition-transform duration-300 ${
                  activeSection === 2 ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeSection === 2 && (
              <div className="px-6 py-4 text-gray-700">
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
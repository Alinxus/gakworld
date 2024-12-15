import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-400">Features</a></li>
            <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
            <li><a href="#" className="hover:text-gray-400">FAQs</a></li>
            <li><a href="#" className="hover:text-gray-400">About</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Get in touch</h3>
          <address className="not-italic">
            <p>31 New Street, NY</p>
            <p>USA</p>
            <p><a href="tel:+123456789" className="hover:text-gray-400">+123456789</a></p>
            <p><a href="mailto:info@saota.com" className="hover:text-gray-400">info@saota.com</a></p>
          </address>
        </div>
        <div colSpan={2}>
          <h3 className="text-lg font-bold mb-4">Subscribe to our newsletter</h3>
          <p className="mb-4">Monthly digest of what's new and exciting from us.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-gray-800 border-none focus:ring-2 focus:ring-blue-500 rounded-l-md px-4 py-2 text-white placeholder-gray-400"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        <p className="text-center text-gray-400">
          &copy; 2023 Saota, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
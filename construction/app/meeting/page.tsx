'use client';

import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";
import { useState } from "react";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const createMailtoLink = () => {
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    return `mailto:gakworld@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex flex-col w-full overflow-clip inset-0 -z-10 bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <ShowcaseNavbar />
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10">Let&apos;s Connect</h1>
          <p className="text-lg text-gray-500 py-4">
            We are always excited to meet new people and discuss new projects.
            Please feel free to send us a message, and we&apos;ll get back to you as soon as possible.
          </p>

          {[
            {
              title: "Development + Design",
              description: "Turn your ideas into reality with our development and design services.",
            },
            {
              title: "Free Consultation",
              description: "Get expert advice on how to improve your business and increase your online presence.",
            },
            {
              title: "Technical Support",
              description: "Get technical support for your website or application.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.5 }}
              className="flex gap-x-4 py-4"
            >
              <PiCheckCircle className="rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
              <ul>
                <h3 className="text-lg font-bold text-gray-700">{item.title}</h3>
                <div className="text-gray-400">{item.description}</div>
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md p-2"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <a
              href={createMailtoLink()}
              className="py-3 px-6 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
            >
              Send Message
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Meeting;

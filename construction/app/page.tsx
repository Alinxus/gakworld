"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { useState } from "react";



const services = [
  {
    icon: "/images/s_6.png",
    title: "Building Construction",
    description:
      "We specialize in constructing, altering, repairing, and extending buildings and structures with precision and expertise.",
  },
  {
    icon: "/images/s_1.png",
    title: "Civil Engineering",
    description:
      "Our services include advanced civil engineering projects such as drainage, sanitation, and earth-moving solutions.",
  },
  {
    icon: "/images/s_5.png",
    title: "Drainage Systems",
    description:
      "We provide design, construction, and maintenance of drainage systems for sustainable infrastructure.",
  },
  {
    icon: "/images/s_3.png",
    title: "Installation Services",
    description:
      "From electrical and water supply systems to HVAC installations, we ensure efficiency and reliability.",
  },
  {
    icon: "/images/s_4.png",
    title: "Maintenance & Repairs",
    description:
      "Our maintenance and repair services cover wooden floors, security systems, and more for long-term value.",
  },
  {
    icon: "/images/s_2.png",
    title: "Road Construction",
    description:
      "We excel in constructing and renovating roadways, ensuring quality and durability.",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
    className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa]
    bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
    bg-[size:14px_24px]"
  >
    <Element
      name="top"
      className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50
        xl:w-4/5 2xl:w-[68%] bg-white flex items-center
        justify-between py-6 px-4 md:px-8 mx-6"
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="/logo/logo.png"
          alt="Logo"
          width={1000}
          height={1000}
          className="w-28"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="absolute right-1/2 translate-x-1/2 transform hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
        <Link href="/showcase" className="hover:text-blue-500">
          Gallery
        </Link>
        <ScrollLink to="services" smooth={true} className="hover:text-blue-500">
          Services
        </ScrollLink>
        <ScrollLink to="process" smooth={true} className="hover:text-blue-500">
          Process
        </ScrollLink>
        <ScrollLink to="guarentees" smooth={true} className="hover:text-blue-500">
          Guarantees
        </ScrollLink>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden flex items-center gap-x-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-blue-500 focus:outline-none"
        >
          {isMenuOpen ? (
            <span className="text-lg">✖</span> // Close Icon
          ) : (
            <span className="text-lg">☰</span> // Hamburger Icon
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-4/5 h-full bg-white shadow-lg z-50 p-6 transition-transform transform translate-x-0"
        >
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 hover:text-blue-500 text-lg mb-4"
          >
            ✖ Close
          </button>
          <nav className="flex flex-col gap-y-6 text-gray-700 font-medium">
            <Link href="/showcase" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="/services" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link><ScrollLink to="process" smooth={true} onClick={() => setIsMenuOpen(false)}>
              Process
            </ScrollLink>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </nav>
        </div>
      )}

      {/* Call-to-Action Button */}
      <div className="hidden md:flex items-center gap-x-4">
        <Link
          href="/meeting"
          className="py-3 px-6
            text-lg hover:bg-[#abcbff]
            rounded-[6px] border-2
            border-black text-white bg-[#121212]
            transition duration-200 hover:shadow-md"
        >
          Schedule a Call
        </Link>
      </div>
    </Element>
     <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>
          <p
            className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
          >
            Schedule a call with us to discuss your project and get a quote in
            minutes. Let's bring your construction vision to life.
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book a Call
            </Link>
            <Link
              href={"/showcase"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Showcase
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Building
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Engineering
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Drainage
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-500" />
                Maintenance
              </p>
            </BoxReveal>
          </div>
        </div>
      </main>

      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto ">
        <h1>
          <WordPullUpDemo />
        </h1>
        <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
        Explore our specialized construction and drainage services designed to meet your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
        <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
        Our 
            <span className="text-blue-500 flex gap-x-1 items-center">
              
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Expertise
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span> 
            Process
          </h1>

          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            Delivering high-quality construction and drainage solutions that exceed expectations.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <AnimatedBeamMultipleOutputDemo />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
            <BoxRevealDemo />
          </div>

          </div>

        </main>
      </Element>

      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/logo.png"}
            width={10000}
            height={10000}
            className=" md:w-1/3 rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
              &quot;Gakworld has transformed our infrastructure projects. Their professionalism and quality of work are unmatched. Highly recommend!&quot;
            </h1>
            <div className="flex items-center gap-x-1">
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
              <IconStarFilled className="text-4xl text-yellow-500" />
            </div>

            <span className="text-xl font-medium">
              John Doe, Project Manager <br />
              Construction Co.
            </span>
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      <LetsMakeThingsHappenSection />
      </section>

      <footer className="bg-[#fafafa] py-10  px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col  justify-between gap-y-3 xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/logo.png"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            /> 
          </h1>
          <p className="text-left  text-xl  text-gray-500">+234-8188185508</p>
          <p className="text-left  text-xl  text-gray-500">
            info@gakworld.com
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2024 Gakworld Nigeria Limited. All Rights Reserved.
          <Link href="/" className="text-blue-500">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
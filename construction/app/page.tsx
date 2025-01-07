'use client';

import { FC, useState } from "react";
import HeroSection from "../components/Hero";
import { ServicesSection } from "../components/Services";
import { FAQSection } from "../components/FAQsection";
import { ProjectsSection } from "../components/Projects";
import { TestimonialsSection } from "../components/Testimonials";
import { Footer } from "../components/Footer";

import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Page: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <main>
            {/* Navbar */}
            <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-lg font-bold text-gray-900">
                        GAKWORLD
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-x-8 text-gray-700 font-medium">
                        <Link href="/showcase" className="hover:text-blue-500">
                            Gallery
                        </Link>
                        <Link href="/services" className="hover:text-blue-500">
                            Services
                        </Link>
                        <ScrollLink
                            to="process"
                            smooth={true}
                            className="cursor-pointer hover:text-blue-500"
                        >
                            Process
                        </ScrollLink>
                        <ScrollLink
                            to="guarantees"
                            smooth={true}
                            className="cursor-pointer hover:text-blue-500"
                        >
                            Guarantees
                        </ScrollLink>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-700 hover:text-blue-500 focus:outline-none"
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
                    <div className="fixed top-0 left-0 w-4/5 h-full bg-white shadow-lg z-50 p-6">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-gray-700 hover:text-blue-500 text-lg mb-4 focus:outline-none"
                        >
                            ✖ Close
                        </button>
                        <nav className="flex flex-col gap-y-6 text-gray-700 font-medium">
                            <Link href="/showcase" onClick={() => setIsMenuOpen(false)}>
                                Gallery
                            </Link>
                            <Link href="/services" onClick={() => setIsMenuOpen(false)}>
                                Services
                            </Link>
                            <ScrollLink
                                to="process"
                                smooth={true}
                                onClick={() => setIsMenuOpen(false)}
                                className="cursor-pointer"
                            >
                                Process
                            </ScrollLink>
                            <ScrollLink
                                to="guarantees"
                                smooth={true}
                                onClick={() => setIsMenuOpen(false)}
                                className="cursor-pointer"
                            >
                                Guarantees
                            </ScrollLink>
                            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                                About
                            </Link>
                        </nav>
                    </div>
                )}
            </header>

            {/* Page Content */}
            <div className="pt-20">
                <HeroSection />
                <ServicesSection />
                <FAQSection />
                <ProjectsSection />
                <TestimonialsSection />
                <Footer />
            </div>
        </main>
    );
};

export default Page;

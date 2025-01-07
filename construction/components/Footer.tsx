import Image from "next/image";
import { FC } from "react";

export const Footer: FC = () => {
    return (
        <footer className="py-12 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Information */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-semibold mb-4">GAKWORLD NIGERIA LIMITED</h3>
                        <p className="text-gray-400">
                            2A Oshineye Charlie Boy Bus Stop, Gbagada, Lagos.
                        </p>
                        <p className="text-gray-400">Phone: +234-07044444588</p>
                        <p className="text-gray-400">Email: gakworld@yahoo.com</p>
                        <p className="text-gray-400">Website: <a href="http://www.gakworld.com" className="hover:underline">www.gakworld.com</a></p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    {/* <div className="text-center md:text-right">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                            </a>
                        </div>
                    </div> */}
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center border-t border-gray-700 pt-4">
                    <p className="text-gray-400">
                        &copy; 2023 GAKWORLD NIGERIA LIMITED. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

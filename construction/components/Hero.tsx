import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/climbing.jpg" // Replace with your image path
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-80"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Building Excellence with GAKWORLD Nigeria Limited
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Experts in Construction, Drainage, and Cleaning Solutions. Let’s
          create a sustainable and efficient future together.
        </p>
        <div className="flex space-x-4">
          <Link href="/services" className="bg-blue-600 rounded px-3 py-3">
            Learn about Our services
          </Link>
          <Link href="/meeting" className="bg-blue-600 rounded">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

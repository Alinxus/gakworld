import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  {
    background: "bg-gray-200",
    imageUrl: "/images/climbing.jpg",
    title: "High risen cleaning services",
    link: "https://gakworld.vercel.app/services",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/washing.jpg",
    title: "Cleaning Services",
    link: "https://gakworld.vercel.app/services",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/1.jpg",
    title: "Construction",
    link: "https://gakworld.vercel.app/services",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/2.jpg",
    title: "",
    link: "https://gakworld.vercel.app/services",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/3.jpg",
    title: "Construction",
    link: "https://gakworld.vercel.app/services",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/4.jpg",
    title: "Cleaning services",
    link: "https://gakworld.vercel.app/services",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/5.jpg",
    title: "Cleaning",
    link: "https://gakworld.vercel.app/services",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/6.jpg",
    title: "Cleaning",
    link: "https://gakworld.vercel.app/services",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/7.jpg",
    title: "Waste management",
    link: "https://gakworld.vercel.app/services",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/offshore_platform.jpg",
    title: "Oil And Gas",
    link: "https://gakworld.vercel.app/services",
  },
  {
    background: "bg-gray-200",
    imageUrl: "/images/logistics.jpg",
    title: "Logistics",
    link: "https://gakworld.vercel.app/services",
  },




];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-lg ${works[idx].background} p-4`}
          >
            <Link href={link} target="_blank" rel="noreferrer">
              <Image
                height={10000}
                width={10000}
                className="
                h-5/6 w-full object-cover rounded-lg"
        
              
       
                src={imageUrl}
                alt={`Random stock image ${idx + 1}`}
              />
              <h3 className="text-lg font-semibold p-4">{title}</h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}

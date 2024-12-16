import Image from "next/image";
import Link from "next/link";
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";
import ShowcaseNavbar from "@/components/showcase-navbar";
import Footer from "@/components/footer";
import WordFadeIn from "@/components/magicui/word-fade-in";

const AboutUs = () => {
  return (
    <div
      className="
        overflow-clip 
        inset-0 
        -z-10 h-full w-full bg-[#fafafa]
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
        bg-[size:14px_24px]"
    >
      <ShowcaseNavbar />

      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto my-20">
        <div className="flex items-center justify-center relative">
          <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center z-20"
            words="About Gakworld Nigeria Limited"
          />
        </div>

        <p className="md:text-center text-xl md:text-2xl my-6 md:w-4/5 mx-auto text-gray-500">
          Delivering excellence in construction and engineering services since 1989.
        </p>

        {/* <BlurFadeDemo /> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Gakworld Nigeria Limited is a leading construction and engineering
              company committed to delivering top-notch solutions for
              infrastructure and property development. With over three decades
              of experience, we specialize in building construction, drainage
              systems, road construction, and project management. Our mission
              is to bring innovation and sustainability to every project we
              undertake.
            </p>
          </div>

          <div>
            <Image
              src="/images/washing.jpg"
              alt="About Us Team"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div>
            <Image
              src="/images/climbing.jpg"
              alt="Our Mission"
              width={400}
              height={200}
              className="rounded-lg shadow-md"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is to deliver exceptional construction and engineering
              services that exceed client expectations while adhering to the
              highest standards of safety, quality, and sustainability. We
              strive to make a lasting impact on communities by creating
              infrastructure that drives economic growth and improves quality of
              life.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Values
            </h2>
            <ul className="text-lg text-gray-600 leading-relaxed list-disc ml-5">
              <li>Innovation</li>
              <li>Integrity</li>
              <li>Quality</li>
              <li>Sustainability</li>
              <li>Client Satisfaction</li>
            </ul>
          </div>

          <div>
            <Image
              src="/images/1.jpg"
              alt="Our Values"
              width={400}
              height={100}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex items-center justify-center mt-20">
          <Link
            href="/meeting"
            className="py-3 px-10
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
              hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;

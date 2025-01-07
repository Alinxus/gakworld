'use client'
import Image from "next/image";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const TestimonialsSection: FC = () => {
    const testimonials = [
        {
            image: "/client1.jpg", // Replace with your image path
            text: "GAKWORLD delivered exceptional results for our construction project. Their expertise and professionalism were top-notch!",
            name: "Ayodeji A. Kuku",
            location: "Lagos, Nigeria",
        },
        {
            image: "/client2.jpg", // Replace with your image path
            text: "The drainage system GAKWORLD built for us exceeded expectations. Highly recommended for quality work!",
            name: "Engr. Fayemi Abiodun",
            location: "Kaduna, Nigeria",
        },
        {
            image: "/client3.jpg", // Replace with your image path
            text: "Their cleaning services transformed our workspace into a spotless and welcoming environment. Amazing job!",
            name: "Miss Olakitan Salami",
            location: "Abuja, Nigeria",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Testimonials
                </h2>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className="max-w-2xl mx-auto"
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    width={100}
                                    height={100}
                                    className="rounded-full mx-auto"
                                />
                                <p className="text-gray-600 italic mt-4">
                                    "{testimonial.text}"
                                </p>
                                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                                    {testimonial.name}
                                </h3>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

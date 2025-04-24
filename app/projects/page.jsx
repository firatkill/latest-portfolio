"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute cursor-pointer hover:scale-110 right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
      />
    </svg>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute cursor-pointer hover:scale-110 left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-lg border border-gray-200 hover:bg-blue-500 hover:text-white transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  </button>
);

const projectsData = [
  {
    title: "Verde YMM A.Ş. – Corporate Website Development",
    description:
      "A high-performance, SEO-optimized corporate website built with Next.js 15 and Server-Side Rendering (SSR). Includes a fully customizable admin panel and real-time management for blog posts, announcements, and circulars. Achieved perfect SEO score (100) on Google PageSpeed Insights.",
    image: "/verde.png",
    tags: ["Next.js 15", "SEO", "Prisma", "Mongodb", "Next-Auth", "NodeJS"],
    demoUrl: "https://verdeymm.com",
  },
  {
    title: "Bağcı YMM A.Ş. – Financial Consultancy Website",
    description:
      "Developed a scalable, SEO-friendly corporate website using Next.js 15 with full Server-Side Rendering (SSR). The platform features a dynamic content management system for financial publications, updates, and regulatory circulars. Designed with performance and user experience in mind, achieving outstanding results on performance audits.",
    image: "/bagci.png",
    tags: [
      "Next.js 15",
      "SSR",
      "SEO",
      "Prisma",
      "Mongodb",
      "CMS",
      "Corporate Site",
    ],
    demoUrl: "https://bagciymm.com",
  },
  {
    title: "End-to-End Operations Management System",
    description:
      "For the company i worked with, Built from scratch by myself, this robust and scalable management platform centralizes all operational processes—from order and inventory management to logistics and financial tracking. Developed for a furniture and home decor company, the system supports 6 user roles, 3 languages, and streamlines workflows across stores, warehouses, suppliers, and logistics.",
    image: "/cms.jpeg",
    tags: [
      "Custom CMS",
      "Inventory Management",
      "Logistics",
      "Multi-language",
      "Admin Panel",
    ],
  },
  {
    title: "Spring Boot – Backend for a Twitter Clone",
    description:
      "Developed the backend of a Twitter clone using Spring Boot. Implemented secure authentication with Spring Security and JWT tokens featuring role-based authorization and token renewal on each request. Core features include user registration, session management, tweeting, liking, replying, and profile viewing.",
    image: "/spring.png",
    tags: [
      "Spring Boot",
      "Java",
      "JWT",
      "Spring Security",
      "MySQL",
      "REST API",
    ],

    githubUrl: "https://lnkd.in/dGcS3ZSs",
  },
];

export default function ProjectsPage() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="h-full z-0 overflow-scroll mb-16  w-full flex flex-col px-4 sm:px-6 md:px-16 lg:px-24 ">
      {/* Fixed Title for Mobile */}
      <div className=" pb-2 md:hidden sticky top-0 z-10 bg-transparent">
        <h2 className="text-2xl font-bold text-center">My Projects</h2>
        <div className="h-1 w-16 bg-primary rounded-xl mx-auto mt-1"></div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overscroll-contain isolate contain-scroll  ">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 lg:mb-10 hidden md:block"
          >
            <p className="mt-5 max-w-2xl  mx-auto text-gray-600">
              Here are some of my featured projects. Each one represents a
              unique challenge I've tackled and skills I've developed along the
              way.
            </p>
            <div className="h-1 w-20 mt-1 rounded-xl bg-accent mx-auto"></div>
          </motion.div>

          <div className="px-4">
            <style jsx global>{`
              .slick-slider {
                margin: 0 -16px;
                padding: 0 16px;
              }
              .slick-slide {
                padding: 0px 30px 30px;
                height: inherit !important;
              }
              .slick-slide > div {
                height: 100%;
              }
              @media (max-width: 768px) {
                .slick-prev,
                .slick-next {
                  width: 32px;
                  height: 32px;
                }
                .slick-prev svg,
                .slick-next svg {
                  width: 20px;
                  height: 20px;
                }
              }
            `}</style>
            <Slider {...settings}>
              {projectsData.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group bg-white h-[500px] overflow-y-scroll shadow-xl rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex flex-col gap-3">
                        <div className="flex gap-3">
                          {project.demoUrl && (
                            <a
                              target="_blank"
                              href={project.demoUrl}
                              className="px-4 py-2 bg-slate-500 text-white rounded-lg text-sm hover:bg-opacity-90 transition-all"
                            >
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              target="_blank"
                              href={project.githubUrl}
                              className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-opacity-90 transition-all"
                            >
                              GitHub
                            </a>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className={`px-3 py-1 rounded-full text-sm 
                                ${
                                  tagIndex % 4 === 0
                                    ? "bg-blue-500/80 text-white"
                                    : tagIndex % 4 === 1
                                    ? "bg-green-500/80 text-white"
                                    : tagIndex % 4 === 2
                                    ? "bg-purple-500/80 text-white"
                                    : "bg-amber-500/80 text-white"
                                }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute cursor-pointer hover:scale-110 right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300"
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
    className="absolute cursor-pointer hover:scale-110 left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300"
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
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with payment integration, user authentication, and product management.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task manager with real-time updates, file sharing, and team communication features.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "Firebase", "Tailwind", "WebSockets"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "An intelligent content creation tool leveraging machine learning to assist writers and marketers.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
    tags: ["Python", "TensorFlow", "React", "FastAPI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media Dashboard",
    description:
      "A comprehensive analytics dashboard for social media management with real-time metrics and insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracking App",
    description:
      "A mobile-first fitness application with workout planning, progress tracking, and nutrition logging.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop",
    tags: ["React Native", "Redux", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Platform",
    description:
      "A property listing and management system with advanced search, virtual tours, and booking features.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Forecast App",
    description:
      "A weather application providing detailed forecasts, alerts, and interactive weather maps.",
    image:
      "https://images.unsplash.com/photo-1592210454319-9046a7b49d90?q=80&w=1000&auto=format&fit=crop",
    tags: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Recipe Management System",
    description:
      "A digital cookbook with recipe organization, meal planning, and shopping list features.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000&auto=format&fit=crop",
    tags: ["Angular", "Firebase", "Material UI", "RxJS"],
    demoUrl: "#",
    githubUrl: "#",
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
    <section className="h-screen w-full flex flex-col px-4 sm:px-6 md:px-16 lg:px-24 ">
      {/* Fixed Title for Mobile */}
      <div className=" pb-2 md:hidden sticky top-0 z-10 bg-transparent dark:bg-dark">
        <h2 className="text-2xl font-bold text-center">My Projects</h2>
        <div className="h-1 w-16 bg-primary rounded-xl mx-auto mt-1"></div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overscroll-contain isolate contain-scroll  pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 lg:mb-10 hidden md:block"
          >
            <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Here are some of my featured projects. Each one represents a
              unique challenge I've tackled and skills I've developed along the
              way.
            </p>
            <div className="h-1 w-20 rounded-xl bg-accent mx-auto"></div>
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
                  className="group bg-white h-[500px] dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex gap-3">
                        <a
                          href={project.demoUrl}
                          className="px-4 py-2 bg-slate-500 text-white rounded-lg text-sm hover:bg-opacity-90 transition-all"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg text-sm hover:bg-opacity-90 transition-all"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-3 py-1 rounded-full text-sm 
                            ${
                              tagIndex % 4 === 0
                                ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200"
                                : tagIndex % 4 === 1
                                ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200"
                                : tagIndex % 4 === 2
                                ? "bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-200"
                                : "bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-200"
                            }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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

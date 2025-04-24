"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Icons from "@/public/Icons";

// Tech stack data with starting years
const techData = [
  {
    category: "Frontend",
    technologies: [
      {
        name: "HTML",
        startYear: 2020,
        icon: <Icons.HTML className="w-6 h-6" />,
      },
      { name: "CSS", startYear: 2020, icon: <Icons.CSS className="w-6 h-6" /> },
      {
        name: "JavaScript",
        startYear: 2020,
        icon: <Icons.Javascript className="w-6 h-6" />,
      },
      {
        name: "Tailwind",
        startYear: 2023,
        icon: <Icons.Tailwind className="w-6 h-6" />,
      },
      {
        name: "Bootstrap",
        startYear: 2020,
        icon: <Icons.Bootstrap className="w-6 h-6" />,
      },
      {
        name: "Material UI",
        startYear: 2023,
        icon: <Icons.MaterialUI className="w-6 h-6" />,
      },
      {
        name: "Ant Design",
        startYear: 2023,
        icon: <Icons.AntDesign className="w-6 h-6" />,
      },
      {
        name: "Framer Motion",
        startYear: 2023,
        icon: <Icons.FramerMotion className="w-6 h-6" />,
      },
    ],
  },
  {
    category: "Frontend Frameworks",
    technologies: [
      {
        name: "React",
        startYear: 2021,
        icon: <Icons.React className="w-6 h-6" />,
      },
      { name: "Vue", startYear: 2022, icon: <Icons.Vue className="w-6 h-6" /> },
      {
        name: "Next.js",
        startYear: 2022,
        icon: <Icons.Nextjs className="w-6 h-6" />,
      },
      {
        name: "Nuxt",
        startYear: 2023,
        icon: <Icons.Nuxt className="w-6 h-6" />,
      },
      {
        name: "React Native",
        startYear: 2023,
        icon: <Icons.ReactNative className="w-6 h-6" />,
      },
    ],
  },
  {
    category: "State Management",
    technologies: [
      {
        name: "Redux",
        startYear: 2021,
        icon: <Icons.Redux className="w-6 h-6" />,
      },
      {
        name: "Zustand",
        startYear: 2024,
        icon: <Icons.Zustand className="w-6 h-6" />,
      },
      {
        name: "Pinia",
        startYear: 2023,
        icon: <Icons.Pinia className="w-6 h-6" />,
      },
    ],
  },
  {
    category: "Backend",
    technologies: [
      {
        name: "Node.js",
        startYear: 2021,
        icon: <Icons.NodeJS className="w-6 h-6" />,
      },
      {
        name: "Python",
        startYear: 2022,
        icon: <Icons.Python className="w-6 h-6" />,
      },
      {
        name: "Django",
        startYear: 2024,
        icon: <Icons.Django className="w-6 h-6" />,
      },
      {
        name: "Java",
        startYear: 2022,
        icon: <Icons.Java className="w-6 h-6" />,
      },
      {
        name: "Spring Boot",
        startYear: 2023,
        icon: <Icons.SpringBoot className="w-6 h-6" />,
      },
    ],
  },
  {
    category: "Authentication",
    technologies: [
      {
        name: "NextAuth",
        startYear: 2022,
        icon: <Icons.NextAuth className="w-6 h-6" />,
      },
      {
        name: "Firebase Auth",
        startYear: 2021,
        icon: <Icons.FirebaseAuth className="w-6 h-6" />,
      },
    ],
  },
  {
    category: "Database",
    technologies: [
      {
        name: "MySQL",
        startYear: 2023,
        icon: <Icons.MySQL className="w-6 h-6" />,
      },
      {
        name: "MongoDB",
        startYear: 2024,
        icon: <Icons.MongoDB className="w-6 h-6" />,
      },
      {
        name: "Firebase",
        startYear: 2022,
        icon: <Icons.Firebase className="w-6 h-6" />,
      },
      {
        name: "Prisma",
        startYear: 2024,
        icon: <Icons.Prisma className="w-6 h-6" />,
      },
      {
        name: "Mongoose",
        startYear: 2024,
        icon: <Icons.Mongoose className="w-6 h-6" />,
      },
    ],
  },
  {
    category: "DevOps & Others",
    technologies: [
      { name: "Git", startYear: 2020, icon: <Icons.Git className="w-6 h-6" /> },
      {
        name: "GitHub",
        startYear: 2020,
        icon: <Icons.GitHub className="w-6 h-6" />,
      },
      {
        name: "Docker",
        startYear: 2022,
        icon: <Icons.Docker className="w-6 h-6" />,
      },
      {
        name: "REST API",
        startYear: 2021,
        icon: <Icons.RestAPI className="w-6 h-6" />,
      },
    ],
  },
];

// Calculate years of experience
const calculateExperience = (startYear) => {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
};

// Tech card component
function TechCard({ tech }) {
  const [showPopup, setShowPopup] = useState(false);
  const years = calculateExperience(tech.startYear);

  return (
    <motion.div
      className="relative"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="backdrop-blur-sm bg-white/5 bg-gray-100/80 rounded-lg p-4 h-24 flex flex-col items-center justify-center shadow-lg hover:bg-white/10 transition-all duration-300">
        <div className="text-2xl mb-2">{tech.icon}</div>
        <p className="text-sm font-medium text-gray-600">{tech.name}</p>
      </div>

      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10 bg-blue-500/20 backdrop-blur-md text-gray-900 px-4 py-2 rounded-lg shadow-lg border border-blue-500/30 min-w-[150px]"
        >
          <div className="text-center">
            <p className="font-bold text-sm">{tech.name}</p>
            <p className="text-xs text-blue-600">Since {tech.startYear}</p>
            <p className="text-sm font-semibold">
              {years}
              {years === 1 ? "+ year" : "+ years"} of experience
            </p>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-blue-500/20 border-r border-b border-blue-500/30"></div>
        </motion.div>
      )}
    </motion.div>
  );
}

// Category section component
function CategorySection({ category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h3 className="text-xl font-bold text-blue-600 mb-4 border-b border-gray-200 pb-2">
        {category.category}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {category.technologies.map((tech, index) => (
          <TechCard key={index} tech={tech} />
        ))}
      </div>
    </motion.div>
  );
}

// Main tech stack component
export default function TechStack() {
  return (
    <div className="w-full h-full text-gray-900 py-6 px-6 pb-16 overflow-y-auto overscroll-contain isolate contain-scroll">
      <div className="max-w-7xl mx-auto">
        {techData.map((category, index) => (
          <CategorySection key={index} category={category} />
        ))}
      </div>
    </div>
  );
}

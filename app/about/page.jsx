"use client";

import { motion } from "framer-motion";

const journeyData = {
  timeline: [
    {
      title: "The Beginning of My Coding Journey",
      description:
        "My software development journey began in 2020 during the pandemic. I started with HTML and CSS, and after a month of learning, I moved on to JavaScript. For about a year, I worked extensively with vanilla JavaScript, creating various applications and programs.",
    },
    {
      title: "Academic Pursuit",
      description:
        "While studying Economics at Ankara University, I decided to pursue my passion for programming professionally. I was accepted into a 4-year Computer Engineering program and managed to balance both universities simultaneously. This dual education has given me a unique perspective, combining economic thinking with technical expertise.",
    },
    {
      title: "Professional Growth",
      description:
        "Through self-learning, I've gained experience through internships and freelance work. I've always enjoyed challenging projects, and my pursuit of internships and work opportunities while managing a demanding academic schedule is a testament to my dedication to growth and learning.",
    },
  ],
  values: [
    {
      title: "Passion for Challenges",
      description:
        "I thrive on challenging projects and continuously push myself to learn and grow. My journey from self-taught developer to dual-degree student reflects my commitment to personal and professional development.",
      icon: (
        <svg
          className="w-6 h-6 text-blue-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      bgColor: "bg-blue-100 ",
      textColor: "text-blue-500",
    },
    {
      title: "Continuous Learning",
      description:
        "My journey from HTML/CSS to full-stack development, while pursuing two degrees, demonstrates my commitment to continuous learning and growth in the tech field.",
      icon: (
        <svg
          className="w-6 h-6 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      bgColor: "bg-green-100 ",
      textColor: "text-green-500",
    },
    {
      title: "Diverse Perspective",
      description:
        "Combining my background in Economics with Computer Engineering has given me a unique perspective in problem-solving and project development, allowing me to approach challenges with both technical and analytical mindsets.",
      icon: (
        <svg
          className="w-6 h-6 text-purple-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      bgColor: "bg-purple-100 ",
      textColor: "text-purple-500",
    },
  ],
};

export default function AboutPage() {
  return (
    <section className="h-screen pt-16 z-0 overflow-scroll  w-full  px-4 sm:px-6 md:px-16 lg:px-24 bg-gradient-to-r from-slate-100 to-white ">
      {/* Scrollable Content */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative md:mt-0"
        >
          <div className="relative shadow-xl bg-white  rounded-xl p-8 border border-gray-100 ">
            <h3 className="text-2xl font-semibold mb-4 text-slate-700">
              My Journey
            </h3>
            <div className="space-y-6">
              {journeyData.timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-2 bg-slate-500 rounded-full relative">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-600 ">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 d mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative lg:mt-32"
        >
          <div className=" mb-24 relative bg-white  shadow-xl rounded-xl p-8 border border-gray-100 ">
            <h3 className="text-xl font-semibold mb-6 text-slate-700 ">
              What Drives Me
            </h3>
            <div className="space-y-6">
              {journeyData.values.map((value, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg ${value.bgColor} flex items-center justify-center flex-shrink-0`}
                  >
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-700 ">
                      {value.title}
                    </h4>
                    <p className="text-gray-500  mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

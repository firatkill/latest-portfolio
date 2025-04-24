"use client";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-screen w-full  flex flex-col px-4 sm:px-6 md:px-16 lg:px-24 absolute top-0 left-0 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Fixed Title for Mobile */}
      <div className="pt-6  pb-2 md:hidden sticky top-0 z-10 from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <h1 className="text-2xl font-bold text-center">Welcome</h1>
        <div className="h-1 w-16 bg-primary mx-auto mt-1"></div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1   overflow-y-auto overscroll-contain isolate contain-scroll md:py-4 md:pt-4 pt-72 pb-24 flex items-center">
        <div className="max-w-7xl !py-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-block  px-4 py-1 rounded-full text-sm font-semibold bg-slate-500 bg-opacity-10 text-white dark:text-slate-300 mb-6"
            >
              Full Stack Developer
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-700 to-slate-500 dark:from-white dark:to-gray-400"
            >
              Hi! I am <span className="text-slate-500">Fırat</span>.
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-gray-600 dark:text-gray-300"
            >
              Creating digital experiences that matter
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg mb-8 max-w-lg text-gray-500 dark:text-gray-400"
            >
              I'm a passionate full stack developer specializing in building
              exceptional digital experiences with modern web technologies.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => goToSection(2)}
                className="flex  cursor-pointer items-center justify-center gap-2 bg-slate-500 text-white px-5 py-3 rounded-lg 
                hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm sm:text-base"
              >
                Explore My Work <FiArrowDown className="animate-bounce ml-1" />
              </button>
              <button
                onClick={() => goToSection(4)}
                className="flex  cursor-pointer items-center justify-center gap-2 border border-slate-400 text-slate-600 dark:text-white px-5 py-3 rounded-lg 
                hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 text-sm sm:text-base mt-2 sm:mt-0"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-gradient-to-r from-slate-500 to-blue-400 rounded-full blur-2xl opacity-30 dark:opacity-50"
                style={{
                  width: "90%",
                  height: "90%",
                  top: "5%",
                  left: "5%",
                }}
              />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="/profile.jpeg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 p-4 rounded-full shadow-lg"
              >
                <span className="text-3xl">👨‍💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
export default function AboutPage() {
  return (
    <section className="h-screen w-full flex flex-col px-4 sm:px-6 md:px-16 lg:px-24 bg-gradient-to-r from-slate-100 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto overscroll-contain isolate contain-scroll overflow-x-hidden py-4 pb-24">
        <div className="max-w-7xl mx-auto relative">
          <div className="grid  grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute  -top-10 -left-10 w-40 h-fit bg-slate-200 dark:bg-slate-700 rounded-full blur-3xl opacity-50"></div>
              <div className="relative shadow-xl  bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-semibold mb-4 text-slate-700 dark:text-white">
                  My Journey
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 bg-slate-500 rounded-full relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-600 dark:text-slate-300">
                        Started Coding Journey
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        My passion for programming began when I built my first
                        website. The ability to create something from nothing
                        fascinated me.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 bg-slate-500 rounded-full relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-600 dark:text-slate-300">
                        Education & Growth
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        I've continuously expanded my skills through formal
                        education and self-teaching, always staying current with
                        industry trends.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 bg-slate-500 rounded-full relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-slate-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-600 dark:text-slate-300">
                        Professional Experience
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        I've worked on diverse projects that have honed my
                        ability to deliver high-quality solutions across the
                        full development stack.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative lg:mt-40 md:mt-20 sm:mt-0"
            >
              <div className="absolute -bottom-10  -right-10 w-40 h-40 bg-slate-200 dark:bg-slate-700 rounded-full blur-3xl opacity-50"></div>
              <div className="relative bg-white dark:bg-gray-800 shadow-xl rounded-xl p-8 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold mb-6 text-slate-700 dark:text-white">
                  What Drives Me
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
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
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-700 dark:text-slate-200">
                        Passion for Innovation
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        I love exploring new technologies and finding creative
                        solutions to complex problems.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
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
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-700 dark:text-slate-200">
                        User-Centered Design
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        I believe in creating intuitive, accessible products
                        that truly serve user needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
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
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-700 dark:text-slate-200">
                        Continuous Learning
                      </h4>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        I'm committed to continuous improvement, always
                        expanding my skills and knowledge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import TechStack from "@/components/techStack/techStack";

export default function TechStackPage() {
  return (
    <motion.section className="h-screen  w-full flex flex-col px-4 sm:px-6 md:px-16 lg:px-24  bg-transparent">
      {/* Fixed Title for Mobile */}
      <div className="pt-6 pb-2 md:hidden sticky top-0 z-10 bg-transparent">
        <h2 className="text-2xl font-bold text-center">Tech Stack</h2>
        <div className="h-1 w-16 bg-primary mx-auto mt-1"></div>
        <p className="max-w-2xl mx-auto text-center mb-2">
          Technologies I've worked with over the years, with my experience level
          in each.
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1  overflow-y-auto overscroll-contain isolate contain-scroll py-4 pb-24">
        <div className="max-w-7xl mx-auto w-full">
          {/* Desktop Title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-6 mb-8 hidden md:block"
          >
            <p className="max-w-2xl mx-auto mt-2">
              Technologies I've worked with over the years, with my experience
              level in each.
            </p>
            <div className="h-1 rounded-2xl mt-1 w-20 bg-primary mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full "
          >
            <TechStack />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

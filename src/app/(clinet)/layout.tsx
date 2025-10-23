"use client";

import React from "react";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Animated Page Transition */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="flex-grow relative z-10"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {/* White Overlay Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname + "-overlay"}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.42, 0, 0.58, 1],
          }}
          className="absolute inset-0 bg-white z-20 pointer-events-none"
        />
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

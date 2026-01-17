"use client";

import { motion } from "framer-motion";
// import { Inter } from "next-font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Logo from "@/components/layouts/Logo";

// const inter = Inter({ subsets: ["latin"] });

export default function GlobalNotFound() {
  return (
    // <html lang="en" className={inter.className}>
    <html lang="en" >
      <body className="bg-slate-50 overflow-hidden">
        <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-center">
          
          {/* Animated Background Blobs */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

          {/* Logo Animation */}
          {/* <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="relative w-24 h-24 mx-auto drop-shadow-2xl">
              <Logo />
            </div>
          </motion.div> */}

            <Logo />

          {/* Main Content Card */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="z-10 bg-white/40 backdrop-blur-md p-12 rounded-[3rem] shadow-2xl border border-white/20 max-w-lg"
          >
            <motion.h1 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 leading-none mb-4"
            >
              404
            </motion.h1>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">Lost in Space?</h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              The page you’re looking for has drifted away. Don't worry, we can help you find your way back home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/" 
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-emerald-200"
              >
                Go Home
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-2xl font-bold hover:bg-gray-50 transition-colors shadow-sm"
              >
                Go Back
              </button>
            </div>
          </motion.div>

          {/* Floating Elements (Visual Decoration) */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 right-10 opacity-20 hidden md:block"
          >
             <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="10 10"/>
                <defs>
                    <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#10b981"/>
                        <stop offset="1" stopColor="#3b82f6"/>
                    </linearGradient>
                </defs>
             </svg>
          </motion.div>
        </div>
      </body>
    </html>
  );
}
"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-6 py-12">
            <div className="text-center relative">
                
                {/* 1. Background Decorative Element (Abstract shape) */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>

                {/* 2. Animated Image/Illustration */}
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full max-w-xs mx-auto mb-8"
                >
                    {/* If you have a specific 404 image, use it here, or use your Logo */}
                    <div className="relative w-48 h-48 mx-auto">
                        <Image 
                            src="/assets/logo.png" 
                            alt="Logo" 
                            fill 
                            className="object-contain opacity-20 grayscale"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                             <span className="text-8xl font-black text-emerald-500/20">404</span>
                        </div>
                    </div>
                </motion.div>

                {/* 3. Text Content */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        The product is not found
                    </h1>
                    <p className="text-lg text-gray-600 mb-10 max-w-md mx-auto leading-relaxed">
                        Sorry, the product you are looking for doesn't exist. May be you trying wrong URL or the product has been removed.  
                    </p>

                    {/* 4. Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link 
                            href="/" 
                            className="w-full sm:w-auto px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:scale-105 transition-all duration-200"
                        >
                            Back to Home
                        </Link>
                        <button 
                            onClick={() => window.history.back()}
                            className="w-full sm:w-auto px-8 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200"
                        >
                            Go Back
                        </button>
                    </div>
                </motion.div>
                
                
            </div>
        </div>
    );
};

export default NotFound;
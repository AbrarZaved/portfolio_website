'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  
  const taglines = [
    "Backend Developer",
    "Python Expert", 
    "Django Specialist",
    "Creative Technologist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gray-300/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400/5 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/3 right-1/3 w-2 h-2 bg-gray-400 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-gray-500 rounded-full"
          animate={{ 
            y: [0, 15, 0],
            x: [0, -5, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-gray-300 rounded-full"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 font-medium mb-4"
          >
            Hi, I&apos;m
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-sora font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Abrar Javed Sorafi
            </span>
          </motion.h1>

          {/* Animated Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="h-20 flex items-center justify-center mb-8"
          >
            <motion.h2
              key={currentTagline}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-4xl font-sora font-semibold text-gray-400"
            >
              {taglines[currentTagline]}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Crafting <span className="text-gray-200 font-semibold">secure</span>, <span className="text-gray-100 font-semibold">scalable</span>, and <span className="text-white font-semibold">intelligent</span> backend systems with Django and Python
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="group bg-gradient-to-r from-gray-700 to-gray-900 px-8 py-4 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-gray-500/25 transition-all duration-300 cursor-glow transform hover:scale-105"
            >
              View My Work
              <motion.span
                className="inline-block ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </button>
            
            <button
              onClick={() => scrollToSection('#contact')}
              className="group border-2 border-gray-500 px-8 py-4 rounded-full text-gray-300 font-semibold text-lg hover:bg-gray-500 hover:text-black transition-all duration-300 cursor-glow transform hover:scale-105"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center space-x-6 mb-24"
          >
            <a
              href="https://github.com/AbrarZaved"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-600 hover:border-gray-400 hover:bg-gray-400/10 transition-all cursor-glow"
            >
              <Github size={24} className="text-gray-400 hover:text-gray-200 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/abrar-javed-sorafi-a7082b26b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-600 hover:border-gray-400 hover:bg-gray-400/10 transition-all cursor-glow"
            >
              <Linkedin size={24} className="text-gray-400 hover:text-gray-200 transition-colors" />
            </a>
            <a
              href="mailto:abrarzaved2002@gmail.com"
              className="p-3 rounded-full border border-gray-600 hover:border-gray-400 hover:bg-gray-400/10 transition-all cursor-glow"
            >
              <Mail size={24} className="text-gray-400 hover:text-gray-200 transition-colors" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400 hover:text-gray-200 transition-colors cursor-glow"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
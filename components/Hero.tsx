'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Ruler, HardHat, FileText, Truck, Hammer, Wrench, Settings, Layers, Compass, Box } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [displayedTitle, setDisplayedTitle] = useState('')
  const fullText = 'Sanjaya Joshi'
  const fullTitle = 'Civil Engineer'
  const typingSpeed = 150 // milliseconds per character

  // Name typing animation
  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
      }
    }, typingSpeed)

    return () => clearInterval(intervalId)
  }, [])

  // Title typing animation (starts after name completes)
  useEffect(() => {
    const nameTypingDuration = fullText.length * typingSpeed
    const delayBeforeTitle = 300 // Small pause after name completes

    const timeoutId = setTimeout(() => {
      let currentIndex = 0
      const intervalId = setInterval(() => {
        if (currentIndex <= fullTitle.length) {
          setDisplayedTitle(fullTitle.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(intervalId)
        }
      }, typingSpeed)

      return () => clearInterval(intervalId)
    }, nameTypingDuration + delayBeforeTitle)

    return () => clearTimeout(timeoutId)
  }, [])

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 pt-20 md:pt-0">
      {/* Blueprint Background */}
      <div className="absolute inset-0 blueprint-bg opacity-5 dark:opacity-20"></div>
      
     {/* Animated Building Construction */}
<div className="absolute inset-0 overflow-hidden opacity-20">
  <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
    <defs>
      <linearGradient id="buildingGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
      </linearGradient>
    </defs>
    
    {/* Foundation */}
    <rect x="300" y="500" width="200" height="20" fill="#78716c" />
    
    {/* Building floors rising */}
    {[...Array(10)].map((_, i) => (
      <motion.g key={i}>
        {/* Floor slab */}
        <motion.rect
          x="300"
          y={480 - i * 40}
          width="200"
          height="35"
          fill="url(#buildingGrad)"
          stroke="#0284c7"
          strokeWidth="1.5"
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: i * 0.4,
            repeat: Infinity,
            repeatDelay: 5
          }}
          style={{ transformOrigin: 'bottom' }}
        />
        
        {/* Windows */}
        {[0, 1, 2, 3].map((w) => (
          <motion.rect
            key={w}
            x={320 + w * 40}
            y={485 - i * 40}
            width="20"
            height="25"
            fill="#fbbf24"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0, 1] }}
            transition={{
              duration: 0.3,
              delay: i * 0.4 + 0.3,
              repeat: Infinity,
              repeatDelay: 5
            }}
          />
        ))}
      </motion.g>
    ))}
    
    {/* Crane */}
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      {/* Crane tower */}
      <rect x="520" y="200" width="8" height="300" fill="#f97316" />
      
      {/* Crane arm */}
      <motion.line
        x1="524" y1="200" x2="400" y2="200"
        stroke="#f97316" strokeWidth="4"
        animate={{ x2: [400, 350, 400] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Hook cable */}
      <motion.line
        x1="400" y1="200" x2="400" y2="300"
        stroke="#334155" strokeWidth="2"
        animate={{ 
          y2: [300, 250, 300],
          x1: [400, 350, 400],
          x2: [400, 350, 400]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.g>
  </svg>
</div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-primary-600 dark:text-primary-400 opacity-30 dark:opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Building2 className="w-12 h-12 md:w-16 md:h-16" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-primary-600 dark:text-primary-400 opacity-30 dark:opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
      >
        <Ruler className="w-12 h-12 md:w-16 md:h-16" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-20 text-primary-600 dark:text-primary-400 opacity-30 dark:opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, delay: 1, repeat: Infinity }}
      >
        <HardHat className="w-12 h-12 md:w-16 md:h-16" />
      </motion.div>
      <motion.div
        className="absolute top-32 right-32 text-primary-600 dark:text-primary-400 opacity-30 dark:opacity-20 hidden lg:block"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 3.5, delay: 0.3, repeat: Infinity }}
      >
        <FileText className="w-14 h-14" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-20 text-primary-600 dark:text-primary-400 opacity-30 dark:opacity-20 hidden lg:block"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 3.2, delay: 0.7, repeat: Infinity }}
      >
        <Truck className="w-14 h-14" />
      </motion.div>
      <motion.div
        className="absolute top-40 left-1/4 text-primary-600 dark:text-primary-400 opacity-30 dark:opacity-20 hidden md:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 2.8, delay: 0.2, repeat: Infinity }}
      >
        <Hammer className="w-10 h-10" />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-1/4 text-primary-600 dark:text-primary-400 opacity-30 dark:opacity-20 hidden md:block"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 3.3, delay: 0.9, repeat: Infinity }}
      >
        <Layers className="w-10 h-10" />
      </motion.div>
      <motion.div
        className="absolute top-1/3 left-16 text-primary-600 dark:text-primary-400 opacity-30 dark:opacity-20 hidden xl:block"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 3.1, delay: 0.4, repeat: Infinity }}
      >
        <Compass className="w-12 h-12" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
            }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0 relative"
          >
            {/* 3D Shadow Layers */}
            <div className="absolute inset-0 w-48 h-56 sm:w-64 sm:h-80 md:w-80 md:h-96 rounded-2xl bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 blur-2xl opacity-40 transform translate-y-4 translate-x-4"></div>
            <div className="absolute inset-0 w-48 h-56 sm:w-64 sm:h-80 md:w-80 md:h-96 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-600 dark:to-slate-700 blur-xl opacity-30 transform translate-y-2 translate-x-2"></div>
            
            {/* Main Image Container with 3D effect */}
            <motion.div 
              className="relative w-48 h-56 sm:w-64 sm:h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden"
              style={{
                boxShadow: `
                  0 20px 60px -15px rgba(0, 0, 0, 0.3),
                  0 10px 30px -10px rgba(0, 0, 0, 0.2),
                  inset 0 -2px 10px rgba(0, 0, 0, 0.1),
                  inset 0 2px 10px rgba(255, 255, 255, 0.3)
                `
              }}
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Fallback gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white text-4xl sm:text-6xl font-bold">SJ</span>
              </div>
              {/* Profile Image - will overlay on top of fallback if it loads */}
              <Image
                src="/assets/profile.jpeg"
                alt="Sanjaya Joshi - Civil Engineer"
                fill
                className="object-cover relative z-10"
                priority
              />
              {/* Subtle top highlight for 3D effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-2xl"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 bg-clip-text text-transparent">
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-1"
                >
                  |
                </motion.span>
              </span>
            </motion.h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-300 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {displayedTitle}
              {displayedTitle && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-1"
                >
                  |
                </motion.span>
              )}
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about designing sustainable infrastructure and innovative structural solutions. 
              Specialized in structural analysis, CAD design, site supervision, and project management 
              with expertise in modern engineering tools and methodologies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg font-semibold text-base sm:text-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-slate-900 transition-all hover:scale-105 text-center"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ opacity: { delay: 1.2 }, y: { duration: 1.5, repeat: Infinity } }}
        >
          <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

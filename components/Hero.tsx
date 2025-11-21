'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Building2, Ruler, HardHat } from 'lucide-react'
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
      
      {/* Animated Geometric Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <motion.line
            x1="0" y1="0" x2="100%" y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
          <motion.line
            x1="100%" y1="0" x2="0" y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatDelay: 1 }}
          />
        </svg>
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-primary-600 dark:text-primary-400 opacity-30 dark:opacity-20"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Building2 className="w-16 h-16" />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-primary-600 dark:text-primary-400 opacity-30 dark:opacity-20"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
      >
        <Ruler className="w-16 h-16" />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-20 text-primary-600 dark:text-primary-400 opacity-30 dark:opacity-20"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, delay: 1, repeat: Infinity }}
      >
        <HardHat className="w-16 h-16" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-shrink-0"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 sm:border-8 border-primary-500 dark:border-primary-400 shadow-2xl shadow-primary-500/30">
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
            </div>
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

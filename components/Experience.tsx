'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'
import { experienceData } from '@/data/experienceData'

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My career journey in civil engineering and construction management
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experienceData.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary-300 dark:bg-primary-700 hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Timeline Dot */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    exp.current 
                      ? 'bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg shadow-primary-500/50' 
                      : 'bg-gray-200 dark:bg-slate-700'
                  }`}>
                    <Briefcase className={`w-8 h-8 ${exp.current ? 'text-white' : 'text-gray-600 dark:text-gray-400'}`} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.duration}</span>
                      {exp.current && (
                        <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

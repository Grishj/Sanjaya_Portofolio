'use client'

import { motion } from 'framer-motion'
import { Download, GraduationCap, Award, Trophy, Wrench } from 'lucide-react'
import { educationData, certificationsData, achievementsData } from '@/data/resumeData'

export default function Resume() {
  const skills = [
    { name: 'AutoCAD', category: 'design' },
    { name: 'Revit', category: 'design' },
    { name: 'STAAD Pro', category: 'analysis' },
    { name: 'ETABS', category: 'analysis' },
    { name: 'SAP2000', category: 'analysis' },
    { name: 'Civil 3D', category: 'design' },
    { name: 'Primavera P6', category: 'management' },
    { name: 'MS Project', category: 'management' },
    { name: 'Total Station', category: 'tools' },
    { name: 'SketchUp', category: 'design' },
    { name: '3ds Max', category: 'design' },
    { name: 'Estimation', category: 'management' },
  ]

  return (
    <section id="resume" className="py-20 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Download my complete resume or view highlights below
          </p>
          
          {/* Download Button */}
          <motion.a
            href="/assets/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Download className="w-5 h-5" />
            <span>Download Resume (PDF)</span>
          </motion.a>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <div key={index} className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold">{edu.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.year}</p>
                  {edu.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Award className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>
            <div className="space-y-3">
              {certificationsData.map((cert, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-white dark:bg-slate-800 rounded-lg">
                  <Award className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Wrench className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Skills & Tools</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg font-semibold hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors cursor-default"
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-slate-900 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                <Trophy className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Achievements</h3>
            </div>
            <ul className="space-y-3">
              {achievementsData.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <Trophy className="w-5 h-5 text-primary-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

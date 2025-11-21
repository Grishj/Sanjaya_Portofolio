'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ChevronRight } from 'lucide-react'
import { projectsData } from '@/data/projectsData'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-900">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my portfolio of civil engineering projects spanning structural design, 
            construction management, and infrastructure development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetails={() => setSelectedProject(project.id)}
            />
          ))}
        </div>

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:underline font-semibold text-lg group"
          >
            <span>View Complete Portfolio</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

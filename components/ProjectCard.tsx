'use client'

import { motion } from 'framer-motion'
import { Building2, MapPin, Calendar, ExternalLink } from 'lucide-react'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
  onViewDetails?: () => void
}

export default function ProjectCard({ project, index, onViewDetails }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Building2 className="w-20 h-20 text-white/30" />
        </div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 rounded-full text-xs font-semibold text-primary-600 dark:text-primary-400 capitalize">
          {project.category}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Role: {project.role}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs font-medium">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        {onViewDetails && (
          <button
            onClick={onViewDetails}
            className="w-full py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 group"
          >
            <span>View Details</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}
      </div>
    </motion.div>
  )
}

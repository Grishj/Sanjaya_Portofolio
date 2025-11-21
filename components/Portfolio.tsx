'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Building2, Layers, Map, HardHat } from 'lucide-react'
import { projectsData } from '@/data/projectsData'

type Category = 'all' | 'structural' | 'architectural' | 'surveying' | 'supervision'

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const categories = [
    { id: 'all' as Category, name: 'All Projects', icon: Layers },
    { id: 'structural' as Category, name: 'Structural Projects', icon: Building2 },
    { id: 'architectural' as Category, name: 'Architectural Drawings', icon: Layers },
    { id: 'surveying' as Category, name: 'Surveying & Estimation', icon: Map },
    { id: 'supervision' as Category, name: 'Field Supervision', icon: HardHat },
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-slate-800">
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
              Complete Portfolio
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Browse through my diverse portfolio of civil engineering works and contributions
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-600'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-80"
              >
                {/* Background Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <Building2 className="w-32 h-32 text-white" />
                </div>

                {/* Content */}
                <div className="relative h-full p-6 flex flex-col justify-between">
                  <div>
                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white mb-4 capitalize">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/90 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <p className="text-white/80 text-sm mb-3">
                      {project.role}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-8 text-gray-600 dark:text-gray-400"
        >
          Showing {filteredProjects.length} {activeCategory === 'all' ? 'projects' : `${activeCategory} projects`}
        </motion.p>
      </div>
    </section>
  )
}

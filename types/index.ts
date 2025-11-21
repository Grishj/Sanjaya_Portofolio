export interface Project {
  id: string
  title: string
  description: string
  image: string
  role: string
  responsibilities: string[]
  technologies: string[]
  category: 'structural' | 'architectural' | 'surveying' | 'supervision'
}

export interface Experience {
  id: string
  title: string
  company: string
  duration: string
  responsibilities: string[]
  current?: boolean
}

export interface Skill {
  name: string
  category: 'design' | 'analysis' | 'management' | 'tools'
  icon?: string
}

export interface Education {
  degree: string
  institution: string
  year: string
  description?: string
}

export interface Certification {
  name: string
  issuer: string
  year: string
}

import { Project } from '@/types'

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'Multi-Story Residential Complex',
    description: 'Designed and supervised construction of a 15-story residential building with modern amenities and sustainable features.',
    image: '/images/project1.jpg',
    role: 'Structural Design Engineer',
    responsibilities: [
      'Performed structural analysis using STAAD Pro',
      'Created detailed construction drawings in AutoCAD',
      'Coordinated with architects and MEP consultants',
      'Supervised on-site construction activities'
    ],
    technologies: ['STAAD Pro', 'AutoCAD', 'ETABS', 'Revit'],
    category: 'structural'
  },
  {
    id: '2',
    title: 'Highway Bridge Construction',
    description: 'Structural design and analysis of a 200m span highway bridge with seismic considerations.',
    image: '/images/project2.jpg',
    role: 'Bridge Design Engineer',
    responsibilities: [
      'Conducted load analysis and seismic design',
      'Prepared detailed structural drawings',
      'Performed site inspections and quality control',
      'Managed project documentation'
    ],
    technologies: ['STAAD Pro', 'AutoCAD Civil 3D', 'SAP2000'],
    category: 'structural'
  },
  {
    id: '3',
    title: 'Commercial Plaza Development',
    description: 'Architectural planning and structural design for a modern commercial plaza with retail and office spaces.',
    image: '/images/project3.jpg',
    role: 'Project Engineer',
    responsibilities: [
      'Created architectural layouts in Revit',
      'Developed 3D models and renderings',
      'Coordinated with stakeholders',
      'Prepared cost estimates and BOQ'
    ],
    technologies: ['Revit', 'AutoCAD', '3ds Max', 'SketchUp'],
    category: 'architectural'
  },
  {
    id: '4',
    title: 'Land Surveying & Topographic Mapping',
    description: 'Comprehensive land surveying and topographic mapping for a 50-acre development site.',
    image: '/images/project4.jpg',
    role: 'Survey Engineer',
    responsibilities: [
      'Conducted total station surveys',
      'Prepared topographic maps and contour plans',
      'Generated digital terrain models',
      'Coordinated boundary demarcation'
    ],
    technologies: ['Total Station', 'AutoCAD Civil 3D', 'GPS', 'GIS'],
    category: 'surveying'
  },
  {
    id: '5',
    title: 'Industrial Warehouse Construction',
    description: 'Site supervision and quality control for a 10,000 sq.m industrial warehouse facility.',
    image: '/images/project5.jpg',
    role: 'Site Engineer',
    responsibilities: [
      'Daily site supervision and progress monitoring',
      'Quality control and material testing',
      'Coordination with contractors and suppliers',
      'Safety compliance and documentation'
    ],
    technologies: ['MS Project', 'AutoCAD', 'Primavera P6'],
    category: 'supervision'
  },
  {
    id: '6',
    title: 'Water Treatment Plant Design',
    description: 'Structural and hydraulic design for a municipal water treatment facility.',
    image: '/images/project6.jpg',
    role: 'Design Engineer',
    responsibilities: [
      'Hydraulic calculations and pipe network design',
      'Structural design of treatment tanks',
      'Prepared detailed engineering drawings',
      'Equipment selection and specifications'
    ],
    technologies: ['EPANET', 'AutoCAD', 'STAAD Pro', 'Excel'],
    category: 'structural'
  }
]

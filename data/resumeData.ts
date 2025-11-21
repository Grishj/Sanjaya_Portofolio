import { Education, Certification } from '@/types'

export const educationData: Education[] = [
  {
    degree: 'Bachelor of Engineering in Civil Engineering',
    institution: 'Kathford International College of Engineering',
    year: 'Nov 2018 - 2024',
    description: 'Specialized in structural engineering and construction management'
  }
]

export const certificationsData: Certification[] = [
  { name: 'Professional Engineer (PE) License', issuer: 'State Engineering Board', year: '2020' },
  { name: 'Project Management Professional (PMP)', issuer: 'PMI', year: '2019' },
  { name: 'AutoCAD Certified Professional', issuer: 'Autodesk', year: '2018' },
  { name: 'OSHA Safety Certification', issuer: 'OSHA', year: '2017' },
]

export const achievementsData: string[] = [
  'Led design team for 15+ successful commercial projects',
  'Reduced project costs by 20% through value engineering',
  'Received "Engineer of the Year" award in 2022',
  'Published research paper on sustainable construction practices',
  'Mentored 10+ junior engineers',
]

import { Experience } from '@/types'

export const experienceData: Experience[] = [
  {
    id: '1',
    title: 'Senior Civil Engineer',
    company: 'ABC Construction & Engineering Ltd.',
    duration: 'Jan 2021 - Present',
    current: true,
    responsibilities: [
      'Lead structural design team for commercial and residential projects',
      'Review and approve structural calculations and drawings',
      'Coordinate with architects, MEP consultants, and contractors',
      'Conduct site inspections and quality assurance',
      'Mentor junior engineers and provide technical guidance'
    ]
  },
  {
    id: '2',
    title: 'Civil Engineer',
    company: 'XYZ Infrastructure Solutions',
    duration: 'Jun 2018 - Dec 2020',
    responsibilities: [
      'Performed structural analysis using STAAD Pro and ETABS',
      'Prepared detailed construction drawings in AutoCAD',
      'Conducted site surveys and prepared topographic maps',
      'Managed project documentation and progress reports',
      'Coordinated with contractors for project execution'
    ]
  },
  {
    id: '3',
    title: 'Assistant Engineer',
    company: 'BuildTech Consultants',
    duration: 'Jul 2016 - May 2018',
    responsibilities: [
      'Assisted in structural design and analysis',
      'Prepared quantity estimates and BOQ',
      'Conducted material testing and quality control',
      'Supported senior engineers in project planning',
      'Maintained project files and technical documentation'
    ]
  },
  {
    id: '4',
    title: 'Engineering Intern',
    company: 'Metro Construction Company',
    duration: 'Jan 2016 - Jun 2016',
    responsibilities: [
      'Assisted in site supervision activities',
      'Prepared daily progress reports',
      'Learned AutoCAD and structural design software',
      'Participated in site meetings and inspections',
      'Supported project team in various engineering tasks'
    ]
  }
]

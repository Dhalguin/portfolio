export type WorkExperienceType = {
  id: number
  role: string
  company: string
  startDate: string
  endDate: string
  keyPoints: string[]
  imageUrl: string
}

export const WorkExperiences: WorkExperienceType[] = [
  {
    id: 0,
    role: 'Full Stack Developer',
    company: 'Rentaweb.cl',
    startDate: 'Mar 2023',
    endDate: 'Jan 2025',
    keyPoints: [
      'Built 3 SaaS platforms from scratch',
      'Pest control management system with dynamic PDF exports and real-time GPS tracking',
      'Refrigeration maintenance platform with adaptive checklists and role-based access',
      'Construction e-commerce tool featuring automated invoicing and financial reporting',
      'Technologies: Next.js, Node.js, and MongoDB',
    ],
    imageUrl: '',
  },
  {
    id: 1,
    role: 'Full Stack & Mobile Developer ',
    company: 'Drimo',
    startDate: 'Apr 2022',
    endDate: 'Mar 2023',
    keyPoints: [
      'Redesigned vehicle service app with improved UX and payment integration',
      'Created construction industry app with real-time KPI analytics and AWS infrastructure',
      'Technologies: Next.js, React Native, Node.js, .NET, GraphQL, MongoDB, and serverless architecture',
    ],
    imageUrl: '',
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Freelance',
    startDate: 'Sep 2021',
    endDate: 'Dec 2021',
    keyPoints: [
      'Developed telemedicine platform with: Doctor appointment scheduling, Digital prescription generation, Video consultation features, PayPal integration',
      'Technologies: React.js, Node.js, PostgreSQL',
    ],
    imageUrl: '',
  },
]

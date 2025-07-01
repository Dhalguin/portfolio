type SkillType = {
  id: number
  icon: TechnologiesEnum
  label: string
}

export enum TechnologiesEnum {
  'reactjs' = 'reactjs',
  'nextjs' = 'nextjs',
  'react-native' = 'react-native',
  'typescript' = 'typescript',
  'nodejs' = 'nodejs',
  'expressjs' = 'expressjs',
  'nestjs' = 'nestjs',
  'mongodb' = 'mongodb',
  'mysql' = 'mysql',
  'postgresql' = 'postgresql',
  'aws' = 'aws',
}

export const SkillsandTechnologies: SkillType[] = [
  {
    id: 0,
    icon: TechnologiesEnum[TechnologiesEnum['reactjs']],
    label: 'React',
  },
  {
    id: 1,
    icon: TechnologiesEnum['nextjs'],
    label: 'Next',
  },
  {
    id: 2,
    icon: TechnologiesEnum['react-native'],
    label: 'React Native',
  },
  {
    id: 3,
    icon: TechnologiesEnum['typescript'],
    label: 'Typescript',
  },
  {
    id: 4,
    icon: TechnologiesEnum['nodejs'],
    label: 'Node.js',
  },
  {
    id: 5,
    icon: TechnologiesEnum['expressjs'],
    label: 'Express.js',
  },
  {
    id: 6,
    icon: TechnologiesEnum['nestjs'],
    label: 'NestJS',
  },
  {
    id: 7,
    icon: TechnologiesEnum['mongodb'],
    label: 'MongoDB',
  },
  {
    id: 8,
    icon: TechnologiesEnum['mysql'],
    label: 'MySQL',
  },
  {
    id: 9,
    icon: TechnologiesEnum['postgresql'],
    label: 'PostgreSQL',
  },
  {
    id: 10,
    icon: TechnologiesEnum['aws'],
    label: 'AWS',
  },
]

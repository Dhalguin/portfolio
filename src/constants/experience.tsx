'use client'

import { TranslationKey } from '@/contexts/lenguageContext/type'

export type WorkExperienceType = {
  id: number
  role: string
  company: string
  startDate: string
  endDate: string
  keyPoints: string[]
  imageUrl: string
}

export const workExperience = (t: (key: TranslationKey) => string | string[]) => {
  const data: WorkExperienceType[] = [
    {
      id: 0,
      role: t('experience_rentaweb_title') as string,
      company: 'Rentaweb.cl',
      startDate: 'Mar 2023',
      endDate: 'Jan 2025',
      keyPoints: [
        t('experience_rentaweb_description')[0],
        t('experience_rentaweb_description')[1],
        t('experience_rentaweb_description')[2],
        t('experience_rentaweb_description')[3],
        t('experience_rentaweb_description')[4],
      ],
      imageUrl: '',
    },
    {
      id: 1,
      role: t('experience_drimo_title') as string,
      company: 'Drimo',
      startDate: 'Apr 2022',
      endDate: 'Mar 2023',
      keyPoints: [
        t('experience_drimo_description')[0],
        t('experience_drimo_description')[1],
        t('experience_drimo_description')[2],
      ],
      imageUrl: '',
    },
    {
      id: 2,
      role: t('experience_freelance_title') as string,
      company: 'Freelance',
      startDate: 'Sep 2021',
      endDate: 'Dec 2021',
      keyPoints: [
        t('experience_freelance_description')[0],
        t('experience_freelance_description')[1],
      ],
      imageUrl: '',
    },
  ]

  return data
}

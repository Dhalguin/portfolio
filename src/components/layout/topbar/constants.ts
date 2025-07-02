import { LenguageEnum } from '@/constants/translate'
import { TranslationKey } from '@/contexts/lenguageContext/type'

type TopbarOption = {
  label: string
  href: string
}

export const topbarOptions = (t: (key: TranslationKey) => string | string[]) => {
  const data: TopbarOption[] = [
    {
      label: t('nav_skills') as string,
      href: '/#skills',
    },
    {
      label: t('nav_experience') as string,
      href: '/#experience',
    },
    {
      label: t('nav_contact') as string,
      href: '/#contact',
    },
  ]

  return data
}

type LenguageOption = {
  flag: LenguageEnum
  type: LenguageEnum
  label: string
}

export const LenguageOptions: LenguageOption[] = [
  {
    flag: LenguageEnum['en'],
    type: LenguageEnum['en'],
    label: 'EN',
  },
  {
    flag: LenguageEnum['es'],
    type: LenguageEnum['es'],
    label: 'ES',
  },
]

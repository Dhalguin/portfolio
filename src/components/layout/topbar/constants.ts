import { LenguageEnum } from '@/constants/translate'

type TopbarOption = {
  label: string
  href: string
}

export const TopbarOptions: TopbarOption[] = [
  {
    label: 'Skills',
    href: '/#skills',
  },
  {
    label: 'Experience',
    href: '/#experience',
  },
  {
    label: 'Contact',
    href: '/#contact',
  },
]

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

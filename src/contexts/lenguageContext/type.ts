import { translations } from '@/lib/translations'
import { JSX } from 'react'

export type Lenguage = 'en' | 'es'

export type TranslationKey = keyof typeof translations.en

export type LenguageContextType = {
  lenguage: Lenguage
  setLenguage: (lenguage: Lenguage) => void
  t: (key: TranslationKey) => string | string[]
}

export type LenguageProviderType = {
  children: JSX.Element
}

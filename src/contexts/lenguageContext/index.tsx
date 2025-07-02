'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Lenguage, LenguageContextType, LenguageProviderType, TranslationKey } from './type'
import { translations } from '@/lib/translations'

const LenguageContext = createContext<LenguageContextType | undefined>(undefined)

export const LenguageProvider: React.FC<LenguageProviderType> = ({ children }) => {
  const [lenguage, setLenguage] = useState<Lenguage>('es')

  const t = useMemo(
    () =>
      (key: TranslationKey): string | string[] => {
        const text = translations[lenguage][key] || translations['es'][key]

        return text
      },
    [lenguage]
  )

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lenguage
    }
  }, [lenguage])

  return (
    <LenguageContext.Provider value={{ lenguage, setLenguage, t }}>
      {children}
    </LenguageContext.Provider>
  )
}

export const useLenguage = () => {
  const context = useContext(LenguageContext)
  if (context === undefined) throw new Error('useLanguage must be used within a LanguageProvider')

  return context
}

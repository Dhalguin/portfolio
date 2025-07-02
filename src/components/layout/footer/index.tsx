'use client'

import { useLenguage } from '@/contexts/lenguageContext'

const Footer: React.FC = () => {
  const { t } = useLenguage()

  return (
    <footer className="py-6 text-center">
      <span className="text-sm">{t('footer')}</span>
    </footer>
  )
}

export default Footer

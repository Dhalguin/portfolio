'use client'

import { SkillsandTechnologies } from '@/constants/skills'
import { useLenguage } from '@/contexts/lenguageContext'
import { renderIcon } from '@/helpers/renderIcon'

const SkillSection: React.FC = () => {
  const { t } = useLenguage()

  return (
    <section id="skills" className="flex bg-primary-700 w-full">
      <div className="flex w-full">
        <div className="flex flex-col items-center gap-5 w-full">
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">
            {t('skills_title')}
          </h2>
          <p className="text-lg text-center md:text-start">{t('skills_description')}</p>
          <div className="mt-10 w-full grid grid-cols-2 md:grid-cols-4 gap-4">
            {SkillsandTechnologies.map(skill => (
              <div
                key={skill.id}
                className="h-16 bg-primary-600 rounded-4xl flex flex-col gap-1 items-center justify-center "
              >
                <i>{renderIcon(skill.icon)}</i>
                <span className="text-white">{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection

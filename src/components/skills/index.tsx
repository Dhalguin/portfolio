import { PageSection } from '@/packages/components'
import { SkillsData } from './constants'
import ItemSkill from './items'

export default function Skills() {
  return (
    <PageSection title="Habilidades">
      <div className="flex flex-wrap">
        {SkillsData.map(skill => (
          <ItemSkill
            key={skill.name}
            name={skill.name}
            percentage={skill.percentage}
            id={skill.id}
          />
        ))}
      </div>
    </PageSection>
  )
}

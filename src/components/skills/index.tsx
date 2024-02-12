import { PageSection } from '@/packages/components'
import { SkillsData } from './constants'
import ItemSkill from './items'

export default function Skills() {
  return (
    <PageSection>
      <h2 className="text-5xl">Habilidades</h2>
      <div className="flex justify-between flex-wrap">
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

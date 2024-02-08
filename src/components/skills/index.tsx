import { SkillsData } from './constants'
import ItemSkill from './items'

export default function Skills() {
  return (
    <section className="py-6 flex flex-col gap-10 bg-[#011027] px-4">
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
    </section>
  )
}

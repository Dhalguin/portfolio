import ExperienceCard from '@/components/experienceCard'
import { WorkExperiences } from '@/constants/experience'

const ExperienceSection: React.FC = () => {
  return (
    <section className="flex bg-background w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-col items-center gap-5 w-full">
          <h2 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl">Work Experience</h2>
          <p className="text-lg text-center md:text-start">
            My professional journey and key contributions.
          </p>
        </div>
        <div className="mt-10 relative">
          <div className="absolute left-1/2 top-0 h-full w-px bg-primary-600 hidden lg:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-x-4 lg:gap-x-0 gap-y-12">
            {WorkExperiences.map(exp => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection

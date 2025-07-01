import { DotIcon } from '../../../packages/icons'
import { ExperienceCardProps } from './types'

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const isEven = experience.id % 2 === 0

  return (
    <div className={`flex w-full ${isEven ? 'lg:justify-start' : 'lg:justify-end'}`}>
      <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
        <div className="flex flex-col p-5 border border-primary-600 rounded-lg bg-primary-700 h-full">
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-start">
              <h3 className="text-white font-bold text-xl">{experience.role}</h3>
              <span className="text-secondary">{experience.company}</span>
              <span>{`${experience.startDate} - ${experience.endDate}`}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            {experience.keyPoints.map((point, index) => (
              <div key={`point-key-${index}`} className="flex gap-2">
                <i className="mt-1">
                  <DotIcon width="16" height="16" fill="white" />
                </i>
                <span className="text-start text-white/60">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard

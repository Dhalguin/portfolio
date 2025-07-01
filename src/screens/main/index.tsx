import ContactSection from './sections/contactSection'
import ExperienceSection from './sections/experienceSection'
import HeroSection from './sections/heroSection'
import SkillSection from './sections/skillsSection'

const MainScreen: React.FC = () => {
  return (
    <div className="text-center w-full">
      <div className="flex flex-col w-full items-center">
        <HeroSection />
        <SkillSection />
        <ExperienceSection />
        <ContactSection />
      </div>
    </div>
  )
}

export default MainScreen

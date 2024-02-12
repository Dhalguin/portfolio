import ContactForm from '@/components/contactForm'
import Introduction from '@/components/intro'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Introduction />
      <Projects />
      <Skills />
      <ContactForm />
    </main>
  )
}

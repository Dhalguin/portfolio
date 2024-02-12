import ContactForm from '@/components/contactForm'
import InfoBar from '@/components/infoBar'
import Projects from '@/components/projects'
import Skills from '@/components/skills'

export default function Home() {
  return (
    <main className="min-h-screen py-2">
      <section className="bg-[url('/banner.png')] bg-cover bg-left bg-[auto 100%] px-4">
        <div className="py-6 flex justify-between">
          <div className="flex flex-col gap-4 lg:gap-10">
            <div>
              <h2 className="text-2xl lg:text-6xl">Un gusto conocerte!</h2>
              <h2 className="text-2xl lg:text-6xl">Soy Dhalgüin Hernández.</h2>
            </div>
            <div className="w-auto md:w-1/2">
              <p className="whitespace-pre-line">
                {`
                Soy un Desarrollador Fullstack Javascript certificado apasionado por crear aplicaciones web accesibles a todo usuario. 
                Capaz de autogestión eficaz en proyectos independientes, así como buenas habilidades de colaboración dentro de un equipo productivo.`}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-zinc-900 h-1 w-full" />
      <Projects />
      <div className="bg-zinc-900 h-1 w-full" />
      <Skills />
      <div className="bg-zinc-900 h-1 w-full" />
      <section
        id="contact_me"
        className="py-6 flex flex-col justify-between gap-10 mb-8 lg:flex-row"
      >
        <div className="flex flex-col gap-6 flex-1">
          <h2 className="text-5xl">Contactame</h2>
          <p>
            Me encantaría conocer tu proyecto y cómo podría ayudarte. Por favor complete el
            formulario y me comunicaré con usted lo antes posible.
          </p>
        </div>
        <ContactForm />
      </section>
      <div className="bg-zinc-900 h-1 w-full" />
    </main>
  )
}

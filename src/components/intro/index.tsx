import { PageSection } from '@/packages/components'

export default function Introduction() {
  return (
    <PageSection className="bg-[url('/banner.png')] bg-cover bg-left bg-[auto 100%]">
      <div className="py-6 px-4 flex justify-between">
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
    </PageSection>
  )
}

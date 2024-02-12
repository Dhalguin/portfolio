import { PageSection } from '@/packages/components'
import Form from './form'

export default function ContactForm() {
  return (
    <PageSection className="justify-between lg:flex-row lg:gap-0">
      <div className="flex flex-col gap-6 flex-1">
        <h2 className="text-3xl md:text-5xl">Contactame</h2>
        <p>
          Me encantaría conocer tu proyecto y cómo podría ayudarte. Por favor complete el formulario
          y me comunicaré con usted lo antes posible.
        </p>
      </div>
      <Form />
    </PageSection>
  )
}

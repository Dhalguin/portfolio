'use client'

import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ControlledInputUI, ControlledTextareaUI } from '../../../../packages/ui'
import { ContactForm, ContactFormResolverSchema } from '@/constants/resolvers/ContactFormResolver'
import { yupResolver } from '@hookform/resolvers/yup'
import { sendEmail } from '@/lib/nodemailer'

const ContactSection: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: yupResolver(ContactFormResolverSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactForm) => {
    const response = await sendEmail(data.name, data.email, data.message)
    if (typeof response !== 'string') {
      toast.success('Mail sent correctly to Dhalgüin Hernández')
      reset({ name: '', email: '', message: '' })
    } else {
      toast.error(response)
    }
  }

  return (
    <section id="contact" className="flex justify-center bg-primary-700 w-full">
      <div className="flex flex-col items-center gap-5 w-fit">
        <h2 className="text-white font-bold text-4xl md:text-5xl">Get In Touch</h2>
        <p className="text-lg text-center md:text-start">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
        <div className="mt-10 w-full">
          <form className="flex flex-col gap-5 w-full" onSubmit={handleSubmit(onSubmit)}>
            <ControlledInputUI
              control={control}
              name="name"
              label="Name"
              placeholder="Your Name"
              error={errors?.name}
            />
            <ControlledInputUI
              control={control}
              name="email"
              label="Email"
              placeholder="your.email@xample.com"
              error={errors?.email}
            />
            <ControlledTextareaUI
              control={control}
              name="message"
              label="Message"
              placeholder="Tell me about your project"
              error={errors?.message}
            />
            <button className="bg-secondary text-white py-2 rounded-lg cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

import * as Yup from 'yup'

export type ContactForm = {
  name: string
  email: string
  message: string
}

export const ContactFormResolverSchema = Yup.object<ContactForm>().shape({
  name: Yup.string().typeError('Must be a text').required('Field required'),
  email: Yup.string()
    .typeError('Must be a text')
    .email('Must be a valid email')
    .required('Field required'),
  message: Yup.string().typeError('Must be a text').required('Field required'),
})

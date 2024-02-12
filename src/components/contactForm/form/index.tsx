'use client'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import emailjs from '@emailjs/browser'

export default function Form() {
  const [form, setForm] = useState({ from_name: '', from_email: '', message: '' })
  const [showError, setShowError] = useState<boolean>(false)

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    if (form.from_name && form.from_email && form.message) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
          process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '',
          ev.target as HTMLFormElement,
          process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ''
        )
        .then(() => {
          toast.success('Correo enviado correctamente', { duration: 3000 })

          setForm({
            from_name: '',
            from_email: '',
            message: '',
          })
        })
        .catch(() => toast.error('No se pudo enviar el correo', { duration: 3000 }))

      setShowError(false)
    } else {
      setShowError(true)
    }
  }

  const onChange = (ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prevState => ({
      ...prevState,
      [ev.target.name]: ev.target.value,
    }))
  }

  return (
    <div className="flex flex-1 justify-center lg:justify-end">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-8 min-w-full lg:min-w-[75%] lg:w-fit"
        autoComplete="off"
      >
        <input
          type="text"
          name="from_name"
          id="from_name"
          placeholder="Nombre"
          className={`text-input ${showError && !form.from_name && 'error'}`}
          value={form.from_name}
          onChange={onChange}
        />
        <input
          type="email"
          name="from_email"
          id="from_email"
          placeholder="Correo eléctronico"
          className={`text-input ${showError && !form.from_email && 'error'}`}
          value={form.from_email}
          onChange={onChange}
        />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={5}
          placeholder="Mensaje"
          className={`text-input ${showError && !form.message && 'error'} resize-none`}
          value={form.message}
          onChange={onChange}
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            className="tracking-widest border-solid border-b-2 border-blue-500 pb-2"
          >
            ENVIAR MENSAJE
          </button>
        </div>
      </form>
    </div>
  )
}

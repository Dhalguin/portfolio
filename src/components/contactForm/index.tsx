'use client'
import emailjs from '@emailjs/browser'

export default function ContactForm() {
  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '',
        ev.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_PUBLIC_KEY ?? ''
      )
      .then(res => alert('Email sended ' + res.status + ' ' + res.text))
  }

  return (
    <div className="flex flex-1 justify-end">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-8 min-w-[75%] w-fit"
        autoComplete="off"
      >
        <input
          type="text"
          name="from_name"
          id="from_name"
          placeholder="Nombre"
          className="bg-transparent border-solid border-b-2 border-zinc-600 pb-1 px-3"
        />
        <input
          type="email"
          name="from_email"
          id="from_email"
          placeholder="Correo eléctronico"
          className="bg-transparent border-solid border-b-2 border-zinc-600 pb-1 px-3"
        />
        <textarea
          name="message"
          id="message"
          cols={30}
          rows={5}
          placeholder="Mensaje"
          className="bg-transparent border-solid border-b-2 border-zinc-600 pb-1 resize-none px-3"
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

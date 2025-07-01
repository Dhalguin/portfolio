'use server'

import nodemailer from 'nodemailer'

export const sendEmail = async (name: string, email: string, message: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_USERNAME,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_NODEMAILER_USERNAME,
      to: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message}</p>`,
    })

    return true
  } catch (err) {
    return `Error has ocurred ${err}`
  }
}

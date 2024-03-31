'use server'
import { formSchema } from '@/lib/zod/schema'
import sgMail from '@sendgrid/mail'
import { IContactFormTypes } from '@/lib/types'

export async function sendContact(formData: IContactFormTypes) {
  const result = formSchema.safeParse({
    name: formData.name,
    email: formData.email,
    selectedServices: formData.selectedServices
  })

  await new Promise(resolve => setTimeout(resolve, 1500))

  if (result.success) {
    console.log('success in _actions.ts: ', result.data)

    // Sendgrid test //
    sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')
    const msg = {
      to: 'luke.hide@gmail.com', // Change to your recipient
      from: 'luke.hide@gmail.com', // Change to your verified sender
      subject: 'Contact Request from E-Nite Services',
      text: 'We have recieved a contact request from E-Nite Sevices.',
      html: `<p>Contact Name: ${result.data.name}</p><p>Contact Email: ${result.data.email}</p>`
    }

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch(error => {
        console.error(error)
      })

    // End sendgrid test //

    return { data: result.data, message: 'Submission Successful' }
  }

  if (result.error) {
    console.log('error in _actions.ts: ', result.error)
    return { error: result.error.format(), message: 'Submission Failed' }
  }
}

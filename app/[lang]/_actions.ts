'use server'
import { formSchema } from '@/lib/zod/schema'
import sgMail from '@sendgrid/mail'
import { IContactFormTypes } from '@/lib/types'

export async function sendContact(formData: IContactFormTypes) {
  const result = formSchema.safeParse({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    selectedServices: formData.selectedServices,
    beertapOption: formData.beertapOption,
    notes: formData.notes,
    date: formData.date,
    conditionsRead: formData.conditionsRead
  })

  await new Promise(resolve => setTimeout(resolve, 1500))

  if (result.success) {
    console.log('success in _actions.ts: ', result.data)

    // Sendgrid //
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!)
    const msg = {
      to: 'luke.hide@gmail.com', 
      from: 'luke.hide@gmail.com', 
      subject: 'Contact Request from E-Nite Services',
      text: 'We have recieved a contact request from E-Nite Sevices.',
      html: `
        <p>Contact Name: ${result.data.firstName} ${result.data.lastName}</p>
        <p>Contact Email: ${result.data.email}</p>
        <p>Contact Phone Number: ${result.data.phone}</p>
        <p>Selected Services: ${result.data.selectedServices}</p>
        <p>Beer Tap Option: ${result.data.beertapOption}</p>
        <p>Event Notes: ${result.data.notes}</p>
        <p>Event Date: ${result.data.date}</p>
        <p>Contact has read the terms: ${result.data.conditionsRead}</p>
      `
    }

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch(error => {
        console.error(error)
      })

    // End sendgrid //

    return { data: result.data, message: 'Request Successful' }
  }

  if (result.error) {
    console.log('error in _actions.ts: ', result.error)
    return { error: result.error.format(), message: 'Request Failed' }
  }
}

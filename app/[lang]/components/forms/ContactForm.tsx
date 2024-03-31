// May require suppressHydrationWarning in html of layout.tsx
'use client'

import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { InputField } from './InputField'
import { sendContact } from '../../_actions'
import { IContactFormTypes } from '@/lib/types'
// Zod validation imports:
import { zodResolver } from '@hookform/resolvers/zod'
import { formSchema } from '@/lib/zod/schema'

const options = [
  'Delivery & Installation',
  'Photographer',
  'DJs',
  'Live show',
  'Party Bracelets'
]

export default function ContactForm({ title }: { title: string }) {
  const [serverResponse, setServerResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const {
    control,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IContactFormTypes>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(formSchema),
    defaultValues: {
      selectedServices: []
    }
  })

  // Either use action or onSubmit
  const action: () => void = handleSubmit(async (data: IContactFormTypes) => {
    setLoading(true)
    try {
      const response = await sendContact(data)
      console.log('server action response: ', response)
      if (response?.message) {
        setServerResponse(response.message)
      }
      if (response?.error) {
        setServerResponse(response.message)
      }
    } catch (error) {
      console.log('server action error: ', error)
    } finally {
      setLoading(false)
    }
  })

  // Not developed
  function onSubmit(contact: IContactFormTypes) {
    setLoading(true)
    console.log('Contact submitted: ', contact)
    setLoading(false)
  }

  if (loading) {
    return (
      <div className='container'>
        <p>Loading...</p>
      </div>
    )
  }

  if (serverResponse) {
    return (
      <div className='container'>
        <p>{serverResponse}</p>
      </div>
    )
  }

  return (
    <div className='custom-shadow container py-4 '>
       
      <h1 className='text-xl font-semibold'>{title}</h1>
      <form
        className='m-2 flex flex-col'
        noValidate
        action={action}
        // onSubmit={handleSubmit(onSubmit)}
      >
        {/* Name Field */}
        <div>
          <InputField
            type='text'
            id='name'
            label='Your Name'
            placeholder='Enter your name'
            inputClasses='w-full md:w-1/2'
            {...register('name')}
            error={errors.name}
          />
        </div>

        {/* Email field */}
        <div>
          <InputField
            type='text'
            id='email'
            label='Your Email'
            placeholder='Enter your email'
            inputClasses='block w-full md:w-1/2'
            {...register('email')}
            error={errors.email}
          />
        </div>

        {/* Check Boxes */}
        <div className='ml-1 flex flex-col'>
          <p className='font-medium text-gray-500'>Services:</p>

          {options.map((service, index) => (
            // Controller acts as a wrapper for custom input components or HTML inputs that
            // need to be controlled directly by React Hook Form
            <Controller
              key={service}
              name='selectedServices'
              control={control} // from useForm, links to form's logic and state management
              rules={{ required: true }}
              render={(
                { field } // field object contains properties, methods to manage input state (value, onChange)
              ) => (
                <label className='m-1 flex flex-row text-gray-500'>
                  <input
                    type='checkbox'
                    value={service}
                    checked={field.value.includes(service)}
                    onChange={() => {
                      const newValue = field.value.includes(service)
                        ? field.value.filter(c => c !== service) // Remove service from array
                        : [...field.value, service] // Add service to array
                      field.onChange(newValue) // Update the form value
                    }}
                  />
                  <p className='ml-2'>{service}</p>
                </label>
              )}
            />
          ))}
        </div>

        <button type='submit' className='mt-4' disabled={loading}>
          Submit
        </button>
      </form>
    </div>
  )
}

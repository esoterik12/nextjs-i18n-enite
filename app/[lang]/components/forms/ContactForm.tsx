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
import CartSummary from '../products/CartSummary'
// Cart:
import { useSelector } from 'react-redux'
import { RootStateType } from '@/lib/redux'
import CartSummaryEmpty from '../products/CartSummaryEmpty'
import { TextareaInput } from './TextareaInput'

interface FormOptions {
  servicesOptions: string[]
  beerTapOptions: string[]
}

interface ContactFormProps {
  whatYouGetTitle: string
  guaranteedResponse: string
  freeConsultation: string
  personalizedRecommendations: string
  streamlineProcess: string
  formTitle: string
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  services: string
  servicesOptions: FormOptions['servicesOptions']
  beertap: string
  beertapOptions: FormOptions['beerTapOptions']
  notes: string
  eventDate: string
  submitButtonText: string
  submittingText: string
}

interface ContactFormComponentProps {
  contactForm: ContactFormProps
}

export default function ContactForm({
  contactForm
}: ContactFormComponentProps) {
  const [serverResponse, setServerResponse] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const cart = useSelector((state: RootStateType) => state.cart)

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
      selectedServices: [],
      beertapOption: 'No Beer Tap'
    }
  })

  const action: () => void = handleSubmit(async (data: IContactFormTypes) => {
    console.log('Contact data: ', data)

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

  if (loading) {
    return (
      <div className='container mx-auto flex h-screen items-center justify-center px-4 py-8'>
        <div className='text-center'>
          <p className='mb-4 text-lg text-gray-500'>Loading...</p>
          {/* Placeholder for a spinner */}
          <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500'></div>
        </div>
      </div>
    )
  }

  if (serverResponse) {
    return (
      <div className='container mx-auto flex h-screen items-center justify-center px-4 py-8'>
        <div className='mx-auto max-w-md rounded-lg border border-gray-200 bg-white p-4 text-center shadow-sm'>
          <p className='text-md text-gray-700'>{serverResponse}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='container mt-8 '>
      {/* Left Side Form Section */}
      {/* Grid of 2 columns, 3 rows - not including note text area under */}
      <div className='grid grid-cols-1 gap-x-4 lg:grid-cols-2'>
        <form className='' noValidate action={action}>
          <div className='grid grid-cols-1 gap-x-4 sm:grid-cols-2'>
            {/* Name Fields */}
            <InputField
              type='text'
              id='firstName'
              label={contactForm.firstName}
              placeholder='...'
              {...register('firstName')}
              error={errors.firstName}
            />
            <InputField
              type='text'
              id='lastName'
              label={contactForm.lastName}
              placeholder='...'
              {...register('lastName')}
              error={errors.lastName}
            />

            {/* Email field */}
            <InputField
              type='text'
              id='email'
              label={contactForm.email}
              placeholder='...'
              {...register('email')}
              error={errors.email}
            />

            {/* Phone field */}
            <InputField
              type='text'
              id='phone'
              label={contactForm.phoneNumber}
              placeholder='...'
              {...register('phone')}
              error={errors.phone}
            />

            {/* Services Check Boxes */}
            <div className='ml-1 mt-4 flex flex-col'>
              <p className='font-medium text-gray-500'>
                {contactForm.services}
              </p>

              {contactForm.servicesOptions.map((service, index) => (
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

            {/* Beer Tap Radio Buttons */}
            <div className='ml-1 mt-4 '>
              <h4 className='font-medium text-gray-500'>{contactForm.beertap}</h4>
              {contactForm.beertapOptions.map(item => (
                <label key={item} className='flex items-center space-x-2'>
                  <input
                    type='radio'
                    value={item}
                    className='radio radio-accent radio-sm '
                    {...register('beertapOption')}
                  />
                  <p className='text-md text-gray-500'>{item}</p>
                </label>
              ))}
            </div>
          </div>

          {/* Notes Section */}
          <div className='mt-6'>
            <TextareaInput
              id='notes'
              label={contactForm.notes}
              // THIS NEEDS INSTRUICTIONS IN THE PLACEHOLDER
              placeholder='...'
              inputClasses='w-full h-32 p-2 border border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none'
              {...register('notes')}
              error={errors.notes}
            />
          </div>

          <div className=''>
            <InputField
              type='date'
              id='date'
              label={contactForm.eventDate}
              placeholder='The date of your event'
              {...register('date')}
              error={errors.date}
            />
          </div>

          <button
            type='submit'
            className={`mt-4 rounded-xl px-6 py-2 font-semibold text-white transition-colors duration-150 ${loading ? 'bg-gray-400' : 'bg-gray-900 hover:bg-gray-600'}`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        <div>
          {cart?.items && cart.items.length > 0 ? (
            <CartSummary />
          ) : (
            <CartSummaryEmpty />
          )}
        </div>
      </div>
    </div>
  )
}

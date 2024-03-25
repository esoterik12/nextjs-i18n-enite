import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'

interface IServicesContainerProps {
  image: string
  children: ReactElement
  title: string
  description: string
  link: string
  linkColor: string
  buttonText: string
}

export default function ServicesContainer({
  image,
  children,
  title,
  description,
  link,
  linkColor,
  buttonText
}: IServicesContainerProps) {
  return (
    <div className='flex flex-row md:p-6'>
      <Image
        src={image}
        alt={title}
        width={200}
        height={200}
        priority
        className='hidden md:flex rounded-full'
      />
      <div className='flex min-w-[295px] flex-col pt-4 md:ml-4 md:p-4'>
        <div className='flex flex-row'>
          {children}
          <h2 className='mb-2  text-2xl font-semibold'>{title} </h2>
        </div>
        <p className='text-gray-500'>{description}</p>
        <div className='mt-2 '>
          <Link href={link}>
            <p className={`text-md mt-2 inline-block bg-gradient-to-r from-${linkColor}-700 via-${linkColor}-600 to-${linkColor}-500 bg-clip-text font-normal text-transparent transition duration-300 ease-in-out hover:scale-105 hover:font-semibold`}>
              {buttonText}{' '}
            </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

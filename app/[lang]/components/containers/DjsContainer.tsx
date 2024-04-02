import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'
import SelectIcon from '../icons/SelectIcon'

interface IDjsContainerProps {
  image: string
  children: ReactElement
  title: string
  description: string
  links: IDjsLinks[]
  priceButtonText: string
}

interface IDjsLinks {
  link: string
  linkText: string
  platformType: string
}

export default function DjsContainer({
  image,
  children,
  title,
  description,
  links,
  priceButtonText
}: IDjsContainerProps) {
  return (
    <div className='flex flex-row md:p-6'>
      <div className='hidden w-1/5 max-w-full rounded-full md:block'>
        <Image
          src={image}
          alt={title}
          width={200}
          height={200}
          priority
          className='hidden max-w-10 max-h-48 rounded-full md:block p-2'
        />
      </div>
      <div className='flex w-4/5 flex-col pt-4 md:ml-4 md:p-4'>
        <div className='flex flex-row'>
          <h2 className='mb-2  text-2xl font-semibold'>{title} </h2>
        </div>
        <p className='text-gray-500'>{description}</p>
        <div className='mt-2 flex flex-col'>
          <div>{children}</div>
          <Link href='/'>
            <p className='ml-2 text-lg'>{priceButtonText}</p>
          </Link>
          {links.map(link => (
            <Link href={link.link} key={link.link}>
              <div className='flex flex-row text-gray-500'>
                <SelectIcon
                  iconSelection={link.platformType}
                  iconClasses='h-6 w-6 m-2 '
                />
                <p
                  className={`text-md mt-2 inline-block bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text font-normal text-transparent transition duration-300 ease-in-out hover:scale-105 hover:font-semibold`}
                >
                  {link.linkText}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

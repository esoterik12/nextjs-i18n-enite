import React from 'react'
import IconFacebook from '../icons/social-icons/IconFacebook'
import IconInstagram from '../icons/social-icons/IconInstagram'

const sections = [
  {
    title: 'Products',
    items: ['Party Packs', 'Individual Products', 'Guides']
  },
  {
    title: 'Services',
    items: ['Delivery', 'DJs', 'Photographers']
  },
  {
    title: 'Company',
    items: ['Contact', 'Conditions']
  }
]

interface ISocialItems {
  name: string
  icon: React.ReactNode
  link: string
}

const items = [
  {
    id: 1,
    name: 'Facebook',
    icon: IconFacebook,
    link: 'https://www.facebook.com/'
  },
  {
    id: 2,
    name: 'Instagram',
    icon: IconInstagram,
    link: 'https://www.instagram.com/'
  }
]

const Footer = async () => {
  return (
    <div className='py-y mt-6 w-full px-2 text-gray-400'>
      <div className='mx-auto flex max-w-[1240px] grid-cols-2 flex-row justify-between border-b-2 border-gray-600 py-8 md:grid-cols-6'>
        <div className='flex flex-row gap-8'>
          {sections.map((section, index) => (
            <div key={index}>
              <p className='pt-2 font-semibold uppercase text-sm text-gray-300'>{section.title}</p>
              <ul>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className='py-1 text-gray-500 hover:cursor-pointer text-sm hover:text-gray-400'
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className='flex flex-col justify-end'>
          <div className='flex justify-end  gap-2 pt-4 text-4xl'>
            {items.map(item => {
              return <item.icon key={item.id} />
            })}
          </div>
          <p className='mt-2 text-right text-lg'>contact@e-nite.com</p>
          <p className='mt-1 text-right text-lg'>+41 79 754 24 38</p>
        </div>
      </div>

      <div className='mx-auto flex max-w-[1240px] flex-col justify-between px-2 py-4 text-center text-gray-400 sm:flex-row'>
        <p className='text-sm py-4'>
          2024 <span className='font-bold'>e-nite</span>, All Rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer

'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedBannerMobile({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='relative mx-auto'>
      <div className=''>
        <div className='relative w-full overflow-hidden'>
          <div className='absolute z-10 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-60 text-white'>
            {children}
          </div>
          <Image
            // className='-translate-y-60 transform'
            alt='banner'
            src='/e-nite/PartyBluePink-transformed-small.png'
            priority
            // fill
            width={2000}
            height={200}
          />
        </div>
      </div>
    </div>
  )
}

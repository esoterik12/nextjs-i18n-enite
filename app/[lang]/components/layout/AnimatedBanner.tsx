'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AnimatedBanner({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='relative mx-auto'>
      <div className='absolute z-10 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-60 text-white'>
        {children}
      </div>
      <div className='max-h-40 overflow-hidden'>
        <motion.div
          initial={{ x: 0, y: 30, rotate: 2, scale: 1.18 }} // Starting angle
          animate={{ x: 0, y: -80, rotate: -10, scale: 1.4}} // End angle
          transition={{
            duration: 35,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut'
          }}
        >
          <Image
            className='-translate-y-20 transform'
            alt='banner'
            src='/e-nite/enite-sky-webp-small-webp.webp'
            priority
            width={2000}
            height={1000}
          />
        </motion.div>
      </div>
    </div>
  )
}

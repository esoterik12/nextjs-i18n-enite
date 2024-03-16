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
      <div className='absolute z-10 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-50 text-white'>
        {children}
      </div>
      <div className='max-h-48 overflow-hidden'>
        <motion.div
          initial={{ rotate: 0, scale: 1.1 }} // Starting angle
          animate={{ rotate: -20, scale: 1.3 }} // End angle
          transition={{
            duration: 40,
            repeat: Infinity,
            repeatType: 'mirror', 
            ease: 'easeInOut'
          }}
        >
          <Image
            className='-translate-y-20 transform'
            alt='banner'
            src='/e-nite/enite-sky-webp.webp'
            priority
            width={2000}
            height={1000}
          />
        </motion.div>
      </div>
    </div>
  )
}

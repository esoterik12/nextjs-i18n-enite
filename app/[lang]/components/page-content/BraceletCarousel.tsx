'use client'
import Image from 'next/image'
import { useState } from 'react'
import SelectIcon from '../icons/SelectIcon'

interface IBraceletCarouselProps {
  images: string[]
}

export default function BraceletCarousel({ images }: IBraceletCarouselProps) {
  let [current, setCurrent] = useState(0)

  let previousSlide = () => {
    if (current === 0) setCurrent(images.length - 1)
    else setCurrent(current - 1)
  }

  let nextSlide = () => {
    if (current === images.length - 1) setCurrent(0)
    else setCurrent(current + 1)
  }

  return (
    <div className='relative mt-6 overflow-hidden'>
      <div
        className={`duration-40 flex transition ease-out`}
        style={{
          transform: `translateX(-${current * 100}%)`
        }}
      >
        {images.map(image => {
          return <Image src={image} alt={image} key={image} width={400} height={400} />
        })}
      </div>

      <div className='absolute top-0 flex h-full w-full items-center justify-between px-10 text-3xl text-white'>
        <button onClick={previousSlide}>
          <SelectIcon
            iconClasses='h-10 w-10 rounded-full bg-white text-gray-600 opacity-75'
            iconSelection='leftArrowCircle'
          />
        </button>
        <button onClick={nextSlide}>
          <SelectIcon
            iconClasses='h-10 w-10 rounded-full bg-white text-gray-600 opacity-75'
            iconSelection='rightArrowCircle'
          />
        </button>
      </div>

      <div className='absolute bottom-0 flex w-full justify-center gap-3 py-4'>
        {images.map((image, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i)
              }}
              key={'circle' + i}
              className={`h-4 w-4 cursor-pointer rounded-full  ${
                i == current ? 'bg-gray-900' : 'bg-gray-500'
              }`}
            ></div>
          )
        })}
      </div>
    </div>
  )
}

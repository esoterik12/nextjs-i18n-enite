import Link from 'next/link'
import Image from 'next/image'
import { ILogoProps } from '@/lib/types'

const Logo = async ({ image, text, lang }: ILogoProps) => {
  return (
    <div className='ml-2'>
      <Link
        href={`/${lang}`}
        className='flex flex-row items-center gap-1 text-xl font-bold tracking-wide'
      >
        <Image src={image} alt={text} width={60} height={60} className='p-1'/>
        <p className='ml-2'>{text}</p>
      </Link>
    </div>
  )
}

export default Logo

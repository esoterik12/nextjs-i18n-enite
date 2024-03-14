import Link from 'next/link'
import Image from 'next/image'
import { ILogoProps } from '@/lib/types'

const Logo = async ({ image, text, lang }: ILogoProps) => {
  return (
    <div>
      <Link
        href={`/${lang}`}
        className='flex flex-row items-center gap-1 text-xl font-bold tracking-wide'
      >
        <Image src={image} alt={text} width={70} height={70} />
        <p>{text}</p>
      </Link>
    </div>
  )
}

export default Logo

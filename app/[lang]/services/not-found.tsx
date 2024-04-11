'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='text-center'>
      <h2 className='text-3xl'>Error - 404</h2>
      <p>We could not find the page your were looking for.</p>
      <p>
        Go back to the{' '}
        <Link href='/' className='text-blue-500'>
          e-nite homepage
        </Link>
      </p>
    </main>
  )
}

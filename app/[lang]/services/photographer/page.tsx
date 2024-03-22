import Image from "next/image"

export default async function PhotographerPage() {
  return (
    <section className='py-6'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>Photographer Services</h1>

        <div className='flex flex-col md:flex-row'>
          <div>
            <div className='mb-8'>
              <p className='text-gray-500'>
                We collaborate with a well-established photographer with more
                than 15 years of experience. His specialty is to recreate the
                real atmosphere and mood of your events through photography.
              </p>
            </div>

            <div className='mb-8'>
              <h2 className='m-4 text-2xl font-semibold'>Services Offered:</h2>
              <ul className='list-inside list-disc'>
                <li className='text-gray-500'>Weddings</li>
                <li className='text-gray-500'>Events</li>
                <li className='text-gray-500'>Portraits</li>
                <li className='text-gray-500'>Studio Shootings</li>
                <li className='text-gray-500'>Packshots</li>
                <li className='text-gray-500'>Maternity</li>
                <li className='text-gray-500'>Architecture</li>
              </ul>
            </div>

            <div className='mb-8'>
              <h2 className='m-4 text-2xl font-semibold'>
                Post-Shooting Services:
              </h2>
              <p className='text-gray-500'>
                We take care of the entire “post-shooting” part, which includes
                sorting out pictures, editing (if desired) as well as
                publication (digital or paper formats). Additionally, we can
                also take care of creating invitations, flyers, etc… for all
                your upcoming events.
              </p>
            </div>

            <div className='mb-8'>
              <h2 className='m-4 text-2xl font-semibold'>Price Quote</h2>
              <p className='text-gray-500'>
                It is difficult for us to present our entire price list with
                such customized service, so please do get in touch with us and
                we will get back to you shortly with a price quote. You will not
                be disappointed!
              </p>
            </div>
          </div>

          <div>
            <Image 
              src="/e-nite/e-nite-photographer-transformed.jpeg"
              alt="Photographer Image"
              width={1000}
              height={1000}
              className="rounded-full p-6"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/utils/dictionary'

// similar to home page, this page gets the page content with getDictionary function passing in the lang param

export default async function About({
  params: { lang }
}: {
  params: { lang: Locale }
}) {
  const { conditions } = await getDictionary(lang)

  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='m-4 text-3xl font-bold'>{conditions.title}</h1>
        <p className='text-gray-500'>{conditions.description}</p>

        <h1 className='m-4 text-2xl font-semibold'>
          {conditions.sections.acceptance.title}
        </h1>
        <p className='text-gray-500'>
          {conditions.sections.acceptance.content}
        </p>

        <h1 className='m-4 text-2xl font-semibold'>
          {conditions.sections.equipment.title}
        </h1>
        <ul className='list-inside list-disc'>
          {conditions.sections.equipment.content.map(item => (
            <li key={item} className='text-gray-500'>
              {item}
            </li>
          ))}
        </ul>

        <h1 className='m-4 text-2xl font-semibold'>
          {conditions.sections.reception.title}
        </h1>
        <ul className='list-inside list-disc'>
          {conditions.sections.reception.content.map(item => (
            <li key={item} className='text-gray-500'>
              {item}
            </li>
          ))}
        </ul>

        <h1 className='m-4 text-2xl font-semibold'>
          {conditions.sections.delivery.title}
        </h1>
        <ul className='list-inside list-disc'>
          {conditions.sections.delivery.content.map(item => (
            <li key={item} className='text-gray-500'>
              {item}
            </li>
          ))}
        </ul>

        <h1 className='m-4 text-2xl font-semibold'>
          {conditions.sections.prices.title}
        </h1>
        <ul className='list-inside list-disc'>
          {conditions.sections.prices.content.map(item => (
            <li key={item} className='text-gray-500'>
              {item}
            </li>
          ))}
        </ul>

        <div className='m-4 grid auto-cols-max grid-flow-col gap-4'>
          {Object.entries(conditions.sections.prices.multipliers).map(
            ([key, value], index) => {
              // Break into new column every 4 items
              const isNewColumn = index % 4 === 0
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isNewColumn ? 'col-span-full' : ''}`}
                >
                  <div className='rounded-md bg-gray-100 p-2'>
                    <span className='text-sm text-gray-500'>{key}: </span>
                    <span className='text-sm text-red-400'>{value}</span>
                  </div>
                </div>
              )
            }
          )}
        </div>

        <h1 className='m-4 text-2xl font-semibold'>
          {conditions.sections.clientInfo.title}
        </h1>
        <p className='mb-4 text-gray-500'>
          {conditions.sections.clientInfo.description}
        </p>
        <ul className='list-inside list-disc'>
          {conditions.sections.clientInfo.content.map(item => (
            <li key={item} className='text-gray-500'>
              {item}
            </li>
          ))}
        </ul>

        <h1 className='m-4 text-2xl font-semibold'>
          {conditions.sections.payment.title}
        </h1>
        <p className='mb-4 text-gray-500'>
          {conditions.sections.payment.content}
        </p>
        <ol className='list-inside list-disc'>
          {conditions.sections.payment.details.map(item => (
            <li key={item} className='text-gray-500'>
              {item}
            </li>
          ))}
        </ol>
        <p className='mb-4 mt-4 text-gray-500'>
          {conditions.sections.payment.closing}
        </p>

        <h1 className='m-4 text-2xl font-semibold'>
          {conditions.sections.deposit.title}
        </h1>
        <ol className='list-inside list-disc'>
          {conditions.sections.deposit.details.map(item => (
            <li key={item} className='text-gray-500'>
              {item}
            </li>
          ))}
        </ol>

        <h1 className='m-4 text-2xl font-semibold'>
          {conditions.sections.returns.title}
        </h1>
        <ol className='list-inside list-disc'>
          {conditions.sections.returns.details.map(item => (
            <li key={item} className='text-gray-500'>
              {item}
            </li>
          ))}
        </ol>

        <h1 className='m-4 text-2xl font-semibold'>
          {conditions.sections.liability.title}
        </h1>
        <ol className='list-inside list-disc'>
          {conditions.sections.liability.details.map(item => (
            <li key={item} className='text-gray-500'>
              {item}
            </li>
          ))}
        </ol>

        <h1 className='m-4 text-2xl font-semibold'>
          {conditions.sections.closing.title}
        </h1>
        <p className='mb-4 text-gray-500'>
          {conditions.sections.closing.content}
        </p>

      </div>
    </section>
  )
}

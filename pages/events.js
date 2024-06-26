import siteMetadata from '@/data/siteMetadata'
import eventsData from '@/data/eventsData'
import EventCard from '@/components/EventCard'
import { PageSEO } from '@/components/SEO'
import { Reveal } from '@/components/Reveal'

export default function Events() {
  return (
    <>
      <PageSEO title={`Events - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Events
          </h1>
          <Reveal>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              These are all the events conducted by the ACM Student chapter in the academic year
              2023-2024
            </p>
          </Reveal>
        </div>
        <div className="container py-12">
          <div className="-m-4 mx-auto flex flex-wrap">
            {eventsData.map((d) => (
              <EventCard
                key={d.title}
                title={d.title}
                description={d.description}
                date={d.date}
                imgSrc={d.imgSrc}
                href={d.href}
                photos={d.photos}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

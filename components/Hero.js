import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section>
      <div className="container mx-auto flex flex-col justify-center p-6 sm:py-12 lg:flex-row lg:justify-between lg:py-24">
        <div className="flex flex-col justify-center rounded-sm p-6 text-center lg:max-w-md lg:text-left xl:max-w-lg">
          <h1 className="leadi text-5xl font-bold sm:text-6xl">
            ACM
            <br />
            NIT SURAT
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Learning never exhausts the mind .
            <p className="text-center lg:text-right"> - Leonardo Da Vinci</p>
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link href="/contact">
              <button
                className="rounded bg-primary-500 px-8 py-3 text-lg font-semibold text-white hover:bg-primary-700
                dark:hover:bg-primary-400 "
              >
                Get in Touch &rarr;
              </button>
            </Link>
          </div>
        </div>
        <div className="xl:h-112 2xl:h-128 mt-8 flex h-72 items-center justify-center p-6 sm:h-80 lg:mt-0 lg:h-96">
          <Image
            src="/static/images/hand-coding.png"
            className="xl:h-112 2xl:h-128 h-72 object-contain sm:h-80 lg:h-96"
            height="550"
            width="550"
            alt="coding"
          />
        </div>
      </div>
    </section>
  )
}
import React from 'react';
import Image from 'next/image'
import Hero from '../../components/Hero'

export default function Home() {
  return (
    <div>
      <div className="">
        <main className="flex justify-center">
          <div className="md:w-[800px]">
          <div className="">
            <Hero
              heroTitle="Portfolio"
              heroDescription="A selection of some projects I’ve during my career as a Software Developer"
              emoji={
                <Image
                  src="/book.png"
                  width={50}
                  height={50}
                  alt="Books"
                />
              }
            />
          </div>
          <div className="">
            <h1>About</h1>
            <p className="leading-loose text-textcolor">
              Closures are different. By the time most people approach closures,
              they have already used them unknowingly many times — and it is
              likely that this is true for yourself, too. So learning closures
              is less about understanding a new concept and more about recognizing
              something you have already been doing for a while.

            </p>
          </div>
          </div>
        </main>
      </div>
    </div>
  )
}

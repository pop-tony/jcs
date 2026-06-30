import React from 'react'
import HeroSection from '../components/HeroSection'
import ShopSection from '../components/ShopSection'
import StyleCarousel from '../components/StyleCarousel'

const Home = () => {
  return (
    <>
      <HeroSection />

      <section id="about" className="bg-white px-4 py-20 text-zinc-900 dark:bg-black dark:text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight">Why Shop MIZ J</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            We curate quality pieces for the modern muse across Ghana. From statement dresses to everyday essentials,
            find pieces that fit your body and your life. Fast delivery, secure payments,
            and a fit guarantee on every order.
          </p>

          <div className="mt-12 flex justify-between items-center">
            <div>
              <div className="mb-3 text-4xl font-black text-[#9F2B68]">500+</div>
              <p className="text-sm font-semibold">Curated Pieces</p>
            </div>
            <div>
              <div className="mb-3 text-4xl font-black text-[#9F2B68]">2k+</div>
              <p className="text-sm font-semibold">Happy Muses</p>
            </div>
            <div>
              <div className="mb-3 text-4xl font-black text-[#9F2B68]">48hr</div>
              <p className="text-sm font-semibold">Fast Delivery</p>
            </div>
          </div>
        </div>
      </section>

      <ShopSection />
      <StyleCarousel />
    </>
  )
}

export default Home

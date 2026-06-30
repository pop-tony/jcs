import React from 'react'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white px-4 py-24 text-zinc-900 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9F2B68]">Our Story</p>
        <h1 className="mb-8 text-5xl font-black tracking-tight md:text-6xl">
          Jad's Collection Shop
        </h1>
        
        <div className="space-y-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p className="text-xl font-semibold text-zinc-900 dark:text-white">
            Curated fashion for the modern muse. Based in Accra, worn everywhere.
          </p>
          
          <p>
            JCS started with one goal: make elevated, affordable fashion accessible across Ghana. 
            We’re tired of fast fashion that falls apart and luxury prices that gatekeep style. 
            So we built the middle ground — quality pieces, thoughtful design, honest pricing.
          </p>

          <p>
            Every piece in our collection is handpicked by our team. We work directly with trusted 
            manufacturers to ensure premium fabrics, clean finishes, and fits that actually flatter. 
            No compromises, no markup games.
          </p>

          <div className="my-12 grid gap-8 sm:grid-cols-3">
            <div>
              <div className="mb-3 text-4xl font-black text-[#9F2B68]">500+</div>
              <p className="text-sm font-semibold">Curated Pieces</p>
            </div>
            <div>
              <div className="mb-3 text-4xl font-black text-[#9F2B68]">2k+</div>
              <p className="text-sm font-semibold">Happy Customers</p>
            </div>
            <div>
              <div className="mb-3 text-4xl font-black text-[#9F2B68]">48hr</div>
              <p className="text-sm font-semibold">Fast Delivery</p>
            </div>
          </div>

          <h2 className="mb-4 mt-12 text-3xl font-bold text-zinc-900 dark:text-white">Why Shop JCS</h2>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-[#9F2B68]">✓</span>
              <span><span className="font-semibold">Quality First:</span> We touch every fabric before it hits our site. If we wouldn't wear it, we don't sell it.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#9F2B68]">✓</span>
              <span><span className="font-semibold">Fit Guarantee:</span> Free returns within 7 days. We want you to love it, not just like it.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#9F2B68]">✓</span>
              <span><span className="font-semibold">Real Support:</span> WhatsApp us for sizing help. A real human replies — usually Jad herself.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
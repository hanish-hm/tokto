'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-light-cream">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center z-10 px-4 sm:px-6 md:px-8 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mb-8 sm:mb-10 md:mb-12"
            whileHover={{ scale: 1.02 }}
          >
            <Image 
              src="/tokto-logo.png" 
              alt="Tokto Logo" 
              width={500} 
              height={250} 
              className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 w-auto mx-auto animate-float filter drop-shadow-lg"
            />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark-gray mb-4 sm:mb-6 leading-tight"
          >
            Smooth Roll. Every Time.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="font-body text-base sm:text-lg md:text-xl lg:text-2xl text-medium-gray mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Premium pre-rolled cones crafted for balance, clean burn,<br />
            and effortless rolls.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-6"
          >
            <Link href="/products">
              <motion.button 
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(40, 167, 69, 0.2)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent-green text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 font-body font-medium text-base sm:text-lg rounded-lg card-shadow w-full sm:w-auto"
              >
                Explore Smooth Roll
              </motion.button>
            </Link>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="font-body text-sm text-medium-gray"
          >
            Available in White and Brown variants.
          </motion.p>
        </motion.div>
      </section>

      {/* Product Highlight */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-warm-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient mb-6">Smooth Roll Cones</h2>
            <p className="font-body text-lg sm:text-xl text-medium-gray leading-relaxed max-w-3xl mx-auto">
              Designed to stay out of the way —<br />
              so the experience stays smooth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="text-center card-shadow p-8 rounded-xl bg-white border border-soft-gray"
            >
              <div className="mb-6">
                <Image 
                  src="/tokto-white.png" 
                  alt="Tokto White Rolling Papers" 
                  width={200} 
                  height={200} 
                  className="mx-auto h-32 w-auto"
                />
              </div>
              <h3 className="font-body text-xl font-semibold text-accent-green mb-4">White</h3>
              <p className="font-body text-medium-gray leading-relaxed">
                Ultra-clean cones for a light, refined roll.<br />
                Smooth burn. Neutral taste.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="text-center card-shadow p-8 rounded-xl bg-white border border-soft-gray"
            >
              <div className="mb-6">
                <Image 
                  src="/tokto-brown.png" 
                  alt="Tokto Brown Rolling Papers" 
                  width={200} 
                  height={200} 
                  className="mx-auto h-32 w-auto"
                />
              </div>
              <h3 className="font-body text-xl font-semibold text-accent-green mb-4">Brown</h3>
              <p className="font-body text-medium-gray leading-relaxed">
                Unbleached cones with a natural feel.<br />
                Balanced burn. Rich texture.
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <Link href="/products">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-accent-green text-white px-8 py-3 font-body font-medium rounded-lg card-shadow"
              >
                View Products
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient mb-8">Rolling Is a Ritual.</h2>
          <div className="space-y-6 font-body text-lg sm:text-xl text-medium-gray leading-relaxed">
            <p>Tokto was created with a simple belief —<br />rolling papers should never interrupt the moment.</p>
            <p>From texture to burn rate, every detail is refined<br />to feel smooth, consistent, and intentional.</p>
            <div className="pt-4">
              <p className="font-medium">No harshness.<br />No distractions.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quality & Craft */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-warm-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient mb-8">Perfect Smoothness in Every Toke.</h2>
          <div className="mb-8">
            <p className="font-body text-lg sm:text-xl text-medium-gray mb-8">What we focus on:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              "Even burn from start to finish",
              "Clean draw with no unwanted taste", 
              "Consistent quality in every pack"
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-shadow p-6 rounded-xl bg-white border border-soft-gray"
              >
                <p className="font-body text-medium-gray">{feature}</p>
              </motion.div>
            ))}
          </div>

          <div className="font-body text-lg text-medium-gray">
            <p>Nothing extra.<br />Nothing missing.</p>
          </div>
        </motion.div>
      </section>

      {/* From the Founder */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="space-y-6 font-body text-lg sm:text-xl text-medium-gray leading-relaxed mb-8">
            <p>Tokto began as a personal search for better rolling papers —<br />papers that felt reliable, smooth, and honest.</p>
            <p>That search became a brand built around quality, simplicity,<br />and respect for the roll.</p>
          </div>
          
          <Link href="/about">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent-green text-white px-8 py-3 font-body font-medium rounded-lg card-shadow"
            >
              Read Our Story
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-warm-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient mb-6">Let's Talk.</h2>
          <p className="font-body text-lg sm:text-xl text-medium-gray leading-relaxed mb-8">
            Questions, collaborations, or wholesale inquiries —<br />
            we're always open to a conversation.
          </p>
          
          <div className="space-y-4">
            <div>
              <a href="mailto:hello@tokto.in" className="font-body text-lg text-accent-green hover:underline">
                hello@tokto.in
              </a>
            </div>
            <div>
              <a href="https://wa.me/toktoin" className="font-body text-lg text-accent-green hover:underline">
                Chat on WhatsApp
              </a><br />
              <span className="font-body text-sm text-medium-gray">@tokto.in</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-dark-gray text-center">
        <p className="font-body text-sm text-gray-400">
          Tokto produces premium rolling papers.<br />
          For legal herbal use only. 18+.
        </p>
      </footer>
    </main>
  )
}
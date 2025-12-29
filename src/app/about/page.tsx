'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-light-cream">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient mb-8"
            whileHover={{ scale: 1.02 }}
          >
            About Tokto
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl text-dark-gray leading-relaxed"
          >
            Smoothness isn't accidental.<br />
            It's designed.
          </motion.p>
        </motion.div>
      </section>

      {/* Brand Philosophy */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-warm-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient mb-8">Why Tokto Exists</h2>
          <div className="space-y-6 font-body text-lg sm:text-xl text-medium-gray leading-relaxed">
            <p>Tokto was created with a simple belief —<br />rolling papers should never interrupt the experience.</p>
            <p>From the feel of the paper to the way it burns, every detail is refined to stay out of the way.<br />No harshness. No distractions. Just balance.</p>
            <p>Rolling, for us, is a ritual.<br />And rituals deserve respect.</p>
          </div>
        </motion.div>
      </section>

      {/* What We Make */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient mb-12 text-center">Smooth Roll</h2>
          <div className="text-center mb-12">
            <p className="font-body text-lg sm:text-xl text-medium-gray leading-relaxed max-w-3xl mx-auto">
              Tokto Smooth Roll cones are crafted for consistency and comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              <p className="font-body text-medium-gray">ultra-clean, smooth, and light</p>
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
              <p className="font-body text-medium-gray">unbleached, natural, and balanced</p>
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <p className="font-body text-lg text-medium-gray">
              Both designed to deliver perfect smoothness in every toke.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Quality & Craft */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-warm-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient mb-8">Designed with Intent</h2>
          <div className="mb-8">
            <p className="font-body text-lg sm:text-xl text-medium-gray mb-8">We focus on what actually matters:</p>
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

          <div className="space-y-4 font-body text-lg text-medium-gray">
            <p>Nothing flashy. Nothing unnecessary.<br />Just well-crafted rolling papers, done right.</p>
          </div>
        </motion.div>
      </section>

      {/* Founder Story */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-gradient mb-8">From the Founder</h2>
          <div className="space-y-6 font-body text-lg sm:text-xl text-medium-gray leading-relaxed">
            <p>Tokto began as a personal search for better rolling papers —<br />papers that felt smooth, reliable, and honest.</p>
            <p>What started as a habit turned into a brand focused on quality, simplicity, and intention.<br />Every Tokto product reflects that original idea.</p>
          </div>
        </motion.div>
      </section>

      {/* Closing Statement */}
      <section className="py-16 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-warm-white">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="space-y-6 mb-12">
            <p className="font-display text-2xl sm:text-3xl text-dark-gray leading-relaxed">
              Tokto is for those who value the roll as much as the moment.
            </p>
            <p className="font-body text-xl text-accent-green font-medium">
              Smooth. Balanced. Intentional.
            </p>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-soft-gray"
          >
            <p className="font-body text-sm text-medium-gray italic">
              Crafted with intention. Rolled with care.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
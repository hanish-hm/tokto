'use client'

import { motion } from 'framer-motion'
import ContactSection from '@/components/ContactSection'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-light-cream">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-light-cream">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-lg sm:text-xl text-medium-gray leading-relaxed"
          >
            We'd love to hear from you. Reach out for any questions, collaborations, or just to say hello.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  )
}
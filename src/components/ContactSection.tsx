'use client'

import { motion } from 'framer-motion'
import { Mail, Instagram, Facebook, Twitter } from 'lucide-react'

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'info@tokto.in',
      href: 'mailto:info@tokto.in',
      color: 'bg-accent-green'
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      value: '@toktoindia',
      href: 'https://instagram.com/toktoindia',
      color: 'bg-pink-500'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: 'Facebook',
      value: 'toktoindia',
      href: 'https://facebook.com/toktoindia',
      color: 'bg-blue-600'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: 'X (Twitter)',
      value: '@toktoindia',
      href: 'https://x.com/toktoindia',
      color: 'bg-gray-900'
    }
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 bg-warm-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text & Brand Message */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2 
              className="font-display text-4xl sm:text-5xl md:text-6xl text-gradient"
              whileHover={{ scale: 1.02 }}
            >
              Let's Talk.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg sm:text-xl text-medium-gray leading-relaxed max-w-lg"
            >
              Questions about Tokto, our products, or collaborations?
              We're always open to a conversation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 border-t border-soft-gray"
            >
              <p className="font-body text-sm text-medium-gray italic">
                Smooth responses. No rush.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
                className="group card-shadow p-6 rounded-xl bg-white border border-soft-gray hover:border-accent-green/30 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <motion.div 
                    className={`${method.color} text-white p-3 rounded-lg group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    {method.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-body font-semibold text-dark-gray group-hover:text-accent-green transition-colors duration-300">
                      {method.label}
                    </h3>
                    <p className="font-body text-sm text-medium-gray truncate">
                      {method.value}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-soft-gray shadow-sm"
    >
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="animate-float"
            >
              <Image 
                src="/tokto-logo.png" 
                alt="Tokto Logo" 
                width={140} 
                height={70} 
                className="h-12 sm:h-14 md:h-16 w-auto filter drop-shadow-sm"
              />
            </motion.div>
          </Link>
          
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {['Products', 'About', 'Contact'].map((item, index) => (
              <motion.div 
                key={item} 
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link 
                  href={item === 'Products' ? '/products' : item === 'About' ? '/about' : '/contact'}
                  className="font-sans text-sm lg:text-base font-medium text-dark-gray hover:text-accent-green transition-colors duration-300 tracking-wide"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.button 
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            className="md:hidden text-accent-green p-2"
          >
            <div className="w-5 h-0.5 bg-accent-green mb-1 rounded-full"></div>
            <div className="w-5 h-0.5 bg-accent-green mb-1 rounded-full"></div>
            <div className="w-5 h-0.5 bg-accent-green rounded-full"></div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-soft-gray pt-4"
          >
            {['Products', 'About', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={item === 'Products' ? '/products' : item === 'About' ? '/about' : '/contact'}
                className="block py-2 font-sans text-base font-medium text-dark-gray hover:text-accent-green transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
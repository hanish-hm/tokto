'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Products() {
  const products = [
    {
      name: "Tokto Smooth Roll - Brown",
      description: "Perfect smoothness in every toke with our signature brown papers.",
      price: "₹1,099",
      features: ["55 Cones", "Ultra-thin paper", "Natural brown color", "Slow burn"],
      image: "/tokto-brown.png"
    },
    {
      name: "Tokto Smooth Roll - White",
      description: "Classic white papers delivering the ultimate smoking experience.",
      price: "₹1,099", 
      features: ["55 Cones", "Pure white paper", "Clean taste", "Even burn"],
      image: "/tokto-white.png"
    }
  ]

  return (
    <main className="pt-20 sm:pt-24 min-h-screen bg-light-cream">
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gradient mb-4 sm:mb-6">
            Our Products
          </h1>
          <p className="font-body text-medium-gray max-w-4xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed px-4">
            Discover our premium Smooth Roll collection - crafted for the perfect smoking experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="card-shadow p-6 sm:p-8 rounded-xl bg-white border border-soft-gray group"
            >
              <div className="aspect-square bg-warm-white mb-6 sm:mb-8 flex items-center justify-center rounded-lg p-4">
                <Image 
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <h3 className="font-body text-xl sm:text-2xl text-dark-gray mb-3 sm:mb-4 font-semibold">{product.name}</h3>
              <p className="font-body text-medium-gray mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{product.description}</p>
              
              <div className="mb-4 sm:mb-6">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex items-center mb-2">
                    <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-3 flex-shrink-0"></div>
                    <span className="font-body text-sm text-medium-gray">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="font-display text-2xl sm:text-3xl text-gradient font-semibold">{product.price}</span>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-green text-white px-6 py-2 font-body text-sm font-medium tracking-wide hover:bg-green-600 transition-all duration-300 rounded-lg card-shadow w-full sm:w-auto"
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12 sm:mt-16"
        >
          <p className="font-display text-medium-gray italic text-base sm:text-lg md:text-xl px-4">
            "Perfect Smoothness In Every Toke"
          </p>
        </motion.div>
      </section>
    </main>
  )
}
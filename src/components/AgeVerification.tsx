'use client'

import { useState, useEffect } from 'react'

export default function AgeVerification() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const verified = localStorage.getItem('tokto-age-verified')
    if (!verified) {
      setShowPopup(true)
      document.body.style.overflow = 'hidden'
    }
  }, [])

  const handleVerify = () => {
    localStorage.setItem('tokto-age-verified', 'true')
    setShowPopup(false)
    document.body.style.overflow = 'unset'
  }

  const handleExit = () => {
    window.location.href = 'https://google.com'
  }

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-lg z-50 flex items-center justify-center p-6">
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-10 max-w-lg w-full text-center border border-gray-200/50 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-green-200/30 to-emerald-300/30 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-teal-200/30 to-cyan-300/30 rounded-full blur-xl"></div>
        
        {/* Logo/Brand area */}
        <div className="mb-6">
          <img 
            src="/tokto-logo.png" 
            alt="Tokto Logo" 
            className="h-20 mx-auto"
          />
        </div>

        {/* Content */}
        <div className="mb-8 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Age Verification</h2>
          <p className="text-gray-600 leading-relaxed">
            Our premium rolling papers are intended for adults only.
            <br />Please confirm you are 18 years or older.
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleVerify}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105 border border-green-400/30"
          >
            Yes, I am 18 or older
          </button>
          <button
            onClick={handleExit}
            className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 py-3 px-8 rounded-2xl font-medium transition-all duration-300 border border-gray-300 shadow-sm hover:shadow-md"
          >
            No, take me away
          </button>
        </div>

        {/* Footer text */}
        <p className="text-xs text-gray-500 mt-6">
          By entering, you agree to our terms and confirm your age.
        </p>
      </div>
    </div>
  )
}
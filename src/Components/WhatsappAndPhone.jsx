import React from 'react'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

const WhatsappAndPhone = () => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-30">
      <a
        href="https://wa.me/917034177811" 
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center animate-pulse"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
      <a
        href="+917034177811" 
        className="bg-blue-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <FaPhoneAlt className="text-2xl" />
      </a>
    </div>
  )
}

export default WhatsappAndPhone

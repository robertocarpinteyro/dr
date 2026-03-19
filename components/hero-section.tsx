'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Phone, Shield, Clock, Star, Lock, Volume2, VolumeX } from 'lucide-react'
import { Button } from './ui/button'

const WHATSAPP_LINK = "https://wa.me/522224276475?text=Hola%20Dr.%20Fernández%2C%20me%20gustaría%20agendar%20una%20cita."
const PHONE_NUMBER = "tel:+522225040271"
const VIDEO_URL = "https://res.cloudinary.com/dieszqcrn/video/upload/v1773946655/WhatsApp_Video_2026-03-19_at_12.43.20_PM_cbxwhl.mp4"

const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault()
  if (typeof window !== 'undefined' && (window as any).gtagWhatsAppConversion) {
    (window as any).gtagWhatsAppConversion(WHATSAPP_LINK)
  } else {
    window.open(WHATSAPP_LINK, '_blank')
  }
}

const handleCallClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  if (typeof window !== 'undefined' && (window as any).gtagCallConversion) {
    (window as any).gtagCallConversion(PHONE_NUMBER)
  }
}

function HeroSection() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-green-900"
      style={{ paddingTop: '80px' }}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-full"
          >
            {/* Badges - wrap on mobile */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                <Shield className="w-3 h-3 mr-1" />
                Certificado
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Cédula Prof.
              </span>
              <span className="inline-flex items-center px-2 py-1 rounded-full text-[10px] font-medium bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                COFEPRIS
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4">
              ¿Dolor o Sangrado Rectal?
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl lg:text-2xl text-green-400 font-semibold mb-4 leading-snug">
              Recupera Tu Calidad de Vida con Cirugía Mínimamente Invasiva
            </p>

            {/* Doctor info */}
            <div className="mb-6">
              <p className="text-sm sm:text-base text-white/90 font-semibold">
                Dr. José Manuel Fernández Rivero
              </p>
              <p className="text-xs sm:text-sm text-white/70">
                Coloproctólogo Certificado · +500 Cirugías Exitosas
              </p>
            </div>

            {/* CTA Buttons - stacked on mobile */}
            <div className="flex flex-col gap-3 mb-6">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full" onClick={handleWhatsAppClick}>
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white text-base py-6 shadow-lg"
                >
                  AGENDAR CITA
                </Button>
              </a>
              <a href={PHONE_NUMBER} className="w-full" onClick={handleCallClick}>
                <button
                  className="w-full flex items-center justify-center gap-2 bg-transparent border-2 border-white/40 text-white hover:bg-white/10 text-base py-4 rounded-md font-medium transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Llamar Ahora
                </button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="space-y-2 text-xs sm:text-sm text-white/80">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="ml-1">Calificación promedio</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-green-400" />
                  Agenda tu cita
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-green-400" />
                  100% Confidencial
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right column - Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full flex justify-center"
          >
            {/* Video container - vertical format */}
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl bg-slate-700">
              <video
                ref={videoRef}
                src={VIDEO_URL}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Unmute button - larger and more visible on mobile */}
              <button
                onClick={toggleMute}
                className="absolute bottom-16 right-3 z-20 w-12 h-12 sm:w-10 sm:h-10 bg-black/60 hover:bg-black/80 active:bg-black/90 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm border border-white/20"
                aria-label={isMuted ? 'Activar sonido' : 'Silenciar'}
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
                ) : (
                  <Volume2 className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
                )}
              </button>
              {/* Tap to unmute hint */}
              {isMuted && (
                <div className="absolute bottom-[104px] sm:bottom-28 right-3 z-20 bg-black/60 text-white text-xs px-2 py-1.5 rounded backdrop-blur-sm border border-white/20 whitespace-nowrap">
                  🔊 Toca aquí
                </div>
              )}
            </div>

            {/* Stats card - positioned at bottom */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-lg p-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-green-600 font-bold text-xs">500+</span>
                </div>
                <div className="min-w-0">
                  <p className="font-bold text-xs text-gray-900 leading-tight">Cirugías Exitosas</p>
                  <p className="text-[10px] text-gray-500">Técnicas modernas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

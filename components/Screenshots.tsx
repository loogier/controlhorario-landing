'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Screenshots() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const screenshots = [
    {
      src: '/screenshots/screenshot-1.png',
      alt: 'Pantalla principal de Control Horario mostrando registro de jornada',
      title: 'Registro Intuitivo'
    },
    {
      src: '/screenshots/screenshot-2.png',
      alt: 'Vista de estadísticas mensuales con gráficos',
      title: 'Estadísticas Detalladas'
    },
    {
      src: '/screenshots/screenshot-3.png',
      alt: 'Pantalla de exportación de informes en PDF y Excel',
      title: 'Exportación de Informes'
    }
  ]

  return (
    <section id="screenshots" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Capturas de pantalla
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Descubre la interfaz intuitiva y moderna de Control Horario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <article
              key={index}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedImage(index)
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Ver captura de pantalla: ${screenshot.title}`}
            >
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[9/19.5] bg-gray-200 dark:bg-gray-700">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={1080}
                    height={1920}
                    className="w-full h-auto object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {screenshot.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setSelectedImage(null)
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Vista ampliada de captura de pantalla"
          >
            <div className="relative max-w-2xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded"
                aria-label="Cerrar vista ampliada"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-[9/19.5] bg-gray-900 rounded-2xl overflow-hidden">
                <Image
                  src={screenshots[selectedImage].src}
                  alt={screenshots[selectedImage].alt}
                  width={1080}
                  height={1920}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-white text-center mt-4 text-lg font-medium">
                {screenshots[selectedImage].title}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

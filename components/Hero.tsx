export default function Hero() {
  const appName = "Control Horario"
  const shortDescription = "Tu aliado perfecto para el registro y control de tu jornada laboral"
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.loogier.control_horario"

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-900 dark:to-gray-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-white dark:bg-gray-800 opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white dark:bg-gray-800 opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo or Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl">
              <svg 
                className="w-12 h-12 text-primary-600 dark:text-primary-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            {appName}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-white/90 dark:text-gray-200 max-w-2xl mx-auto text-balance">
            {shortDescription}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50"
              aria-label="Descargar Control Horario en Google Play Store"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <span>Descargar en Google Play</span>
            </a>
          </div>

          {/* Badges or Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm text-white/80 dark:text-gray-300">Gratuita</div>
            </div>
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">Sin Ads</div>
              <div className="text-sm text-white/80 dark:text-gray-300">Sin publicidad</div>
            </div>
            <div className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold mb-1">Offline</div>
              <div className="text-sm text-white/80 dark:text-gray-300">Funciona sin internet</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <svg className="w-6 h-6 mx-auto text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

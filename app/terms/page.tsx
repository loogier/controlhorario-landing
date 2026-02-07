import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos y Condiciones - Control Horario',
  description: 'Términos y condiciones de uso de Control Horario.',
}

export default function Terms() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Volver al inicio</span>
          </Link>

          {/* Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Términos y Condiciones
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          {/* Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Aceptación de los Términos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Al descargar, instalar o utilizar Control Horario, aceptas estar sujeto a estos términos y condiciones. 
                Si no estás de acuerdo con alguna parte de estos términos, no deberías usar la aplicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Uso de la Aplicación
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Control Horario es una herramienta para el registro personal de jornada laboral. Te comprometes a:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li className="mb-2">Usar la aplicación de manera legal y apropiada</li>
                <li className="mb-2">No intentar modificar, descompilar o realizar ingeniería inversa de la aplicación</li>
                <li className="mb-2">No usar la aplicación para actividades ilegales o no autorizadas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. Propiedad Intelectual
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Control Horario y todo su contenido, características y funcionalidad son propiedad de sus desarrolladores 
                y están protegidos por las leyes de derechos de autor internacionales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Descargo de Responsabilidad
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                La aplicación se proporciona "tal cual" sin garantías de ningún tipo. No garantizamos que:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li className="mb-2">La aplicación estará libre de errores o funcionará ininterrumpidamente</li>
                <li className="mb-2">Los defectos serán corregidos</li>
                <li className="mb-2">La aplicación cumplirá con requisitos específicos de tu lugar de trabajo</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Limitación de Responsabilidad
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                En ningún caso seremos responsables por daños indirectos, incidentales, especiales o consecuentes 
                que resulten del uso o la imposibilidad de usar la aplicación, incluyendo pero no limitado a la 
                pérdida de datos o beneficios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Respaldo de Datos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Eres responsable de mantener copias de seguridad de tus registros. Te recomendamos exportar 
                regularmente tus datos para evitar pérdidas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Modificaciones
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nos reservamos el derecho de modificar o reemplazar estos términos en cualquier momento. 
                Los cambios significativos se notificarán a través de actualizaciones de la aplicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Cumplimiento Legal
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Si bien Control Horario está diseñada para ayudar en el cumplimiento del registro de jornada laboral 
                según la normativa española (RD-ley 8/2019), es tu responsabilidad asegurar que el uso de la aplicación 
                cumple con las normativas específicas de tu empresa y sector.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                9. Contacto
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Si tienes preguntas sobre estos términos, puedes contactarnos en:{' '}
                <a 
                  href="mailto:support@controlhorario.com"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  support@controlhorario.com
                </a>
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad - Control Horario',
  description: 'Política de privacidad de Control Horario. Tu privacidad es importante para nosotros.',
}

export default function PrivacyPolicy() {
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
              Política de Privacidad
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          {/* Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Información General
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Control Horario está comprometida con la protección de tu privacidad. Esta aplicación NO recopila, 
                almacena ni comparte ningún tipo de información personal con terceros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Almacenamiento Local de Datos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Todos los registros de jornada laboral que crees se almacenan exclusivamente en tu dispositivo. 
                La aplicación utiliza el almacenamiento local del dispositivo Android y no envía ninguna información 
                a servidores externos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. No Recopilamos Datos Personales
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Control Horario no requiere registro de cuenta ni recopila información personal como nombre, 
                email, teléfono o ubicación. No utilizamos cookies, analytics ni herramientas de seguimiento.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Permisos de la Aplicación
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                La aplicación puede solicitar los siguientes permisos:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li className="mb-2"><strong>Almacenamiento:</strong> Para guardar y exportar tus registros en PDF/Excel</li>
                <li className="mb-2"><strong>Alarmas:</strong> Para configurar recordatorios de registro</li>
                <li className="mb-2"><strong>Ejecutar al inicio:</strong> Para mantener las alarmas activas después de reiniciar el dispositivo</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Exportación de Datos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cuando exportas tus registros en PDF o Excel, el archivo se genera localmente en tu dispositivo. 
                Tú decides qué hacer con ese archivo (guardarlo, compartirlo, etc.). Nosotros no tenemos acceso a él.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Cambios en Esta Política
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos de cualquier 
                cambio significativo a través de una actualización de la aplicación.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Contacto
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Si tienes preguntas sobre esta política de privacidad, puedes contactarnos en:{' '}
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

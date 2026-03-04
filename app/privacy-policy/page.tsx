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
              Última actualización: 4 de marzo de 2026
            </p>
          </header>

          {/* Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Principio fundamental
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Control Horario <strong>no recopila, transmite ni comparte datos con el desarrollador</strong>.
                Todos tus datos son tuyos. La única excepción es la función opcional de respaldo en Google Drive,
                que envía datos directamente a <strong>tu propia cuenta de Google</strong> — no a ningún servidor
                del desarrollador.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                1. Datos almacenados en tu dispositivo
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                La aplicación almacena la siguiente información <strong>exclusivamente en tu dispositivo</strong>,
                cifrada con AES-256:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li className="mb-2">Registros de horas de trabajo (fecha, hora entrada/salida, tipo de jornada, descripción)</li>
                <li className="mb-2">Configuración de precios por hora</li>
                <li className="mb-2">Configuración de notificaciones y recordatorios</li>
                <li className="mb-2">Preferencias de la aplicación</li>
                <li className="mb-2">Credenciales de seguridad (PIN/patrón, almacenadas con PBKDF2 + Android Keystore)</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Ninguno de estos datos se envía a servidores del desarrollador ni se comparte con terceros.</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                2. Backup opcional en Google Drive
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Si decides activar la función de respaldo en Google Drive:
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li className="mb-2">
                  La app solicita acceso <strong>exclusivamente a la carpeta privada de la app</strong> en tu
                  Google Drive (<code>appdata</code> scope). No puede leer ni modificar otros archivos de tu Drive.
                </li>
                <li className="mb-2">
                  Los datos se sincronizan directamente entre tu dispositivo y <strong>tu propia cuenta de Google</strong>.
                </li>
                <li className="mb-2">
                  Google gestiona estos datos según su{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                    className="text-primary-600 dark:text-primary-400 hover:underline">
                    Política de Privacidad
                  </a>.
                </li>
                <li className="mb-2">Puedes desactivar y eliminar el backup desde la configuración de la app en cualquier momento.</li>
                <li className="mb-2">El desarrollador <strong>nunca tiene acceso</strong> a estos archivos.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. Permisos de la aplicación
              </h2>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Notificaciones (POST_NOTIFICATIONS)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Recordatorios de registro de horas de trabajo. Las notificaciones se programan localmente
                  en el dispositivo — no se usa ningún servicio externo de notificaciones push.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Alarmas exactas (SCHEDULE_EXACT_ALARM, USE_EXACT_ALARM)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Permiten enviar el recordatorio a la hora exacta que el usuario configura. Sin alarmas
                  exactas, Android puede retrasar la notificación hasta 1 hora, lo que invalida la
                  utilidad del recordatorio.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Exención de optimización de batería (REQUEST_IGNORE_BATTERY_OPTIMIZATIONS)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Garantiza que los recordatorios lleguen aunque el dispositivo esté en modo ahorro de
                  energía o Doze. Se solicita <strong>únicamente cuando el usuario activa los recordatorios</strong>.
                  No hay servicios en segundo plano ni sincronización con servidores. Puedes revocarla desde
                  Ajustes de Android → Batería → Optimización de batería.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Biometría (USE_BIOMETRIC, USE_FINGERPRINT)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Autenticación biométrica opcional para proteger el acceso a la app. Se usa la API nativa
                  de Android (BiometricPrompt). Los datos biométricos nunca salen del dispositivo.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Ejecutar al inicio (RECEIVE_BOOT_COMPLETED)
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Reprograma las alarmas de recordatorio después de reiniciar el dispositivo, para que
                  los recordatorios sigan funcionando sin necesidad de abrir la app.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Exportación y compartir datos
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Los reportes PDF se generan localmente en tu dispositivo. Cuando usas la función
                &quot;Compartir PDF&quot;, tú decides con quién compartes esa información a través
                de las apps de tu dispositivo (WhatsApp, email, etc.).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Servicios de terceros
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Control Horario usa el siguiente servicio de terceros, de forma <strong>opcional</strong>:
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm text-gray-700 dark:text-gray-300 border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="text-left p-3 border border-gray-200 dark:border-gray-700">Servicio</th>
                      <th className="text-left p-3 border border-gray-200 dark:border-gray-700">Propósito</th>
                      <th className="text-left p-3 border border-gray-200 dark:border-gray-700">Datos</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">Google Drive (Google LLC)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">Respaldo opcional de registros</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">
                        Solo en tu cuenta de Google.{' '}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:underline">
                          Política de Google
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Control Horario <strong>NO usa</strong>: analítica, publicidad, redes sociales ni
                servicios de notificaciones push externos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Seguridad
              </h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-4">
                <li className="mb-2">Base de datos local cifrada con <strong>AES-256</strong> (Hive).</li>
                <li className="mb-2">Clave de cifrado generada con <code>Random.secure()</code> y protegida en el <strong>Android Keystore</strong> vía Flutter Secure Storage.</li>
                <li className="mb-2">PIN y patrón almacenados como hash con <strong>PBKDF2 (100.000 iteraciones, salt de 128 bits)</strong>.</li>
                <li className="mb-2">Backups en Google Drive transmitidos por <strong>HTTPS</strong>. El desarrollador no tiene acceso.</li>
                <li className="mb-2">Sin tráfico HTTP inseguro — Android 9+ lo bloquea por defecto.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                7. Privacidad de menores
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Control Horario es una aplicación de productividad profesional. No recopila información
                personal de ningún usuario, independientemente de su edad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                8. Cambios en esta política
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Cualquier cambio será notificado mediante una actualización de la app con la nueva fecha
                de &quot;Última actualización&quot; en esta página.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                9. Contacto
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Si tienes preguntas sobre esta política de privacidad, contáctanos:{' '}
                <a
                  href="mailto:loogierplay@gmail.com"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  loogierplay@gmail.com
                </a>
              </p>
            </section>

            <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-400 rounded-lg p-6 mt-8">
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                <strong>Resumen:</strong> Control Horario no envía ningún dato al desarrollador.
                Tus registros de horas se quedan en tu teléfono. Si activas el backup en Google Drive,
                esos datos van únicamente a tu propia cuenta de Google — nunca al desarrollador.
              </p>
            </div>

          </article>
        </div>
      </div>
    </main>
  )
}

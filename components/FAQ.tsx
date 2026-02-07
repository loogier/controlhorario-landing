'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "¿Es realmente gratuita la aplicación?",
      answer: "Sí, Control Horario es 100% gratuita. No tiene compras dentro de la app, no muestra publicidad y no requiere suscripción. Creemos que el control horario es un derecho básico de los trabajadores y debe ser accesible para todos."
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "Absolutamente. Todos tus registros se almacenan localmente en tu dispositivo, nunca se envían a servidores externos. No recopilamos ningún dato personal ni requerimos registro de cuenta. Tu privacidad es nuestra prioridad."
    },
    {
      question: "¿Puedo usar la app sin conexión a Internet?",
      answer: "Sí, Control Horario funciona perfectamente sin conexión a Internet. Todos tus registros, estadísticas y funcionalidades están disponibles en modo offline. Solo necesitas conexión si decides compartir informes por email."
    },
    {
      question: "¿Cómo puedo exportar mis registros?",
      answer: "Puedes exportar tus registros en formato PDF o Excel desde la sección de informes. Selecciona el período que desees (último mes, trimestre, año o personalizado) y la app generará un informe detallado que podrás compartir o guardar."
    },
    {
      question: "¿La app cumple con la legislación laboral española?",
      answer: "Sí, Control Horario está diseñada siguiendo los requisitos del Real Decreto-ley 8/2019 sobre registro de jornada en España. Permite registrar entradas, salidas, pausas y genera informes con toda la información necesaria."
    },
    {
      question: "¿Puedo configurar recordatorios automáticos?",
      answer: "Sí, puedes configurar alarmas diarias para que te recuerden registrar tu entrada y salida del trabajo. Personaliza los horarios según tu jornada laboral y nunca olvidarás hacer un registro."
    },
    {
      question: "¿Funciona en tablets o solo en móviles?",
      answer: "Control Horario funciona perfectamente tanto en smartphones como en tablets Android. La interfaz se adapta automáticamente al tamaño de tu pantalla para ofrecerte la mejor experiencia."
    },
    {
      question: "¿Puedo editar o borrar registros antiguos?",
      answer: "Sí, puedes editar o eliminar cualquier registro. Esto es útil si olvidaste registrar una entrada/salida o cometiste un error. Todos los cambios quedan reflejados automáticamente en tus estadísticas."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Resolvemos las dudas más comunes sobre Control Horario
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    toggleFAQ(index)
                  }
                }}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-primary-600 dark:text-primary-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            ¿Tienes más preguntas?
          </p>
          <a
            href="mailto:support@controlhorario.com"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contáctanos</span>
          </a>
        </div>
      </div>
    </section>
  )
}

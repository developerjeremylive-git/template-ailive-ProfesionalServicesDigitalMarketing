import React from 'react';
import { motion } from 'framer-motion';
import { FiSmartphone, FiLayers, FiZap, FiShield, FiCloud, FiGlobe, FiServer, FiPackage } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import AnimatedFooter from '../components/AnimatedFooter';
import { useNavigate } from 'react-router-dom';

export default function MobileAppDevelopmentPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: 'Desarrollo Multiplataforma',
      description: 'Aplicaciones nativas y multiplataforma para iOS y Android utilizando React Native y Flutter.'
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: 'Diseño UX/UI',
      description: 'Interfaces intuitivas y atractivas que siguen las mejores prácticas de diseño móvil.'
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Alto Rendimiento',
      description: 'Optimización de rendimiento y uso eficiente de recursos para una experiencia fluida.'
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Seguridad Avanzada',
      description: 'Implementación de medidas de seguridad robustas para proteger datos y usuarios.'
    },
    {
      icon: <FiCloud className="w-6 h-6" />,
      title: 'Integración Cloud',
      description: 'Conexión con servicios en la nube para sincronización y almacenamiento de datos.'
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: 'APIs y Backend',
      description: 'Desarrollo de APIs y servicios backend escalables para tu aplicación móvil.'
    }
  ];

  const technologies = [
    'React Native',
    'Flutter',
    'Swift',
    'Kotlin',
    'Firebase',
    'AWS Mobile',
    'GraphQL',
    'REST APIs',
    'SQLite',
    'Realm'
  ];

  return (
    <div className="min-h-screen bg-theme-gradient">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Desarrollo de Apps Móviles
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                iOS y Android
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-violet-200 mb-8 max-w-3xl mx-auto"
            >
              Creamos aplicaciones móviles intuitivas y potentes que transforman tu visión en
              realidad. Desarrollo nativo y multiplataforma para alcanzar a tu audiencia en cualquier dispositivo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Solicita una Consulta Gratuita
              </button>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-10 transition-all duration-300"
              >
                <div className="text-purple-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-violet-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Technologies Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Tecnologías que Utilizamos</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="px-6 py-3 bg-white bg-opacity-5 backdrop-blur-sm rounded-full text-violet-200 hover:bg-opacity-10 transition-all duration-300"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-12 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4">
                ¿Listo para Crear tu App Móvil?
              </h2>
              <p className="text-violet-200 mb-8 max-w-2xl mx-auto">
                Contáctanos hoy para discutir cómo podemos ayudarte a desarrollar
                la aplicación móvil perfecta para tu negocio.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Comienza tu Proyecto
              </button>
            </div>
          </div>
        </div>
      </main>

      <AnimatedFooter />
    </div>
  );
}
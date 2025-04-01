import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiZap, FiShield, FiDatabase, FiCloud, FiServer, FiPackage } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import AnimatedFooter from '../components/AnimatedFooter';
import { useNavigate } from 'react-router-dom';

export default function CustomSoftwarePage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Desarrollo a Medida',
      description: 'Soluciones de software personalizadas que se adaptan perfectamente a tus procesos y objetivos específicos.'
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: 'Arquitectura Escalable',
      description: 'Diseño de sistemas que crecen con tu negocio, asegurando rendimiento y eficiencia a largo plazo.'
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Integración Perfecta',
      description: 'Conexión fluida con tus sistemas existentes y APIs de terceros para una operación sin interrupciones.'
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Seguridad Avanzada',
      description: 'Implementación de las mejores prácticas de seguridad y protección de datos en cada etapa del desarrollo.'
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: 'Mantenimiento Continuo',
      description: 'Soporte técnico especializado y actualizaciones regulares para mantener tu software optimizado.'
    },
    {
      icon: <FiPackage className="w-6 h-6" />,
      title: 'Metodología Ágil',
      description: 'Desarrollo iterativo con entregas frecuentes y feedback continuo para asegurar resultados óptimos.'
    }
  ];

  const technologies = [
    'Java',
    'Python',
    'Node.js',
    'React',
    'Angular',
    'Vue.js',
    '.NET Core',
    'Spring Boot',
    'Docker',
    'Kubernetes'
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
              Desarrollo de Software
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                a Medida
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-violet-200 mb-8 max-w-3xl mx-auto"
            >
              Transformamos tus ideas en soluciones de software robustas y escalables.
              Desarrollo personalizado que impulsa la eficiencia y el crecimiento de tu negocio.
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
                ¿Listo para Transformar tu Negocio?
              </h2>
              <p className="text-violet-200 mb-8 max-w-2xl mx-auto">
                Contáctanos hoy para discutir cómo podemos ayudarte a crear la solución
                de software perfecta para tu empresa.
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
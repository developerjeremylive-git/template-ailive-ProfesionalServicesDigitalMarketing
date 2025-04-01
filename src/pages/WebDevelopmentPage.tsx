import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiZap, FiShield, FiDatabase, FiGlobe, FiServer, FiCpu } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import AnimatedFooter from '../components/AnimatedFooter';
import { useNavigate } from 'react-router-dom';

export default function WebDevelopmentPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Desarrollo Frontend Moderno',
      description: 'Creamos interfaces de usuario dinámicas y responsivas utilizando las últimas tecnologías como React, Vue.js y Next.js.'
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: 'Backend Robusto',
      description: 'Arquitecturas backend escalables con Node.js, Python, y bases de datos optimizadas para alto rendimiento.'
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Alto Rendimiento',
      description: 'Optimización de carga, caché avanzado y arquitecturas distribuidas para máxima velocidad y eficiencia.'
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Seguridad Avanzada',
      description: 'Implementación de mejores prácticas de seguridad, SSL/TLS, protección contra ataques y cifrado de datos.'
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: 'Gestión de Datos',
      description: 'Diseño e implementación de bases de datos escalables, con backup automático y alta disponibilidad.'
    },
    {
      icon: <FiCpu className="w-6 h-6" />,
      title: 'Integración de APIs',
      description: 'Desarrollo e integración de APIs RESTful y GraphQL para conectar servicios y sistemas externos.'
    }
  ];

  const technologies = [
    'React.js',
    'Vue.js',
    'Next.js',
    'Node.js',
    'Python',
    'TypeScript',
    'GraphQL',
    'PostgreSQL',
    'MongoDB',
    'AWS/Azure/GCP'
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
              Desarrollo Web
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                de Alto Rendimiento
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-violet-200 mb-8 max-w-3xl mx-auto"
            >
              Creamos sitios web escalables y de alto rendimiento que impulsan el crecimiento de tu negocio.
              Desde landing pages hasta aplicaciones web complejas, transformamos tus ideas en realidad.
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
                ¿Listo para Impulsar tu Presencia Web?
              </h2>
              <p className="text-violet-200 mb-8 max-w-2xl mx-auto">
                Contáctanos hoy para discutir cómo podemos ayudarte a crear una presencia web
                que destaque y genere resultados.
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
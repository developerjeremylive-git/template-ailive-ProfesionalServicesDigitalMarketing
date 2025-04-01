import React from 'react';
import { motion } from 'framer-motion';
import { FiTool, FiServer, FiShield, FiClock, FiMonitor, FiZap, FiLayers, FiPackage } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import AnimatedFooter from '../components/AnimatedFooter';
import { useNavigate } from 'react-router-dom';

export default function TechnicalSupportPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: <FiTool className="w-6 h-6" />,
      title: 'Soporte Proactivo',
      description: 'Monitoreo continuo y mantenimiento preventivo para identificar y resolver problemas antes de que afecten tu negocio.'
    },
    {
      icon: <FiServer className="w-6 h-6" />,
      title: 'Mantenimiento de Sistemas',
      description: 'Actualizaciones regulares, parches de seguridad y optimización de rendimiento para mantener tus sistemas funcionando al máximo.'
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Respuesta a Incidentes',
      description: 'Equipo especializado disponible 24/7 para resolver incidentes y minimizar el tiempo de inactividad.'
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: 'Soporte 24/7',
      description: 'Asistencia técnica disponible en todo momento para resolver tus dudas y problemas urgentes.'
    },
    {
      icon: <FiMonitor className="w-6 h-6" />,
      title: 'Monitoreo Continuo',
      description: 'Supervisión constante del rendimiento y la salud de tus sistemas para garantizar su funcionamiento óptimo.'
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Resolución Rápida',
      description: 'Procesos eficientes y herramientas avanzadas para resolver problemas de forma rápida y efectiva.'
    }
  ];

  const technologies = [
    'ServiceNow',
    'Jira Service Desk',
    'Zendesk',
    'Nagios',
    'Zabbix',
    'Splunk',
    'PagerDuty',
    'New Relic',
    'Datadog',
    'Prometheus'
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
              Soporte Técnico
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Confiable y Profesional
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-violet-200 mb-8 max-w-3xl mx-auto"
            >
              Mantén tus sistemas funcionando sin problemas con nuestro servicio de soporte
              técnico profesional disponible 24/7.
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
            <h2 className="text-3xl font-bold text-white mb-8">Herramientas que Utilizamos</h2>
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
                ¿Necesitas Ayuda Técnica?
              </h2>
              <p className="text-violet-200 mb-8 max-w-2xl mx-auto">
                Contáctanos hoy para discutir cómo podemos ayudarte a mantener
                tus sistemas funcionando de manera óptima.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Contacta con Soporte
              </button>
            </div>
          </div>
        </div>
      </main>

      <AnimatedFooter />
    </div>
  );
}
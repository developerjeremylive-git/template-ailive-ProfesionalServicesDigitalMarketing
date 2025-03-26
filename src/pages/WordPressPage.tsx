import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiZap, FiShield, FiDatabase, FiSearch, FiAward, FiTrendingUp } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import AnimatedFooter from '../components/AnimatedFooter';
import { useNavigate } from 'react-router-dom';

export default function WordPressPage() {
  const { t } = useLanguage();
  const navigate = useNavigate()
  const features = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'WooCommerce Integrado',
      description: 'Crea una tienda online profesional con WooCommerce, gestiona productos, pedidos y pagos de forma sencilla. Integración con PayPal, Stripe y más pasarelas de pago.'
    },
    {
      icon: <FiLayers className="w-6 h-6" />,
      title: 'Temas Personalizados',
      description: 'Diseñamos y desarrollamos temas WordPress a medida que reflejan la identidad única de tu marca, totalmente compatibles con WooCommerce y otros plugins esenciales.'
    },
    {
      icon: <FiZap className="w-6 h-6" />,
      title: 'Marketing Digital',
      description: 'Integración con herramientas de marketing como Mailchimp, sistemas de membresía, y plugins de redes sociales para impulsar tus ventas online.'
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'Seguridad y Pagos',
      description: 'Certificados SSL, protección contra fraudes y pasarelas de pago seguras para garantizar transacciones seguras en tu tienda online.'
    },
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: 'Gestión de Inventario',
      description: 'Control total de tu inventario, múltiples variaciones de productos, gestión de stock y sincronización con proveedores dropshipping.'
    },
    {
      icon: <FiSearch className="w-6 h-6" />,
      title: 'SEO y Analytics',
      description: 'Optimización SEO con Yoast, integración con Google Analytics y herramientas de seguimiento para maximizar tu visibilidad online.'
    }
  ];

  const technologies = [
    'WooCommerce',
    'Elementor Pro',
    'Yoast SEO',
    'WP Forms',
    'Mailchimp para WP',
    'PayPal Payment Gateway',
    'Stripe Payment Gateway',
    'Bookly - Sistema de Reservas'
  ];

  const benefits = [
    {
      icon: <FiAward className="w-6 h-6" />,
      title: 'Calidad Premium',
      description: 'Desarrollo de clase mundial con los más altos estándares de calidad y las mejores prácticas de la industria.'
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: 'Escalabilidad',
      description: 'Soluciones que crecen con tu negocio, desde sitios pequeños hasta grandes plataformas empresariales.'
    }
  ];

  return (
    <div className="min-h-screen bg-theme-gradient">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Potencia tu Negocio con <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                WordPress y WooCommerce
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-violet-200 mb-8 max-w-3xl mx-auto"
            >
              Creamos sitios web y tiendas online potentes con WordPress y WooCommerce.
              Desde blogs hasta marketplaces completos, impulsamos tu presencia digital con las mejores soluciones.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                onClick={() => navigate('/contact')}
                className="inline-block px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300"
              >
                Comienza Ahora
              </a>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white bg-opacity-5 backdrop-blur-sm border border-purple-500 border-opacity-20"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-violet-200">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Technologies Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Tecnologías que Utilizamos</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-white"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 rounded-2xl bg-white bg-opacity-5 backdrop-blur-sm border border-purple-500 border-opacity-20"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-violet-200">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <AnimatedFooter />
    </div>
  );
}
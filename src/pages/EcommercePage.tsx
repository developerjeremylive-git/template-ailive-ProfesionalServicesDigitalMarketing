import React from 'react';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiTrendingUp, FiGlobe, FiBox, FiSmartphone, FiLayers, FiBarChart2, FiShield } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import AnimatedFooter from '../components/AnimatedFooter';
import { useNavigate } from 'react-router-dom'

export default function EcommercePage() {
    const { t } = useLanguage();
    const navigate = useNavigate()
    const features = [
        {
            icon: <FiShoppingCart className="w-8 h-8 text-purple-500" />,
            title: 'Tienda Online Profesional',
            description: 'Crea una tienda en línea impactante con más de 70 temas premium personalizables. Diseño responsive y experiencia de compra optimizada para cualquier dispositivo.'
        },
        {
            icon: <FiTrendingUp className="w-8 h-8 text-purple-500" />,
            title: 'Marketing y SEO Avanzado',
            description: 'Impulsa tus ventas con herramientas de marketing integradas, SEO optimizado y campañas automatizadas. Alcanza a tu audiencia en todos los canales digitales.'
        },
        {
            icon: <FiGlobe className="w-8 h-8 text-purple-500" />,
            title: 'Ventas Internacionales',
            description: 'Expande tu negocio globalmente con soporte para múltiples monedas, idiomas y métodos de pago internacionales. Gestión de impuestos y envíos automatizada.'
        },
        {
            icon: <FiBox className="w-8 h-8 text-purple-500" />,
            title: 'Gestión de Inventario',
            description: 'Control total de tu inventario en tiempo real. Sincronización automática entre canales de venta, alertas de stock y reportes detallados.'
        },
        {
            icon: <FiSmartphone className="w-8 h-8 text-purple-500" />,
            title: 'App Móvil Shopify',
            description: 'Administra tu negocio desde cualquier lugar con nuestra app móvil. Procesa pedidos, actualiza productos y monitorea ventas en tiempo real.'
        },
        {
            icon: <FiLayers className="w-8 h-8 text-purple-500" />,
            title: 'Dropshipping Integrado',
            description: 'Inicia tu negocio sin inventario inicial. Integración directa con proveedores globales y envío automático de pedidos a proveedores.'
        },
        {
            icon: <FiBarChart2 className="w-8 h-8 text-purple-500" />,
            title: 'Análisis Avanzado',
            description: 'Toma decisiones informadas con análisis detallado de ventas, comportamiento de clientes y tendencias de mercado. Reportes personalizables en tiempo real.'
        },
        {
            icon: <FiShield className="w-8 h-8 text-purple-500" />,
            title: 'Seguridad y Soporte 24/7',
            description: 'Certificación SSL gratuita, cumplimiento PCI y protección contra fraudes. Soporte técnico especializado disponible 24/7 en español.'
        }
    ];

    return (
        <div className="min-h-screen bg-theme-gradient">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-12 px-4">
                <div className="container mx-auto text-center">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Potencia tu Negocio con <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                            Shopify E-commerce
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-xl text-violet-200 mb-8 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Transforma tu idea en una tienda online exitosa. Plataforma todo-en-uno con las herramientas más avanzadas para vender en línea, gestionar productos y hacer crecer tu negocio.
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
                            Comienza Gratis
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="px-4 mb-20">
                <div className="container mx-auto">
                    {/* <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                        Todo lo que Necesitas para Vender Online
                    </h2> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="p-6 rounded-2xl bg-white bg-opacity-5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <div className="mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                                <p className="text-violet-200">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        ¿Listo para Iniciar tu Negocio Online?
                    </h2>
                    <p className="text-xl text-violet-200 mb-8 max-w-2xl mx-auto">
                        Únete a más de un millón de emprendedores que confían en Shopify para hacer crecer sus negocios.
                    </p>
                    <a
                        onClick={() => navigate('/contact')}
                        className="inline-block px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-pink-500/30 transform hover:scale-105 transition-all duration-300"
                    >
                        Contacta con un Experto
                    </a>
                </div>
            </section>

            <AnimatedFooter />
        </div>
    );
}
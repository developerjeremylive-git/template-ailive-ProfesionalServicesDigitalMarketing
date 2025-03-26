import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FiSearch, FiTrendingUp, FiMail, FiShare2, FiTarget, FiLayout, FiBarChart2, FiCheckCircle, FiAward, FiHelpCircle, FiChevronDown, FiChevronUp, FiArrowRight, FiStar, FiPieChart, FiUser } from 'react-icons/fi';
import Header from '../components/Header';
import AnimatedFooter from '../components/AnimatedFooter';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

interface MarketingServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MarketingService: React.FC<MarketingServiceProps> = ({ icon, title, description }) => {
  const { isDarkTheme } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`h-full p-6 rounded-2xl ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/5'} backdrop-blur-sm border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 flex flex-col`}
    >
      <div className="flex items-start space-x-4 flex-grow">
        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex-shrink-0">
          {icon}
        </div>
        <div className="space-y-2 flex-grow">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-violet-200/80">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function DigitalMarketingPage() {
  const { isDarkTheme } = useApp();
  const navigate = useNavigate()
  const services = [
    {
      icon: <FiSearch className="w-6 h-6 text-white" />,
      title: "SEO y SEM Avanzado",
      description: "Incrementa tu visibilidad online hasta un 300% con estrategias SEO probadas y campañas SEM optimizadas. Nuestros clientes han logrado posiciones #1 en Google en términos clave de su industria."
    },
    {
      icon: <FiShare2 className="w-6 h-6 text-white" />,
      title: "Gestión de Redes Sociales",
      description: "Multiplica tu audiencia en redes sociales. Hemos ayudado a marcas a aumentar su engagement un 200% y sus ventas por redes sociales en un 150% en solo 3 meses."
    },
    {
      icon: <FiMail className="w-6 h-6 text-white" />,
      title: "Email Marketing Estratégico",
      description: "Convierte leads en clientes fieles con campañas de email personalizadas. Nuestros clientes han alcanzado tasas de apertura del 35% y conversiones del 15% en sus campañas."
    },
    {
      icon: <FiLayout className="w-6 h-6 text-white" />,
      title: "Marketing de Contenidos Premium",
      description: "Contenido que convierte. Creamos estrategias de contenido que han generado aumentos del 250% en tráfico orgánico y 180% en leads cualificados."
    },
    {
      icon: <FiTarget className="w-6 h-6 text-white" />,
      title: "Marketing Multicanal Integrado",
      description: "Maximiza tu presencia digital en todos los canales. Implementamos estrategias omnicanal que han aumentado las conversiones en un 200% para nuestros clientes."
    },
    {
      icon: <FiTrendingUp className="w-6 h-6 text-white" />,
      title: "Growth Marketing Acelerado",
      description: "Impulsa el crecimiento exponencial de tu negocio. Nuestras estrategias de growth hacking han generado aumentos del 400% en adquisición de clientes."
    }
  ];

  const testimonials = [
    {
      name: "Carlos Rodríguez",
      position: "CEO, TechnoVentas",
      image: "/testimonials/carlos.jpg",
      text: "Gracias a las estrategias de marketing digital implementadas, aumentamos nuestras ventas online en un 300% en solo 6 meses. El ROI ha sido excepcional.",
      metrics: { sales: 300, roi: 250, time: 6 },
      icon: <FiBarChart2 className="w-8 h-8 text-emerald-500" />
    },
    {
      name: "María González",
      position: "Directora de Marketing, ModaExpress",
      image: "/testimonials/maria.jpg",
      text: "La gestión de nuestras redes sociales ha sido transformadora. Aumentamos nuestros seguidores en un 200% y las ventas por Instagram se duplicaron.",
      metrics: { followers: 200, engagement: 180, sales: 200 },
      icon: <FiTrendingUp className="w-8 h-8 text-indigo-500" />
    },
    {
      name: "Juan Pérez",
      position: "Fundador, ServiciosPro",
      image: "/testimonials/juan.jpg",

      text: "Las campañas de email marketing han revolucionado nuestra forma de conectar con clientes. Nuestra tasa de conversión aumentó un 150%.",
      metrics: { conversion: 150, openRate: 35, clicks: 25 },
      icon: <FiTarget className="w-8 h-8 text-rose-500" />
    }
  ];

  const methodology = [
    {
      phase: 1,
      title: "Análisis y Estrategia",
      description: "Investigación profunda de tu mercado, competencia y público objetivo para desarrollar una estrategia personalizada.",
      duration: "2-3 semanas",
      deliverables: ["Análisis de mercado", "Plan estratégico", "KPIs definidos"]
    },
    {
      phase: 2,
      title: "Implementación",
      description: "Ejecución de estrategias en múltiples canales con optimización continua basada en datos.",
      duration: "1-2 meses",
      deliverables: ["Campañas activas", "Contenido optimizado", "Sistemas de seguimiento"]
    },
    {
      phase: 3,
      title: "Optimización",
      description: "Análisis de resultados y ajuste fino de estrategias para maximizar el ROI.",
      duration: "Continuo",
      deliverables: ["Reportes de rendimiento", "Optimizaciones", "Recomendaciones"]
    }
  ];

  const faqItems = [
    {
      question: "¿Cuánto tiempo se necesita para ver resultados?",
      answer: "Los primeros resultados son visibles en 2-3 meses, con mejoras significativas en 6 meses. Trabajamos con objetivos progresivos y medibles."
    },
    {
      question: "¿Qué diferencia sus servicios de otros?",
      answer: "Combinamos estrategias probadas con innovación continua, respaldados por datos y un equipo certificado. Garantizamos transparencia y resultados medibles."
    },
    {
      question: "¿Cómo miden el éxito de las campañas?",
      answer: "Utilizamos métricas clave como ROI, tasa de conversión, tráfico cualificado y engagement. Proporcionamos informes detallados y dashboards personalizados."
    }
  ];

  const [activePhase, setActivePhase] = useState(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeService, setActiveService] = useState(0);
  const [showComparison, setShowComparison] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const performanceData = [
    { month: 'Ene', trafico: 1000, conversiones: 20, roi: 150 },
    { month: 'Feb', trafico: 1500, conversiones: 35, roi: 180 },
    { month: 'Mar', trafico: 2200, conversiones: 48, roi: 200 },
    { month: 'Abr', trafico: 2800, conversiones: 60, roi: 220 },
    { month: 'May', trafico: 3500, conversiones: 85, roi: 250 },
    { month: 'Jun', trafico: 4200, conversiones: 100, roi: 280 }
  ];

  const serviceComparison = [
    {
      name: 'Plan Básico',
      features: ['Análisis SEO básico', 'Gestión de redes sociales', 'Reportes mensuales'],
      price: '499€/mes',
      recommended: false
    },
    {
      name: 'Plan Profesional',
      features: ['SEO avanzado', 'Gestión de redes sociales premium', 'Email marketing', 'Análisis de competencia', 'Reportes semanales'],
      price: '999€/mes',
      recommended: true
    },
    {
      name: 'Plan Enterprise',
      features: ['SEO y SEM completo', 'Gestión de redes sociales personalizada', 'Email marketing avanzado', 'Análisis de competencia detallado', 'Estrategia de contenidos', 'Reportes personalizados'],
      price: '1999€/mes',
      recommended: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`min-h-screen bg-[var(--theme-background)]`}>
      <Header />

      <main className="container mx-auto px-4 pt-32 pb-20">
        {/* Hero Section */}
        <section className="text-center space-y-8 mb-11">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Impulsa tu Negocio con <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Marketing Digital
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-violet-200 mb-8 max-w-3xl mx-auto"
          >
            Transformamos tu presencia digital en resultados medibles: Aumenta tus ventas hasta un 300%,
            multiplica tu audiencia y maximiza tu ROI con estrategias probadas y personalizadas.
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
        </section>

        {/* Services Grid with Animation */}
        <section className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: activeService === index ? 1.05 : 1,
                  borderColor: activeService === index ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.2)'
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <MarketingService
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Performance Metrics Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Resultados Medibles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white bg-opacity-5 backdrop-blur-sm border border-violet-500/20">
              <h3 className="text-xl font-semibold text-white mb-6">Crecimiento de Tráfico y Conversiones</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="traficoGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="conversionesGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#EC4899" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#EC4899" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="#8B5CF6" />
                    <YAxis stroke="#8B5CF6" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(30, 41, 59, 0.8)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        borderRadius: '8px'
                      }}
                    />
                    <Area type="monotone" dataKey="trafico" stroke="#8B5CF6" fillOpacity={1} fill="url(#traficoGradient)" />
                    <Area type="monotone" dataKey="conversiones" stroke="#EC4899" fillOpacity={1} fill="url(#conversionesGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white bg-opacity-5 backdrop-blur-sm border border-violet-500/20">
              <h3 className="text-xl font-semibold text-white mb-6">ROI Mensual</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="#8B5CF6" />
                    <YAxis stroke="#8B5CF6" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(30, 41, 59, 0.8)',
                        border: '1px solid rgba(139, 92, 246, 0.2)',
                        borderRadius: '8px'
                      }}
                    />
                    <Line type="monotone" dataKey="roi" stroke="#10B981" strokeWidth={2} dot={{ fill: '#10B981', strokeWidth: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Service Comparison Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Planes de Servicio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceComparison.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`p-6 rounded-2xl ${plan.recommended ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20' : 'bg-white bg-opacity-5'} backdrop-blur-sm border ${plan.recommended ? 'border-purple-500' : 'border-violet-500/20'} relative`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-white text-sm font-medium">
                    Recomendado
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <p className="text-3xl font-bold text-purple-400 mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-violet-200">
                      <FiCheckCircle className="text-purple-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl ${plan.recommended ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-white bg-opacity-10'} text-white font-medium hover:shadow-lg transition-all duration-300`}
                  onClick={() => navigate('/contact')}
                >
                  Empezar Ahora
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Casos de Éxito */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Casos de Éxito</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`p-6 rounded-2xl ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/5'} backdrop-blur-sm border border-violet-500/20`}
              >
                <div className="flex items-center mb-4">
                  <div 
                    className={`w-16 h-16 rounded-full mr-4 flex items-center justify-center ${index === 0 ? 'bg-gradient-to-br from-emerald-400 to-teal-500' : index === 1 ? 'bg-gradient-to-br from-blue-400 to-indigo-500' : 'bg-gradient-to-br from-rose-400 to-pink-500'}`}
                  >
                    <FiUser className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-violet-200/80">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-violet-200/80 mb-6">{testimonial.text}</p>
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(testimonial.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{value}%</div>
                      <div className="text-sm text-violet-200/80">
                        {key === 'sales' && 'Ventas'}
                        {key === 'followers' && 'Seguidores'}
                        {key === 'engagement' && 'Interacción'}
                        {key === 'conversion' && 'Conversión'}
                        {key === 'roi' && 'Retorno de Inversión'}
                        {key === 'time' && 'Tiempo'}
                        {key === 'openRate' && 'Tasa de Apertura'}
                        {key === 'clicks' && 'Clicks'}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Metodología */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Nuestra Metodología</h2>
          <div className="relative">
            {methodology.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className={`p-6 rounded-2xl mb-8 transition-all duration-300 ${activePhase === phase.phase ? 'bg-purple-500/20 border-purple-500' : 'bg-white/5 border-violet-500/20'} border backdrop-blur-sm`}
                onClick={() => setActivePhase(phase.phase)}
                whileHover={{ scale: 1.02 }}
                style={{ cursor: 'pointer' }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${activePhase === phase.phase ? 'bg-purple-500 text-white' : 'bg-white/10 text-violet-200'}`}>
                      {phase.phase}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                      <p className="text-violet-200/80">{phase.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-purple-400 font-medium">{phase.duration}</p>
                  </div>
                </div>
                {activePhase === phase.phase && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 pl-18"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {phase.deliverables.map((deliverable, i) => (
                        <div key={i} className="flex items-center">
                          <FiCheckCircle className="text-purple-400 mr-2" />
                          <span className="text-violet-200">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/5'} backdrop-blur-sm border border-violet-500/20 cursor-pointer`}
                onClick={() => setActiveFaq((prev) => prev === index ? null : index)}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  {activeFaq === index ? (
                    <FiChevronUp className="text-purple-400" />
                  ) : (
                    <FiChevronDown className="text-purple-400" />
                  )}
                </div>
                {activeFaq === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-violet-200/80"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`p-8 rounded-2xl ${isDarkTheme ? 'bg-gray-800/50' : 'bg-white/5'} backdrop-blur-sm border border-violet-500/20`}
          >
            <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Multiplicar tus Resultados?</h2>
            <p className="text-violet-200/80 mb-6">Únete a las empresas que han transformado su presencia digital y multiplicado sus ingresos con nuestras estrategias comprobadas. ¡El momento de crecer es ahora!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-full font-medium hover:from-purple-600 hover:to-violet-700 transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate('/contact')}
              >
                Solicita tu Consulta Gratuita
              </button>
              <p className="text-violet-200/80 text-sm">¡Plazas limitadas! Agenda tu llamada estratégica hoy</p>
            </div>
          </motion.div>
        </section>
      </main>

      <AnimatedFooter />
    </div>
  );
}
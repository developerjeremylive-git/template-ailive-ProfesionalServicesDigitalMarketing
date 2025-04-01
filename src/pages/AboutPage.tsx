import { motion } from 'framer-motion'
import Header from '../components/Header'
import AnimatedFooter from '../components/AnimatedFooter'
import { FiUsers, FiTarget, FiHeart, FiGlobe } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import React from 'react'

const engineeringServices = [
	{
		name: 'Marketing Digital',
		icon: <FiTarget className="w-8 h-8" />,
		description: 'Estrategias integrales de SEO, SEM y gestión de redes sociales para maximizar su presencia online y generar leads cualificados.',
		metrics: '500+ campañas exitosas',
	},
	{
		name: 'E-commerce con Shopify',
		icon: <FiGlobe className="w-8 h-8" />,
		description: 'Desarrollo y optimización de tiendas online con Shopify, incluyendo diseño personalizado, optimización de conversión y estrategias de ventas.',
		metrics: '200+ tiendas optimizadas',
	},
	{
		name: 'Desarrollo Web WordPress',
		icon: <FiUsers className="w-8 h-8" />,
		description: 'Creación de sitios web profesionales con WordPress, incluyendo landing pages, sitios corporativos y portales multipage.',
		metrics: '300+ sitios entregados',
	},
	{
		name: 'Desarrollo SPA',
		icon: <FiHeart className="w-8 h-8" />,
		description: 'Desarrollo de aplicaciones web modernas de una sola página (SPA) con las últimas tecnologías para una experiencia de usuario excepcional.',
		metrics: '150+ aplicaciones SPA',
	},
]

const expertise = [
	{
		icon: <FiTarget className="w-8 h-8" />,
		title: 'Marketing Digital Avanzado',
		description: 'Estrategias integrales de SEO, SEM y redes sociales con ROI promedio del 300% para nuestros clientes',
	},
	{
		icon: <FiUsers className="w-8 h-8" />,
		title: 'Desarrollo E-commerce',
		description: 'Especialistas certificados en Shopify con más de 200 tiendas exitosas implementadas y optimizadas',
	},
	{
		icon: <FiHeart className="w-8 h-8" />,
		title: 'Desarrollo Web Profesional',
		description: 'Expertos en WordPress y aplicaciones SPA, entregando soluciones web de alto rendimiento y conversión',
	},
]

const achievements = [
	{
		year: '2020',
		title: 'Excelencia en Marketing Digital',
		description: 'Alcanzamos un incremento promedio del 250% en tráfico orgánico para nuestros clientes mediante estrategias SEO avanzadas.',
	},
	{
		year: '2021',
		title: 'Liderazgo en E-commerce',
		description: 'Superamos los 10 millones en ventas generadas para nuestros clientes a través de tiendas Shopify optimizadas.',
	},
	{
		year: '2022',
		title: 'Innovación en Desarrollo Web',
		description: 'Completamos más de 300 proyectos web exitosos, incluyendo portales corporativos y aplicaciones SPA de alto rendimiento.',
	},
	{
		year: '2023',
		title: 'Resultados Excepcionales',
		description: 'Nuestras campañas de marketing digital generaron un ROI promedio del 300% para nuestros clientes en múltiples sectores.',
	},
]

export default function AboutPage() {
	const { t } = useLanguage()

	return (
		<div className="min-h-screen bg-theme-gradient">
			<Header variant="default" />
			<div className="pt-24 pb-32">
				<div className="container mx-auto px-4">
					{/* Hero Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-4xl mx-auto mb-24"
					>
						<h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-violet-200">
							Expertos en Marketing Digital y Desarrollo Web
						</h1>
						<p className="text-xl text-violet-200 leading-relaxed">
							Transformamos negocios con estrategias digitales integrales y desarrollo web profesional. Maximizamos su ROI con soluciones personalizadas de marketing digital, e-commerce y desarrollo web de alto rendimiento.
						</p>
					</motion.div>

					{/* Vision & Mission Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="mb-24 grid grid-cols-1 md:grid-cols-2 gap-8"
					>
						<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8">
							<h2 className="text-2xl font-semibold text-white mb-4">
								Nuestra Visión
							</h2>
							<p className="text-violet-200">Ser líderes en la transformación digital de empresas, ofreciendo soluciones integrales de marketing digital y desarrollo web que generen resultados medibles y sostenibles para nuestros clientes.</p>
						</div>
						<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8">
							<h2 className="text-2xl font-semibold text-white mb-4">
								Nuestra Misión
							</h2>
							<p className="text-violet-200">Potenciar el crecimiento de nuestros clientes mediante estrategias digitales avanzadas y desarrollo web profesional, garantizando un ROI excepcional y una presencia online impactante.</p>
						</div>
					</motion.div>

					{/* Expertise Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="mb-24"
					>
						<h2 className="text-3xl font-bold text-white text-center mb-12">
							Nuestra Experiencia
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{expertise.map((exp, index) => (
								<motion.div
									key={exp.title}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 + index * 0.1 }}
									className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 text-center"
								>
									<div className="text-purple-400 mb-4 flex justify-center">
										{exp.icon}
									</div>
									<h3 className="text-xl font-semibold text-white mb-4">
										{exp.title}
									</h3>
									<p className="text-violet-200">{exp.description}</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Services Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
						className="mb-24"
					>
						<h2 className="text-3xl font-bold text-white text-center mb-12">
							Nuestros Servicios
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{engineeringServices.map((service, index) => (
								<motion.div
									key={service.name}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 + index * 0.1 }}
									className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-6"
								>
									<div className="text-purple-400 mb-6 flex justify-center">
										{service.icon}
									</div>
									<h3 className="text-xl font-semibold text-white mb-4">
										{service.name}
									</h3>
									<p className="text-violet-200 mb-4">{service.description}</p>
									<p className="text-purple-400 font-medium">{service.metrics}</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Achievements Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
					>
						<h2 className="text-3xl font-bold text-white text-center mb-12">
							Nuestros Logros
						</h2>
						<div className="max-w-4xl mx-auto">
							{achievements.map((achievement, index) => (
								<motion.div
									key={achievement.year}
									initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.6 + index * 0.1 }}
									className="relative pl-8 pb-12 border-l-2 border-purple-500 last:pb-0"
								>
									<div className="absolute left-0 top-0 w-4 h-4 bg-purple-500 rounded-full -translate-x-[9px]" />
									<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6">
										<div className="text-purple-400 text-lg font-semibold mb-2">
											{achievement.year}
										</div>
										<h3 className="text-xl font-semibold text-white mb-2">
											{achievement.title}
										</h3>
										<p className="text-violet-200">{achievement.description}</p>
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
			<AnimatedFooter />
		</div>
	)
}
import { motion } from 'framer-motion'
import Header from '../components/Header'
import AnimatedFooter from '../components/AnimatedFooter'
import { FiUsers, FiTarget, FiHeart, FiGlobe } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import React from 'react'

const engineeringServices = [
	{
		name: 'Desarrollo Web Profesional',
		icon: <FiGlobe className="w-8 h-8" />,
		description: 'Desarrollo de sitios web profesionales, e-commerce y aplicaciones web modernas utilizando las últimas tecnologías y mejores prácticas.',
		metrics: '500+ proyectos exitosos',
	},
	{
		name: 'Software & Cloud',
		icon: <FiTarget className="w-8 h-8" />,
		description: 'Desarrollo de software a medida, soluciones cloud y bases de datos escalables para optimizar sus procesos empresariales.',
		metrics: '200+ soluciones implementadas',
	},
	{
		name: 'Móvil & SaaS',
		icon: <FiUsers className="w-8 h-8" />,
		description: 'Desarrollo de aplicaciones móviles nativas y soluciones SaaS innovadoras para transformar su negocio.',
		metrics: '300+ apps entregadas',
	},
	{
		name: 'Servicios de IA',
		icon: <FiHeart className="w-8 h-8" />,
		description: 'Implementación de soluciones avanzadas de Inteligencia Artificial y aprendizaje automático para potenciar su negocio.',
		metrics: '150+ proyectos de IA',
	},
]

const expertise = [
	{
		icon: <FiTarget className="w-8 h-8" />,
		title: 'Desarrollo de Software',
		description: 'Expertos en desarrollo de software a medida, aplicaciones web y móviles con tecnologías de última generación',
	},
	{
		icon: <FiUsers className="w-8 h-8" />,
		title: 'Cloud & DevOps',
		description: 'Especialistas en soluciones cloud, arquitectura de sistemas y prácticas DevOps para máxima eficiencia',
	},
	{
		icon: <FiHeart className="w-8 h-8" />,
		title: 'Inteligencia Artificial',
		description: 'Pioneros en implementación de soluciones de IA y aprendizaje automático para optimización de procesos',
	},
]

const achievements = [
	{
		year: '2020',
		title: 'Innovación en Software',
		description: 'Desarrollamos más de 100 soluciones de software personalizadas, mejorando la eficiencia operativa de nuestros clientes en un 200%.',
	},
	{
		year: '2021',
		title: 'Liderazgo en Cloud',
		description: 'Implementamos exitosamente más de 50 migraciones a la nube, reduciendo costos operativos en un promedio del 40%.',
	},
	{
		year: '2022',
		title: 'Excelencia en Desarrollo Móvil',
		description: 'Lanzamos más de 100 aplicaciones móviles exitosas, alcanzando más de 1 millón de descargas combinadas.',
	},
	{
		year: '2023',
		title: 'Pioneros en IA',
		description: 'Implementamos soluciones de IA que aumentaron la productividad de nuestros clientes en un promedio del 150%.',
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
							Expertos en Desarrollo de Software y Soluciones de IA
						</h1>
						<p className="text-xl text-violet-200 leading-relaxed">
							Transformamos negocios con soluciones de software innovadoras y tecnología de vanguardia. Maximizamos su eficiencia con desarrollo personalizado, servicios cloud y soluciones de IA de alto impacto.
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
							<p className="text-violet-200">Ser líderes en la transformación tecnológica de empresas, ofreciendo soluciones innovadoras de software, cloud computing e inteligencia artificial que generen valor medible y sostenible para nuestros clientes.</p>
						</div>
						<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8">
							<h2 className="text-2xl font-semibold text-white mb-4">
								Nuestra Misión
							</h2>
							<p className="text-violet-200">Potenciar el crecimiento de nuestros clientes mediante soluciones tecnológicas avanzadas y desarrollo de software profesional, garantizando eficiencia operativa y ventaja competitiva en la era digital.</p>
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
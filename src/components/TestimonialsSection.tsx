import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar, FiUser } from 'react-icons/fi'
import { useApp } from '../context/AppContext'
import { useLanguage } from '../context/LanguageContext'

const testimonials = [
	{
		id: 1,
		nameKey: 'Ana Martínez',
		roleKey: 'CTO',
		company: 'E-commerce Express',
		image: '/avatars/sarah.jpg',
		rating: 5,
		textKey: 'La implementación de nuestra plataforma e-commerce con arquitectura moderna y optimizada ha transformado completamente nuestro negocio digital. El rendimiento excepcional y la escalabilidad nos permitieron manejar picos de tráfico sin problemas.',
		dashboardType: 'web',
		metrics: {
			performance: '98%',
			loadTime: '0.8s',
			seoScore: '95/100',
		},
		iconColor: 'bg-purple-500',
	},
	{
		id: 2,
		nameKey: 'Carlos Rodríguez',
		roleKey: 'Director de Tecnología',
		company: 'FinTech Solutions',
		image: '/avatars/michael.jpg',
		rating: 5,
		textKey: 'El desarrollo de nuestro software de gestión financiera a medida revolucionó nuestros procesos internos. La automatización y la integración perfecta con nuestros sistemas existentes aumentaron significativamente nuestra eficiencia operativa.',
		dashboardType: 'software',
		metrics: {
			efficiency: '+180%',
			automation: '95%',
			processTime: '-65%',
		},
		iconColor: 'bg-blue-500',
	},
	{
		id: 3,
		nameKey: 'Laura Sánchez',
		roleKey: 'DevOps Manager',
		company: 'TechServices Pro',
		image: '/avatars/emily.jpg',
		rating: 5,
		textKey: 'La migración a la nube y la implementación de una arquitectura serverless transformó nuestra infraestructura. La escalabilidad automática y la reducción de costos operativos superaron nuestras expectativas.',
		dashboardType: 'cloud',
		metrics: {
			uptime: '99.99%',
			costReduction: '-40%',
			scalability: '∞',
		},
		iconColor: 'bg-green-500',
	},
	{
		id: 4,
		nameKey: 'Miguel Torres',
		roleKey: 'Product Manager',
		company: 'Global Solutions',
		image: '/avatars/david.jpg',
		rating: 5,
		textKey: 'El desarrollo de nuestra aplicación móvil empresarial mejoró significativamente la productividad de nuestro equipo en campo. La sincronización en tiempo real y la interfaz intuitiva fueron clave para su adopción masiva.',
		dashboardType: 'mobile',
		metrics: {
			userAdoption: '95%',
			syncSpeed: '0.3s',
			productivity: '+150%',
		},
		iconColor: 'bg-indigo-500',
	},
	{
		id: 5,
		nameKey: 'Patricia López',
		roleKey: 'AI Project Lead',
		company: 'Innovation Labs',
		image: '/avatars/lisa.jpg',
		rating: 5,
		textKey: 'La implementación de soluciones de IA para automatización de procesos y análisis predictivo ha revolucionado nuestra toma de decisiones. Los modelos personalizados superaron significativamente las soluciones genéricas del mercado.',
		dashboardType: 'ai',
		metrics: {
			accuracy: '98.5%',
			prediction: '94%',
			efficiency: '+200%',
		},
		iconColor: 'bg-pink-500',
	},
	{
		id: 6,
		nameKey: 'Roberto Gómez',
		roleKey: 'CEO',
		company: 'SaaS Platform',
		image: '/avatars/alex.jpg',
		rating: 5,
		textKey: 'El desarrollo de nuestra plataforma SaaS nos permitió escalar globalmente sin problemas. La arquitectura multitenancy y el sistema de microservicios proporcionaron la flexibilidad necesaria para nuestro crecimiento exponencial.',
		dashboardType: 'saas',
		metrics: {
			scalability: '+400%',
			responseTime: '0.2s',
			availability: '99.99%',
		},
		iconColor: 'bg-yellow-500',
	}
]

export default function TestimonialsSection() {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null)
	const { isDarkTheme } = useApp()
	const { t } = useLanguage()

	const nextTestimonial = () => {
		const nextIndex = (currentIndex + 1) % testimonials.length

		// Si quedarían menos de 3 cartas visibles
		if (testimonials.length - nextIndex < 3) {
			// Reiniciar al principio
			setCurrentIndex(0)
		} else {
			setCurrentIndex(nextIndex)
		}
	}

	const prevTestimonial = () => {
		// Si estamos en el inicio (mostrando las primeras 3 cartas)
		if (currentIndex === 0) {
			// Calculamos el índice para mostrar las últimas 3 cartas
			const lastGroupIndex = Math.max(0, testimonials.length - 3)
			setCurrentIndex(lastGroupIndex)
		} else {
			setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
		}
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => {
				// Calculamos el siguiente índice
				const nextIndex = (prev + 1) % testimonials.length

				// Si quedan menos de 3 cartas por mostrar al final
				if (testimonials.length - nextIndex < 3) {
					// Volvemos al inicio suavemente
					setTimeout(() => {
						setCurrentIndex(0)
					}, 700)
					return prev
				}

				return nextIndex
			})
		}, 5000)

		return () => clearInterval(interval)
	}, [])

	return (
		<section className="py-32 relative">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Excelencia en Desarrollo de Software
					</h2>
					<p className="text-violet-200 text-lg max-w-2xl mx-auto">
						Entregamos soluciones tecnológicas de alto impacto con resultados medibles y ROI garantizado
					</p>
				</div>

				{/* Stats Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
					<div className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'} bg-opacity-5 backdrop-blur-sm rounded-xl p-6 text-center`}>
						<div className="text-3xl font-bold text-white mb-2">
							99.99%
						</div>
						<div className="text-violet-200">
							Disponibilidad Garantizada en Nuestras Soluciones Cloud
						</div>
					</div>
					<div className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'} bg-opacity-5 backdrop-blur-sm rounded-xl p-6 text-center`}>
						<div className="text-3xl font-bold text-white mb-2">
							-60%
						</div>
						<div className="text-violet-200">
							Reducción en Costos Operativos con Automatización
						</div>
					</div>
					<div className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'} bg-opacity-5 backdrop-blur-sm rounded-xl p-6 text-center`}>
						<div className="text-3xl font-bold text-white mb-2">
							1s
						</div>
						<div className="text-violet-200">
							Tiempo de Respuesta en Aplicaciones Optimizadas
						</div>
					</div>
				</div>

				{/* Testimonials Carousel */}
				<div className="relative max-w-7xl mx-auto mb-32 px-12">
					{/* Scroll Indicator */}
					<div className="flex justify-center mb-8 gap-1">
						{testimonials.map((_, index) => (
							<motion.div
								key={index}
								className="h-1 w-8 rounded-full bg-purple-500"
								initial={{ opacity: 0.3 }}
								animate={{
									opacity: Math.abs(currentIndex - index) < 3 ? 1 : 0.3,
									backgroundColor: Math.abs(currentIndex - index) < 3 ? '#8B5CF6' : '#4B5563'
								}}
								transition={{ duration: 0.5 }}
							/>
						))}
					</div>
					<div className="overflow-hidden">
						<motion.div
							className="flex"
							animate={{
								x: `-${currentIndex * 33.33}%`
							}}
							transition={{
								duration: 0.7,
								ease: "easeInOut"
							}}
						>
							{testimonials.map((testimonial, index) => (
								<motion.div
									key={testimonial.id}
									className="w-1/3 flex-shrink-0 px-4"
									initial={{ opacity: 0 }}
									animate={{
										opacity: Math.abs(currentIndex - index) < 3 ? 1 : 0.3,
										scale: Math.abs(currentIndex - index) < 3 ? 1 : 0.95,
									}}
									transition={{ duration: 0.5 }}
								>
									<div
										onClick={() => setSelectedTestimonial(testimonial)}
										className={`${isDarkTheme ? 'bg-gray-800' : 'bg-white'
											} bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-opacity-10 h-[32rem] flex flex-col`}
									>
										<div className="flex items-center mb-6">
											<div className="relative">
												<div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
													<FiUser className="w-8 h-8 text-gray-500" />
												</div>
												<div className={`absolute -bottom-2 -right-2 ${testimonial.iconColor} rounded-full p-2`}>
													<FiStar className="w-4 h-4 text-white" />
												</div>
											</div>
											<div className="ml-4">
												<h3 className="text-xl font-semibold text-white">
													{t(testimonial.nameKey)}
												</h3>
												<p className="text-violet-200">
													{t(testimonial.roleKey)} at {testimonial.company}
												</p>
											</div>
										</div>
										<div className="flex mb-4">
											{[...Array(testimonial.rating)].map((_, i) => (
												<FiStar
													key={i}
													className="w-5 h-5 text-yellow-400 fill-current"
												/>
											))}
										</div>
										<p className="text-violet-200 mb-4 line-clamp-3 flex-grow">{t(testimonial.textKey)}</p>
										<div className="grid grid-cols-3 gap-2 mt-auto">
											{Object.entries(testimonial.metrics).map(([key, value]) => (
												<div
													key={key}
													className="bg-purple-500 bg-opacity-20 rounded-lg p-2 text-center"
												>
													<div className="text-white font-semibold text-sm">
														{value}
													</div>
													<div className="text-violet-200 text-xs">
														{key === 'userAdoption' && 'Adopción de Usuarios'}
														{key === 'syncSpeed' && 'Velocidad de Sincronización'}
														{key === 'productivity' && 'Productividad'}
														{key === 'uptime' && 'Tiempo de Actividad'}
														{key === 'costReduction' && 'Reducción de Costos'}
														{key === 'scalability' && 'Escalabilidad'}
														{key === 'accuracy' && 'Precisión'}
														{key === 'prediction' && 'Predicción'}
														{key === 'efficiency' && 'Eficiencia'}
														{key === 'automation' && 'Automatización'}
														{key === 'processTime' && 'Tiempo de Proceso'}
														{key === 'performance' && 'Rendimiento'}
														{key === 'reliability' && 'Fiabilidad'}
														{key === 'security' && 'Seguridad'}
														{key === 'maintenance' && 'Mantenimiento'}
														{key === 'support' && 'Soporte'}
														{key === 'training' && 'Capacitación'}
														{key === 'responseTime' && 'Tiempo de Respuesta'}
														{key === 'cost' && 'Costo'}
														{key === 'availability' && 'Disponibilidad'}
														{key === 'modelsDeployed' && 'Modelos Desplegados'}
														{key === 'dataSources' && 'Fuentes de Datos'}
														{key === 'integrations' && 'Integraciones'}
														{key === 'customization' && 'Personalización'}
														{key === 'userExperience' && 'Experiencia de Usuario'}
														{key === 'teamSize' && 'Tamaño del Equipo'}
														{key === 'loadTime' && 'Tiempo de Carga'}
														{key === 'seoScore' && 'Puntuación SEO'}
													</div>
												</div>
											))}
										</div>
									</div>
								</motion.div>
							))}
						</motion.div>
					</div>

					<button
						onClick={prevTestimonial}
						className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full p-4 text-white hover:from-purple-600 hover:to-violet-600 transition-all shadow-lg"
						aria-label={t('carousel_prev') as string}
					>
						<FiChevronLeft className="w-6 h-6" />
					</button>
					<button
						onClick={nextTestimonial}
						className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full p-4 text-white hover:from-purple-600 hover:to-violet-600 transition-all shadow-lg"
						aria-label={t('carousel_next') as string}
					>
						<FiChevronRight className="w-6 h-6" />
					</button>
				</div>
			</div>

			{/* Detailed Testimonial Modal */}
			<AnimatePresence>
				{selectedTestimonial && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-md z-50 flex items-center justify-center p-4"
						onClick={() => setSelectedTestimonial(null)}
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className={`${isDarkTheme ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-900 to-violet-800'
								} rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-purple-500/20`}
							onClick={(e) => e.stopPropagation()}
						>
							<div className="flex items-center justify-between mb-8 border-b border-purple-500/20 pb-6">
								<div className="flex items-center">
									<div className="relative">
										<div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
											<FiUser className="w-12 h-12 text-gray-500" />
										</div>
										<div className={`absolute -bottom-2 -right-2 ${selectedTestimonial.iconColor} rounded-full p-2`}>
											<FiStar className="w-4 h-4 text-white" />
										</div>
									</div>
									<div className="ml-6">
										<h3 className="text-3xl font-bold text-white mb-2">
											{t(selectedTestimonial.nameKey)}
										</h3>
										<p className="text-violet-200 text-lg">
											{t(selectedTestimonial.roleKey)} at {selectedTestimonial.company}
										</p>
									</div>
								</div>
								<div className="flex gap-1">
									{[...Array(selectedTestimonial.rating)].map((_, i) => (
										<FiStar
											key={i}
											className="w-6 h-6 text-yellow-400 fill-current"
										/>
									))}
								</div>
							</div>

							<div className="mb-8 bg-purple-500/10 rounded-xl p-6">
								<p className="text-lg text-violet-200 leading-relaxed italic">
									"{t(selectedTestimonial.textKey)}"
								</p>
							</div>

							<div className={`${isDarkTheme ? 'bg-gray-800' : 'bg-purple-800'} bg-opacity-50 rounded-xl p-6 mb-8`}>
								<h4 className="text-xl font-semibold text-white mb-4 flex items-center">
									<span className="mr-2">📊</span> {t('testimonial_metrics')}
								</h4>
								<div className="grid grid-cols-3 gap-6">
									{Object.entries(selectedTestimonial.metrics).map(
										([key, value]) => (
											<div key={key} className="text-center transform hover:scale-105 transition-all duration-300">
												<div className="text-2xl font-bold text-purple-300 mb-2">
													{value}
												</div>
												<div className="text-violet-200">
													{key === 'userAdoption' && 'Adopción de Usuarios'}
													{key === 'syncSpeed' && 'Velocidad de Sincronización'}
													{key === 'productivity' && 'Productividad'}
													{key === 'uptime' && 'Tiempo de Actividad'}
													{key === 'costReduction' && 'Reducción de Costos'}
													{key === 'scalability' && 'Escalabilidad'}
													{key === 'accuracy' && 'Precisión'}
													{key === 'prediction' && 'Predicción'}
													{key === 'efficiency' && 'Eficiencia'}
													{key === 'automation' && 'Automatización'}
													{key === 'processTime' && 'Tiempo de Proceso'}
													{key === 'performance' && 'Rendimiento'}
													{key === 'reliability' && 'Fiabilidad'}
													{key === 'security' && 'Seguridad'}
													{key === 'maintenance' && 'Mantenimiento'}
													{key === 'support' && 'Soporte'}
													{key === 'training' && 'Capacitación'}
													{key === 'responseTime' && 'Tiempo de Respuesta'}
													{key === 'cost' && 'Costo'}
													{key === 'availability' && 'Disponibilidad'}
													{key === 'loadTime' && 'Tiempo de Carga'}
													{key === 'seoScore' && 'Puntuación SEO'}
												</div>
											</div>
										)
									)}
								</div>
							</div>

							<div className="text-center">
								<button
									onClick={() => setSelectedTestimonial(null)}
									className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white rounded-full hover:from-purple-600 hover:to-violet-600 transition-all transform hover:scale-105 font-semibold shadow-lg"
								>
									{t('testimonial_close')}
								</button>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	)
}
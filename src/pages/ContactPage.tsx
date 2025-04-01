import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'
import Header from '../components/Header'
import AnimatedFooter from '../components/AnimatedFooter'

export default function ContactPage() {
	const { t } = useLanguage()
	const { insertContactSubmission } = useAuth()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
	const [errorMessage, setErrorMessage] = useState('')
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		phone: '',
		modelInterest: '',
		budget: '',
		timeframe: '',
		message: '',
		serviceInterest: [] as string[],
	})

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus('idle')
		setErrorMessage('')

		try {
			const { error } = await insertContactSubmission({
				name: formData.name,
				email: formData.email,
				company: formData.company,
				phone: formData.phone,
				service_interest: formData.serviceInterest,
				message: formData.message,
				budget: formData.budget,
				timeframe: formData.timeframe,
			})

			if (error) {
				throw error
			}

			setSubmitStatus('success')
			// Reset form
			setFormData({
				name: '',
				email: '',
				company: '',
				phone: '',
				modelInterest: '',
				budget: '',
				timeframe: '',
				message: '',
				serviceInterest: []
			})
		} catch (error) {
			setSubmitStatus('error')
			setErrorMessage('Hubo un error al enviar el formulario. Por favor intenta nuevamente.')
			console.error('Error submitting contact form:', error)
		} finally {
			setIsSubmitting(false)
		}
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}))
	}

	const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, checked } = e.target
		setFormData((prev) => ({
			...prev,
			serviceInterest: checked
				? [...prev.serviceInterest, value]
				: prev.serviceInterest.filter((service) => service !== value),
		}))
	}

	return (
		<div className="min-h-screen bg-theme-gradient">
			<Header variant="default" />
			<div className="pt-24 pb-32">
				<div className="container mx-auto px-4">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						className="text-center max-w-3xl mx-auto mb-16"
					>
						<h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
							{t('contact_title')}
						</h1>
						<p className="text-lg text-violet-200">
							{t('contact_subtitle')}
						</p>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className="max-w-2xl mx-auto"
					>
						<form
							onSubmit={handleSubmit}
							className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:bg-opacity-10"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
								<div>
									<label
										htmlFor="name"
										className="block text-violet-200 mb-2"
									>
										{t('contact_name')}
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white placeholder-violet-300 focus:outline-none focus:border-purple-500"
										placeholder={t('contact_placeholder_name')}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-violet-200 mb-2"
									>
										{t('contact_email')}
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white placeholder-violet-300 focus:outline-none focus:border-purple-500"
										placeholder={t('contact_placeholder_email')}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="company"
										className="block text-violet-200 mb-2"
									>
										{t('contact_company')}
									</label>
									<input
										type="text"
										id="company"
										name="company"
										value={formData.company}
										onChange={handleChange}
										className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white placeholder-violet-300 focus:outline-none focus:border-purple-500"
										placeholder={t('contact_placeholder_company')}
										required
									/>
								</div>
								<div>
									<label
										htmlFor="phone"
										className="block text-violet-200 mb-2"
									>
										{t('contact_phone')}
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										value={formData.phone}
										onChange={handleChange}
										className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white placeholder-violet-300 focus:outline-none focus:border-purple-500"
										placeholder={t('contact_placeholder_phone')}
									/>
								</div>
							</div>

							<div className="mb-12">
								<label className="block text-violet-200 mb-6 font-medium text-xl">
									Servicios de Interés
								</label>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{/* Desarrollo Web */}
									<motion.div
										className="p-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<div className="flex items-center gap-3 mb-4">
											<div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
												<svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
												</svg>
											</div>
											<h3 className="text-violet-200 font-medium text-lg">Desarrollo Web</h3>
										</div>
										<div className="space-y-3">
											<label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
												<input
													type="checkbox"
													name="serviceInterest"
													value="web-development"
													onChange={handleServiceChange}
													className="form-checkbox text-purple-500 rounded border-purple-400/50 focus:ring-purple-500 focus:ring-offset-0 transition-all"
												/>
												<span className="text-violet-200 group-hover/item:text-white transition-colors">Desarrollo Web Profesional</span>
											</label>
											<label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
												<input
													type="checkbox"
													name="serviceInterest"
													value="ecommerce"
													onChange={handleServiceChange}
													className="form-checkbox text-purple-500 rounded border-purple-400/50 focus:ring-purple-500 focus:ring-offset-0 transition-all"
												/>
												<span className="text-violet-200 group-hover/item:text-white transition-colors">Comercio Electrónico</span>
											</label>
											<label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
												<input
													type="checkbox"
													name="serviceInterest"
													value="wordpress"
													onChange={handleServiceChange}
													className="form-checkbox text-purple-500 rounded border-purple-400/50 focus:ring-purple-500 focus:ring-offset-0 transition-all"
												/>
												<span className="text-violet-200 group-hover/item:text-white transition-colors">WordPress</span>
											</label>
										</div>
									</motion.div>

									{/* Software y Nube */}
									<motion.div
										className="p-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<div className="flex items-center gap-3 mb-4">
											<div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
												<svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
												</svg>
											</div>
											<h3 className="text-violet-200 font-medium text-lg">Software y Nube</h3>
										</div>
										<div className="space-y-3">
											<label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
												<input
													type="checkbox"
													name="serviceInterest"
													value="custom-software"
													onChange={handleServiceChange}
													className="form-checkbox text-purple-500 rounded border-purple-400/50 focus:ring-purple-500 focus:ring-offset-0 transition-all"
												/>
												<span className="text-violet-200 group-hover/item:text-white transition-colors">Software a Medida</span>
											</label>
											<label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
												<input
													type="checkbox"
													name="serviceInterest"
													value="cloud-development"
													onChange={handleServiceChange}
													className="form-checkbox text-purple-500 rounded border-purple-400/50 focus:ring-purple-500 focus:ring-offset-0 transition-all"
												/>
												<span className="text-violet-200 group-hover/item:text-white transition-colors">Computación en la Nube</span>
											</label>
											<label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
												<input
													type="checkbox"
													name="serviceInterest"
													value="database-development"
													onChange={handleServiceChange}
													className="form-checkbox text-purple-500 rounded border-purple-400/50 focus:ring-purple-500 focus:ring-offset-0 transition-all"
												/>
												<span className="text-violet-200 group-hover/item:text-white transition-colors">Bases de Datos</span>
											</label>
										</div>
									</motion.div>

									{/* Servicios Avanzados */}
									<motion.div
										className="p-6 rounded-xl bg-white bg-opacity-5 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<div className="flex items-center gap-3 mb-4">
											<div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
												<svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
												</svg>
											</div>
											<h3 className="text-violet-200 font-medium text-lg">Servicios Avanzados</h3>
										</div>
										<div className="space-y-3">
											<label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
												<input
													type="checkbox"
													name="serviceInterest"
													value="mobile-development"
													onChange={handleServiceChange}
													className="form-checkbox text-purple-500 rounded border-purple-400/50 focus:ring-purple-500 focus:ring-offset-0 transition-all"
												/>
												<span className="text-violet-200 group-hover/item:text-white transition-colors">Desarrollo Móvil</span>
											</label>
											<label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
												<input
													type="checkbox"
													name="serviceInterest"
													value="saas-development"
													onChange={handleServiceChange}
													className="form-checkbox text-purple-500 rounded border-purple-400/50 focus:ring-purple-500 focus:ring-offset-0 transition-all"
												/>
												<span className="text-violet-200 group-hover/item:text-white transition-colors">Desarrollo SaaS</span>
											</label>
											<label className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group/item">
												<input
													type="checkbox"
													name="serviceInterest"
													value="ai-services"
													onChange={handleServiceChange}
													className="form-checkbox text-purple-500 rounded border-purple-400/50 focus:ring-purple-500 focus:ring-offset-0 transition-all"
												/>
												<span className="text-violet-200 group-hover/item:text-white transition-colors">Servicios de IA</span>
											</label>
										</div>
									</motion.div>
								</div>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
								<div>
									<label htmlFor="budget" className="block text-violet-200 mb-2">
										Presupuesto Estimado
									</label>
									<select
										id="budget"
										name="budget"
										value={formData.budget}
										onChange={handleChange}
										className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white focus:outline-none focus:border-purple-500"
									>
										<option value="" className="bg-purple-900">Seleccionar Presupuesto</option>
										<option value="0-1000" className="bg-purple-900">$0 - $1,000</option>
										<option value="1000-5000" className="bg-purple-900">$1,000 - $5,000</option>
										<option value="5000-10000" className="bg-purple-900">$5,000 - $10,000</option>
										<option value="10000+" className="bg-purple-900">$10,000+</option>
									</select>
								</div>
								<div>
									<label htmlFor="timeframe" className="block text-violet-200 mb-2">
										Plazo del Proyecto
									</label>
									<select
										id="timeframe"
										name="timeframe"
										value={formData.timeframe}
										onChange={handleChange}
										className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white focus:outline-none focus:border-purple-500"
									>
										<option value="" className="bg-purple-900">Seleccionar Plazo</option>
										<option value="immediate" className="bg-purple-900">Inmediato</option>
										<option value="1-3months" className="bg-purple-900">1-3 meses</option>
										<option value="3-6months" className="bg-purple-900">3-6 meses</option>
										<option value="6months+" className="bg-purple-900">Más de 6 meses</option>
									</select>
								</div>
							</div>

							<div className="mb-8">
								<label
									htmlFor="message"
									className="block text-violet-200 mb-4 font-medium text-lg"
								>
									{t('contact_message')}
								</label>
								<div className="relative">
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										className="w-full h-40 px-4 py-3 rounded-lg bg-white bg-opacity-10 border border-purple-700 text-white placeholder-violet-300 focus:outline-none focus:border-purple-500 transition-colors resize-none"
										placeholder={t('contact_placeholder_message')}
										required
									/>
									<div className="absolute bottom-3 right-3 text-violet-400 text-sm">
										{formData.message.length}/500
									</div>
								</div>
							</div>

							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								disabled={isSubmitting}
								className={`w-full py-3 px-6 rounded-full bg-purple-500 text-white font-medium transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-600'}`}
							>
								{isSubmitting ? 'Enviando...' : t('contact_submit')}
							</motion.button>

							{submitStatus === 'success' && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="mt-4 p-4 bg-green-500 bg-opacity-20 border border-green-500 border-opacity-20 rounded-lg text-green-400 text-center"
								>
									¡Gracias por contactarnos! Te responderemos pronto.
								</motion.div>
							)}

							{submitStatus === 'error' && (
								<motion.div
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									className="mt-4 p-4 bg-red-500 bg-opacity-20 border border-red-500 border-opacity-20 rounded-lg text-red-400 text-center"
								>
									{errorMessage || 'Hubo un error al enviar el formulario. Por favor intenta nuevamente.'}
								</motion.div>
							)}
						</form>

						{/* Additional Contact Info */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
							className="mt-12 space-y-8"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
								<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6">
									<h3 className="text-white font-semibold mb-2">{t('contact_phone_label')}</h3>
									<p className="text-violet-200">+52 (477) 106-7545</p>
								</div>
								<div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6">
									<h3 className="text-white font-semibold mb-2">{t('contact_hours_label')}</h3>
									<p className="text-violet-200">{t('contact_hours_value')}</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div >
			</div >
			<AnimatedFooter />
		</div >
	)
}
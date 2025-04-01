import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageSquare, FiCpu, FiBarChart2, FiSearch, FiTrendingUp } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { useApp } from '../context/AppContext';

interface DashboardPreviewProps {
	type: 'web' | 'software' | 'cloud' | 'ai'
}

export default function DashboardPreview({ type: initialType }: DashboardPreviewProps) {
	const { isDarkTheme } = useApp();
	const { t } = useLanguage();
	const [activeType, setActiveType] = useState(initialType);
	const [isAnimating, setIsAnimating] = useState(false);
	const [autoPlay, setAutoPlay] = useState(true);

	const tabs = [
		{ id: 'web', icon: FiTrendingUp, label: 'Desarrollo Web' },
		{ id: 'software', icon: FiBarChart2, label: 'Software' },
		{ id: 'cloud', icon: FiCpu, label: 'Cloud & DB' },
		{ id: 'ai', icon: FiSearch, label: 'IA & ML' }
	]

	useEffect(() => {
		let interval: NodeJS.Timeout
		if (autoPlay) {
			interval = setInterval(() => {
				const currentIndex = tabs.findIndex(tab => tab.id === activeType)
				const nextIndex = (currentIndex + 1) % tabs.length
				setActiveType(tabs[nextIndex].id as typeof activeType)
			}, 4000)
		}
		return () => clearInterval(interval)
	}, [activeType, autoPlay, tabs])

	const handleTabClick = (newType: typeof activeType) => {
		if (newType !== activeType) {
			setIsAnimating(true)
			setAutoPlay(false)
			setActiveType(newType)
			// Reactivar el autoplay después de 10 segundos de inactividad
			const timer = setTimeout(() => setAutoPlay(true), 10000)
			return () => clearTimeout(timer)
		}
	}

	const getContent = () => {
		switch (activeType) {
			case 'web':
				return (
					<div className={`p-8 rounded-2xl shadow-2xl border h-[800px] overflow-y-auto ${isDarkTheme ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border-purple-500/20' : 'bg-gradient-to-br from-indigo-500/40 to-purple-600/40 border-purple-400/60'}`}>
						<div className="mb-8">
							<h3 className="text-2xl font-bold text-white mb-4">{t('Desarrollo Web Profesional')}</h3>
							<div className="grid grid-cols-3 gap-6">
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Rendimiento')}</div>
									<div className="text-3xl font-bold text-green-400 mt-2">98%</div>
									<div className="text-sm text-green-300 mt-1">Optimización Avanzada</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Velocidad de Carga')}</div>
									<div className="text-3xl font-bold text-blue-400 mt-2">0.8s</div>
									<div className="text-sm text-blue-300 mt-1">Líder en Rendimiento</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Posicionamiento SEO')}</div>
									<div className="text-3xl font-bold text-purple-400 mt-2">95/100</div>
									<div className="text-sm text-purple-300 mt-1">Máxima Visibilidad</div>
								</div>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-6">
							<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
								<div className="flex justify-between items-center mb-4">
									<div>
										<div className="text-lg font-semibold text-white">{t('Experiencia de Usuario')}</div>
										<div className="text-sm text-purple-200 mt-1">Métricas Core Web Vitals</div>
									</div>
									<div className="text-green-400 text-xl font-bold">A+</div>
								</div>
								<div className="h-4 bg-indigo-900/50 rounded-full overflow-hidden">
									<div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-[95%] rounded-full"></div>
								</div>
								<div className="mt-4 grid grid-cols-3 gap-4 text-sm">
									<div className="text-purple-200">FCP: 1.2s</div>
									<div className="text-purple-200">LCP: 2.1s</div>
									<div className="text-purple-200">CLS: 0.05</div>
								</div>
							</div>
							<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
								<div className="flex justify-between items-center mb-4">
									<div>
										<div className="text-lg font-semibold text-white">{t('Rendimiento Técnico')}</div>
										<div className="text-sm text-purple-200 mt-1">Optimización Avanzada</div>
									</div>
									<div className="text-blue-400 text-xl font-bold">98%</div>
								</div>
								<div className="h-4 bg-indigo-900/50 rounded-full overflow-hidden">
									<div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-[98%] rounded-full"></div>
								</div>
								<div className="mt-4 grid grid-cols-3 gap-4 text-sm">
									<div className="text-purple-200">Cache: 99%</div>
									<div className="text-purple-200">Compresión: 95%</div>
									<div className="text-purple-200">Optimización: 98%</div>
								</div>
							</div>
						</div>
						<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30 mt-8">
							<div className="flex justify-between items-center mb-4">
								<div>
									<div className="text-lg font-semibold text-white">{t('Rendimiento Móvil')}</div>
									<div className="text-sm text-purple-200 mt-1">Métricas de Dispositivos</div>
								</div>
								<div className="text-blue-400 text-xl font-bold">92%</div>
							</div>
							<div className="space-y-3">
								<div>
									<div className="flex justify-between text-sm mb-1">
										<span className="text-purple-200">Velocidad de Carga</span>
										<span className="text-green-400">1.2s</span>
									</div>
									<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
										<div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-[95%] rounded-full"></div>
									</div>
								</div>
								<div>
									<div className="flex justify-between text-sm mb-1">
										<span className="text-purple-200">Optimización</span>
										<span className="text-blue-400">92%</span>
									</div>
									<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
										<div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-[92%] rounded-full"></div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className="space-y-6 mt-8">
							<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
								<div className="flex justify-between items-center mb-4">
									<div>
										<div className="text-lg font-semibold text-white">{t('Análisis de Tráfico')}</div>
										<div className="text-sm text-purple-200 mt-1">Comportamiento de Usuarios</div>
									</div>
									<div className="text-green-400 text-xl font-bold">+45%</div>
								</div>
								<div className="grid grid-cols-3 gap-4">
									<div className="text-center">
										<div className="text-2xl font-bold text-purple-400">5.2</div>
										<div className="text-sm text-purple-200">Páginas/Sesión</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-blue-400">3:45</div>
										<div className="text-sm text-purple-200">Tiempo Promedio</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-green-400">0.8%</div>
										<div className="text-sm text-purple-200">Tasa de Rebote</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				)
			case 'software':
				return (
					<div className={`p-8 rounded-2xl shadow-2xl border h-[800px] overflow-y-auto ${isDarkTheme ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border-purple-500/20' : 'bg-gradient-to-br from-indigo-500/40 to-purple-600/40 border-purple-400/60'}`}>
						<div className="mb-8">
							<h3 className="text-2xl font-bold text-white mb-4">{t('Software Empresarial')}</h3>
							<div className="grid grid-cols-3 gap-6">
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Eficiencia')}</div>
									<div className="text-3xl font-bold text-green-400 mt-2">+180%</div>
									<div className="text-sm text-green-300 mt-1">Mejora en Productividad</div>
									<div className="mt-3 space-y-2">
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">Automatización</span>
											<span className="text-green-400">95%</span>
										</div>
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">ROI</span>
											<span className="text-green-400">320%</span>
										</div>
									</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Calidad de Código')}</div>
									<div className="text-3xl font-bold text-blue-400 mt-2">A+</div>
									<div className="text-sm text-blue-300 mt-1">Estándares Superiores</div>
									<div className="mt-3 space-y-2">
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">Cobertura Tests</span>
											<span className="text-blue-400">98%</span>
										</div>
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">Code Review</span>
											<span className="text-blue-400">100%</span>
										</div>
									</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Seguridad')}</div>
									<div className="text-3xl font-bold text-purple-400 mt-2">A+</div>
									<div className="text-sm text-purple-300 mt-1">Protección Total</div>
									<div className="mt-3 space-y-2">
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">Vulnerabilidades</span>
											<span className="text-purple-400">0</span>
										</div>
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">Encriptación</span>
											<span className="text-purple-400">256-bit</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="space-y-6">
							<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
								<div className="flex justify-between items-center mb-4">
									<div>
										<div className="text-lg font-semibold text-white">{t('Embudo de Conversión')}</div>
										<div className="text-sm text-purple-200 mt-1">Últimos 30 días</div>
									</div>
									<div className="text-green-400 text-xl font-bold">8.5%</div>
								</div>
								<div className="space-y-3">
									<div>
										<div className="flex justify-between text-sm mb-1">
											<span className="text-purple-200">Visitantes</span>
											<span className="text-purple-200">125,000</span>
										</div>
										<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
											<div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 w-full rounded-full"></div>
										</div>
									</div>
									<div>
										<div className="flex justify-between text-sm mb-1">
											<span className="text-purple-200">Leads Calificados</span>
											<span className="text-purple-200">28,750</span>
										</div>
										<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
											<div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-[75%] rounded-full"></div>
										</div>
									</div>
									<div>
										<div className="flex justify-between text-sm mb-1">
											<span className="text-purple-200">Oportunidades</span>
											<span className="text-purple-200">10,625</span>
										</div>
										<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
											<div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-[45%] rounded-full"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
								<div className="flex justify-between items-center mb-4">
									<div>
										<div className="text-lg font-semibold text-white">{t('Engagement en Redes')}</div>
										<div className="text-sm text-purple-200 mt-1">Promedio últimos 7 días</div>
									</div>
									<div className="text-blue-400 text-xl font-bold">+32%</div>
								</div>
								<div className="grid grid-cols-3 gap-4">
									<div className="text-center">
										<div className="text-2xl font-bold text-purple-400">4.8%</div>
										<div className="text-sm text-purple-200">CTR</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-blue-400">2:45</div>
										<div className="text-sm text-purple-200">Tiempo Promedio</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold text-green-400">3.2</div>
										<div className="text-sm text-purple-200">Páginas/Sesión</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			case 'cloud':
				return (
					<div className={`p-8 rounded-2xl shadow-2xl border h-[800px] overflow-y-auto ${isDarkTheme ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border-purple-500/20' : 'bg-gradient-to-br from-indigo-500/40 to-purple-600/40 border-purple-400/60'}`}>
						<div className="mb-0">
							<h3 className="text-2xl font-bold text-white mb-4">{t('Cloud & Bases de Datos')}</h3>
							<div className="grid grid-cols-4 gap-4 mb-6">
								<div className={`p-5 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200 mb-2">{t('Disponibilidad')}</div>
									<div className="text-3xl font-bold text-green-400">99.99%</div>
									<div className="text-sm text-green-300 mt-1">Uptime Garantizado</div>
									<div className="mt-3 space-y-2">
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">Tiempo Respuesta</span>
											<span className="text-green-400">50ms</span>
										</div>
									</div>
								</div>
								<div className={`p-5 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200 mb-2">{t('CTR Promedio')}</div>
									<div className="text-3xl font-bold text-purple-400">4.8%</div>
									<div className="text-sm text-purple-300 mt-1">+0.5% vs mes anterior</div>
									<div className="h-2 bg-indigo-900/50 rounded-full mt-3">
										<div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 w-8/12 rounded-full"></div>
									</div>
								</div>
								<div className={`p-5 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200 mb-2">{t('Tráfico Orgánico')}</div>
									<div className="text-3xl font-bold text-green-400">15.2K</div>
									<div className="text-sm text-green-300 mt-1">+28% este mes</div>
									<div className="h-2 bg-indigo-900/50 rounded-full mt-3">
										<div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-10/12 rounded-full"></div>
									</div>
								</div>
								<div className={`p-5 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200 mb-2">{t('Backlinks')}</div>
									<div className="text-3xl font-bold text-yellow-400">850</div>
									<div className="text-sm text-yellow-300 mt-1">+120 nuevos</div>
									<div className="h-2 bg-indigo-900/50 rounded-full mt-3">
										<div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 w-9/12 rounded-full"></div>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
									<div className="flex justify-between items-center mb-4">
										<div>
											<div className="text-lg font-semibold text-white">{t('Rendimiento Técnico')}</div>
											<div className="text-sm text-purple-200 mt-1">Métricas del Sprint</div>
										</div>
										<div className="text-green-400 text-xl font-bold">98%</div>
									</div>
									<div className="h-4 bg-indigo-900/50 rounded-full overflow-hidden">
										<div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-[98%] rounded-full"></div>
									</div>
									<div className="mt-4 grid grid-cols-3 gap-4 text-sm">
										<div className="text-purple-200">Cobertura Tests: 95%</div>
										<div className="text-purple-200">Velocidad: 42 pts</div>
										<div className="text-purple-200">Bugs: 0</div>
									</div>
								</div>
								<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
									<div className="flex justify-between items-center mb-4">
										<div>
											<div className="text-lg font-semibold text-white">{t('Eficiencia del Proyecto')}</div>
											<div className="text-sm text-purple-200 mt-1">Últimos 30 días</div>
										</div>
										<div className="text-blue-400 text-xl font-bold">+45%</div>
									</div>
									<div className="h-4 bg-indigo-900/50 rounded-full overflow-hidden">
										<div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-[85%] rounded-full"></div>
									</div>
									<div className="mt-4 grid grid-cols-2 gap-4 text-sm">
										<div className="text-purple-200">Tiempo Desarrollo: -30%</div>
										<div className="text-purple-200">ROI: +180%</div>
									</div>
								</div>
							</div>
							<div className="mt-6">
								<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
									<div className="flex justify-between items-center mb-4">
										<div>
											<div className="text-lg font-semibold text-white">{t('Monitoreo de Recursos')}</div>
											<div className="text-sm text-purple-200 mt-1">Estado del Sistema</div>
										</div>
										<div className="text-blue-400 text-xl font-bold">Óptimo</div>
									</div>
									<div className="grid grid-cols-3 gap-6">
										<div className="text-center">
											<div className="text-sm text-purple-200 mb-2">CPU</div>
											<div className="relative inline-flex items-center justify-center">
												<div className="absolute text-sm text-white">65%</div>
												<svg className="transform -rotate-90 w-16 h-16">
													<circle
														className="text-indigo-900/50"
														strokeWidth="4"
														stroke="currentColor"
														fill="transparent"
														r="26"
														cx="32"
														cy="32"
													/>
													<circle
														className="text-blue-400"
														strokeWidth="4"
														strokeDasharray={164}
														strokeDashoffset={164 * 0.35}
														strokeLinecap="round"
														stroke="currentColor"
														fill="transparent"
														r="26"
														cx="32"
														cy="32"
													/>
												</svg>
											</div>
											<div className="text-sm text-blue-300 mt-2">Normal</div>
										</div>
										<div className="text-center">
											<div className="text-sm text-purple-200 mb-2">Memoria</div>
											<div className="relative inline-flex items-center justify-center">
												<div className="absolute text-sm text-white">78%</div>
												<svg className="transform -rotate-90 w-16 h-16">
													<circle
														className="text-indigo-900/50"
														strokeWidth="4"
														stroke="currentColor"
														fill="transparent"
														r="26"
														cx="32"
														cy="32"
													/>
													<circle
														className="text-yellow-400"
														strokeWidth="4"
														strokeDasharray={164}
														strokeDashoffset={164 * 0.22}
														strokeLinecap="round"
														stroke="currentColor"
														fill="transparent"
														r="26"
														cx="32"
														cy="32"
													/>
												</svg>
											</div>
											<div className="text-sm text-yellow-300 mt-2">Moderado</div>
										</div>
										<div className="text-center">
											<div className="text-sm text-purple-200 mb-2">Almacenamiento</div>
											<div className="relative inline-flex items-center justify-center">
												<div className="absolute text-sm text-white">45%</div>
												<svg className="transform -rotate-90 w-16 h-16">
													<circle
														className="text-indigo-900/50"
														strokeWidth="4"
														stroke="currentColor"
														fill="transparent"
														r="26"
														cx="32"
														cy="32"
													/>
													<circle
														className="text-green-400"
														strokeWidth="4"
														strokeDasharray={164}
														strokeDashoffset={164 * 0.55}
														strokeLinecap="round"
														stroke="currentColor"
														fill="transparent"
														r="26"
														cx="32"
														cy="32"
													/>
												</svg>
											</div>
											<div className="text-sm text-green-300 mt-2">Óptimo</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			case 'ai':
				return (
					<div className={`p-8 rounded-2xl shadow-2xl border h-[800px] overflow-y-auto ${isDarkTheme ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border-purple-500/20' : 'bg-gradient-to-br from-indigo-500/40 to-purple-600/40 border-purple-400/60'}`}>
						<div className="mb-8">
							<h3 className="text-2xl font-bold text-white mb-4">{t('Inteligencia Artificial & ML')}</h3>
							<div className="grid grid-cols-3 gap-6">
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Precisión del Modelo')}</div>
									<div className="text-3xl font-bold text-green-400 mt-2">98.5%</div>
									<div className="text-sm text-green-300 mt-1">Rendimiento Óptimo</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Escalabilidad')}</div>
									<div className="text-3xl font-bold text-blue-400 mt-2">∞</div>
									<div className="text-sm text-blue-300 mt-1">Auto-escalado</div>
									<div className="mt-3 space-y-2">
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">Carga Máxima</span>
											<span className="text-blue-400">10K/s</span>
										</div>
									</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Seguridad')}</div>
									<div className="text-3xl font-bold text-purple-400 mt-2">A+</div>
									<div className="text-sm text-purple-300 mt-1">Máxima Protección</div>
									<div className="mt-3 space-y-2">
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">Encriptación</span>
											<span className="text-purple-400">256-bit</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="space-y-6">
							<div className="grid grid-cols-2 gap-6">
								<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
									<div className="flex justify-between items-center mb-4">
										<div>
											<div className="text-lg font-semibold text-white">{t('Rendimiento de Modelos')}</div>
											<div className="text-sm text-purple-200 mt-1">Métricas de Precisión</div>
										</div>
										<div className="text-green-400 text-xl font-bold">98.5%</div>
									</div>
									<div className="space-y-3">
										<div>
											<div className="flex justify-between text-sm mb-1">
												<span className="text-purple-200">Clasificación</span>
												<span className="text-purple-200">99.2%</span>
											</div>
											<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
												<div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 w-[99%] rounded-full"></div>
											</div>
										</div>
										<div>
											<div className="flex justify-between text-sm mb-1">
												<span className="text-purple-200">Predicción</span>
												<span className="text-purple-200">97.8%</span>
											</div>
											<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
												<div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-[98%] rounded-full"></div>
											</div>
										</div>
										<div>
											<div className="flex justify-between text-sm mb-1">
												<span className="text-purple-200">Optimización</span>
												<span className="text-purple-200">98.5%</span>
											</div>
											<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
												<div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-[98%] rounded-full"></div>
											</div>
										</div>
									</div>
								</div>
								<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
									<div className="flex justify-between items-center mb-4">
										<div>
											<div className="text-lg font-semibold text-white">{t('Tendencias de Uso')}</div>
											<div className="text-sm text-purple-200 mt-1">Últimos 30 días</div>
										</div>
										<div className="text-blue-400 text-xl font-bold">+65%</div>
									</div>
									<div className="space-y-3">
										<div>
											<div className="flex justify-between text-sm mb-1">
												<span className="text-purple-200">Consultas Diarias</span>
												<span className="text-green-400">25K</span>
											</div>
											<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
												<div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-[85%] rounded-full"></div>
											</div>
										</div>
										<div>
											<div className="flex justify-between text-sm mb-1">
												<span className="text-purple-200">Usuarios Activos</span>
												<span className="text-blue-400">12.5K</span>
											</div>
											<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
												<div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-[75%] rounded-full"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="space-y-6 mt-8">
							<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
								<div className="flex justify-between items-center mb-4">
									<div>
										<div className="text-lg font-semibold text-white">{t('Eficiencia del Modelo')}</div>
										<div className="text-sm text-purple-200 mt-1">Rendimiento en Producción</div>
									</div>
									<div className="text-blue-400 text-xl font-bold">99.8%</div>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<div className="text-sm text-purple-200 mb-2">Tiempo de Inferencia</div>
										<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
											<div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-[95%] rounded-full"></div>
										</div>
									</div>
									<div>
										<div className="text-sm text-purple-200 mb-2">Uso de Recursos</div>
										<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
											<div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-[85%] rounded-full"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
		}
	}

	return (
		<div className="w-full max-w-3xl mx-auto space-y-6">
			<div className="flex justify-center space-x-4 p-2 rounded-lg overflow-hidden relative">
				<div className={`absolute inset-0 ${isDarkTheme ? 'bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-sm' : 'bg-gradient-to-br from-indigo-400/30 to-purple-500/30 backdrop-blur-sm'}`}></div>
				{tabs.map(tab => {
					const Icon = tab.icon
					return (
						<motion.button
							key={tab.id}
							onClick={() => handleTabClick(tab.id as typeof activeType)}
							className={`relative flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${activeType === tab.id ?
								isDarkTheme ?
									'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30' :
									'bg-gradient-to-r from-violet-400 to-purple-400 text-white shadow-lg shadow-purple-300/30'
								: isDarkTheme ?
									'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm' :
									'text-gray-300 hover:text-violet-700 hover:bg-violet-100/50 backdrop-blur-sm'}`}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<Icon className="w-5 h-5" />
							<span>{tab.label}</span>
						</motion.button>
					)
				})}
			</div>

			<AnimatePresence mode="wait" onExitComplete={() => setIsAnimating(false)}>
				<motion.div
					key={activeType}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -20 }}
					transition={{
						type: "spring",
						stiffness: 300,
						damping: 30,
						mass: 0.8
					}}
					onAnimationStart={() => setIsAnimating(true)}
					className="w-full"
				>
					{getContent()}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
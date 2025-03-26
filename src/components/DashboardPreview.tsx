import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageSquare, FiCpu, FiBarChart2, FiSearch, FiTrendingUp } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'
import { useApp } from '../context/AppContext';

interface DashboardPreviewProps {
	type: 'analytics' | 'performance' | 'marketing' | 'lead'
}

export default function DashboardPreview({ type: initialType }: DashboardPreviewProps) {
	const { isDarkTheme } = useApp();
	const { t } = useLanguage();
	const [activeType, setActiveType] = useState(initialType);
	const [isAnimating, setIsAnimating] = useState(false);
	const [autoPlay, setAutoPlay] = useState(true);

	const tabs = [
		{ id: 'marketing', icon: FiTrendingUp, label: 'Marketing' },
		{ id: 'analytics', icon: FiBarChart2, label: 'Redes Sociales' },
		{ id: 'performance', icon: FiCpu, label: 'SEO/SEM' },
		{ id: 'lead', icon: FiSearch, label: 'Leads' }
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
			case 'marketing':
				return (
					<div className={`p-8 rounded-2xl shadow-2xl border ${isDarkTheme ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border-purple-500/20' : 'bg-gradient-to-br from-indigo-500/40 to-purple-600/40 border-purple-400/60'}`}>
						<div className="mb-8">
							<h3 className="text-2xl font-bold text-white mb-4">{t('Métricas de Marketing Digital')}</h3>
							<div className="grid grid-cols-3 gap-6">
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Tasa de Conversión')}</div>
									<div className="text-3xl font-bold text-green-400 mt-2">12.8%</div>
									<div className="text-sm text-green-300 mt-1">+2.5% vs mes anterior</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Engagement')}</div>
									<div className="text-3xl font-bold text-blue-400 mt-2">89%</div>
									<div className="text-sm text-blue-300 mt-1">+15% interacción</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('ROI Marketing')}</div>
									<div className="text-3xl font-bold text-purple-400 mt-2">485%</div>
									<div className="text-sm text-purple-300 mt-1">+65% rentabilidad</div>
								</div>
							</div>
						</div>
						<div className="space-y-6">
							<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
								<div className="flex justify-between items-center mb-4">
									<div>
										<div className="text-lg font-semibold text-white">{t('Rendimiento de Campañas')}</div>
										<div className="text-sm text-purple-200 mt-1">Últimos 30 días</div>
									</div>
									<div className="text-green-400 text-xl font-bold">+48%</div>
								</div>
								<div className="h-4 bg-indigo-900/50 rounded-full overflow-hidden">
									<div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-[85%] rounded-full"></div>
								</div>
								<div className="mt-4 grid grid-cols-3 gap-4 text-sm">
									<div className="text-purple-200">Alcance: 125K</div>
									<div className="text-purple-200">Clics: 28.5K</div>
									<div className="text-purple-200">CTR: 22.8%</div>
								</div>
							</div>
							<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
								<div className="flex justify-between items-center mb-4">
									<div>
										<div className="text-lg font-semibold text-white">{t('Generación de Leads')}</div>
										<div className="text-sm text-purple-200 mt-1">Calificados vs Meta</div>
									</div>
									<div className="text-blue-400 text-xl font-bold">+186</div>
								</div>
								<div className="h-4 bg-indigo-900/50 rounded-full overflow-hidden">
									<div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-[75%] rounded-full"></div>
								</div>
								<div className="mt-4 grid grid-cols-3 gap-4 text-sm">
									<div className="text-purple-200">MQL: 156</div>
									<div className="text-purple-200">SQL: 98</div>
									<div className="text-purple-200">Conversión: 62.8%</div>
								</div>
							</div>
						</div>
					</div>
				)
			case 'analytics':
				return (
					<div className={`p-8 rounded-2xl shadow-2xl border ${isDarkTheme ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border-purple-500/20' : 'bg-gradient-to-br from-indigo-500/40 to-purple-600/40 border-purple-400/60'}`}>
						<div className="mb-8">
							<h3 className="text-2xl font-bold text-white mb-4">{t('Métricas de Marketing Digital')}</h3>
							<div className="grid grid-cols-3 gap-6">
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('ROI por Canal')}</div>
									<div className="text-3xl font-bold text-green-400 mt-2">385%</div>
									<div className="text-sm text-green-300 mt-1">+45% vs mes anterior</div>
									<div className="mt-3 space-y-2">
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">Google Ads</span>
											<span className="text-green-400">425%</span>
										</div>
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">Meta Ads</span>
											<span className="text-green-400">356%</span>
										</div>
									</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('CAC por Fuente')}</div>
									<div className="text-3xl font-bold text-blue-400 mt-2">$42.8</div>
									<div className="text-sm text-blue-300 mt-1">-18% optimización</div>
									<div className="mt-3 space-y-2">
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">Orgánico</span>
											<span className="text-blue-400">$28.5</span>
										</div>
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">Paid</span>
											<span className="text-blue-400">$56.2</span>
										</div>
									</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('LTV Promedio')}</div>
									<div className="text-3xl font-bold text-purple-400 mt-2">$850</div>
									<div className="text-sm text-purple-300 mt-1">+28% retención</div>
									<div className="mt-3 space-y-2">
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">6 meses</span>
											<span className="text-purple-400">$420</span>
										</div>
										<div className="flex justify-between text-xs">
											<span className="text-purple-200">12 meses</span>
											<span className="text-purple-400">$850</span>
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
			case 'performance':
				return (
					<div className={`p-8 rounded-2xl shadow-2xl border ${isDarkTheme ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border-purple-500/20' : 'bg-gradient-to-br from-indigo-500/40 to-purple-600/40 border-purple-400/60'}`}>
						<div className="mb-8">
							<h3 className="text-2xl font-bold text-white mb-4">{t('Métricas SEO/SEM')}</h3>
							<div className="grid grid-cols-2 gap-6">
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Posición Orgánica')}</div>
									<div className="text-3xl font-bold text-blue-400 mt-2">Top 3</div>
									<div className="text-sm text-blue-300 mt-1">+2 posiciones</div>
									<div className="h-2 bg-indigo-900/50 rounded-full mt-4">
										<div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-11/12 rounded-full"></div>
									</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('CTR Promedio')}</div>
									<div className="text-3xl font-bold text-purple-400 mt-2">4.8%</div>
									<div className="text-sm text-purple-300 mt-1">+0.5% vs mes anterior</div>
									<div className="h-2 bg-indigo-900/50 rounded-full mt-4">
										<div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 w-8/12 rounded-full"></div>
									</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Tráfico Orgánico')}</div>
									<div className="text-3xl font-bold text-green-400 mt-2">15.2K</div>
									<div className="text-sm text-green-300 mt-1">+28% este mes</div>
									<div className="h-2 bg-indigo-900/50 rounded-full mt-4">
										<div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-10/12 rounded-full"></div>
									</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Backlinks')}</div>
									<div className="text-3xl font-bold text-yellow-400 mt-2">850</div>
									<div className="text-sm text-yellow-300 mt-1">+120 nuevos</div>
									<div className="h-2 bg-indigo-900/50 rounded-full mt-4">
										<div className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 w-9/12 rounded-full"></div>
									</div>
								</div>
							</div>
							<div className="space-y-6">
								<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
									<div className="flex justify-between items-center mb-4">
										<div>
											<div className="text-lg font-semibold text-white">{t('Rendimiento SEM')}</div>
											<div className="text-sm text-purple-200 mt-1">Campaña actual</div>
										</div>
										<div className="text-green-400 text-xl font-bold">8.5%</div>
									</div>
									<div className="h-4 bg-indigo-900/50 rounded-full overflow-hidden">
										<div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-3/4 rounded-full"></div>
									</div>
									<div className="mt-4 grid grid-cols-3 gap-4 text-sm">
										<div className="text-purple-200">CPC: $1.25</div>
										<div className="text-purple-200">Impresiones: 45K</div>
										<div className="text-purple-200">Conversiones: 320</div>
									</div>
								</div>
								<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
									<div className="flex justify-between items-center mb-4">
										<div>
											<div className="text-lg font-semibold text-white">{t('Keywords Principales')}</div>
											<div className="text-sm text-purple-200 mt-1">Top 5 posiciones</div>
										</div>
										<div className="text-blue-400 text-xl font-bold">25</div>
									</div>
									<div className="h-4 bg-indigo-900/50 rounded-full overflow-hidden">
										<div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-4/5 rounded-full"></div>
									</div>
									<div className="mt-4 grid grid-cols-2 gap-4 text-sm">
										<div className="text-purple-200">Dificultad media: 45</div>
										<div className="text-purple-200">Volumen: 25K/mes</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			case 'lead':
				return (
					<div className={`p-8 rounded-2xl shadow-2xl border ${isDarkTheme ? 'bg-gradient-to-br from-indigo-900 to-purple-900 border-purple-500/20' : 'bg-gradient-to-br from-indigo-500/40 to-purple-600/40 border-purple-400/60'}`}>
						<div className="mb-8">
							<h3 className="text-2xl font-bold text-white mb-4">{t('Métricas de Leads')}</h3>
							<div className="grid grid-cols-3 gap-6">
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Tasa de Conversión MQL')}</div>
									<div className="text-3xl font-bold text-green-400 mt-2">24.5%</div>
									<div className="text-sm text-green-300 mt-1">+3.2% vs mes anterior</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Tiempo de Calificación')}</div>
									<div className="text-3xl font-bold text-blue-400 mt-2">4.2h</div>
									<div className="text-sm text-blue-300 mt-1">-15% tiempo promedio</div>
								</div>
								<div className={`p-6 rounded-xl border transition-all duration-300 transform hover:-translate-y-1 ${isDarkTheme ? 'bg-indigo-800/50 border-purple-400/30 hover:border-purple-400/60' : 'bg-white/15 border-purple-400/70 hover:border-purple-500/90'}`}>
									<div className="text-sm text-purple-200">{t('Leads Calificados')}</div>
									<div className="text-3xl font-bold text-purple-400 mt-2">342</div>
									<div className="text-sm text-purple-300 mt-1">+28% este mes</div>
								</div>
							</div>
						</div>
						<div className="space-y-6">
							<div className="bg-indigo-800/50 p-6 rounded-xl border border-purple-400/30">
								<div className="flex justify-between items-center mb-4">
									<div>
										<div className="text-lg font-semibold text-white">{t('Pipeline de Leads')}</div>
										<div className="text-sm text-purple-200 mt-1">Estado actual</div>
									</div>
									<div className="text-green-400 text-xl font-bold">+186</div>
								</div>
								<div className="space-y-3">
									<div>
										<div className="flex justify-between text-sm mb-1">
											<span className="text-purple-200">Nuevos</span>
											<span className="text-purple-200">450</span>
										</div>
										<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
											<div className="h-full bg-gradient-to-r from-purple-400 to-purple-500 w-full rounded-full"></div>
										</div>
									</div>
									<div>
										<div className="flex justify-between text-sm mb-1">
											<span className="text-purple-200">En Calificación</span>
											<span className="text-purple-200">285</span>
										</div>
										<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
											<div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-[75%] rounded-full"></div>
										</div>
									</div>
									<div>
										<div className="flex justify-between text-sm mb-1">
											<span className="text-purple-200">Calificados</span>
											<span className="text-purple-200">165</span>
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
										<div className="text-lg font-semibold text-white">{t('Fuentes de Leads')}</div>
										<div className="text-sm text-purple-200 mt-1">Top canales</div>
									</div>
									<div className="text-blue-400 text-xl font-bold">+32%</div>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div>
										<div className="text-sm text-purple-200 mb-2">Orgánico</div>
										<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
											<div className="h-full bg-gradient-to-r from-green-400 to-green-500 w-[65%] rounded-full"></div>
										</div>
										<div className="text-xs text-green-400 mt-1">65% - 225 leads</div>
									</div>
									<div>
										<div className="text-sm text-purple-200 mb-2">Paid Search</div>
										<div className="h-2 bg-indigo-900/50 rounded-full overflow-hidden">
											<div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-[35%] rounded-full"></div>
										</div>
										<div className="text-xs text-blue-400 mt-1">35% - 125 leads</div>
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
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { useApp } from './context/AppContext'
import { useLanguage } from './context/LanguageContext'
import { AuthProvider, useAuth } from './context/AuthContext'
import { ApiProvider } from './context/ApiContext'
import Header from './components/Header'
import AnimatedFooter from './components/AnimatedFooter'
import TestimonialsSection from './components/TestimonialsSection'
import NeuralNetworkBackground from './components/NeuralNetworkBackground'
import ScrollToTop from './components/ScrollToTop'
import AuthPopup from './components/AuthPopup'
import DocsPage from './pages/DocsPage'
import ModelsPage from './pages/ModelsPage'
import ModelDetailPage from './pages/ModelDetailPage'
import PricingPage from './pages/PricingPage'
import ContactPage from './pages/ContactPage'
import InteractiveDemoPage from './pages/InteractiveDemoPage'
import StarterDashboard from './pages/StarterDashboard'
import ProDashboard from './pages/ProDashboard'
import EnterpriseDashboard from './pages/EnterpriseDashboard'
import SubscriptionPage from './pages/SubscriptionPage'
import SubscriptionSuccessPage from './pages/SubscriptionSuccessPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
import PlanManagementPage from './pages/PlanManagementPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import AiToolsPage from './pages/AiToolsPage'
import DashboardPreview from './components/DashboardPreview'
import ExploreModelsPopup from './components/ExploreModelsPopup'
import LearnMorePopup from './components/LearnMorePopup'
import SubscriptionPopup from './components/SubscriptionPopup'
import { useState } from 'react'
import React from 'react'
import { LanguageProvider } from './context/LanguageContext'
import WebDevelopmentPage from './pages/WebDevelopmentPage'
import CustomSoftwarePage from './pages/CustomSoftwarePage'
import CloudDevelopmentPage from './pages/CloudDevelopmentPage'
import DatabaseDevelopmentPage from './pages/DatabaseDevelopmentPage'
import MobileAppDevelopmentPage from './pages/MobileAppDevelopmentPage'
import SaaSDevelopmentPage from './pages/SaaSDevelopmentPage'
import TechnicalSupportPage from './pages/TechnicalSupportPage'
import AiServicesPage from './pages/AiServicesPage'
import EcommercePage from './pages/EcommercePage'
import WordPressPage from './pages/WordPressPage'
import TiendaPage from './pages/TiendaPage'

// Protected route component for user account and settings pages
const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  
  // Only protect user-specific pages after loading completes
  if (!isLoading && !user && (window.location.pathname.includes('/profile') || 
      window.location.pathname.includes('/settings') || 
      window.location.pathname.includes('/plan-management'))) {
    return <Navigate to="/pricing" />;
  }
  
  return children;
};

// Dashboard redirect based on user subscription
function DashboardRoute() {
  const { user, userSubscription } = useAuth();
  
  // If not logged in, default to interactive demo
  if (!user) {
    return <Navigate to="/interactive-demo" />;
  }
  
  // Redirect based on subscription plan
  switch (userSubscription?.plan_id) {
    case '2':
      return <Navigate to="/starter-dashboard" />;
    case '3':
      return <Navigate to="/pro-dashboard" />;
    case '4':
      return <Navigate to="/enterprise-dashboard" />;
    default:
      return <Navigate to="/interactive-demo" />;
  }
}

function AppContent() {
  const { isGraphEnabled } = useApp()
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [isExploreModelsOpen, setIsExploreModelsOpen] = useState(false)
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false)
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(false)

  return (
    <>
      {isGraphEnabled && <NeuralNetworkBackground />}
      <ScrollToTop />
      <AuthPopup />
      <Routes>
        {/* Public Routes */}
        <Route path="/reset-password" element={<AuthPopup triggerReason="manual" />} />
        <Route path="/ecommerce" element={<EcommercePage />} />
        <Route path="/wordpress" element={<WordPressPage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/custom-software" element={<CustomSoftwarePage />} />
        <Route path="/cloud-development" element={<CloudDevelopmentPage />} />
        <Route path="/database-development" element={<DatabaseDevelopmentPage />} />
        <Route path="/mobile-app-development" element={<MobileAppDevelopmentPage />} />
        <Route path="/saas-development" element={<SaaSDevelopmentPage />} />
        <Route path="/technical-support" element={<TechnicalSupportPage />} />
        <Route path="/ai-services" element={<AiServicesPage />} />
        <Route path="/" element={
          <div className="min-h-screen bg-theme-gradient">
            <Header variant="default" />
            <div className="pt-32 pb-20">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-4xl mx-auto">
                  <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-violet-200">
                    Soluciones de Software Profesionales y Servicios de IA
                  </h1>
                  <p className="text-lg md:text-xl text-violet-200 mb-12">
                    Transformamos tus ideas en soluciones tecnológicas innovadoras: Desarrollo web, software a medida, cloud computing y servicios de IA para impulsar tu negocio al siguiente nivel
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={() => navigate('/contact')}
                      className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold hover:from-purple-600 hover:to-violet-600 transition-all"
                    >
                      Solicita tu Consulta Gratuita
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Preview Section */}
            <section className="py-20 bg-black/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Servicios Profesionales de Software Engineering
                  </h2>
                  <p className="text-violet-200 text-lg max-w-2xl mx-auto">
                    Desde desarrollo web hasta inteligencia artificial, ofrecemos soluciones tecnológicas completas para transformar tu visión en realidad.
                  </p>
                </div>
                <div className="max-w-5xl mx-auto">
                  <div className="bg-gradient-to-br from-purple-900/50 to-violet-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-700/30">
                    <DashboardPreview type="web" />
                  </div>
                </div>
              </div>
            </section>

            {/* Features Grid */}
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Desarrollo Web */}
                  <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transform transition-all hover:scale-105" onClick={() => navigate('/web-development')}>
                    <div className="text-4xl mb-6">💻</div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Desarrollo Web Profesional
                    </h3>
                    <p className="text-violet-200 mb-4">
                      Creamos experiencias web excepcionales que impulsan el crecimiento de tu negocio:
                    </p>
                    <ul className="text-violet-200 mb-6 list-disc list-inside space-y-2">
                      <li>Aplicaciones web empresariales de alto rendimiento</li>
                      <li>Optimización avanzada de velocidad y SEO</li>
                      <li>Diseño UX/UI centrado en conversión</li>
                      <li>Integración con sistemas empresariales</li>
                      <li>Arquitectura escalable y segura</li>
                    </ul>
                    <div className="text-sm text-violet-300 p-4 bg-purple-900/30 rounded-lg mb-4">
                      <strong>Stack Tecnológico:</strong> React, Next.js, Vue.js, Node.js, GraphQL
                    </div>
                    <div className="text-sm text-green-300 p-4 bg-green-900/30 rounded-lg">
                      <strong>Caso de Éxito:</strong> +300% en conversiones para e-commerce B2B
                    </div>
                  </div>

                  {/* Software a Medida */}
                  <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transform transition-all hover:scale-105" onClick={() => navigate('/custom-software')}>
                    <div className="text-4xl mb-6">🔧</div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Software Empresarial a Medida
                    </h3>
                    <p className="text-violet-200 mb-4">
                      Soluciones personalizadas que transforman desafíos en ventajas competitivas:
                    </p>
                    <ul className="text-violet-200 mb-6 list-disc list-inside space-y-2">
                      <li>Automatización de procesos críticos</li>
                      <li>Sistemas ERP y CRM personalizados</li>
                      <li>Integración con APIs y servicios externos</li>
                      <li>Migración y modernización de sistemas</li>
                      <li>Análisis de datos y Business Intelligence</li>
                    </ul>
                    <div className="text-sm text-violet-300 p-4 bg-purple-900/30 rounded-lg mb-4">
                      <strong>Tecnologías:</strong> Java, Python, .NET, Node.js, Microservicios
                    </div>
                    <div className="text-sm text-green-300 p-4 bg-green-900/30 rounded-lg">
                      <strong>Impacto:</strong> 60% reducción en costos operativos
                    </div>
                  </div>

                  {/* Servicios Cloud */}
                  <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transform transition-all hover:scale-105" onClick={() => navigate('/cloud-development')}>
                    <div className="text-4xl mb-6">☁️</div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Desarrollo Cloud & DevOps
                    </h3>
                    <p className="text-violet-200 mb-4">
                      Infraestructura cloud moderna y escalable para tu negocio:
                    </p>
                    <ul className="text-violet-200 mb-6 list-disc list-inside space-y-2">
                      <li>Arquitectura cloud-native</li>
                      <li>Implementación de CI/CD</li>
                      <li>Containerización y orquestación</li>
                      <li>Monitoreo y optimización</li>
                      <li>Seguridad cloud avanzada</li>
                    </ul>
                    <div className="text-sm text-violet-300 p-4 bg-purple-900/30 rounded-lg mb-4">
                      <strong>Plataformas:</strong> AWS, Azure, GCP, Kubernetes
                    </div>
                    <div className="text-sm text-green-300 p-4 bg-green-900/30 rounded-lg">
                      <strong>Resultado:</strong> 99.99% uptime y 40% reducción en costos
                    </div>
                  </div>

                  {/* Desarrollo Móvil */}
                  <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transform transition-all hover:scale-105" onClick={() => navigate('/mobile-app-development')}>
                    <div className="text-4xl mb-6">📱</div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Desarrollo de Apps Móviles
                    </h3>
                    <p className="text-violet-200 mb-4">
                      Apps nativas y multiplataforma de alto impacto:
                    </p>
                    <ul className="text-violet-200 mb-6 list-disc list-inside space-y-2">
                      <li>Desarrollo iOS y Android nativo</li>
                      <li>Soluciones multiplataforma</li>
                      <li>Integración con backends escalables</li>
                      <li>Experiencia de usuario premium</li>
                      <li>Analytics y engagement</li>
                    </ul>
                    <div className="text-sm text-violet-300 p-4 bg-purple-900/30 rounded-lg mb-4">
                      <strong>Frameworks:</strong> React Native, Flutter, Swift, Kotlin
                    </div>
                    <div className="text-sm text-green-300 p-4 bg-green-900/30 rounded-lg">
                      <strong>Logro:</strong> +1M descargas en apps empresariales
                    </div>
                  </div>

                  {/* Desarrollo SaaS */}
                  <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transform transition-all hover:scale-105" onClick={() => navigate('/saas-development')}>
                    <div className="text-4xl mb-6">🚀</div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Desarrollo de Soluciones SaaS
                    </h3>
                    <p className="text-violet-200 mb-4">
                      Plataformas SaaS innovadoras y escalables:
                    </p>
                    <ul className="text-violet-200 mb-6 list-disc list-inside space-y-2">
                      <li>Arquitectura multi-tenant</li>
                      <li>Sistemas de facturación y suscripción</li>
                      <li>Analíticas avanzadas</li>
                      <li>Seguridad empresarial</li>
                      <li>APIs y integraciones</li>
                    </ul>
                    <div className="text-sm text-violet-300 p-4 bg-purple-900/30 rounded-lg mb-4">
                      <strong>Stack:</strong> Node.js, React, MongoDB, Redis, Docker
                    </div>
                    <div className="text-sm text-green-300 p-4 bg-green-900/30 rounded-lg">
                      <strong>Métrica:</strong> 200% crecimiento MRR anual
                    </div>
                  </div>

                  {/* Servicios de IA */}
                  <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 cursor-pointer transform transition-all hover:scale-105" onClick={() => navigate('/ai-services')}>
                    <div className="text-4xl mb-6">🤖</div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      Soluciones de IA Avanzada
                    </h3>
                    <p className="text-violet-200 mb-4">
                      Inteligencia artificial que transforma tu negocio:
                    </p>
                    <ul className="text-violet-200 mb-6 list-disc list-inside space-y-2">
                      <li>Modelos de ML personalizados</li>
                      <li>Procesamiento de lenguaje natural</li>
                      <li>Visión por computadora</li>
                      <li>Automatización inteligente</li>
                      <li>Análisis predictivo</li>
                    </ul>
                    <div className="text-sm text-violet-300 p-4 bg-purple-900/30 rounded-lg mb-4">
                      <strong>Tecnologías:</strong> TensorFlow, PyTorch, OpenAI, Hugging Face
                    </div>
                    <div className="text-sm text-green-300 p-4 bg-green-900/30 rounded-lg">
                      <strong>ROI:</strong> 500% mejora en eficiencia operativa
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* Footer */}
            <AnimatedFooter />
          </div>
        } />

        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/tienda" element={<TiendaPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/models/:modelId" element={<ModelDetailPage />} />
        <Route path="/ai-tools" element={<AiToolsPage />} />
        
        {/* Dashboard Routes - Now public but features require auth */}
        <Route path="/interactive-demo" element={<InteractiveDemoPage />} />
        <Route path="/starter-dashboard" element={<StarterDashboard />} />
        <Route path="/pro-dashboard" element={<ProDashboard />} />
        <Route path="/enterprise-dashboard" element={<EnterpriseDashboard />} />
        
        {/* Protected User Account Routes */}
        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
        <Route path="/subscription" element={<ProtectedRoute><SubscriptionPage /></ProtectedRoute>} />
        <Route path="/plan-management" element={<ProtectedRoute><PlanManagementPage /></ProtectedRoute>} />
        <Route path="/subscription/success" element={<ProtectedRoute><SubscriptionSuccessPage /></ProtectedRoute>} />
        
        {/* Dashboard Redirect */}
        <Route path="/dashboard" element={<DashboardRoute />} />
      </Routes>

      {/* Popups */}
      <ExploreModelsPopup 
        isOpen={isExploreModelsOpen} 
        onClose={() => setIsExploreModelsOpen(false)} 
      />
      <LearnMorePopup 
        isOpen={isLearnMoreOpen} 
        onClose={() => setIsLearnMoreOpen(false)} 
      />
      <SubscriptionPopup 
        isOpen={isSubscriptionOpen} 
        onClose={() => setIsSubscriptionOpen(false)}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AppProvider>
          <AuthProvider>
            <ApiProvider>
              <AppContent />
            </ApiProvider>
          </AuthProvider>
        </AppProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FeaturesPage from './pages/FeaturesPage'
import BenefitsPage from './pages/BenefitsPage'
import PricingPage from './pages/PricingPage'
import ResourcesPage from './pages/ResourcesPage'
import ContactPage from './pages/ContactPage'
import ProductShowcasePage from './pages/ProductShowcasePage'
import HowItWorksPage from './pages/HowItWorksPage'
import TestimonialsPage from './pages/TestimonialsPage'
import IntegrationsPage from './pages/IntegrationsPage'
import AboutPage from './pages/AboutPage'
import CareersPage from './pages/CareersPage'
import BlogPage from './pages/BlogPage'
import DocumentationPage from './pages/DocumentationPage'
import SupportPage from './pages/SupportPage'
import FaqPage from './pages/FaqPage'
import CommunityPage from './pages/CommunityPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import CookiePolicyPage from './pages/CookiePolicyPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/benefits" element={<BenefitsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product-showcase" element={<ProductShowcasePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

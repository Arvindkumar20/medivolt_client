import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ReportExplainerPage from './pages/features/ReportExplainerPage';
import MedicineInfoPage from './pages/features/MedicineInfoPage';
import InsuranceExplainerPage from './pages/features/InsuranceExplainerPage';
import HealthDashboardPage from './pages/features/HealthDashboardPage';
import NutritionCalculatorPage from './pages/features/NutritionCalculatorPage';
import GovtSchemesPage from './pages/features/GovtSchemesPage';
import SymptomCheckerPage from './pages/features/SymptomCheckerPage';
import EmergencySOSPage from './pages/features/EmergencySOSPage';
import FitnessPlannerPage from './pages/features/FitnessPlannerPage';
import HealthLiteracyPage from './pages/features/HealthLiteracyPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import UserDashboardPage from './pages/UserDashboardPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import PricingPage from './pages/PricingPage';
import ContactUsPage from './pages/ContactUsPage';
import AboutUsPage from './pages/AboutUsPage';
import AdminPanel from './pages/AdminPanel';
import HospitalAdminPanel from './pages/admin/HospitalAdminPanel';
import HireDoctorsPage from './pages/HireDoctorsPage';
import RegistrationSystemPage from './pages/RegistrationSystemPage';
import TermsPage from './pages/TermsPage';
import ShippingPolicyPage from './pages/ShippingPolicyPage';
import TenAIFeaturesPage from './pages/TenAIFeaturesPage';
import PlaceholderPage from './pages/PlaceholderPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import PartnershipsPage from './pages/PartnershipsPage';
import FeaturesPage from './pages/FeaturesPage';
import HelpCenterPage from './pages/HelpCenterPage';
import ProductPage from './pages/ProductPage';
import ProductsPage from './pages/ProductsPage';
import ServerStatusPage from './pages/ServerStatusPage';
import BookADemoPage from './pages/BookADemoPage';
import WhyMedivoltPage from './pages/WhyMedivoltPage';
import CustomerStoriesPage from './pages/CustomerStoriesPage';
import GuidesPage from './pages/GuidesPage';
import WebinarsPage from './pages/WebinarsPage';
import WorkspaceManagementPage from './pages/WorkspaceManagementPage';
import GlossaryPage from './pages/GlossaryPage';
import AIHealthDashboardPage from './pages/AIHealthDashboardPage';
import AppointmentBookingPage from './pages/AppointmentBookingPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-black">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/report-explainer" element={<ReportExplainerPage />} />
              <Route path="/medicine-info" element={<MedicineInfoPage />} />
              <Route path="/insurance-explainer" element={<InsuranceExplainerPage />} />
              <Route path="/ai-health-dashboard" element={<AIHealthDashboardPage />} />
              <Route path="/nutrition-calculator" element={<NutritionCalculatorPage />} />
              <Route path="/govt-schemes" element={<GovtSchemesPage />} />
              <Route path="/symptom-checker" element={<SymptomCheckerPage />} />
              <Route path="/emergency-sos" element={<EmergencySOSPage />} />
              <Route path="/fitness-planner" element={<FitnessPlannerPage />} />
              <Route path="/health-literacy" element={<HealthLiteracyPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/dashboard" element={<UserDashboardPage />} />
              <Route path="/contact" element={<ContactUsPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/hospital-admin" element={<HospitalAdminPanel />} />
              <Route path="/hire-doctors" element={<HireDoctorsPage />} />
              <Route path="/registration" element={<RegistrationSystemPage />} />
              <Route path="/shipping" element={<ShippingPolicyPage />} />
              <Route path="/ai-features" element={<TenAIFeaturesPage />} />
              <Route path="/why-medivolt" element={<WhyMedivoltPage />} />
              <Route path="/customer-stories" element={<CustomerStoriesPage />} />
              <Route path="/guides" element={<GuidesPage />} />
              <Route path="/webinars" element={<WebinarsPage />} />
              <Route path="/workspace-management" element={<WorkspaceManagementPage />} />
              <Route path="/glossary" element={<GlossaryPage />} />
              <Route path="/leadership" element={<PlaceholderPage />} />
              <Route path="/press" element={<PlaceholderPage />} />
              <Route path="/support" element={<PlaceholderPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/partners" element={<PartnershipsPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/help-center" element={<HelpCenterPage />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/server-status" element={<ServerStatusPage />} />
              <Route path="/book-a-demo" element={<BookADemoPage />} />
              <Route path="/book-appointment" element={<AppointmentBookingPage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

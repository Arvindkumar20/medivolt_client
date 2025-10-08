import React, { lazy } from "react";
import { Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutUsPage = lazy(() => import("../pages/AboutUsPage"));
const ContactUsPage = lazy(() => import("../pages/ContactUsPage"));
const PricingPage = lazy(() => import("../pages/PricingPage"));
const TermsPage = lazy(() => import("../pages/TermsPage"));
const PrivacyPage = lazy(() => import("../pages/PrivacyPage"));
const CookiesPage = lazy(() => import("../pages/CookiesPage"));
const FAQPage = lazy(() => import("../pages/FAQPage"));
const BlogPage = lazy(() => import("../pages/BlogPage"));
const CareersPage = lazy(() => import("../pages/CareersPage"));
const HelpCenterPage = lazy(() => import("../pages/HelpCenterPage"));
const BookADemoPage = lazy(() => import("../pages/BookADemoPage"));
const WhyMedivoltPage = lazy(() => import("../pages/WhyMedivoltPage"));

export const publicRoutes = [
  <Route key="home" path="/" element={<HomePage />} />,
  <Route key="about" path="/about" element={<AboutUsPage />} />,
  <Route key="contact" path="/contact" element={<ContactUsPage />} />,
  <Route key="pricing" path="/pricing" element={<PricingPage />} />,
  <Route key="terms" path="/terms" element={<TermsPage />} />,
  <Route key="privacy" path="/privacy" element={<PrivacyPage />} />,
  <Route key="cookies" path="/cookies" element={<CookiesPage />} />,
  <Route key="faq" path="/faq" element={<FAQPage />} />,
  <Route key="blog" path="/blog" element={<BlogPage />} />,
  <Route key="careers" path="/careers" element={<CareersPage />} />,
  <Route key="help-center" path="/help-center" element={<HelpCenterPage />} />,
  <Route key="book-a-demo" path="/book-a-demo" element={<BookADemoPage />} />,
  <Route key="why-medivolt" path="/why-medivolt" element={<WhyMedivoltPage />} />,
];

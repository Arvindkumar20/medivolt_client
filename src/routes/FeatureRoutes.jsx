import React, { lazy } from "react";
import { Route } from "react-router-dom";

const ReportExplainerPage = lazy(() => import("../pages/features/ReportExplainerPage"));
const MedicineInfoPage = lazy(() => import("../pages/features/MedicineInfoPage"));
const InsuranceExplainerPage = lazy(() => import("../pages/features/InsuranceExplainerPage"));
const NutritionCalculatorPage = lazy(() => import("../pages/features/NutritionCalculatorPage"));
const FitnessPlannerPage = lazy(() => import("../pages/features/FitnessPlannerPage"));
const GovtSchemesPage = lazy(() => import("../pages/features/GovtSchemesPage"));
const SymptomCheckerPage = lazy(() => import("../pages/features/SymptomCheckerPage"));
const EmergencySOSPage = lazy(() => import("../pages/features/EmergencySOSPage"));
const HealthLiteracyPage = lazy(() => import("../pages/features/HealthLiteracyPage"));
const AIHealthDashboardPage = lazy(() => import("../pages/AIHealthDashboardPage"));

export const featureRoutes = [
  <Route key="report" path="/report-explainer" element={<ReportExplainerPage />} />,
  <Route key="medicine" path="/medicine-info" element={<MedicineInfoPage />} />,
  <Route key="insurance" path="/insurance-explainer" element={<InsuranceExplainerPage />} />,
  <Route key="nutrition" path="/nutrition-calculator" element={<NutritionCalculatorPage />} />,
  <Route key="fitness" path="/fitness-planner" element={<FitnessPlannerPage />} />,
  <Route key="govt" path="/govt-schemes" element={<GovtSchemesPage />} />,
  <Route key="symptom" path="/symptom-checker" element={<SymptomCheckerPage />} />,
  <Route key="emergency" path="/emergency-sos" element={<EmergencySOSPage />} />,
  <Route key="literacy" path="/health-literacy" element={<HealthLiteracyPage />} />,
  <Route key="ai" path="/ai-health-dashboard" element={<AIHealthDashboardPage />} />,
];

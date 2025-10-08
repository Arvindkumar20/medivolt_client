import React, { lazy } from "react";
import { Route } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("../pages/ForgotPasswordPage"));
const UserDashboardPage = lazy(() => import("../pages/UserDashboardPage"));
const AppointmentBookingPage = lazy(() =>
  import("../pages/appointment/pages/AppointmentBookingPage")
);

export const userRoutes = [
  <Route path="/login" element={<LoginPage />} />,
  <Route path="/register" element={<RegisterPage />} />,
  <Route path="/forgot-password" element={<ForgotPasswordPage />} />,
  <Route path="/dashboard" element={<UserDashboardPage />} />,
  <Route path="/book-appointment" element={<AppointmentBookingPage />} />,
];

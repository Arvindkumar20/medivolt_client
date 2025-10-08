import React, { lazy } from "react";
import { Route } from "react-router-dom";

const AdminPanel = lazy(() => import("../pages/AdminPanel"));
const HospitalAdminPanel = lazy(() =>
  import("../pages/admin/HospitalAdminPanel")
);
const HireDoctorsPage = lazy(() => import("../pages/HireDoctorsPage"));
const RegistrationSystemPage = lazy(() =>
  import("../pages/RegistrationSystemPage")
);

export const adminRoutes = [
  <Route path="/admin" element={<AdminPanel />} />,
  <Route path="/hospital-admin" element={<HospitalAdminPanel />} />,
  <Route path="/hire-doctors" element={<HireDoctorsPage />} />,
  <Route path="/registration" element={<RegistrationSystemPage />} />,
];

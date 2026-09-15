import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext.js';
import { LanguageProvider } from './context/LanguageContext.js';

// Pages
import { LandingPage } from './pages/LandingPage.js';
import { LoginPage } from './pages/auth/LoginPage.js';
import { RegisterPage } from './pages/auth/RegisterPage.js';
import { ForgotPasswordPage } from './pages/auth/ForgotPasswordPage.js';

// 12+ Role Dashboards
import { SuperAdminDashboard } from './pages/dashboards/SuperAdminDashboard.js';
import { RegionalAdminDashboard } from './pages/dashboards/RegionalAdminDashboard.js';
import { DonorDashboard } from './pages/dashboards/DonorDashboard.js';
import { RestaurantDashboard } from './pages/dashboards/RestaurantDashboard.js';
import { HotelDashboard } from './pages/dashboards/HotelDashboard.js';
import { NgoDashboard } from './pages/dashboards/NgoDashboard.js';
import { VolunteerDashboard } from './pages/dashboards/VolunteerDashboard.js';
import { DeliveryPartnerDashboard } from './pages/dashboards/DeliveryPartnerDashboard.js';
import { BeneficiaryDashboard } from './pages/dashboards/BeneficiaryDashboard.js';
import { CorporateCsrDashboard } from './pages/dashboards/CorporateCsrDashboard.js';
import { GovernmentDashboard } from './pages/dashboards/GovernmentDashboard.js';
import { AnalyticsDashboard } from './pages/dashboards/AnalyticsDashboard.js';
import { FoodSafetyDashboard } from './pages/dashboards/FoodSafetyDashboard.js';

// Protected Route Guard
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* Authenticated 12+ Role Dashboards */}
            <Route
              path="/dashboard/super-admin"
              element={
                <ProtectedRoute>
                  <SuperAdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/regional-admin"
              element={
                <ProtectedRoute>
                  <RegionalAdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/donor"
              element={
                <ProtectedRoute>
                  <DonorDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/restaurant"
              element={
                <ProtectedRoute>
                  <RestaurantDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/hotel"
              element={
                <ProtectedRoute>
                  <HotelDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/ngo"
              element={
                <ProtectedRoute>
                  <NgoDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/volunteer"
              element={
                <ProtectedRoute>
                  <VolunteerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/delivery-partner"
              element={
                <ProtectedRoute>
                  <DeliveryPartnerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/beneficiary"
              element={
                <ProtectedRoute>
                  <BeneficiaryDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/corporate-csr"
              element={
                <ProtectedRoute>
                  <CorporateCsrDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/government"
              element={
                <ProtectedRoute>
                  <GovernmentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/analytics"
              element={
                <ProtectedRoute>
                  <AnalyticsDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/safety-officer"
              element={
                <ProtectedRoute>
                  <FoodSafetyDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/food-safety-officer"
              element={
                <ProtectedRoute>
                  <FoodSafetyDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/government-authority"
              element={
                <ProtectedRoute>
                  <GovernmentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/analyst"
              element={
                <ProtectedRoute>
                  <AnalyticsDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard/district-admin"
              element={
                <ProtectedRoute>
                  <RegionalAdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
};

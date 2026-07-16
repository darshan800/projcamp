import React from 'react'
import { Routes, Route } from 'react-router-dom'

import RegisterPage from '../pages/auth/RegisterPage'
import LoginPage from '../pages/auth/LoginPage'
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage'
import ResetPasswordPage from '../pages/auth/ResetPasswordPage'
import DashboardPage from '../pages/dashboard/DashboardPage'
import NotFoundPage from '../pages/errors/NotFoundPage'
import LandingPage from '../pages/landing/LandingPage'
import ProfilePage from '../pages/profile/ProfilePage'
import ProjectsPage from '../pages/projects/ProjectsPage'
import ProjectPage from '../pages/projects/ProjectPage'
import SettingsPage from '../pages/settings/SettingsPage'


const AppRoutes = () => {
  return (
    <div>
        <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password/:token" element={<ResetPasswordPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
      
    </div>
  )
}

export default AppRoutes

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Auth Pages
import LandingPage from '../pages/auth/LandingPage';
import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';

// Student Pages
import StudentDashboard from '../pages/student/StudentDashboard';
import StudentProfile from '../pages/student/StudentProfile';
import Opportunities from '../pages/student/Opportunities';
import OpportunityDetail from '../pages/student/OpportunityDetail';
import AITest from '../pages/student/AITest';
import StudentNotifications from '../pages/student/StudentNotifications';
import StudentSettings from '../pages/student/StudentSettings';

// Admin Pages
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateOpportunity from '../pages/admin/CreateOpportunity';
import ManageOpportunities from '../pages/admin/ManageOpportunities';
import StudentInsights from '../pages/admin/StudentInsights';

// Layouts
import StudentLayout from '../layouts/StudentLayout';
import AdminLayout from '../layouts/AdminLayout';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to={user.role === 'admin' ? '/admin' : '/student'} replace />;
  }

  return children;
};

const AppRoutes = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={isAuthenticated ? <Navigate to={user.role === 'admin' ? '/admin' : '/student'} /> : <LandingPage />} />
      <Route path="/login" element={isAuthenticated ? <Navigate to={user.role === 'admin' ? '/admin' : '/student'} /> : <LoginPage />} />
      <Route path="/signup" element={isAuthenticated ? <Navigate to={user.role === 'admin' ? '/admin' : '/student'} /> : <SignupPage />} />

      {/* Student Routes */}
      <Route path="/student" element={<ProtectedRoute requiredRole="student"><StudentLayout /></ProtectedRoute>}>
        <Route index element={<StudentDashboard />} />
        <Route path="profile" element={<StudentProfile />} />
        <Route path="opportunities" element={<Opportunities />} />
        <Route path="opportunities/:id" element={<OpportunityDetail />} />
        <Route path="ai-test" element={<AITest />} />
        <Route path="notifications" element={<StudentNotifications />} />
        <Route path="settings" element={<StudentSettings />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminLayout /></ProtectedRoute>}>
        <Route index element={<AdminDashboard />} />
        <Route path="create-opportunity" element={<CreateOpportunity />} />
        <Route path="manage-opportunities" element={<ManageOpportunities />} />
        <Route path="student-insights" element={<StudentInsights />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;

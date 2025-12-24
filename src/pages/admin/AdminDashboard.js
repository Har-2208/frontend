import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const stats = {
    totalOpportunities: 24,
    totalStudents: 156,
    activeApplications: 89,
    pendingReviews: 12,
  };

  const recentOpportunities = [
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', applications: 45, deadline: '2024-02-15' },
    { id: 2, title: 'Frontend Developer', company: 'StartupXYZ', applications: 32, deadline: '2024-02-20' },
    { id: 3, title: 'Data Analyst', company: 'Analytics Inc', applications: 28, deadline: '2024-02-25' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-primary-100">Manage opportunities and track student engagement</p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="text-3xl mb-2">💼</div>
          <p className="text-sm text-gray-600 mb-1">Total Opportunities</p>
          <p className="text-3xl font-bold text-gray-900">{stats.totalOpportunities}</p>
        </div>
        <div className="card bg-gradient-to-br from-green-50 to-green-100">
          <div className="text-3xl mb-2">👨‍🎓</div>
          <p className="text-sm text-gray-600 mb-1">Total Students</p>
          <p className="text-3xl font-bold text-gray-900">{stats.totalStudents}</p>
        </div>
        <div className="card bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="text-3xl mb-2">📝</div>
          <p className="text-sm text-gray-600 mb-1">Active Applications</p>
          <p className="text-3xl font-bold text-gray-900">{stats.activeApplications}</p>
        </div>
        <div className="card bg-gradient-to-br from-orange-50 to-orange-100">
          <div className="text-3xl mb-2">⏳</div>
          <p className="text-sm text-gray-600 mb-1">Pending Reviews</p>
          <p className="text-3xl font-bold text-gray-900">{stats.pendingReviews}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link
            to="/admin/create-opportunity"
            className="bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-lg text-center font-medium transition-colors"
          >
            + Create New Opportunity
          </Link>
          <Link
            to="/admin/manage-opportunities"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-4 rounded-lg text-center font-medium transition-colors"
          >
            Manage Opportunities
          </Link>
          <Link
            to="/admin/student-insights"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-4 rounded-lg text-center font-medium transition-colors"
          >
            View Student Insights
          </Link>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Posting Activity</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart visualization placeholder</p>
          </div>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills in Demand</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            <p className="text-gray-500">Chart visualization placeholder</p>
          </div>
        </div>
      </div>

      {/* Recently Created Opportunities */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recently Created Opportunities</h2>
          <Link
            to="/admin/manage-opportunities"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View All →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Title</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Company</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Applications</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Deadline</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOpportunities.map((opp) => (
                <tr key={opp.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{opp.title}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{opp.company}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{opp.applications}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{opp.deadline}</td>
                  <td className="px-4 py-3 text-sm">
                    <button className="text-primary-600 hover:text-primary-700 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-700">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

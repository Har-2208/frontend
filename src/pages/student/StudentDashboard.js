import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const StudentDashboard = () => {
  const { user } = useAuth();

  const mockOpportunities = [
    { id: 1, title: 'Software Engineer', company: 'Tech Corp', match: 95, deadline: '2024-02-15' },
    { id: 2, title: 'Frontend Developer', company: 'StartupXYZ', match: 88, deadline: '2024-02-20' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
        <p className="text-primary-100">Here's what's happening with your job search today</p>
      </div>

      {/* Profile Completion Card */}
      {!user?.profileComplete && (
        <div className="card bg-yellow-50 border border-yellow-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Your Profile</h3>
              <p className="text-gray-600 mb-4">Add your details to get better job matches</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-primary-600 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              <Link to="/student/profile" className="btn-primary inline-block">
                Complete Profile
              </Link>
            </div>
            <div className="text-6xl">👤</div>
          </div>
        </div>
      )}

      {/* Quick Action Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link to="/student/opportunities" className="card hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">💼</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Explore Opportunities</h3>
          <p className="text-gray-600">Browse {mockOpportunities.length} matched jobs</p>
        </Link>

        <Link to="/student/ai-test" className="card hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">🤖</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Mock Interview</h3>
          <p className="text-gray-600">Practice and improve your skills</p>
        </Link>

        <Link to="/student/profile" className="card hover:shadow-lg transition-shadow">
          <div className="text-4xl mb-3">📊</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">My Profile</h3>
          <p className="text-gray-600">Update your information</p>
        </Link>
      </div>

      {/* Matched Opportunities Preview */}
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Top Matched Opportunities</h2>
          <Link to="/student/opportunities" className="text-primary-600 hover:text-primary-700 font-medium">
            View All →
          </Link>
        </div>
        <div className="space-y-4">
          {mockOpportunities.map((opp) => (
            <div key={opp.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary-500 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">{opp.title}</h3>
                  <p className="text-gray-600">{opp.company}</p>
                </div>
                <div className="text-right">
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {opp.match}% Match
                  </div>
                  <p className="text-sm text-gray-500 mt-2">Deadline: {opp.deadline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <div className="card">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Deadlines</h2>
        <div className="space-y-3">
          {mockOpportunities.map((opp) => (
            <div key={opp.id} className="flex items-center justify-between border-l-4 border-red-500 pl-4 py-2">
              <div>
                <p className="font-medium text-gray-900">{opp.title}</p>
                <p className="text-sm text-gray-600">{opp.company}</p>
              </div>
              <span className="text-sm font-medium text-red-600">{opp.deadline}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Assessment Summary */}
      <div className="card bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Assessment Status</h3>
            <p className="text-gray-600 mb-4">Last assessment: 2 days ago</p>
            <Link to="/student/ai-test" className="btn-primary inline-block">
              Start New Test
            </Link>
          </div>
          <div className="text-6xl">🎯</div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Student-Admin Portal
          </h1>
          <p className="text-xl text-white mb-12 max-w-2xl mx-auto">
            Connect students with opportunities. Powered by AI-driven matching and assessment.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/login"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 text-white">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Smart Matching</h3>
            <p>AI-powered job matching based on your skills and goals</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 text-white">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl font-semibold mb-2">Opportunities</h3>
            <p>Access to curated job opportunities from top companies</p>
          </div>
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 text-white">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI Assessment</h3>
            <p>Practice with AI-powered mock interviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

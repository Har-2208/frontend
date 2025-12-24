import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const StudentProfile = () => {
  const { user, updateProfile } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    education: '',
    university: '',
    graduationYear: '',
    skills: '',
    careerGoals: '',
    resume: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ ...formData, profileComplete: true });
    alert('Profile updated successfully!');
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">My Profile</h1>

      {/* Profile Completion Progress */}
      <div className="card mb-6">
        <h2 className="text-lg font-semibold mb-4">Profile Completion</h2>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-primary-600 h-3 rounded-full" style={{ width: '45%' }}></div>
        </div>
        <p className="text-sm text-gray-600 mt-2">45% Complete</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Personal Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="input-field"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="input-field"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>
        </div>

        {/* Education Details */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Education Details</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
              <input
                type="text"
                value={formData.education}
                onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                className="input-field"
                placeholder="B.S. Computer Science"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">University</label>
              <input
                type="text"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                className="input-field"
                placeholder="MIT"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
              <input
                type="text"
                value={formData.graduationYear}
                onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                className="input-field"
                placeholder="2024"
              />
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Skills (comma separated)
            </label>
            <textarea
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="input-field"
              rows="3"
              placeholder="JavaScript, React, Node.js, Python"
            ></textarea>
          </div>
        </div>

        {/* Career Goals */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Career Goals</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What are your career aspirations?
            </label>
            <textarea
              value={formData.careerGoals}
              onChange={(e) => setFormData({ ...formData, careerGoals: e.target.value })}
              className="input-field"
              rows="4"
              placeholder="Describe your career goals..."
            ></textarea>
          </div>
        </div>

        {/* Resume Upload */}
        <div className="card">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Resume</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume</label>
            <input
              type="file"
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx"
              className="input-field"
            />
            {formData.resume && (
              <p className="text-sm text-gray-600 mt-2">Selected: {formData.resume.name}</p>
            )}
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button type="button" className="btn-secondary">Cancel</button>
          <button type="submit" className="btn-primary">Save Profile</button>
        </div>
      </form>
    </div>
  );
};

export default StudentProfile;

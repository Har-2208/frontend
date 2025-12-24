import React, { useState } from 'react';

const StudentInsights = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);

  const students = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      skills: ['JavaScript', 'React', 'Node.js'],
      education: 'B.S. Computer Science - MIT',
      matchPercentage: 95,
      applications: 12,
      resumeUrl: '#',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      skills: ['Python', 'Django', 'PostgreSQL'],
      education: 'B.S. Software Engineering - Stanford',
      matchPercentage: 88,
      applications: 8,
      resumeUrl: '#',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      skills: ['Java', 'Spring Boot', 'AWS'],
      education: 'M.S. Computer Science - Berkeley',
      matchPercentage: 92,
      applications: 15,
      resumeUrl: '#',
    },
  ];

  const viewResume = (student) => {
    setSelectedStudent(student);
    setShowResumeModal(true);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Student Insights</h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="text-3xl mb-2">👨‍🎓</div>
          <p className="text-sm text-gray-600 mb-1">Total Students</p>
          <p className="text-3xl font-bold text-gray-900">{students.length}</p>
        </div>
        <div className="card bg-gradient-to-br from-green-50 to-green-100">
          <div className="text-3xl mb-2">📊</div>
          <p className="text-sm text-gray-600 mb-1">Avg Match Rate</p>
          <p className="text-3xl font-bold text-gray-900">
            {Math.round(students.reduce((acc, s) => acc + s.matchPercentage, 0) / students.length)}%
          </p>
        </div>
        <div className="card bg-gradient-to-br from-purple-50 to-purple-100">
          <div className="text-3xl mb-2">📝</div>
          <p className="text-sm text-gray-600 mb-1">Total Applications</p>
          <p className="text-3xl font-bold text-gray-900">
            {students.reduce((acc, s) => acc + s.applications, 0)}
          </p>
        </div>
      </div>

      {/* Student List */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Student Profiles</h2>
        <div className="space-y-4">
          {students.map((student) => (
            <div
              key={student.id}
              className="border border-gray-200 rounded-lg p-6 hover:border-primary-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                  <p className="text-gray-600">{student.email}</p>
                  <p className="text-sm text-gray-500 mt-1">{student.education}</p>
                </div>
                <div className="text-right">
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {student.matchPercentage}% Match
                  </div>
                  <p className="text-sm text-gray-600">{student.applications} applications</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {student.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => viewResume(student)}
                  className="btn-primary"
                >
                  View Resume
                </button>
                <button className="btn-secondary">View Applications</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Gap Visualization */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Skill Distribution</h2>
        <div className="space-y-4">
          {['JavaScript', 'React', 'Python', 'Java', 'Node.js'].map((skill, index) => (
            <div key={skill}>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{skill}</span>
                <span className="text-sm text-gray-600">{75 - index * 10}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full"
                  style={{ width: `${75 - index * 10}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Preview Modal */}
      {showResumeModal && selectedStudent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {selectedStudent.name}'s Resume
              </h3>
              <button
                onClick={() => setShowResumeModal(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Mock Resume Content */}
            <div className="border border-gray-200 rounded-lg p-8 bg-gray-50">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-900">{selectedStudent.name}</h2>
                <p className="text-gray-600">{selectedStudent.email}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
                  <p className="text-gray-700">{selectedStudent.education}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedStudent.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-primary-100 text-primary-700 px-3 py-2 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Experience</h3>
                  <p className="text-gray-700">
                    [Resume experience details would be displayed here]
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button onClick={() => setShowResumeModal(false)} className="btn-primary">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentInsights;

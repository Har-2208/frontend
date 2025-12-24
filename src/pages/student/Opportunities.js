import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  const mockOpportunities = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Corp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      skills: ['JavaScript', 'React', 'Node.js'],
      match: 95,
      deadline: '2024-02-15',
      description: 'Join our team to build amazing products',
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      type: 'Full-time',
      skills: ['React', 'TypeScript', 'CSS'],
      match: 88,
      deadline: '2024-02-20',
      description: 'Looking for passionate frontend developers',
    },
    {
      id: 3,
      title: 'Full Stack Developer',
      company: 'Innovation Labs',
      location: 'New York, NY',
      type: 'Contract',
      skills: ['Python', 'Django', 'React'],
      match: 82,
      deadline: '2024-02-25',
      description: 'Build scalable web applications',
    },
  ];

  const allSkills = ['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'CSS', 'Django'];

  const toggleSaveJob = (id) => {
    setSavedJobs(prev =>
      prev.includes(id) ? prev.filter(jobId => jobId !== id) : [...prev, id]
    );
  };

  const filteredOpportunities = mockOpportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkills = selectedSkills.length === 0 ||
                         selectedSkills.some(skill => opp.skills.includes(skill));
    return matchesSearch && matchesSkills;
  });

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Opportunities</h1>
        <div className="text-sm text-gray-600">{filteredOpportunities.length} opportunities found</div>
      </div>

      {/* Search and Filters */}
      <div className="card">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search by title or company..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Skills</label>
            <div className="flex flex-wrap gap-2">
              {allSkills.map(skill => (
                <button
                  key={skill}
                  onClick={() => {
                    setSelectedSkills(prev =>
                      prev.includes(skill)
                        ? prev.filter(s => s !== skill)
                        : [...prev, skill]
                    );
                  }}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    selectedSkills.includes(skill)
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Opportunity Cards */}
      <div className="grid gap-6">
        {filteredOpportunities.map((opp) => (
          <div key={opp.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{opp.title}</h3>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {opp.match}% Match
                  </span>
                </div>
                <p className="text-gray-600 font-medium">{opp.company}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                  <span>📍 {opp.location}</span>
                  <span>💼 {opp.type}</span>
                  <span>⏰ Deadline: {opp.deadline}</span>
                </div>
              </div>
              <button
                onClick={() => toggleSaveJob(opp.id)}
                className="text-2xl hover:scale-110 transition-transform"
              >
                {savedJobs.includes(opp.id) ? '❤️' : '🤍'}
              </button>
            </div>

            <p className="text-gray-700 mb-4">{opp.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {opp.skills.map(skill => (
                <span key={skill} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex space-x-3">
              <Link
                to={`/student/opportunities/${opp.id}`}
                className="btn-primary flex-1 text-center"
              >
                View Details
              </Link>
              <button className="btn-secondary">Apply Now</button>
            </div>
          </div>
        ))}
      </div>

      {filteredOpportunities.length === 0 && (
        <div className="card text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No opportunities found</h3>
          <p className="text-gray-600">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
};

export default Opportunities;

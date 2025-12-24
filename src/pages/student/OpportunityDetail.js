import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const OpportunityDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [saved, setSaved] = useState(false);

  const opportunity = {
    id: id,
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    skills: ['JavaScript', 'React', 'Node.js', 'PostgreSQL'],
    match: 95,
    deadline: '2024-02-15',
    description: `We are looking for a talented Software Engineer to join our growing team. 
    You will be responsible for developing and maintaining our core products.`,
    responsibilities: [
      'Design and develop scalable web applications',
      'Collaborate with cross-functional teams',
      'Write clean, maintainable code',
      'Participate in code reviews',
    ],
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      '3+ years of professional experience',
      'Strong knowledge of JavaScript and React',
      'Experience with Node.js and databases',
    ],
    benefits: [
      'Competitive salary',
      'Health insurance',
      'Remote work options',
      '401(k) matching',
    ],
  };

  const handleApply = () => {
    alert('Application submitted successfully!');
    navigate('/student/opportunities');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <button
        onClick={() => navigate('/student/opportunities')}
        className="text-primary-600 hover:text-primary-700 font-medium"
      >
        ← Back to Opportunities
      </button>

      <div className="card">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{opportunity.title}</h1>
            <p className="text-xl text-gray-700 font-medium mb-4">{opportunity.company}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <span>📍 {opportunity.location}</span>
              <span>💼 {opportunity.type}</span>
              <span>💰 {opportunity.salary}</span>
              <span>⏰ Deadline: {opportunity.deadline}</span>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-3">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium">
              {opportunity.match}% Match
            </span>
            <button
              onClick={() => setSaved(!saved)}
              className="text-3xl hover:scale-110 transition-transform"
            >
              {saved ? '❤️' : '🤍'}
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              {opportunity.skills.map(skill => (
                <span key={skill} className="bg-primary-100 text-primary-700 px-3 py-2 rounded-lg font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
            <p className="text-gray-700">{opportunity.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {opportunity.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Requirements</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {opportunity.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {opportunity.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6 flex space-x-4">
          <button onClick={handleApply} className="btn-primary flex-1">
            Apply for this Position
          </button>
          <button onClick={() => setSaved(!saved)} className="btn-secondary">
            {saved ? 'Unsave' : 'Save for Later'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OpportunityDetail;

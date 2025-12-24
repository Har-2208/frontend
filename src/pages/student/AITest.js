import React, { useState } from 'react';

const AITest = () => {
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [testCompleted, setTestCompleted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    'Tell me about yourself and your background.',
    'What are your strongest technical skills?',
    'Describe a challenging project you worked on.',
    'How do you handle working under pressure?',
    'Where do you see yourself in 5 years?',
  ];

  const startInterview = () => {
    setChatStarted(true);
    setMessages([
      {
        sender: 'ai',
        text: 'Hello! I\'m your AI interviewer. I\'ll ask you a series of questions. Take your time and answer thoughtfully. Let\'s begin!',
      },
      {
        sender: 'ai',
        text: questions[0],
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: 'user', text: input }];
    setMessages(newMessages);
    setInput('');

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        const nextQuestion = currentQuestion + 1;
        setCurrentQuestion(nextQuestion);
        setMessages(prev => [
          ...prev,
          { sender: 'ai', text: 'Great answer! Next question:' },
          { sender: 'ai', text: questions[nextQuestion] },
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          { sender: 'ai', text: 'Thank you for completing the interview! Analyzing your responses...' },
        ]);
        setTimeout(() => {
          setTestCompleted(true);
        }, 2000);
      }
    }, 1000);
  };

  if (testCompleted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="card text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Interview Completed!</h1>
          <p className="text-gray-600 mb-8">Here's your assessment summary</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-gray-700">Overall Score</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">A</div>
              <p className="text-gray-700">Communication</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">B+</div>
              <p className="text-gray-700">Technical Skills</p>
            </div>
          </div>

          <div className="text-left space-y-4 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">✅ Strengths</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Clear and articulate communication</li>
                <li>Strong technical knowledge</li>
                <li>Good problem-solving approach</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">💡 Areas for Improvement</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Provide more specific examples</li>
                <li>Elaborate on technical details</li>
                <li>Structure answers better</li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Start New Interview
          </button>
        </div>
      </div>
    );
  }

  if (!chatStarted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="card text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Mock Interview</h1>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Practice your interview skills with our AI interviewer. You'll be asked a series of 
            questions to help you prepare for real interviews. Answer thoughtfully and receive 
            instant feedback on your performance.
          </p>
          <div className="bg-blue-50 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="font-semibold text-gray-900 mb-3">What to expect:</h3>
            <ul className="text-left text-gray-700 space-y-2">
              <li>✓ {questions.length} interview questions</li>
              <li>✓ Real-time AI responses</li>
              <li>✓ Detailed performance analysis</li>
              <li>✓ Personalized improvement suggestions</li>
            </ul>
          </div>
          <button onClick={startInterview} className="btn-primary text-lg px-8 py-3">
            Start Interview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">AI Mock Interview</h1>
          <div className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6 h-96 overflow-y-auto space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs md:max-w-md rounded-lg p-4 ${
                  message.sender === 'user'
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-900 border border-gray-200'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your answer..."
            className="input-field flex-1"
          />
          <button type="submit" className="btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AITest;

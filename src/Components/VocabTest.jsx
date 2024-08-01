import React, { useState } from 'react';

const VocabTest = ({ onNext }) => {
  const [answers, setAnswers] = useState({
    multipleChoice1: '',
    fillInTheBlanks1: ''
  });

  const [error, setError] = useState('');

  const questions = [
    {
      question: "Choose the word that best fits the sentence: 'She was feeling very ___ after the long trip.'",
      options: ['tired', 'happy', 'angry'],
      name: 'multipleChoice1'
    },
    {
      question: 'The cat ___ under the table.',
      options: ['sleeps', 'sleep', 'sleeping'],
      name: 'fillInTheBlanks1'
    }
  ];

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
    setError(''); // Clear error message when user interacts with the form
  };

  const handleSubmit = () => {
    // Check if all answers are filled
    const allAnswered = questions.every(q => answers[q.name]);

    if (!allAnswered) {
      setError('Please answer all questions before proceeding.');
      return;
    }

    // Call the onNext function with the collected answers
    onNext({
      section: 'Vocabulary',
      questions: questions.map((q) => ({
        question: q.question,
        answer: answers[q.name],
        options: q.options
      }))
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-fontColor mb-4">Vocabulary</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className='text-fontColor'>{q.question}</p>
          <select 
            name={q.name} 
            onChange={handleChange} 
            className="border rounded py-2 px-4"
            value={answers[q.name]}
          >
            <option value="">Select</option>
            {q.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      ))}
      {error && <p className="text-red-500">{error}</p>}
      <button 
        onClick={handleSubmit} 
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default VocabTest;

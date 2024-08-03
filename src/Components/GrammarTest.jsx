import React, { useState, useEffect } from 'react';

const GrammarTest = ({ onNext }) => { 
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const [questions, setQuestions] = useState([]);

  const questionPool = {
    basic: [
      { question: 'Which sentence is grammatically correct?', options: ['He go to school every day.', 'He goes to school every day.', 'He going to school every day.'], name: 'multipleChoice1' },
      { question: "Identify the error in the sentence: 'She don’t like apples.'", options: ['don’t', 'like', 'apples'], name: 'sentenceCorrection1' },
    ],
    intermediate: [
      { question: 'They ___ (be) very excited about the trip.', options: ['is', 'are', 'am'], name: 'fillInTheBlanks1' },
      { question: 'Which word completes the sentence correctly? The cat ____ on the mat.', options: ['sit', 'sits', 'sitting'], name: 'fillInTheBlanks2' },
    ],
    advanced: [
      { question: 'Select the sentence with the correct verb form.', options: ['He has went to the store.', 'He has gone to the store.', 'He have gone to the store.'], name: 'multipleChoice2' },
      { question: "Which word fits the sentence: She has _____ the book.", options: ['read', 'reads', 'reading'], name: 'fillInTheBlanks3' },
    ],
  };

  const getRandomQuestions = (pool, numQuestions) => {
    const selectedQuestions = [];
    const categories = Object.keys(pool);
    categories.forEach(category => {
      const questions = [...pool[category]];
      for (let i = 0; i < numQuestions; i++) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        selectedQuestions.push(questions[randomIndex]);
        questions.splice(randomIndex, 1);
      }
    });
    return selectedQuestions;
  };

  useEffect(() => {
    const initialQuestions = getRandomQuestions(questionPool, 2); // Get 2 questions from each level
    setQuestions(initialQuestions);
  }, []);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
    setError(''); 
  };

  const handleSubmit = () => {
    const allAnswered = questions.every(q => answers[q.name]);
    
    if (!allAnswered) {
      setError('Please answer all questions before proceeding.');
      return;
    }

    onNext({
      section: 'Grammar',
      questions: questions.map((q) => ({
        question: q.question,
        answer: answers[q.name],
        options: q.options
      }))
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">Grammar</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-6">
          <p className='text-lg text-gray-700 mb-2'>{q.question}</p>
          <select 
            name={q.name} 
            onChange={handleChange} 
            className="w-full sm:w-1/2 border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={answers[q.name] || ''}
          >
            <option value="" disabled>Select an option</option>
            {q.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      ))}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button 
        onClick={handleSubmit} 
        className="w-1/2 sm:w-1/5 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default GrammarTest;

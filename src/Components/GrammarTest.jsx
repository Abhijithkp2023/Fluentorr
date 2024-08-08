import React, { useState, useEffect } from 'react';

const GrammarTest = ({ onNext }) => { 
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const [questions, setQuestions] = useState([]);

  const questionPool = {
    basic: [
      { 
        question: 'Which sentence is grammatically correct?', 
        options: ['He go to school every day.', 'He goes to school every day.', 'He going to school every day.'], 
        name: 'multipleChoice1',
        correctAnswer: 'He goes to school every day.',
        slightlyCorrectAnswer: null
      },
      { 
        question: "Identify the error in the sentence: 'She don’t like apples.'", 
        options: ['don’t', 'like', 'apples'], 
        name: 'sentenceCorrection1',
        correctAnswer: 'don’t',
        slightlyCorrectAnswer: null
      },
    ],
    intermediate: [
      { 
        question: 'They ___ (be) very excited about the trip.', 
        options: ['is', 'are', 'am'], 
        name: 'fillInTheBlanks1',
        correctAnswer: 'are',
        slightlyCorrectAnswer: null
      },
      { 
        question: 'Which word completes the sentence correctly? The cat ____ on the mat.', 
        options: ['sit', 'sits', 'sitting'], 
        name: 'fillInTheBlanks2',
        correctAnswer: 'sits',
        slightlyCorrectAnswer: null
      },
    ],
    advanced: [
      { 
        question: 'Select the sentence with the correct verb form.', 
        options: ['He has went to the store.', 'He has gone to the store.', 'He have gone to the store.'], 
        name: 'multipleChoice2',
        correctAnswer: 'He has gone to the store.',
        slightlyCorrectAnswer: null
      },
      { 
        question: "Which word fits the sentence: She has _____ the book.", 
        options: ['read', 'reads', 'reading'], 
        name: 'fillInTheBlanks3',
        correctAnswer: 'read',
        slightlyCorrectAnswer: null
      },
    ],
  };

  const comments = {
    low: [
      "Keep practicing! You'll get there.",
      "Don't give up, keep learning and improving!",
      "Consider reviewing basic grammar concepts."
    ],
    medium: [
      "Good job, but there's room for improvement.",
      "You're on the right track!",
      "Keep up the good work and aim higher!"
    ],
    high: [
      "Excellent work!",
      "You have a strong grasp of grammar!",
      "Great job, keep it up!"
    ]
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
    window.scrollTo(0, 0);
    const initialQuestions = getRandomQuestions(questionPool, 2); // Get 2 questions from each level
    setQuestions(initialQuestions);
  }, []);

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
    setError(''); // Clear error message when user interacts with the form
  };

  const handleSubmit = () => {
    const allAnswered = questions.every(q => answers[q.name]);

    if (!allAnswered) {
      setError('Please answer all questions before proceeding.');
      return;
    }

    let totalScore = 0;
    const questionResults = questions.map((q) => {
      const userAnswer = answers[q.name];
      let score = 0;

      if (userAnswer === q.correctAnswer) {
        score = 16;
      } else if (userAnswer === q.slightlyCorrectAnswer) {
        score = 13;
      }

      totalScore += score;

      return {
        question: q.question,
        answer: userAnswer,
        options: q.options,
        correctAnswer: q.correctAnswer,
        slightlyCorrectAnswer: q.slightlyCorrectAnswer,
        score: score
      };
    });

    let comment = '';
    if (totalScore < 40) {
      comment = comments.low[Math.floor(Math.random() * comments.low.length)];
    } else if (totalScore < 80) {
      comment = comments.medium[Math.floor(Math.random() * comments.medium.length)];
    } else {
      comment = comments.high[Math.floor(Math.random() * comments.high.length)];
    }

    onNext({
      section: 'Grammar',
      questions: questionResults,
      score: totalScore,
      comment: comment
    });
  };

  return (
    <div className="bg-white md:p-6 p-1 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gradient-blue mb-6">Grammar</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-6 p-4 border border-gray-300 rounded-lg bg-gray-50">
          <p className='text-lg text-fontColor mb-2'>{q.question}</p>
          <select 
            name={q.name} 
            onChange={handleChange} 
            className="w-full sm:w-1/2 border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

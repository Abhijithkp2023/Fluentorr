import React, { useState, useEffect } from 'react';
import { FcNext } from "react-icons/fc";

const VocabTest = ({ onNext }) => {
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const [questions, setQuestions] = useState([]);

  const questionPool = {
    basic: [
      { 
        question: "Which word is the synonym of 'happy'?", 
        options: ['Sad', 'Joyful', 'Angry', 'Bored'], 
        name: 'multipleChoice1',
        correctAnswer: 'Joyful',
        slightlyCorrectAnswer: null
      },
      { 
        question: "What is the antonym of 'difficult'?", 
        options: ['Hard', 'Simple', 'Complex', 'Challenging'], 
        name: 'multipleChoice2',
        correctAnswer: 'Simple',
        slightlyCorrectAnswer: null
      },
    ],
    intermediate: [
      { 
        question: "Choose the correct word to complete the sentence: She was feeling very ______ after the long day.", 
        options: ['exhausted', 'complex', 'heavy', 'manage'], 
        name: 'multipleChoice3',
        correctAnswer: 'exhausted',
        slightlyCorrectAnswer: null
      },
      { 
        question: "Which word fits the definition: 'an intense feeling of fear or apprehension'?", 
        options: ['Joy', 'Anger', 'happy', 'cry'], 
        name: 'multipleChoice4',
        correctAnswer: 'anger',
        slightlyCorrectAnswer: "Anger"
      },
    ],
    advanced: [
      { 
        question: "Identify the correct form of the word 'run' to fit in the sentence: He has been ______ every morning.", 
        options: ['running', 'ran', 'runs', 'run'], 
        name: 'multipleChoice5',
        correctAnswer: 'running',
        slightlyCorrectAnswer: null
      },
      { 
        question: "Which sentence uses the word 'bark' correctly?", 
        options: ['The tree had a rough bark.', 'The dog started to bark loudly.', 'Both A and B are correct.', 'None of the above'], 
        name: 'multipleChoice6',
        correctAnswer: 'Both A and B are correct.',
        slightlyCorrectAnswer: null
      },
    ],
  };

  const comments = {
    low: [
      "Keep practicing! You'll get there.",
      "Don't give up, keep learning and improving!",
      "Consider reviewing basic vocabulary concepts."
    ],
    medium: [
      "Good job, but there's room for improvement.",
      "You're on the right track!",
      "Keep up the good work and aim higher!"
    ],
    high: [
      "Excellent work!",
      "You have a strong vocabulary!",
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
    const initialQuestions = getRandomQuestions(questionPool, 2); // Get 2 questions from each level
    setQuestions(initialQuestions);
  }, []);

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
      section: 'Vocabulary',
      questions: questionResults,
      score: totalScore,
      comment: comment
    });
  };

  return (
    <div className="bg-white md:p-6 p-1 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-gradient-blue mb-6">Vocabulary</h2>
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

export default VocabTest;

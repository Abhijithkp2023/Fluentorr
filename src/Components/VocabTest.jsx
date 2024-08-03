import React, { useState, useEffect } from 'react';

const VocabTest = ({ onNext }) => {
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState('');
  const [questions, setQuestions] = useState([]);

  const questionPool = {
    basic: [
      { question: "Which word is the synonym of 'happy'?", options: ['Sad', 'Joyful', 'Angry', 'Bored'], name: 'multipleChoice1' },
      { question: "What is the antonym of 'difficult'?", options: ['Hard', 'Simple', 'Complex', 'Challenging'], name: 'multipleChoice2' },
    ],
    intermediate: [
      { question: "Choose the correct word to complete the sentence: She was feeling very ______ after the long day.", options: ['exhausted', 'energetic', 'bored', 'excited'], name: 'multipleChoice3' },
      { question: "Which word fits the definition: 'an intense feeling of fear or apprehension'?", options: ['Joy', 'Anger', 'Terror', 'Confusion'], name: 'multipleChoice4' },
    ],
    advanced: [
      { question: "Identify the correct form of the word 'run' to fit in the sentence: He has been ______ every morning.", options: ['running', 'ran', 'runs', 'run'], name: 'multipleChoice5' },
      { question: "Which sentence uses the word 'bark' correctly?", options: ['The tree had a rough bark.', 'The dog started to bark loudly.', 'Both A and B are correct.', 'None of the above'], name: 'multipleChoice6' },
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
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">Vocabulary</h2>
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

export default VocabTest;

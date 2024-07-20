import React, { useState } from 'react'

const GrammarTest = ({onNext}) => {

  const questions = [
    {
      question: 'Which sentence is grammatically correct?',
      options: ['He go to school every day.', 'He goes to school every day.', 'He going to school every day.'],
      name: 'multipleChoice1'
    },
    {
      question: "Identify the error in the sentence: 'She don’t like apples.'",
      options: ['don’t', 'like', 'apples'],
      name: 'sentenceCorrection1'
    },
    {
      question: 'They ___ (be) very excited about the trip.',
      options: ['is', 'are', 'am'],
      name: 'fillInTheBlanks1'
    }
  ];

  const [answers, setAnswers] = useState({
    multipleChoice1: '',
    sentenceCorrection1: '',
    fillInTheBlanks1: ''
  });

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onNext({
      section: 'Grammar',
      questions: questions.map((q, i) => ({
        question: q.question,
        answer: answers[q.name],
        options: q.options
      }))
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Grammar</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p>{q.question}</p>
          <select name={q.name} onChange={handleChange} className="border rounded py-2 px-4">
            <option value="">Select</option>
            {q.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Next
      </button>
    </div>
  )
}

export default GrammarTest

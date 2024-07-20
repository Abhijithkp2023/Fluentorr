import React, { useState } from 'react'
import FluencyTest from"../Components/FluencyTest"
import VocabTest from"../Components/VocabTest"
import GrammarTest from"../Components/GrammarTest"

const EptTestPage = ({completeTest}) => {

  const [section, setSection] = useState(1);
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleNext = (data) => {
    setResponses((prevResponses) => [...prevResponses, data]);
    setSection(section + 1);
  };

  console.log(responses)

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/submit', responses);
      setFeedback(response.data);
    } catch (error) {
      console.error('Error submitting responses:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="container mx-auto p-4">
      {section === 1 && <FluencyTest onNext={handleNext} />}
      {section === 2 && <VocabTest onNext={handleNext} />}
      {section === 3 && <GrammarTest onNext={handleNext} />}
      {section === 4 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Thank you for completing the test!</h2>
          <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
          {loading && <p>Loading...</p>}
          {feedback && (
            <div>
              <h3>Feedback</h3>
              <p>Pronunciation: {feedback.pronunciation.score}% - {feedback.pronunciation.comment}</p>
              <p>Vocabulary: {feedback.vocabulary.score}% - {feedback.vocabulary.comment}</p>
              <p>Grammar: {feedback.grammar.score}% - {feedback.grammar.comment}</p>
              <p>Fluency: {feedback.fluency.score}% - {feedback.fluency.comment}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default EptTestPage

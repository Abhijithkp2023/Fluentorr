// src/Pages/EptTestPage.jsx
import React, { useState, useEffect } from 'react';
import FluencyTest from '../Components/FluencyTest';
import VocabTest from '../Components/VocabTest';
import GrammarTest from '../Components/GrammarTest';
import GaugeChart from '../Components/GaugeChart';
import Feedback from '../Components/Feedback';

const EptTestPage = ({ completeTest }) => {
  const [section, setSection] = useState(1);
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({});
  const [fluencyFeedback, setFluencyFeedback] = useState({});

  const handleNext = (data) => {
    setResponses((prevResponses) => [...prevResponses, data]);
    setSection(section + 1);
  };

  console.log(responses)
  const moveToNextSection = () => {
    setSection(section + 1);
  };

  const calculateAverageScore = () => {
    const { pronunciation, fluency } = fluencyFeedback;
    const { vocabulary, grammar } = feedback;
    
    const scores = [
      pronunciation?.score,
      fluency?.score,
      vocabulary?.score,
      grammar?.score,
    ].filter(score => score !== undefined);

    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
  };

  const averageScore = calculateAverageScore();

  useEffect(() => {
    if (section === 4) {
      setLoading(false);  // Ensure loading is set to false when reaching the final section
    }
  }, [section]);

  return (
    <div className="container mx-auto p-4">
      {section === 3 && <VocabTest onNext={handleNext} />}
      {section === 2 && <GrammarTest onNext={handleNext} />}
      {section === 1 && (
        <FluencyTest
          onNext={handleNext}
          setFluencyFeedback={setFluencyFeedback}
          setFeedback={setFeedback}
          responses={responses}
          moveToNextSection={moveToNextSection}
        />
      )}
      {section === 4 && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Thank you for completing the test!</h2>
          {loading && <p>Loading...</p>}
          <GaugeChart score={averageScore} />
          <Feedback
            title="Pronunciation"
            score={fluencyFeedback?.pronunciation?.score}
            comment={fluencyFeedback?.pronunciation?.comment}
          />
          <Feedback
            title="Fluency"
            score={fluencyFeedback?.fluency?.score}
            comment={fluencyFeedback?.fluency?.comment}
          />
          <Feedback
            title="Vocabulary"
            score={feedback?.vocabulary?.score}
            comment={feedback?.vocabulary?.comment}
          />
          <Feedback
            title="Grammar"
            score={feedback?.grammar?.score}
            comment={feedback?.grammar?.comment}
          />
        </div>
      )}
    </div>
  );
};

export default EptTestPage;

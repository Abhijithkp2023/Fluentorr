import React, { useState, useRef, useEffect } from 'react';
import { ReactMic } from 'react-mic';
import axios from 'axios';

const paragraphs = [
  "The quick brown fox jumps over the lazy dog.",
  "She sells seashells by the seashore.",
  "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
  "A big black bug bit a big black bear.",
];

const pictures = [
  "picture_description1.jpg",
  "picture_description2.jpg",
  "picture_description3.jpg",
  "picture_description4.jpg",
];

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const FluencyTest = ({ setFluencyFeedback, setFeedback, responses, moveToNextSection }) => {
  const [recording, setRecording] = useState(false);
  const [currentRecordingType, setCurrentRecordingType] = useState('');
  const [audioURL, setAudioURL] = useState('');
  const [descriptionAudioURL, setDescriptionAudioURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);

  const recordingTypeRef = useRef('');
  const intervalRef = useRef(null);

  const [randomParagraph, setRandomParagraph] = useState(getRandomElement(paragraphs));
  const [randomPicture, setRandomPicture] = useState(getRandomElement(pictures));

  const startRecording = (type) => {
    recordingTypeRef.current = type;
    setRecording(true);
    intervalRef.current = setInterval(() => {
      setRecordingDuration((prev) => prev + 1);
    }, 1000);
  };

  const stopRecording = () => {
    setRecording(false);
    clearInterval(intervalRef.current);
  };

  const onStop = async (recordedBlob) => {
    const audioBlob = recordedBlob.blob;
    const audioURL = URL.createObjectURL(audioBlob);
    const type = recordingTypeRef.current;
    
    setRecordingDuration(0);

    if (type === 'description') {
      setDescriptionAudioURL(audioURL);
    } else {
      setAudioURL(audioURL);
    }
    sendAudio(audioBlob, type);
  };

  const sendAudio = async (audioBlob, type) => {
    const formData = new FormData();
    formData.append('file', audioBlob, 'recording.wav');
    formData.append('type', type);

    try {
      const response = await fetch('http://localhost:3001/api/analyze', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log('Analysis result:', result);

      // Assuming the result contains type field
      setFluencyFeedback((prevFeedback) => ({
        ...prevFeedback,
        pronunciation: result.pronunciation,
        fluency: result.fluency,
      }));
    } catch (error) {
      console.error('Error sending audio to backend', error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      // Send responses data to /submit and wait for response
      const submitResponse = await axios.post('http://localhost:3001/api/submit', responses);
      setFeedback(submitResponse.data);
      moveToNextSection();
    } catch (error) {
      console.error('Error submitting responses:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setRandomParagraph(getRandomElement(paragraphs));
    setRandomPicture(getRandomElement(pictures));
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">Fluency and Pronunciation</h2>
      <div className="mb-8">
        <p className="text-lg text-gray-700 mb-2">Read the following passage aloud:</p>
        <p className="text-xl text-gray-800 font-semibold mb-4">"{randomParagraph}"</p>
        <button
          onClick={recording ? stopRecording : () => startRecording('reading')}
          className={`w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ${
            recording && recordingTypeRef.current === 'reading' ? 'bg-red-500' : 'bg-blue-500'
          }`}
        >
          {recording && recordingTypeRef.current === 'reading' ? 'Stop Recording' : 'Start Recording'}
        </button>
        <ReactMic
          record={recording && recordingTypeRef.current === 'reading'}
          className="sound-wave mt-4"
          onStop={onStop}
          mimeType="audio/wav"
        />
        {audioURL && (
          <div className="mt-4">
            <audio controls src={audioURL} className="w-full"></audio>
            <p className="text-gray-700 mt-2">Duration: {recordingDuration} seconds</p>
          </div>
        )}
      </div>
      <div className="mb-8">
        <p className="text-lg text-gray-700 mb-2">Describe the following picture:</p>
        <img src={randomPicture} className="p-5 w-96 h-72 mx-auto mb-4 border border-gray-300 rounded-lg shadow-md" alt="description" />
        <button
          onClick={recording ? stopRecording : () => startRecording('description')}
          className={`w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ${
            recording && recordingTypeRef.current === 'description' ? 'bg-red-500' : 'bg-blue-500'
          }`}
        >
          {recording && recordingTypeRef.current === 'description' ? 'Stop Recording' : 'Start Recording'}
        </button>
        <ReactMic
          record={recording && recordingTypeRef.current === 'description'}
          className="sound-wave mt-4"
          onStop={onStop}
          mimeType="audio/wav"
        />
        {descriptionAudioURL && (
          <div className="mt-4">
            <audio controls src={descriptionAudioURL} className="w-full"></audio>
            <p className="text-gray-700 mt-2">Duration: {recordingDuration} seconds</p>
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        Submit
      </button>
      {loading && <p className="text-gray-700 mt-4">Loading...</p>}
    </div>
  );
};

export default FluencyTest;

import React, { useState } from 'react';
import { ReactMic } from 'react-mic';
import axios from 'axios';

const FluencyTest = ({ setFluencyFeedback, setFeedback, responses,moveToNextSection }) => {
  const [recording, setRecording] = useState(false);
  const [currentRecordingType, setCurrentRecordingType] = useState('');
  const [audioURL, setAudioURL] = useState('');
  const [descriptionAudioURL, setDescriptionAudioURL] = useState('');
  const [loading, setLoading] = useState(false);

  const startRecording = (type) => {
    setCurrentRecordingType(type);
    setRecording(true);
  };

  const stopRecording = () => {
    setRecording(false);
  };

  const onStop = async (recordedBlob) => {
    const audioBlob = recordedBlob.blob;
    const audioURL = URL.createObjectURL(audioBlob);
    if (currentRecordingType === 'reading') {
      setAudioURL(audioURL);
    } else {
      setDescriptionAudioURL(audioURL);
    }
    sendAudio(audioBlob, currentRecordingType);
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
                fluency: result.fluency
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
      moveToNextSection()
    } catch (error) {
      console.error('Error submitting responses:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Fluency and Pronunciation</h2>
      <div className="mb-4">
        <p>Read the following passage aloud:</p>
        <p>"The quick brown fox jumps over the lazy dog."</p>
        <button 
          onClick={recording ? stopRecording : () => startRecording('reading')} 
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${recording && currentRecordingType === 'reading' ? 'bg-red-500' : 'bg-blue-500'}`}
        >
          {recording && currentRecordingType === 'reading' ? 'Stop Recording' : 'Start Recording'}
        </button>
        <ReactMic
          record={recording && currentRecordingType === 'reading'}
          className="sound-wave"
          onStop={onStop}
          mimeType="audio/wav"
        />
        {audioURL && <audio controls src={audioURL}></audio>}
      </div>
      <div className="mb-4">
        <p>Describe the following picture:</p>
        <img src="onlineclass.jpg" className='p-5 w-96 h-72' alt="description" />
        <button 
          onClick={recording ? stopRecording : () => startRecording('description')} 
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${recording && currentRecordingType === 'description' ? 'bg-red-500' : 'bg-blue-500'}`}
        >
          {recording && currentRecordingType === 'description' ? 'Stop Recording' : 'Start Recording'}
        </button>
        <ReactMic
          record={recording && currentRecordingType === 'description'}
          className="sound-wave"
          onStop={onStop}
          mimeType="audio/wav"
        />
        {descriptionAudioURL && <audio controls src={descriptionAudioURL}></audio>}
      </div>
      <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default FluencyTest;

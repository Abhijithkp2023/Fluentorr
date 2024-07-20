import React, { useState, useRef } from 'react';
import axios from 'axios';

const FluencyTest = ({ onNext }) => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [descriptionAudioURL, setDescriptionAudioURL] = useState('');
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorderRef.current = new MediaRecorder(stream);
        mediaRecorderRef.current.ondataavailable = (event) => {
          chunks.current.push(event.data);
        };
        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(chunks.current, { type: 'audio/wav' });
          chunks.current = [];
          const audioURL = URL.createObjectURL(blob);
          setAudioURL(audioURL);
          sendAudio(blob, 'reading');
        };
        mediaRecorderRef.current.start();
        setRecording(true);
      })
      .catch((err) => console.error('Error accessing microphone', err));
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const sendAudio = async (audioBlob, type) => {
    const formData = new FormData();
    formData.append('file', audioBlob, 'recording.wav');
    formData.append('type', type);
    try {
      const response = await axios.post('http://localhost:3001/analyze', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('Analysis result:', response.data);
    } catch (error) {
      console.error('Error sending audio to backend', error);
    }
  };

  const handleNext = () => {
    onNext({
      section: 'Fluency and Pronunciation',
      questions: [
        { question: 'Read the following passage aloud: "The quick brown fox jumps over the lazy dog."', response: audioURL },
        { question: 'Describe the following picture:', response: descriptionAudioURL }
      ]
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Fluency and Pronunciation</h2>
      <div className="mb-4">
        <p>Read the following passage aloud:</p>
        <p>"The quick brown fox jumps over the lazy dog."</p>
        <button 
          onClick={recording ? stopRecording : startRecording} 
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${recording ? 'bg-red-500' : 'bg-blue-500'}`}
        >
          {recording ? 'Stop Recording' : 'Start Recording'}
        </button>
        {audioURL && <audio controls src={audioURL}></audio>}
      </div>
      <div className="mb-4">
        <p>Describe the following picture:</p>
        <img src="onlineclass.jpg" className='p-5 w-96 h-72' alt="description" />
        <button 
          onClick={recording ? stopRecording : startRecording} 
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${recording ? 'bg-red-500' : 'bg-blue-500'}`}
        >
          {recording ? 'Stop Recording' : 'Start Recording'}
        </button>
        {descriptionAudioURL && <audio controls src={descriptionAudioURL}></audio>}
      </div>
      <button onClick={handleNext} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Next
      </button>
    </div>
  );
};

export default FluencyTest;

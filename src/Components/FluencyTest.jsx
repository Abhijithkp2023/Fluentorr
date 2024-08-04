import React, { useState, useRef, useEffect } from "react";
import { ReactMic } from "react-mic";
import axios from "axios";

const paragraphs = [
  "Project Moo is based on the true story of how one girl from Indonesia used her love of animals to help hundreds of farmers - and cows - in her community. This story demonstrates how with supportive adult allies and a dream, any young person can positively impact their community.",
  "To Clean a Creek is inspired by the true story of a young boy in Brazil who was saddened by the trash in and around the river near his home. Determined to take action, he inspired the people in his community to work together to clean up the river and restore the natural beauty of the area.She sells seashells by the seashore.",
  "Rebecca, The Maasai Changemaker is inspired by the true story of a young girl in Kenya who was alarmed by the signs of climate change in her community. She educated herself about the problem, then galvanized her community and the government to take action and protect the environment. ",
  "Imagine if every reader was a changemaker. The Ashoka Worldreader Changemaker Collection is a series of children's books that illustrate the transformational journey of a young person leading change from Indonesia to Brazil. ",
];

const pictures = [
  "picture_description1.jpg",
  "picture_description2.jpg",
  "picture_description3.jpg",
  "picture_description4.jpg",
];

const getRandomElement = (array) =>
  array[Math.floor(Math.random() * array.length)];

const FluencyTest = ({
  setFluencyFeedback,
  setFeedback,
  responses,
  moveToNextSection,
}) => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState("");
  const [descriptionAudioURL, setDescriptionAudioURL] = useState("");
  const [loading, setLoading] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);

  const [readingCompleted, setReadingCompleted] = useState(false);
  const [descriptionCompleted, setDescriptionCompleted] = useState(false);

  const recordingTypeRef = useRef("");
  const intervalRef = useRef(null);

  const [randomParagraph, setRandomParagraph] = useState(
    getRandomElement(paragraphs)
  );
  const [randomPicture, setRandomPicture] = useState(
    getRandomElement(pictures)
  );

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

    if (type === "description") {
      setDescriptionAudioURL(audioURL);
      setDescriptionCompleted(true);
    } else {
      setAudioURL(audioURL);
      setReadingCompleted(true);
    }
    sendAudio(audioBlob, type);
  };

  const sendAudio = async (audioBlob, type) => {
    const formData = new FormData();
    formData.append("file", audioBlob, "recording.wav");
    formData.append("type", type);

    try {
      const response = await fetch("http://localhost:3001/api/analyze", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Analysis result:", result);

      setFluencyFeedback((prevFeedback) => ({
        ...prevFeedback,
        pronunciation: result.pronunciation,
        fluency: result.fluency,
      }));
    } catch (error) {
      console.error("Error sending audio to backend", error);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const submitResponse = await axios.post(
        "http://localhost:3001/api/submit",
        responses
      );
      setFeedback(submitResponse.data);
      moveToNextSection();
    } catch (error) {
      console.error("Error submitting responses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setRandomParagraph(getRandomElement(paragraphs));
    setRandomPicture(getRandomElement(pictures));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white md:p-6 p-1 rounded-lg shadow-md max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">
        Fluency and Pronunciation
      </h2>
      <div className="mb-8 p-4 border border-blue-100 rounded-lg bg-gray-50">
        <p className="text-lg text-fontColor mb-2">
          Read the following passage aloud:
        </p>
        <p className="text-xl text-fontColor font-semibold mb-4">
          "{randomParagraph}"
        </p>
        <button
          onClick={recording ? stopRecording : () => startRecording("reading")}
          className={`w-full md:w-auto  text-white font-bold py-2 px-4 rounded transition duration-300 ${
            recording 
            ? "bg-red-500"
            : "bg-indigo-500"
          }`}
        >
          {recording && recordingTypeRef.current === "reading"
            ? "Stop Recording"
            : "Start Recording"}
        </button>
        <ReactMic
          record={recording && recordingTypeRef.current === "reading"}
          className="sound-wave mt-4"
          onStop={onStop}
          mimeType="audio/wav"
        />
        {audioURL && (
          <div className="mt-4">
            <audio controls src={audioURL} className="w-full"></audio>
            <p className="text-gray-700 mt-2">
              Duration: {recordingDuration} seconds
            </p>
          </div>
        )}
      </div>

      <div className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <p className="text-lg text-fontColor mb-2">
          Describe the following picture:
        </p>
        <img
          src={randomPicture}
          className="p-5 md:w-96 md:h-72 w-72 h-52 mx-auto mb-4 border border-gray-300 rounded-lg shadow-md"
          alt="description"
        />
        <button
          onClick={
            recording ? stopRecording : () => startRecording("description")
          }
          className={`w-full md:w-auto bg-indigo-500  text-white font-bold py-2 px-4 rounded transition duration-300 ${
            recording 
              ? "bg-red-500"
              : "bg-indigo-500"
          }`}
        >
          {recording && recordingTypeRef.current === "description"
            ? "Stop Recording"
            : "Start Recording"}
        </button>
        <ReactMic
          record={recording && recordingTypeRef.current === "description"}
          className="sound-wave mt-4"
          onStop={onStop}
          mimeType="audio/wav"
        />
        {descriptionAudioURL && (
          <div className="mt-4">
            <audio
              controls
              src={descriptionAudioURL}
              className="w-full"
            ></audio>
          </div>
        )}
      </div>
      <button
        onClick={handleSubmit}
        disabled={!readingCompleted || !descriptionCompleted}
        className={`w-1/2 sm:w-1/5 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ${
          !readingCompleted || !descriptionCompleted
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-indigo-500 hover:bg-indigo-700"
        }`}
      >
        Submit
      </button>
      {loading && <p className="text-gray-700 mt-4">Loading...</p>}
    </div>
  );
};

export default FluencyTest;

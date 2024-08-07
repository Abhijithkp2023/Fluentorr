import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAMRFgKdZOdKg6r9ueo93okIh1gGGmxySk");

const generationConfig = {
  stopSequences: ["red"],
  maxOutputTokens: 200,
  temperature: 0.9,
  topP: 0.1,
  topK: 16,
};

const handleTranscribe = async (req, res) => {
  const audioContent = req.file.buffer.toString('base64');

  try {
    const [response] = await client.recognize({
      config: {
        encoding: 'LINEAR16',
        sampleRateHertz: 16000,
        languageCode: 'en-US',
        enableWordTimeOffsets: true,
      },
      audio: { content: audioContent },
    });

    const words = response.results.flatMap(result => result.alternatives[0].words);
    res.json({ words });
  } catch (error) {
    console.error('Error transcribing audio:', error);
    res.status(500).json({ error: 'Failed to transcribe audio' });
  }
};

 const handleAnalyze = async (req, res) => {
  
  const type = req.body.type;
  const file = req.file;
    
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
try {
  const audioData = file.buffer.toString('base64');
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Analyze the following audio file in .wav format:data:audio/wav;base64,${audioData}`;

   const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Parse the text to get the analysis result
    

    // Respond with the analysis result
    res.json(text);

} catch (error) {
  console.error("Error generating content with Google Generative AI", error);
    res.status(500).json({ error: "Internal Server Error" });
}
  
  };
  
 const handleSubmit = async (req, res) => {
  const { responses } = req.body;
  try {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Use responses as part of the prompt for analysis
    const prompt = `Analyze the following response data for vocabulary and grammar session with 6 questions each: ${JSON.stringify(responses)}, on 0'th position is vocabulary sesction and it contain 6 question, in each question there is an qestion that asked, answer that choosen and the given options , in 1'st'th position is grammar section and it contain 6 question, in each question there is an qestion that asked, answer that choosen and the given options and give 20 score for each correct answer and if the answer is wrong give 0. Provide the assessment in the following array format:
    [vocabulary:1-100 , grammar:1-100]

  score of each section(vocabulary and grammar)out of 100,the comment should be short,do not include any additional text, explanations, or formatting. Just return the JSON object. Begin the evaluation now. `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    // Parse the text to get the analysis result
    

    // Respond with the analysis result
    res.json(text);
  } catch (error) {
    console.error("Error generating content with Google Generative AI", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
  
  export {handleAnalyze, handleSubmit, handleTranscribe} 



  
// backend/controllers.js

 const handleAnalyze = (req, res) => {
  
  const type = req.body.type;
  const file = req.file;
    
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

  console.log('File:', file);
  console.log('Type:', type);

    // Process the data (dummy implementation)
    const fluencyFeedback = {
      pronunciation: { score: 90, comment: 'Good pronunciation' },
      fluency: { score: 85, comment: 'Fluent reading' },
    };
  
    res.json(fluencyFeedback);
  };
  
 const handleSubmit = (req, res) => {
    const { responses } = req.body;
    console.log(responses)
    // Process the data (dummy implementation)
    const feedback = {
      vocabulary: { score: 80, comment: 'Good vocabulary' },
      grammar: { score: 75, comment: 'Decent grammar' },
    };
  
    res.json(feedback);
  };
  
  export {handleAnalyze,handleSubmit} 
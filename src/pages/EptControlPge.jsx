import React, { useState } from 'react'
import EptTestPage from './EptTestPage';
import UnserInfoForm from '../Components/UnserInfoForm';
import EptResultPage from './EptResultPage';
import StartEptTestPage from '../Components/StartEptTestPage';

const EptControlPge = () => {

  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);
  const [results, setResults] = useState(null);


  return (
    <div className='Test-Control-page'>
      {!testStarted && !testCompleted && <StartEptTestPage startTest={() => setTestStarted(true)} />}
      {testStarted && !testCompleted && (
        <EptTestPage 
          completeTest={(data) => {
            setTestCompleted(true);
            setResults(data);
          }} 
        />
      )}
      {testCompleted && results && <EptResultPage results={results} />}
      {testCompleted && !results && <UnserInfoForm />}
    </div>
  )
}

export default EptControlPge;

import React from 'react'

const StartEptTestPage = ({startTest}) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Fluentorr's EPT</h1>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={startTest}
      >
        Start EPT Test
      </button>
    </div>
  )
}

export default StartEptTestPage

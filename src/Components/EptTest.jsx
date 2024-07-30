import React from 'react';
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';

const EptTest = () => {
  return (
    <section className="relative bg-white flex flex-col md:flex-row justify-center items-center md:mt-28 md:mb-20 md:mx-5 mx-2 py-12 border-2 border-blue-100 md:three-d-container">
      <div className="container mx-auto md:pl-5 p-2 text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
          Test your English proficiency with our free <span className='text-gradient-blue'>AI level test!</span> 
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Assess your current English with AI powered English Proficiency test. Get instant results on your <span className='font-semibold text-black'>pronunciation, grammar, fluency</span> and <span className='font-semibold text-black'>vocabulary.</span>
        </p>
        <button className='bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md '><a
          href="/test"
          className=" text-white font-semibold transition duration-300"
        >
          Go To Test
        </a>
        </button>
      </div>
      <div className="w-[30%] h-full">
        <img src="AI.jpg" className="h-full w-full md:p-10" loading='lazy' alt="ept test image" />
      </div>
    </section>
  );
};

export default EptTest;

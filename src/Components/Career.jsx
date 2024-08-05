import React, { useState } from 'react';
import ApplicationForm from './AplicationForm';

const jobOpenings = [
  {
    title: 'English Language Trainer',
    location: 'Kerala, India',
    description: 'We are looking for passionate English Language Trainers to join our team. The ideal candidate should have excellent communication skills and a deep understanding of the English language.',
    requirements: [
      'Bachelor’s degree in English or related field',
      'Minimum of 2 years teaching experience',
      'Strong communication and interpersonal skills',
      'Ability to work in a team and adapt to dynamic environments'
    ],
    applyLink: '#'
  },
  {
    title: 'Content Writer',
    location: 'Remote',
    description: 'We are seeking a talented Content Writer to develop engaging and informative content for our platform. The ideal candidate should have a flair for writing and a keen eye for detail.',
    requirements: [
      'Bachelor’s degree in English, Journalism, or related field',
      'Proven experience in content writing',
      'Excellent writing and editing skills',
      'Ability to meet deadlines and manage multiple projects'
    ],
    applyLink: '#'
  },
  {
    title: 'Marketing Specialist',
    location: 'Kerala, India',
    description: 'We are looking for a dynamic Marketing Specialist to help promote our services and grow our brand. The ideal candidate should have a strong understanding of digital marketing strategies.',
    requirements: [
      'Bachelor’s degree in Marketing or related field',
      'Experience in digital marketing and SEO',
      'Strong analytical and problem-solving skills',
      'Excellent communication and teamwork abilities'
    ],
    applyLink: '#'
  }
];

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (jobTitle) => {
    setSelectedJob(jobTitle);
  };

  const handleCloseForm = () => {
    setSelectedJob(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6 text-center">Careers at Fluentorr</h1>
      <p className="text-lg text-gray-700 mb-12 text-center">
        Join our team and help us make a difference in the lives of English learners around the world.
      </p>
      <div className="grid gap-8 grid-cols-1 ">
        {jobOpenings.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-4">{job.location}</p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Requirements:</h3>
            <ul className="list-disc list-inside mb-4">
              {job.requirements.map((req, i) => (
                <li key={i} className="text-gray-700">{req}</li>
              ))}
            </ul>
            <button
              onClick={() => handleApplyClick(job.title)}
              className="inline-block bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
      {selectedJob && <ApplicationForm jobTitle={selectedJob} onClose={handleCloseForm} />}
    </div>
  );
};

export default CareersPage;

import React from "react";

const StartEptTestPage = ({ startTest }) => {
  return (
    <div className="container flex flex-col gap-5 md:text-center mx-auto p-4">
      <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to Fluentorr's EPT</h1>
      </div>
      <section className="text-left md:px-[20%]">
      <h2 className="font-extrabold text-2xl">
        <span className="text-gradient-blue">Additional </span>Information
      </h2>
      <ul className="list-disc px-[2%]">
        <li><p className="text-fontColor">Be Yourself: Speak naturally and confidently, as if you are having a conversation with a friend. Authenticity is key to accurately assessing your true fluency and pronunciation.</p></li>
        <li><p className="text-fontColor">Relax and Breathe: Take a deep breath before starting. This will help calm your nerves and allow you to perform at your best. Remember, the test is just to gauge your current level and not to judge you.</p></li>
        <li><p className="text-fontColor">Clear and Slow Speech: Focus on speaking clearly and at a moderate pace. This ensures that your pronunciation is accurately captured and evaluated.</p></li>
        <li><p className="text-fontColor">Stay on Topic: Answer the questions directly and stay on topic. This helps in effectively assessing your ability to communicate ideas fluently and coherently.</p></li>
      </ul>
      </section>
      <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={startTest}
      >
        Start EPT Test
      </button>
      </div>
    </div>
  );
};

export default StartEptTestPage;

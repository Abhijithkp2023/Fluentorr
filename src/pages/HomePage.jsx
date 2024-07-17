import React, { useState } from "react";
import FAQItem from "../Components/FaqItem";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FcBiotech } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import WhatsappAndPhone from "../Components/WhatsappAndPhone";
import ReviewCarousel from "../Components/ReviewCarousel";

const HomePage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqs = [
    {
      question: "What is the structure of the Fluentorr program?",
      answer:
        "Fluentorr is divided into three levels: Basic, L1 (Intermediate), and L2 (Advanced). Each level has tailored lessons and activities to suit the proficiency of the students. Our structure includes worksheets, Google Meet sessions for interactive games and activities, and one-on-one calling sessions for personalized feedback and support.",
    },
    {
      question: "How does Fluentorr's teaching method differ from traditional methods?",
      answer: "Fluentorr uses the Communicative Language Training (CLT) method, focusing on real-life communication and practical usage rather than rote learning. We integrate games, activities, and interactive sessions to make learning engaging and effective.",
    },{
      question:" How does the subscription model work?",
      answer:" Unlike traditional fixed-duration courses, Fluentorr offers a flexible subscription model. Students can subscribe monthly and continue as long as they need, allowing them to learn at their own pace without the pressure of a fixed timeframe."
    },{
      question:"What support do students receive from mentors?",
      answer:"Our mentors provide personalized feedback, track progress, and offer support through one-on-one calling sessions. This ensures that each student receives the attention and guidance they need to improve."
    },{
      question:"How are the worksheets structured?",
      answer:"The worksheets include essential tasks such as daily diaries, new word exercises, daily paragraphs, and grammar tasks. Additional tasks include object descriptions, movie reviews, translation exercises, and more, all aimed at enhancing different aspects of English proficiency."
    },{
        question:" What personal development skills can students expect to gain?",
        answer:"n addition to language skills, students will develop confidence, public speaking abilities, listening and analytical skills, and other personal development skills through targeted exercises and interactive activities."
      },{
        question:"How do the Google Meet sessions work?",
        answer:"Google Meet sessions are held regularly and include at least three activities and a game. These sessions are designed to be interactive and fun, allowing students to practice speaking and listening in a supportive environment with peers."
      },{
        question:"What if a student has difficulty using the website for the EPT test?",
        answer:"If a student has difficulty using the website, they can connect with our counselors. The counselors will provide the EPT test questions through WhatsApp, and the student can respond through WhatsApp as well. The counselors will then upload the answers to the EPT platform and send the results to the student."
      },{
        question:"How does Fluentorr track student progress?",
        answer:"We use regular assessments and leaderboards to track student progress. Detailed reports and feedback are provided to help students understand their strengths and areas for improvement, ensuring continuous development."
      },
  ];

  const items = [
    {
      title: "Fluency",
      description: "Speak English effortlessly and smoothly",
    },
    {
      title: "Confidence",
      description: "Build self-assurance in English communication",
    },
    {
      title: "Grammar",
      description: "Master complex grammar rules",
    },
    {
      title: "Vocabulary",
      description: "Expand your word bank with practical terms",
    },
    {
      title: "Pronunciation",
      description: " Perfect your accent and sound more natural",
    },
    {
      title: "Public Speaking",
      description: "Enhance your presentation and speaking skills",
    },
  ];

  return (
    <div className="w-full ">
      <section className="bg-yellow-50 p-4 md:px-[100px] md:py-10 md:pt-20 w-full flex justify-center items-center">
        <div className="w-full flex md:p-0 p-4 flex-col-reverse md:flex-row space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/2 text-left p-[10px]">
            <div className="flex flex-col">
              <h1 className="md:text-5xl text-2xl md:leading-snug leading-normal font-bold mb-4">
                <span className="text-blue-950">Fluentorr :</span> Fluency,
                Confidence, Growth.
              </h1>
              <p className="md:text-lg text-[15px] mb-6">
                Join Fluentorr and Unlock Your English Potential.
              </p>
              <p className="md:text-lg text-[15px] mb-6">
              Fluentorr is a cutting-edge platform that makes learning English interactive, enjoyable, and highly effective."
              </p>
              <button
                aria-label="Get started"
                className="bg-green-500 hover:scale-105 active:95 flex justify-center items-center text-white w-1/2 font-bold py-2 px-4 rounded"
              >
                <div className="flex flex-row">
                  <div className="flex justify-center items-center">
                    <FaWhatsapp className="md:size-6 size-5 " />
                  </div>
                  <p className="px-1 md:text-lg text-base">Whatsapp Now</p>
                </div>
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center md:p-0 p-[10px]">
            <div
              className="relative w-full overflow-hidden z-0"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/oW6in9cMLyU?si=YVu70df9yFkXR1on"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="features md:px-[100px] md:py-10 ">
        <div className="md:p-0 p-[10px]">
          <h3 className="px-5 py-7 md:text-[42px] text-[32px]">
            Why <span className="text-blue-800 font-bold">Fluentorr</span>
          </h3>
          <p className="px-5 pb-6 md:text-lg text-[15px]">
            Experience the best in English learning with Fluentorr’s
            Communicative Language Training (CLT). Our subscription model
            features engaging games and activities, live sessions, one-on-one
            calls, and targeted worksheets to boost your proficiency and
            personal development skills.
          </p>
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row w-full">
              <button className="text-left flex bg-blue-200 shadow-blue-300 shadow-md items-center  m-2 p-6 md:w-1/2 rounded-lg transform transition-transform duration-300 hover:scale-95 hover:bg-blue-300">
                <div className="flex justify-center items-center mr-4">
                  <FcBiotech className="md:size-12 size-8" />
                </div>
                <div>
                  <h2 className="md:text-[22px] text-xl font-semibold mb-2">
                  Communicative Language Training (CLT)
                  </h2>
                  <p className="text-sm md:text-[15px] ">
                  Learn English through real-life scenarios and practical usage.
                  </p>
                </div>
              </button>
              <button className="text-left flex items-center bg-yellow-100 shadow-md shadow-yellow-200 m-2 p-6 md:w-1/2 rounded-lg transform transition-transform duration-300 hover:scale-95 hover:bg-yellow-200">
                <div className="flex justify-center items-center mr-4">
                  <FcBullish className="md:size-12 size-8" />
                </div>
                <div>
                  <h2 className="md:text-[22px] text-xl font-semibold mb-2">
                  Engaging Games and Activities
                  </h2>
                  <p className="text-sm md:text-[15px]">
                  Enhance your skills with fun and interactive exercises.
                  </p>
                </div>
              </button>
            </div>
            <div className="flex flex-col md:flex-row w-full">
              <button className="text-left flex items-center bg-yellow-100 shadow-md shadow-yellow-200  m-2 p-6 md:w-1/2 rounded-lg transform transition-transform duration-300 hover:scale-95 hover:bg-yellow-200">
                <div className="flex justify-center items-center mr-4">
                  <FcCalendar className="md:size-12 size-8" />
                </div>
                <div>
                  <h2 className="md:text-[22px] text-lg font-semibold mb-2">
                  Flexible Subscription Model
                  </h2>
                  <p className="text-sm md:text-[15px]">
                  Enjoy learning without the constraints of fixed-duration courses.
                  </p>
                </div>
              </button>
              <button className="text-left flex bg-blue-200 shadow-blue-300 shadow-md items-center -200 m-2 p-6 md:w-1/2 rounded-lg transform transition-transform duration-300 hover:scale-95 hover:bg-blue-200">
                <div className="flex justify-center items-center mr-4">
                  <FcCollaboration className="md:size-12 size-8" />
                </div>
                <div>
                  <h2 className="md:text-[22px] text-lg font-semibold mb-2">
                  Confidence Building and Personal Development
                  </h2>
                  <p className="text-sm md:text-[15px]">
                  Improve public speaking, listening, and analytical skills.
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full md:px-[100px] md:py-10 bg-white py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-[42px]  font-bold text-center mb-8">
          What You'll Gain with Fluentorr
          </h2>
          <p className="md:text-lg text-[15px] text-center mb-12">
            Our comprehensive sessions cover everything you need to English communication
          </p>
          <div className="flex flex-col-reverse md:flex-row md:space-x-8">
            <div className="md:w-1/2 flex flex-col space-y-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <IoIosCheckmarkCircleOutline className="text-3xl text-blue-500" />
                  <div>
                    <h3 className="md:text-[22px] text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 md:text-[15px] text-[13px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
              <img
                src="/onlineclass.jpg"
                alt="Learning"
                className="w-full hidden md:block h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="faq md:px-[100px] px-[30px] py-[10px] md:py-10 w-full">
        <div className="w-full md:p-0 p-[10px]">
          <div className="w-full md:text-center text-left">
            <h2 className="md:text-[42px] text-[32px] font-semibold w-full mb-6">
              Frequently asked questions about Fluentorr's Communicative Langugage Training(CLT)
            </h2>
          </div>
          <div className="md:p-10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={index === openIndex}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <WhatsappAndPhone />
      </section>
    </div>
  );
};

export default HomePage;

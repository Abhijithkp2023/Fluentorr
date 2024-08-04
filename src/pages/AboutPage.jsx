import React from "react";
import { Helmet } from "react-helmet";
import { AiOutlineAim } from "react-icons/ai";
import { FcRight } from "react-icons/fc";
import { BiBullseye } from "react-icons/bi";

const AboutPage = () => {
  return (
    <section className="about-page">
      <Helmet>
        <title>Fluentorr - About </title>
        <meta
          name="description"
          content="Join Fluentorr and Unlock Your English Potential with interactive and effective learning methods."
        />
      </Helmet>

      <section className="bg-blue-50">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-8">
          <div className="font-light text-fontColor sm:text-lg">
            <h1 className="mb-6 text-3xl md:text-4xl tracking-tight font-extrabold text-gradient-blue text-center">
              Who We Are...?
            </h1>
            <p className="mb-6 md:text-base text-fontColor text-sm">
              Fluentorr is a team of dedicated educators revolutionizing English
              learning through personalized, interactive sessions, expert
              tutors, and practical communication focus. 
            </p>
            <p className="md:text-base text-fontColor text-sm">
              Our dynamic group sessions, expert tutors, and practical
              communication focus ensure you gain the skills needed for
              real-life success. 
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-0 rounded-lg "
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-2 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 flex flex-col gap-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center h-14 w-14 rounded-md bg-white border-2 border-blue-500 text-blue-500">
                  <BiBullseye className="text-2xl"/>
                </div>
                <h3 className="text-lg font-bold ml-5 text-gradient-blue">
                  Mission
                </h3>
              </div>
              <div className="pl-5">
                <p className="md:text-base text-sm text-fontColor mb-4">
                  Our mission is to empower individuals to achieve English
                  fluency through engaging, practical, and supportive learning
                  experiences. We aim to break language barriers, boost
                  confidence, and provide personalized, interactive education
                  that is accessible to everyone, regardless of their background
                  or goals.
                </p>
                <ul className="space-y-2 text-fontColor">
                  <li className="flex items-center md:text-base text-sm">
                    <FcRight className="mr-2" />
                    Empowerment Through Language
                  </li>
                  <li className="flex items-center md:text-base text-sm">
                    <FcRight className="mr-2" />
                    Engaging Learning Experiences
                  </li>
                  <li className="flex items-center md:text-base text-sm">
                    <FcRight className="mr-2" />
                    Personalized Support
                  </li>
                  <li className="flex items-center md:text-base text-sm">
                    <FcRight className="mr-2" />
                    Accessible Education
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center h-14 w-14 rounded-md bg-white border-2 border-blue-500 text-blue-500">
                <AiOutlineAim className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold ml-5 text-gradient-blue">
                  Vision
                </h3>
              </div>
              <div className="pl-5">
                <p className="md:text-base text-sm text-fontColor mb-4">
                  Our vision is to become the premier platform for English
                  language learning, fostering a global community of confident
                  and articulate speakers. We aspire to revolutionize language
                  education by integrating innovative techniques and creating an
                  environment where learners can thrive, connect, and achieve
                  their full potential.
                </p>
                <ul className="space-y-2 text-fontColor">
                  <li className="flex items-center md:text-base text-sm">
                    <FcRight className="mr-2" />
                    Global Community
                  </li>
                  <li className="flex items-center md:text-base text-sm">
                    <FcRight className="mr-2" />
                    Innovative Education
                  </li>
                  <li className="flex items-center md:text-base text-sm">
                    <FcRight className="mr-2" />
                    Thriving Learners
                  </li>
                  <li className="flex items-center md:text-base text-sm">
                    <FcRight className="mr-2" />
                    Language Mastery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutPage;

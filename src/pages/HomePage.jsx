import React from "react";

const HomePage = () => {
  return (
    <div className="w-full">
    <section className="bg-yellow-50 md:pt-20 w-full flex justify-center items-center">
      <div className="w-full md:px-[100px] px-5 py-14 flex flex-col-reverse md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-1/2 text-left">
          <h1 className="md:text-5xl text-3xl font-bold mb-4">Master English Quickly with Fluentorr</h1>
          <p className="text-lg mb-6">Join Fluentorr and Unlock Your English Potential.</p>
          <p className="text-lg mb-6">Fluentorr is an innovative platform designed to make English learning interactive, engaging, and effective. Our tailored approach ensures you gain fluency, confidence, and proficiency.</p>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="relative w-full overflow-hidden z-0" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/O_A8HdCDaWM?si=HlnCndIbMtng3eH9"
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
    <section>
      {/* Additional content */}
    </section>
  </div>
  );
};

export default HomePage;

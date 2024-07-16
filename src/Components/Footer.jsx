import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10">
    <div className="container mx-auto">
      <div className="flex flex-wrap pb-5 ">
        <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
          <h4 className="font-extrabold text-xl pb-5 ">Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Gallery</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <h4 className="font-bold text-xl pb-5">Courses</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Communicative Language Training</a></li>
            <li><a href="#" className="hover:underline">IELTS</a></li>
            <li><a href="#" className="hover:underline">Interview Training</a></li>
            <li><a href="#" className="hover:underline">Junior</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="font-bold text-xl pb-5">Contact</h4>
          <ul className="space-y-2">
            <li>+12345678</li>
            <li>fluenter@gmail.com</li>
            <li>Kozhikkode</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mb-8">
        <ul className="flex space-x-4">
          <li>
            <a href="#">
              <img
                src="/instagram.svg"
                className="h-6 w-6"
                alt="Instagram icon"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="/linkedin.svg"
                className="h-6 w-6"
                alt="LinkedIn icon"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="/facebook.svg"
                className="h-6 w-6"
                alt="Facebook icon"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="/twitter.svg"
                className="h-6 w-6"
                alt="Twitter icon"
              />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <img
            className="h-16"
            src="/fluentorr.svg"
            alt="Fluentorr logo"
          />
        </div>
        <h3 className="text-center text-sm">
          ©2024 Copyright | All Rights Reserved | Powered By Fluentorr
          Technologies
        </h3>
      </div>
    </div>
  </footer>
  );
};

export default Footer;

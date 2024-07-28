import React, { useEffect, useRef, useState } from "react";
import { IoMdAdd, IoMdRemove ,IoIosArrowForward } from "react-icons/io";


const FAQItem = ({ faq, isOpen, onClick }) => {


  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-gray-300 py-3">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onClick}
      >
        <IoMdAdd
          className={`text-xl transition-transform transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
        <h4 className="ml-5 flex-1 text-left md:text-lg text-fontColor text-base">{faq.question}</h4>
        <IoIosArrowForward
          className={`text-xl transition-transform transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </div >
      <div className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ height: `${height}px`, opacity: isOpen ? 1 : 0 }}
        ref={contentRef}>
      {isOpen && <p className="mt-3 text-gray-700 text-fontColor">{faq.answer}</p>}
      </div>
      
    </div>
  );
};

export default FAQItem;
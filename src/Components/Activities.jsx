import React from 'react';
import Slider from 'react-slick';
import { FaGamepad, FaTasks, FaPhone, FaFileAlt, FaGavel, FaTheaterMasks, FaPencilAlt, FaFilm } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Activities = [
  {
    name: "Games",
    icon: <FaGamepad className="text-6xl text-blue-500" />
  },
  {
    name: "Activities",
    icon: <FaTasks className="text-6xl text-green-500" />
  },
  {
    name: "Calling",
    icon: <FaPhone className="text-6xl text-red-500" />
  },
  {
    name: "Worksheets",
    icon: <FaFileAlt className="text-6xl text-yellow-500" />
  },
  {
    name: "Debates",
    icon: <FaGavel className="text-6xl text-purple-500" />
  },
  {
    name: "Role Plays",
    icon: <FaTheaterMasks className="text-6xl text-pink-500" />
  },
  {
    name: "Pictionary",
    icon: <FaPencilAlt className="text-6xl text-indigo-500" />
  },
  {
    name: "Movie Madness",
    icon: <FaFilm className="text-6xl text-orange-500" />
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768, // md breakpoint
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 640, // sm breakpoint
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const ReviewCarousel = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 md:py-20">
      <h2 className="text-4xl font-bold text-center mb-8">Activities</h2>
      <Slider {...settings}>
        {Activities.map((activity, index) => (
          <div key={index} className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg h-60 flex flex-col items-center justify-center border-2 border-blue-100">
              <div className="mb-4">
                {activity.icon}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center">{activity.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;

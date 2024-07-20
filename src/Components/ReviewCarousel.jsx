// src/components/ReviewCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    review: "This is an amazing platform! Highly recommended.",
  },
  {
    name: "Jane Smith",
    rating: 4,
    review: "Great experience, I improved my English significantly.",
  },
  {
    name: "Alice Johnson",
    rating: 5,
    review: "The best English learning platform out there.",
  },
  {
    name: "Bob Brown",
    rating: 4,
    review: "Very helpful and interactive.",
  },
  {
    name: "Charlie Davis",
    rating: 5,
    review: "Excellent! I loved the personalized attention.",
  },
];

const ReviewCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="max-w-7xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Google Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg h-full flex flex-col">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((star, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{review.review}</p>
              <h4 className="text-xl font-semibold">{review.name}</h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewCarousel;

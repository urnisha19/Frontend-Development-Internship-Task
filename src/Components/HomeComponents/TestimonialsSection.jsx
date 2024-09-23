/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import userIcon from '../../assets/user icon.jpeg';
import AOS from 'aos';
import { useEffect } from 'react';

// Testimonial data: static 
const testimonials = [
  {
    name: 'Robert A. Voltaire',
    stars: 5,
    storeLink: '#',
    text: 'Printify has been an incredible service for us musicians unable to keep large amounts...',
  },
  {
    name: 'Quinten Barney',
    stars: 5,
    storeLink: '#',
    text: 'We chose Printify because of their offerings as well as their incredibly low prices...',
  },
  {
    name: 'Nikki',
    stars: 5,
    storeLink: '#',
    text: 'Printify has been an amazing partner to work with as we grow our business...',
  },
];

// Star rating component
const StarRating = ({ stars }) => (
  <div className="flex text-yellow-400 mt-1">
    {'★'.repeat(stars)}
    {'☆'.repeat(5 - stars)}
  </div>
);

// Custom arrow component
const CustomArrow = ({ className, onClick, direction }) => {
  return (
    <button
      className={`${className} absolute top-1/2 transform -translate-y-1/2 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-green-600 transition`}
      onClick={onClick}
    >
      {direction === 'next' ? '→' : '←'}
    </button>
  );
};

// Testimonials section component
const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '30px',
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '10px',
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '5px',
        },
      },
    ],
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 p-6 md:p-20 relative">
      {/* Heading and Description */}
      <div className="max-w-7xl mx-auto mb-20 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center text-left">
            <h2 className="text-4xl md:text-4xl font-bold text-green-500 mb-4">
              Trusted by over 8M sellers around the world
            </h2>
          </div>
          <div className="flex flex-col justify-center text-left" data-aos="slide-left">
            <p className="text-base md:text-lg text-gray-600">
              Whether you are just getting started or run an enterprise-level e-commerce business,
              we do everything we can to ensure a positive merchant experience.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="max-w-7xl mx-auto" data-aos="fade-up">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-md p-6 text-left flex flex-col">
                <div className="flex items-start mb-4">
                  <img
                    src={userIcon}
                    alt={`${testimonial.name}'s testimonial`}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                    <a href={testimonial.storeLink} className="text-green-500 text-sm">
                      Store link
                    </a>
                    <StarRating stars={testimonial.stars} />
                  </div>
                </div>
                <p className="text-gray-600 text-sm md:text-base">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsSection;

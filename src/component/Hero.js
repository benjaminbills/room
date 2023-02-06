import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () => {
    setActiveIndex(activeIndex === items.length - 1 ? 0 : activeIndex + 1);
  };
  const items = [
    {
      src: '/image/desktop-image-hero-1.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1',
    },
    {
      src: '/image/desktop-image-hero-2.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2',
    },
    {
      src: '/image/desktop-image-hero-3.jpg',
      altText: 'Slide 3',
      caption: 'Slide 3',
    },
  ];

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? items.length - 1 : activeIndex - 1);
  };
  return (
    <div className='relative md:flex  w-full'>
      <div className='md:min-h-[534px] md:w-7/12'>
        {/* <h1 className='text-3xl'>Hello world!</h1> */}
        <img
          src={items[activeIndex].src}
          alt={items[activeIndex].altText}
          // min-h-[360px]
          className=' w-full md:min-h-[560px] md:max-h-[560px]  max-h-[360px] '
        />
      </div>
      {/* absolute bottom-0 right-0 md:right-[-7em] */}
      {/* md:fixed absolute bottom-0 right-0 md:w-[100%] md:top-[460px] text-red flex */}
      <div className='absolute bottom-0 right-0 top-[320px] md:w-[100%] md:top-[480px] text-red flex '>
        <div className='flex w-full'>
          <span className='md:w-7/12'></span>
          <div className='md:w-1/12 '>
            <div className='flex h-10 bg-black text-white justify-between md:h-[80px] w-full'>
              <button className='focus:bg-gray-600 w-1/2' onClick={handlePrev}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 md:w-8 md:h-8'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 19.5L8.25 12l7.5-7.5'
                  />
                </svg>
              </button>
              <button
                className='focus:bg-gray-600 w-1/2  '
                onClick={handleNext}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 md:w-8 md:h-8 ml-auto'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M8.25 4.5l7.5 7.5-7.5 7.5'
                  />
                </svg>
              </button>
            </div>
            {/* <button className='bg-red-900 w-full h-[100px]'>We</button> */}
          </div>
        </div>
      </div>
      <div className='container pt-10 md:pt-0 my-auto  pl-4 pr-4  md:w-5/12  lg:pl-12 lg:pr-12 sm:pr-6 sm:pl-6 max-[760px]:mb-6  '>
        <h2 className='font-bold text-4xl'>
          Discover innovative ways to decorate
        </h2>
        <p className='pt-4 text-gray-500 pb-8 md:text-lg'>
          We provide unmatched quality, comfort, and style for property owners
          across the country Our experts combine form and function in bringing
          your vision to life. Create a room it your own style with our
          collection and make you property a reflection of you and what you love
        </p>
        <div>
          <button className='inline-flex wide-letter-spacing  text-center'>
            SHOP NOW{' '}
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import Hero from '../component/Hero';

const Home = () => {
  return (
    <div className=' z-10'>
      <div className='w-full'>
        <Hero />
      </div>
      <div className='md:flex'>
        {/* <div className=''> */}
        <div className='bg-hero2 w-full min-h-[266px] bg-cover bg-no-repeat md:w-1/3'></div>
        {/* </div> */}
        <div className='pt-10 pl-4 pr-4 pb-8 md:w-1/3'>
          <h1 className='font-semibold average-letter-spacing'>
            ABOUT OUR FURNITURE
          </h1>
          <p className='text-gray-500 pt-3'>
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <div className='bg-hero3 w-full min-h-[266px] bg-center bg-cover  bg-no-repeat md:w-1/3'></div>
      </div>
    </div>
  );
};

export default Home;

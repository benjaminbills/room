import { useEffect, useState } from 'react';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    window.scrollTo(0, 0);
    setOpen(!open);
  };
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  return (
    <div className='z-10 absolute top-0 left-0 w-full'>
      {open && (
        <div className='fixed top-[6.1em] left-0 w-full h-full bg-gray-500 bg-opacity-75 '></div>
      )}
      {open && (
        <div className=' bg-white text-lg font-bold'>
          <ul className='flex pt-8 pl-4 pr-4 pb-8'>
            <li className='mr-auto'>
              <button onClick={() => setOpen(false)}>
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
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </li>
            <li className='mr-6' onClick={() => setOpen(false)}>
              <a className='hover:text-blue-800  hover:underline' href='/home'>
                home
              </a>
            </li>
            <li className='mr-6' onClick={() => setOpen(false)}>
              <a className='hover:text-blue-800 hover:underline' href='/shop'>
                shop
              </a>
            </li>
            <li className='mr-6' onClick={() => setOpen(false)}>
              <a
                className=' hover:text-blue-800  hover:underline'
                href='/about'
              >
                about
              </a>
            </li>
            <li className='mr-6' onClick={() => setOpen(false)}>
              <a
                className='cursor-not-allowed  hover:underline'
                href='/contact'
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      )}
      {!open && (
        <div className='pt-8 pl-4 pr-4 flex justify-between text-white text-lg font-semibold md:hidden'>
          <button onClick={openMenu}>
            <span className=''>
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
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            </span>
          </button>
          <p>room</p>
          <span></span>
        </div>
      )}
      <div className='hidden flex md:block text-lg font-bold text-white w-[50%]'>
        <ul className='flex pt-8 pl-4 pr-4 pb-8 items-center justify-center'>
          <li className='mr-auto md:mr-12 text-2xl'>room</li>
          <li className='mr-6'>
            <a
              className=' active:underline active:underline-offset-8  focus:underline focus:underline-offset-8'
              href='#'
            >
              home
            </a>
          </li>
          <li className='mr-6'>
            <a
              className='active:underline active:underline-offset-8 focus:underline focus:underline-offset-8'
              href='#'
            >
              shop
            </a>
          </li>
          <li className='mr-6'>
            <a
              className='  active:underline active:underline-offset-8 focus:underline focus:underline-offset-8'
              href='#'
            >
              about
            </a>
          </li>
          <li className='mr-6'>
            <a
              className='  active:underline active:underline-offset-8 focus:underline focus:underline-offset-8'
              href='#'
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;

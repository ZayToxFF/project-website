"use client"// Importez le composant Link de next
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='animate-slidTop flex flex-row items-center justify-between w-full text-white relative mt-6 z-20'>
      <Link className={`${isMenuOpen ? 'hidden' : 'flex'}`} legacyBehavior href="/">
        <a>
          <Image style={{ display: `${isMenuOpen ? 'none' : 'flex'}` }} src="/logo.png" width={50} height={50} alt="" />
        </a>
      </Link>

      <a className='sm:hidden' onClick={toggleMenu}>
        Menu +
      </a>

      <ul className={`sm:flex border-2 border-[#232323] px-2 py-3 rounded-full gap-5 bg-[#141414] ${isMenuOpen ? 'absolute flex flex-col gap-1 bg-[#141414] top-12 right-0 px-5 py-5 rounded-lg border text-left' : 'hidden'}`}>
        <li>
          <Link legacyBehavior href="/" >
            <a className='px-6 py-2 rounded-full'>Home</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            <a className='px-6 py-2 rounded-full text-[#B3B3B3]'>About</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/projects">
            <a className='px-6 py-2 rounded-full text-[#B3B3B3]'>Projects</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/contact">
            <a className='px-6 py-2 rounded-full text-[#B3B3B3]'>Contact</a>
          </Link>
        </li>
      </ul>
      <ul className='flex flex-row items-center justify-center gap-6'>
        <li>
          <Link legacyBehavior className=' cursor-pointer' href="/projects">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ fill: '#B3B3B3' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37527 0 0 5.37527 0 12C0 18.6248 5.37527 24 12 24C18.6117 24 24 18.6248 24 12C24 5.37527 18.6117 0 12 0ZM19.9262 5.53145C21.3579 7.27549 22.217 9.50107 22.243 11.9089C21.9046 11.8439 18.5206 11.154 15.1106 11.5835C15.0325 11.4143 14.9675 11.2321 14.8894 11.0499C14.6811 10.5554 14.4469 10.0477 14.2126 9.56618C17.9869 8.0304 19.705 5.81779 19.9262 5.53145ZM12 1.77007C14.603 1.77007 16.9848 2.74621 18.7939 4.34707C18.6117 4.60738 17.0629 6.67679 13.4186 8.04338C11.7397 4.95878 9.87855 2.43384 9.5922 2.04338C10.3601 1.86117 11.1671 1.77007 12 1.77007ZM7.63995 2.73319C7.91325 3.09761 9.73538 5.63558 11.4404 8.65508C6.65076 9.9306 2.42083 9.90458 1.96529 9.90458C2.62907 6.72885 4.77657 4.08676 7.63995 2.73319ZM1.74404 12.0131C1.74404 11.9089 1.74404 11.8048 1.74404 11.7007C2.18655 11.7136 7.15835 11.7787 12.2733 10.243C12.5727 10.8156 12.846 11.4013 13.1063 11.9869C12.9761 12.026 12.8329 12.0651 12.7028 12.1041C7.41865 13.8091 4.60738 18.4685 4.3731 18.859C2.7462 17.0499 1.74404 14.6421 1.74404 12.0131ZM12 22.256C9.6312 22.256 7.44469 21.449 5.71367 20.0954C5.89588 19.718 7.97827 15.7094 13.757 13.692C13.783 13.679 13.7961 13.679 13.8221 13.666C15.2668 17.4013 15.8525 20.5379 16.0087 21.436C14.7722 21.9696 13.4186 22.256 12 22.256ZM17.7136 20.4989C17.6096 19.8742 17.0629 16.8807 15.7223 13.1974C18.9371 12.6898 21.7484 13.5228 22.0998 13.6399C21.6573 16.4902 20.0173 18.9501 17.7136 20.4989Z" />
              </svg>
            </a>
        </Link>
        </li>

        <li>
          <Link legacyBehavior className=' cursor-pointer' href="/projects">
            <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M24 4.56c-0.885 0.39-1.83 0.65-2.827 0.772 1.016-0.607 1.8-1.57 2.164-2.718-0.95 0.566-2.005 0.978-3.13 1.2-0.898-0.958-2.177-1.56-3.59-1.56-2.72 0-4.92 2.2-4.92 4.92 0 0.388 0.044 0.764 0.13 1.128-4.09-0.208-7.72-2.16-10.14-5.14-0.422 0.722-0.664 1.56-0.664 2.46 0 1.7 0.866 3.198 2.18 4.078-0.802-0.026-1.556-0.25-2.217-0.616v0.06c0 2.368 1.683 4.342 3.914 4.78-0.42 0.114-0.87 0.172-1.33 0.172-0.326 0-0.64-0.034-0.952-0.092 0.646 1.95 2.514 3.38 4.732 3.42-1.734 1.356-3.92 2.166-6.306 2.166-0.41 0-0.82-0.024-1.228-0.072 2.24 1.438 4.896 2.272 7.74 2.272 9.292 0 14.35-7.708 14.35-14.35 0-0.22 0-0.438-0.016-0.654 0.986-0.71 1.84-1.596 2.51-2.598-0.902 0.4-1.874 0.666-2.896 0.78 1.042-0.626 1.84-1.612 2.22-2.784-0.974 0.578-2.054 0.996-3.2 1.22z" fill="#B3B3B3"/>
            </svg>
            </a>
        </Link>
        </li>

        <li>
          <Link legacyBehavior className=' cursor-pointer' href="/projects">
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </a>
        </Link>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar;
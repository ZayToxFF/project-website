import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const Footer = () => {

  return (
    <footer className='flex flex-row items-center justify-between w-full absolute bottom-0 left-0 p-5'>
      <Link legacyBehavior href="/">
        <a>
        <Image src="/logo.png" width={50} height={50} alt="" />
        </a>
      </Link>

      <p>
        Copyright 2024
      </p>

      <ul>
        <li>
          <Link legacyBehavior href="/projects">
            <a className='px-6 py-2 rounded-full text-[#B3B3B3]'>About</a>
          </Link>
        </li>
      </ul>

    </footer>
  );
};

export default Footer;

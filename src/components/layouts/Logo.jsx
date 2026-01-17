import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <Link
      href="/"
      className="logo flex items-center gap-2 text-2xl font-bold"
    >
      <div className="relative w-20 h-20"> {/* Tailwind sets width/height */}
        <Image
          src="/assets/logo.png"
          alt="Product Box Logo"
          fill // makes the image fill the parent div
          style={{ objectFit: 'contain' }} // preserves aspect ratio
        />
      </div>
      <h1 className='hidden md:flex'>
        PRODUCT-<span className="text-primary">BOX</span>
      </h1>
    </Link>
  );
};

export default Logo;

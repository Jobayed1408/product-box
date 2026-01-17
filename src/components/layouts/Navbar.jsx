"use client";

import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import Navlink from '../buttons/Navlink';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Navbar = () => {
  const { data: session, status } = useSession();
  // console.log("Session in Navbar:", session);

  // Nav links
  const nav = (
    <>
      <li>
        <Navlink href="/">Home</Navlink>
      </li>
      <li>
        <Navlink href="/items">Items</Navlink>
      </li>
      <li>
        <Navlink href="/add-product">Add product</Navlink>
      </li>
      {status === "loading" ? null : !session ? (
        <li>
          <Navlink href="/login">Login</Navlink>
        </li>
      ) : null}
    </>
  );

  return (
    <div className="navbar bg-base-100 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>

        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>

      <div className="navbar-end">
        {session ? (
          <>
            {/* Avatar */}
            <div className="w-10 h-10 mr-3 rounded-full overflow-hidden border-2 border-primary">
              <Image
                src={session.user.image }
                alt={session.user.name}
                width={50}
                height={50}
              />
            </div>

            {/* Sign Out */}
            <button
              onClick={() => signOut()}
              className="btn btn-primary btn-outline"
            >
              Sign out
            </button>
          </>
        ) : (
          <Link href="/login" className="btn btn-primary btn-outline">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

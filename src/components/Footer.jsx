import React from "react";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";

import { FaFacebookF } from "react-icons/fa6";

import { FaLinkedinIn } from "react-icons/fa6";
// import { FaSquareYoutube } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Footer = () => {
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded mt-10 max-md:px-0">
      <nav className="grid grid-flow-col max-sm:grid-flow-row gap-4">
        <Link
          to="/"
          className="link link-hover text-2xl max-md:text-xl text-accent-content"
          onClick={() => window.scrollTo(0, 0)}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className="link link-hover text-2xl max-md:text-xl text-accent-content"
          onClick={() => window.scrollTo(0, 0)}
        >
          Shop
        </Link>
        <Link
          to="/about"
          className="link link-hover text-2xl max-md:text-xl text-accent-content"
          onClick={() => window.scrollTo(0, 0)}
        >
          About us
        </Link>
        <Link
          to="/contact"
          className="link link-hover text-2xl max-md:text-xl text-accent-content"
          onClick={() => window.scrollTo(0, 0)}
        >
          Contact
        </Link>
        {!loginState && (
          <>
            <Link
              to="/login"
              className="link link-hover text-2xl max-md:text-xl text-accent-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="link link-hover text-2xl max-md:text-xl text-accent-content"
              onClick={() => window.scrollTo(0, 0)}
            >
              Register
            </Link>
          </>
        )}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.upwork.com/freelancers/~011171a2267e99c9ec"
            target="blank"
            className="text-6xl max-sm:text-4xl text-accent-content"
          >
            <FaSquareXTwitter />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~011171a2267e99c9ec"
            target="_blank"
            className="text-6xl max-sm:text-4xl text-accent-content"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~011171a2267e99c9ec"
            target="_blank"
            className="text-6xl max-sm:text-4xl text-accent-content"
          >
            <FaLinkedinIn />
          </a>
          {/* <a
            href="https://www.facebook.com/muhammad.wasif.906"
            target="_blank"
            className="text-6xl max-sm:text-4xl text-accent-content"
          >
            <FaSquareYoutube />
          </a> */}
        </div>
      </nav>
      <aside>
        <p className="text-2xl max-sm:text-sm text-accent-content">
          Copyright © 2024 - All right reserved by Wasif Maqsood
        </p>
      </aside>
    </footer>
  );
};

export default Footer;

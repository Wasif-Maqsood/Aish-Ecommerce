import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <SectionTitle title="About Us" path="Home | About" />
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
        <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">
          We love our customers!
        </h2>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
          Aish Clothing, a stalwart in the fashion industry for half a decade,
          embodies the essence of timeless elegance and contemporary flair. With
          a fervent dedication to craftsmanship and quality, each piece is
          meticulously designed to resonate with the modern individual,
          effortlessly blending sophistication with versatility. Our collections
          are a celebration of individuality and self-expression, curated to
          empower wearers to embrace their unique style with confidence. From
          the ethereal silhouettes to the meticulous attention to detail, Aish
          Clothing is synonymous with sartorial excellence, offering a
          harmonious fusion of tradition and innovation. As we continue to
          evolve and inspire, our commitment to authenticity remains unwavering,
          ensuring that every garment tells a story of enduring grace and
          unparalleled refinement.
        </p>
        <Link
          to="/contact"
          className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;

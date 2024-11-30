import React from "react";
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon
import Link from "next/link"; // Import the Link component from Next.js
import Image from "next/image"; // Import the Image component from Next.js

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center px-6 py-12 relative">
      {/* Back Arrow Button */}
      <Link href="/#about-us">
        <a className="absolute top-6 left-6 text-2xl text-blue-600 hover:text-blue-800 focus:outline-none" aria-label="Back to About Us">
          <FaArrowLeft />
        </a>
      </Link>

      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-black mb-6 text-center">
        About Us
      </h1>

      {/* Brand Lift Ads Posting Introduction */}
      <div className="max-w-3xl text-center mb-8">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          Discover the Power of Brand Lift Ads
        </h2>
        <p className="text-lg text-gray-800">
          At our company, we specialize in running Brand Lift Ads that drive meaningful engagement and boost brand recognition.
          Our advanced strategies ensure that your brand gets noticed by the right audience, increasing both awareness and conversions.
        </p>
      </div>

      {/* Image Section */}
      <div className="mb-10 w-full max-w-md">
        <Image
          src="/download.jpg" // The path to the image
          alt="Ads Posting"
          className="rounded-xl shadow-lg w-full"
          width={500} // Specify a width for the image
          height={300} // Specify a height for the image
        />
      </div>

      {/* Company Details Section */}
      <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700">
        <p>
          As a leading ads posting company, we use cutting-edge tools to measure the effectiveness of your advertising campaigns.
          Our goal is to create customized ad solutions that align with your marketing objectives, ensuring maximum ROI for your business.
        </p>
        <p>
          With years of experience in digital advertising, we understand the complexities of driving brand success across various platforms.
          From targeted social media ads to comprehensive digital campaigns, we help you stand out in a crowded marketplace.
        </p>
        <p>
          Our team of experts works closely with you to understand your audience and develop strategies that amplify your brand’s message.
          We focus on results, making sure your ad campaigns deliver measurable impact.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <Link href="/#about-us">
          <a className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300">
            Back
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsPage;

import React from "react";
import Link from "next/link"; // Import the Link component from Next.js

// Array of box names with corresponding page paths
const boxLinks = [
  { name: "Home", path: "/#about-us" }, // Updated path for Home
  { name: "About Us", path: "/about-us" },
  { name: "Work Details", path: "/work-details" },
  { name: "Payments Proofs", path: "/payments-proofs" },
  { name: "Registration Plans", path: "/registration-plans" },
  { name: "Whatsapp Number", path: "/whatsapp-number" },
  { name: "Whatsapp Channel", path: "/whatsapp-channel" },
  { name: "Clients Reviews", path: "/clients-reviews" },
  { name: "Assignment Work", path: "/assignment-work" },
  { name: "Coming Soon", path: "#", isComingSoon: true }, // Coming Soon box
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-500 flex flex-col items-center px-4 sm:px-6 md:px-8">
      <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-8 mb-8 text-center">
        Brand Lift Ads Posting
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {/* Generate boxes with different names */}
        {boxLinks.map(({ name, path, isComingSoon }, index) => (
          <Link key={index} href={path}>
            <a
              className={`bg-white h-32 flex items-center justify-center rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition transform duration-200 ${
                isComingSoon ? "bg-gray-400" : "bg-white"
              }`}
            >
              <p className={`text-blue-500 font-bold ${isComingSoon ? "text-gray-700" : ""}`}>
                {isComingSoon ? "Coming Soon" : name}
              </p>
            </a>
          </Link>
        ))}
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white w-full py-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          <p className="text-sm text-center sm:text-left mb-4 sm:mb-0">
            &copy; 2024 Brand Lift Ads. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <Link href="/about-us">
              <a className="text-sm hover:underline">About Us</a>
            </Link>
            <Link href="/contact">
              <a className="text-sm hover:underline">Contact</a>
            </Link>
            <Link href="/privacy-policy">
              <a className="text-sm hover:underline">Privacy Policy</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

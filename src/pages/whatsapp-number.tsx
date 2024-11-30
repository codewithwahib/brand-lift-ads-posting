import React from "react";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon

const WhatsappNumberPage: React.FC = () => {
  const router = useRouter();

  const whatsappNumber = "03376565691"; // Replace with your actual WhatsApp number
  const whatsappLink = "https://wa.me/qr/QQ6I3ZHHNBAFM1"; // Replace with your actual WhatsApp QR link

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white flex flex-col items-center justify-center px-6 py-12 relative">
      {/* Back Arrow Button */}
      <a
        href="#"
        onClick={() => router.back()}
        className="absolute top-6 left-6 text-3xl text-blue-600 hover:text-blue-800"
      >
        <FaArrowLeft />
      </a>

      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-center mb-6">WhatsApp Number</h1>

      {/* WhatsApp Number Section */}
      <h1 className="text-3xl font-semibold mb-4">Contact Number: {whatsappNumber}</h1>

      {/* WhatsApp Contact Section */}
      <div className="text-center mb-8">
        <p className="text-xl mb-4">You can reach us directly on WhatsApp for any inquiries or assistance:</p>
        
        {/* WhatsApp Contact Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-xl shadow-lg hover:bg-green-600 transition duration-300"
        >
          Contact Us on WhatsApp
        </a>
      </div>

      {/* Back Button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => router.back()}
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default WhatsappNumberPage;

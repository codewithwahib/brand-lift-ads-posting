import React from "react";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon

const WhatsappChannelPage: React.FC = () => {
  const router = useRouter();

  const whatsappChannelLink = "https://whatsapp.com/channel/0029VamDc4v29758k6ezkP1B"; // Updated WhatsApp Channel link

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
      <h1 className="text-5xl font-extrabold text-center mb-6">WhatsApp Channel</h1>

      {/* WhatsApp Channel Info */}
      <div className="text-center mb-8">
        <p className="text-xl mb-4">Join our WhatsApp Channel for the latest updates and news:</p>
        <div className="text-3xl font-semibold mb-4">
          <a
            href={whatsappChannelLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            {whatsappChannelLink}
          </a>
        </div>

        {/* Join Channel Button */}
        <a
          href={whatsappChannelLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-green-500 rounded-xl shadow-lg hover:bg-green-600 transition duration-300"
        >
          Join Our WhatsApp Channel
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

export default WhatsappChannelPage;

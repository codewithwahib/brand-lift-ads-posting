import React from 'react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa'; // Import the left arrow icon
import { motion } from 'framer-motion'; // For animations
import Image from 'next/image'; // Import the Image component

const PaymentsProofsPage: React.FC = () => {
  const router = useRouter();

  // Single array with different image paths
  const paymentProofImages = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/17.jpg",
    "/images/18.jpg",
    "/images/19.jpg",
    "/images/20.jpg",
    "/images/21.jpg",
    "/images/22.jpg",
    "/images/23.jpg",
    "/images/24.jpg",
    "/images/25.jpg",
    "/images/26.jpg",
    "/images/27.jpg",
    "/images/28.jpg",
    "/images/29.jpg",
    "/images/30.jpg",
    "/images/31.jpg",
    "/images/32.jpg",
    "/images/33.jpg",
    "/images/34.jpg",
    "/images/35.jpg",
    "/images/36.jpg",
    "/images/37.jpg",
    "/images/38.jpg",
    "/images/39.jpg",
    "/images/40.jpg",
    "/images/41.jpg",
    "/images/42.jpg",
    "/images/43.jpg",
    "/images/44.jpg",
    "/images/45.jpg",
    "/images/46.jpg",
    "/images/47.jpg",
    "/images/48.jpg",
    "/images/49.jpg",
    "/images/50.jpg",
    "/images/51.jpg",
    "/images/52.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-black to-black text-white flex flex-col items-center justify-center px-6 py-12 relative">
      {/* Back Arrow Button */}
      <a
        href="#"
        onClick={() => router.back()}
        className="absolute top-6 left-6 text-3xl text-blue-600 hover:text-blue-800"
      >
        <FaArrowLeft />
      </a>

      {/* Title Section */}
      <motion.h1 
        className="text-5xl font-extrabold text-center mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Payments Proofs
      </motion.h1>

      {/* Introduction */}
      <div className="max-w-3xl text-center mb-8">
        <motion.h2 
          className="text-3xl font-semibold text-blue-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Authentic Proofs of Payments
        </motion.h2>
        <p className="text-lg mb-4">
          At Brand Lift Ads Posting, we are committed to transparency. Below, you can find actual payment proofs of our campaigns. These images demonstrate the trust and effectiveness of our services.
        </p>
      </div>

      {/* Images of Payment Proofs */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-10">
        {paymentProofImages.map((image, index) => (
          <motion.div
            key={index}
            className="w-80 h-48 bg-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.05 }} // Stagger animation
          >
            <Image
              src={image} // Dynamically using the image path
              alt={`Payment Proof ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
              layout="responsive" // To ensure the image resizes properly
              width={500} // You can adjust these dimensions based on your design
              height={300} // You can adjust these dimensions based on your design
            />
            <div className="absolute inset-0 bg-black opacity-30 hover:opacity-0 transition-opacity"></div>
          </motion.div>
        ))}
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

export default PaymentsProofsPage;

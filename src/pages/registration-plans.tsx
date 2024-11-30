import React from "react";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon

const RegistrationPlansPage: React.FC = () => {
  const router = useRouter();

  // Array of plans
  const plans = [
    {
      title: "Rs 270 ",
      description: "25 Posts Per Day ",
      price: "100/day",
    },
    {
      title: " 540",
      description: "35 Posts  Per Day",
      price: "200/day",
    },
    {
      title: " 1040",
      description: "45 Posts  Per Day",
      price: "400/day",
    },
    {
      title: "1540",
      description: "55 Posts  Per Day",
      price: "600/day",
    },
    {
      title: "2540",
      description: "65 Posts  Per Day",
      price: "1000/day",
    },
    {
      title: " 3540",
      description:"75 Posts  Per Day",
      price: "1500/day",
    },
  ];

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
      <h1 className="text-5xl font-extrabold text-center mb-6">
        Registration Plans
      </h1>

      {/* Plans Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 w-full max-w-7xl px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white text-blue-600 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-2">{plan.title}</h2>
              <p className="text-lg mb-4">{plan.description}</p>
              <div className="text-3xl font-extrabold mb-4">{plan.price}</div>
            </div>
          </div>
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

export default RegistrationPlansPage;

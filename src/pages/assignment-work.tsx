import React from 'react';
import Link from 'next/link'; // Import the Link component

const AssignmentWork: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center px-6 py-12">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-black mb-6 text-center">
        Assignment Work
      </h1>

      {/* Coming Soon Message */}
      <div className="max-w-3xl text-center mb-8">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          Coming Soon!
        </h2>
        <p className="text-lg text-gray-800">
          We are working on something exciting for Assignment Work! Stay tuned for updates and new features coming your way.
        </p>
      </div>

      {/* Button to go back */}
      <div className="mt-12 text-center">
        <Link href="/">
          <a className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300">
            Go Back to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default AssignmentWork;

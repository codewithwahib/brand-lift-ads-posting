import React from "react";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa"; // Import the left arrow icon

const WorkDetailsPage: React.FC = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center justify-center px-6 py-12 relative">
      {/* Back Arrow Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 text-2xl text-blue-600 hover:text-blue-800"
      >
        <FaArrowLeft />
      </button>

      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-white mb-6 text-center">
        Work Details
      </h1>

      {/* Work Details Content */}
      <div className="max-w-3xl text-center mb-8">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">
          Our Process for Posting Ads and Reporting Back
        </h2>
        <p className="text-lg text-gray-800">
          Here is a detailed overview of how we take ads from the WhatsApp chat with the admin, post them in a Facebook group, and then send the link back to the admin.
        </p>
      </div>

      {/* Steps Section */}
      <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700">
        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Step 1: Receive Ads from Admin on WhatsApp</h3>
          <p>
            The process starts by receiving the ad content (including images, text, and any additional details) from the admin via WhatsApp. We ensure all the required information is clear and ready to be posted.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Step 2: Post Ads to the Facebook Group</h3>
          <p>
            Once the ad content is received, we log into the appropriate Facebook account and navigate to the relevant Facebook group where the ad should be posted. The ad is then shared with an engaging caption, any images, and all the relevant links.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Step 3: Copy the Link of the Post</h3>
          <p>
            After the ad has been posted to the Facebook group, we copy the URL of the post for tracking purposes and to send it back to the admin for their records.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Step 4: Send the Link to the Admin</h3>
          <p>
            The final step is to send the copied Facebook post link back to the admin via WhatsApp or any preferred communication channel. This allows the admin to review the post and ensure everything is in order.
          </p>
        </div>
      </div>

      {/* Back Button (Alternative) */}
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

export default WorkDetailsPage;


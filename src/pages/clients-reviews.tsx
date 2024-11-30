import React from "react";
import { useRouter } from "next/router";
import { FaArrowLeft } from "react-icons/fa"; // Importing back arrow icon

const ClientsReviewsPage: React.FC = () => {
  const router = useRouter();

  // Array of 37 sample client reviews with Muslim names
  const reviews = [
    { name: "Ahmed Khan", review: "Brand Lift Ads helped us streamline our payments process and boosted our conversions.", rating: 5 },
    { name: "Fatima Ali", review: "Amazing results! We noticed a huge improvement in our payment processing after using their service.", rating: 5 },
    { name: "Omar Abdullah", review: "Their team made our payment flows much more efficient. Great work!", rating: 4 },
    { name: "Layla Hassan", review: "Excellent service, and they were quick to help us optimize our payment channels.", rating: 5 },
    { name: "Yusuf Tariq", review: "We’ve seen a massive improvement in the speed and accuracy of our payments.", rating: 5 },
    { name: "Zainab Rahman", review: "The best decision we made was partnering with Brand Lift Ads for payment integration.", rating: 5 },
    { name: "Ali Ibrahim", review: "Their attention to detail in payment systems and ad strategies has been invaluable.", rating: 5 },
    { name: "Aisha Farooq", review: "Efficient service, and we saw a fast turnaround with no issues in our payment processes.", rating: 4 },
    { name: "Imran Khan", review: "Highly recommend them for optimizing digital payments, as they have truly enhanced our systems.", rating: 5 },
    { name: "Mariam Sheikh", review: "Brand Lift Ads provided us with tools to increase our payments conversions significantly.", rating: 5 },
    { name: "Bilal Rahman", review: "Impressive work in improving our financial workflow. Couldn’t be happier with the results.", rating: 5 },
    { name: "Rania Malik", review: "The team understood our needs and helped us streamline our payment methods.", rating: 5 },
    { name: "Samiya Ahmad", review: "We had a smooth experience working with them. Payments were processed faster than expected.", rating: 5 },
    { name: "Khalid Noor", review: "Their expertise in payment systems really helped us scale our business operations.", rating: 5 },
    { name: "Musa Saleem", review: "Their communication and expertise made all the difference in our ad campaigns.", rating: 4 },
    { name: "Sarah Ali", review: "We’ve seen remarkable results in our transactions and conversion rates.", rating: 5 },
    { name: "Nadia Qureshi", review: "Great customer service! We felt supported every step of the way in optimizing our payments.", rating: 5 },
    { name: "Kareem Ansari", review: "Their payment strategies worked wonders for our business, and we saw the ROI immediately.", rating: 5 },
    { name: "Mona Zafar", review: "Brand Lift Ads delivered exceptional results in helping us expand our payment infrastructure.", rating: 5 },
    { name: "Jamal Shafiq", review: "Excellent service. We had no issues with payment processing, and everything ran smoothly.", rating: 5 },
    { name: "Asma Sheikh", review: "We were impressed by how quickly they optimized our payment channels and saw immediate results.", rating: 4 },
    { name: "Faisal Ahmad", review: "They helped us implement a seamless payment process that was easy for both us and our clients.", rating: 5 },
    { name: "Noor Fatima", review: "Their tailored approach to digital marketing and payments really helped us scale.", rating: 5 },
    { name: "Tariq Waseem", review: "We trust Brand Lift Ads for all our payment-related services. Highly reliable.", rating: 5 },
    { name: "Maha Javed", review: "Brand Lift Ads helped us increase payments conversion and enhance our marketing strategy.", rating: 5 },
    { name: "Zahid Khan", review: "I’m so happy with the results. Our business is processing payments much faster now.", rating: 5 },
    { name: "Aminah Butt", review: "Incredible improvement in payment flow after implementing their services.", rating: 5 },
    { name: "Omar Yusuf", review: "Our conversion rate improved dramatically after they optimized our payment system.", rating: 5 },
    { name: "Khalil Ahmed", review: "Highly professional team that boosted both our ad campaigns and payment conversions.", rating: 5 },
    { name: "Salma Noor", review: "Our business has grown, and payments are more secure thanks to their efforts.", rating: 5 },
    { name: "Bilal Zafar", review: "Excellent customer service and timely results. Our payments system is smoother than ever.", rating: 5 },
    { name: "Amina Yousaf", review: "Brand Lift Ads helped us grow our business by streamlining payment methods and increasing ad performance.", rating: 5 },
    { name: "Javed Iqbal", review: "Quick implementation and smooth payment system integration. Very pleased with the outcome.", rating: 4 },
    { name: "Zara Khan", review: "We’ve had nothing but success with the improvements they’ve made to our payments system.", rating: 5 },
    { name: "Faisal Noor", review: "Our payment processes are now much quicker and more efficient. Great service!", rating: 5 },
    { name: "Rida Abbas", review: "Highly recommend Brand Lift Ads for their quick turnaround and effective payment solutions.", rating: 5 },
    { name: "Mohammad Tariq", review: "Thanks to Brand Lift Ads, our payments and marketing campaigns are working seamlessly.", rating: 5 },
    { name: "Samira Iqbal", review: "Our payments system is fully optimized, thanks to the hard work of their team.", rating: 5 },
    { name: "Khadijah Nawaz", review: "We’ve seen a great improvement in our digital presence and payment efficiency.", rating: 5 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white flex flex-col items-center justify-center px-6 py-12 relative">
      {/* Back Arrow */}
      <a
        href="#"
        onClick={() => router.back()}
        className="absolute top-6 left-6 text-3xl text-blue-600 hover:text-blue-800"
      >
        <FaArrowLeft />
      </a>

      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-center mb-6">Clients Reviews</h1>

      {/* Reviews Section */}
      <div className="w-full max-w-4xl space-y-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white text-blue-600 rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-2">{review.name}</h3>
              <p className="text-lg mb-4">{review.review}</p>
              <div className="text-yellow-500">
                {"★".repeat(review.rating)}{" "}
                {"☆".repeat(5 - review.rating)} {/* Display rating stars */}
              </div>
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

export default ClientsReviewsPage;

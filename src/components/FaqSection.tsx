import React from "react";
import { HelpCircle } from "lucide-react"; // Imported HelpCircle icon
import { faqItems } from "../data/content";

const FaqSection: React.FC = () => {
  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-tanayas-100 to-tanayas-200 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tanayas-950 mb-4 dark:text-white">
            Your Questions, Answered
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tanayas-700 to-tanayas-600 mx-auto rounded-full mb-6 dark:from-tanayas-500 dark:to-tanayas-400" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Everything you need to know about fastboat travel, booking, and
            planning your Bali island trip—straight from local experts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden p-6 border border-transparent hover:border-tanayas-300 dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl dark:shadow-gray-950/50 dark:border-gray-700 dark:hover:border-tanayas-800"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start mb-3">
                  <HelpCircle className="w-6 h-6 text-tanayas-600 mr-3 flex-shrink-0 dark:text-tanayas-400" />
                  {/* Added icon */}
                  <h3 className="text-xl font-bold text-tanayas-900 leading-snug dark:text-white">
                    {/* Improved typography */}
                    {item.question}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed pl-9 dark:text-gray-300">
                  {item.answer}
                </p>
                {/* Adjusted padding */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
import React from "react";
import { HelpCircle } from "lucide-react"; // Imported HelpCircle icon
import { faqItems } from "../data/content";

const FAQ: React.FC = () => {
  return (
    <section
      id="faq"
      className="py-20 bg-gradient-to-br from-cyan-50 to-blue-100"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Your Questions, Answered
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about fastboat travel, booking, and
            planning your Bali island trip—straight from local experts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden p-6 border border-transparent hover:border-blue-200" // Added hover border
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start mb-3">
                  <HelpCircle className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" /> {/* Added icon */}
                  <h3 className="text-xl font-bold text-blue-800 leading-snug"> {/* Improved typography */}
                    {item.question}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed pl-9">{item.answer}</p> {/* Adjusted padding */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
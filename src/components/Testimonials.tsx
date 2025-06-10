import React from "react";
import { testimonials } from "../data/content";

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-tanayas-950 mb-4 dark:text-white">
            What Travelers Say About Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-tanayas-700 to-tanayas-600 mx-auto rounded-full mb-6 dark:from-tanayas-400 dark:to-tanayas-400" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Real stories from travelers who made their Bali island adventures
            seamless with our help and local knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-gradient-to-br from-tanayas-50 to-tanayas-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden dark:from-gray-800 dark:to-gray-850 dark:shadow-xl dark:hover:shadow-2xl dark:shadow-gray-950/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-6xl text-tanayas-200 font-serif opacity-50 dark:text-tanayas-800">
                "
              </div>

              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={`Photo of ${testimonial.name}`}
                  className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md dark:border-gray-700"
                  loading="lazy"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-gray-800 text-lg dark:text-white">
                    {testimonial.name}
                  </h3>
                  <div className="flex space-x-1">
                    <span className="sr-only">5 out of 5 stars</span> {/* Visually hidden text for screen readers */}
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed relative z-10 dark:text-gray-300">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
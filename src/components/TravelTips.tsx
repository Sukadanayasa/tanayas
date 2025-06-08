import React from "react";
import { Clock, PackageCheck, Heart, CalendarPlus } from "lucide-react";
import { travelTips } from "../data/content";

const TravelTips: React.FC = () => {
  const iconComponents = {
    Clock,
    PackageCheck,
    Heart,
    CalendarPlus,
  };

  const colorClasses = {
    blue: "from-blue-400 to-blue-500",
    green: "from-green-400 to-green-500",
    red: "from-red-400 to-red-500",
    purple: "from-purple-400 to-purple-500",
  };

  const bgColorClasses = {
    blue: "bg-blue-50 dark:bg-gray-800",
    green: "bg-green-50 dark:bg-gray-800",
    red: "bg-red-50 dark:bg-gray-800",
    purple: "bg-purple-50 dark:bg-gray-800",
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 dark:text-white">
            Pro Tips for Island Hopping
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6 dark:from-blue-400 dark:to-cyan-400" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Get the most out of your fastboat journey with these local,
            expert-backed travel tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {travelTips.map((tip, index) => {
            const IconComponent =
              iconComponents[tip.icon as keyof typeof iconComponents];
            const colorClass =
              colorClasses[tip.color as keyof typeof colorClasses];
            const bgColorClass =
              bgColorClasses[tip.color as keyof typeof bgColorClasses];

            return (
              <div
                key={tip.id}
                className="group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`${bgColorClass} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden dark:shadow-xl dark:hover:shadow-2xl dark:shadow-gray-950/50`}
                >
                  {/* Decorative background element */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/30 rounded-full transform group-hover:scale-110 transition-transform duration-700 dark:bg-gray-700/30" />

                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative z-10`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 relative z-10 dark:text-white">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm relative z-10 dark:text-gray-300">
                    {tip.description}
                  </p>
                  <div className="mt-4 text-xs text-blue-400 font-semibold uppercase tracking-wide dark:text-blue-500">
                    Pro Tip
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TravelTips;
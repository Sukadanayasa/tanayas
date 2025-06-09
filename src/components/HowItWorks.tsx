import React from "react";
import { MessageSquare, Search, CheckCircle } from "lucide-react";

// SEO: Use semantic HTML, concise text, and alt attributes for icons
const steps = [
  {
    icon: MessageSquare,
    title: "Tell Us Your Plans",
    description:
      "Message us your travel dates, destinations, and group size. Takes 30 seconds.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Search,
    title: "We Find the Best Options",
    description:
      "Get real-time schedules, prices, and route recommendations from our local experts.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: CheckCircle,
    title: "Travel with Confidence",
    description:
      "Armed with insider knowledge, enjoy stress-free island hopping across Bali.",
    color: "from-teal-500 to-teal-600",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-gray-900 dark:to-gray-950"
      aria-labelledby="how-it-works-title"
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2
            id="how-it-works-title"
            className="text-3xl font-bold text-blue-900 mb-3 dark:text-white"
          >
            How It Works
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 mx-auto rounded-full mb-4 dark:from-cyan-400 dark:to-blue-400" />
          <p className="text-base text-gray-600 max-w-2xl mx-auto dark:text-gray-400">
            Getting reliable fastboat information shouldn't be complicated.
            Here's how we make it simple.
          </p>
        </header>
        <ol
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          itemScope
          itemType="https://schema.org/HowTo"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <li
                key={step.title}
                className="group text-center relative bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-all duration-300 overflow-hidden dark:bg-gray-800 dark:shadow-xl dark:hover:shadow-2xl dark:shadow-gray-950/50"
                itemProp="step"
                itemScope
                itemType="https://schema.org/HowToStep"
              >
                <meta itemProp="position" content={String(index + 1)} />
                <div
                  className={`mx-auto mb-4 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center w-14 h-14 shadow-lg`}
                >
                  <IconComponent
                    className="w-7 h-7 text-white"
                    aria-hidden="true"
                    focusable="false"
                  />
                </div>
                <h3
                  className="text-lg font-semibold text-gray-800 mb-2 dark:text-white"
                  itemProp="name"
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-gray-300" itemProp="description">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
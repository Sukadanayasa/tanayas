import React from 'react';
import { MessageCircleCode, Compass, PhoneCall } from 'lucide-react';
// import { useLanguage } from '../hooks/useLanguage'; // This hook is not defined in the provided codebase
// import { translations } from '../data/translations'; // This file is not defined in the provided codebase

const About: React.FC = () => {
  // const { currentLanguage } = useLanguage(); // Commented out as useLanguage and translations are not defined
  // const t = translations[currentLanguage]; // Commented out

  // Placeholder for translations if the above are not available
  const t = {
    aboutUsTitle: "Why Choose Tanayas?",
    aboutUsDescription: "At Tanayas, we believe planning your island adventure should be as relaxing as the trip itself. We cut through the noise to give you clear, reliable fastboat information and personalized support.",
    personalizedServiceTitle: "Personalized Service",
    personalizedServiceDesc: "Get one-on-one assistance from local experts who understand your travel needs and preferences.",
    expertAdviceTitle: "Expert Local Advice",
    expertAdviceDesc: "Benefit from insider tips on routes, schedules, and hidden gems only locals know.",
    easyCommunicationTitle: "Easy Communication",
    easyCommunicationDesc: "Reach us instantly via WhatsApp for quick answers and real-time updates.",
  };

  const features = [
    {
      icon: MessageCircleCode,
      title: t.personalizedServiceTitle,
      description: t.personalizedServiceDesc,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Compass,
      title: t.expertAdviceTitle,
      description: t.expertAdviceDesc,
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: PhoneCall,
      title: t.easyCommunicationTitle,
      description: t.easyCommunicationDesc,
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6 dark:text-white">
            {t.aboutUsTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-8 dark:from-blue-400 dark:to-cyan-400" />
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed dark:text-gray-400">
            {t.aboutUsDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden dark:from-gray-800 dark:to-gray-850 dark:shadow-xl dark:hover:shadow-2xl dark:shadow-gray-950/50">
                  {/* Decorative background element */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-30 transform group-hover:scale-110 transition-transform duration-700 dark:from-blue-800 dark:to-cyan-800 dark:opacity-20" />
                  
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
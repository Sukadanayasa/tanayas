import React from 'react';
import { MessageCircleCode, Compass, PhoneCall } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const About: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

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
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            {t.aboutUsTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                  {/* Decorative background element */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-30 transform group-hover:scale-110 transition-transform duration-700" />
                  
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">
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
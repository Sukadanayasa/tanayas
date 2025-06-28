import React from 'react';
import { MessageCircleCode, Compass, PhoneCall, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
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
      color: 'from-gold-500 to-gold-600',
      stats: '24/7 Support'
    },
    {
      icon: Compass,
      title: t.expertAdviceTitle,
      description: t.expertAdviceDesc,
      color: 'from-gold-400 to-gold-500',
      stats: '17+ Years Experience'
    },
    {
      icon: PhoneCall,
      title: t.easyCommunicationTitle,
      description: t.easyCommunicationDesc,
      color: 'from-gold-600 to-gold-700',
      stats: '< 5 Min Response'
    }
  ];

  const stats = [
    { icon: Users, number: '10,000+', label: 'Happy Travelers' },
    { icon: Award, number: '17+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Customer Support' },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 via-white to-gold-50/30 dark:from-gray-900 dark:via-black dark:to-gray-950">
      <div className="container mx-auto px-6 max-w-page-max">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            <span>About Tanayas</span>
          </div>
          
          <h2 className="heading-lg text-gray-900 mb-6 dark:text-white">
            Why Choose 
            <span className="text-gradient"> Tanayas?</span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 mx-auto rounded-full mb-8 shadow-gold" />
          
          <p className="text-body text-gray-600 max-w-4xl mx-auto leading-relaxed dark:text-gray-300">
            {t.aboutUsDescription}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2 dark:text-white">{stat.number}</div>
                <div className="text-gray-600 font-medium dark:text-gray-300">{stat.label}</div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative bg-white rounded-3xl p-10 shadow-soft hover:shadow-gold card-hover overflow-hidden dark:bg-gray-800 dark:shadow-xl">
                  {/* Background Pattern */}
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-gold-100 to-gold-200 rounded-full opacity-20 transform group-hover:scale-125 transition-transform duration-700 dark:from-gold-800 dark:to-gold-700 dark:opacity-10" />
                  
                  {/* Icon Container */}
                  <div className="relative z-10 mb-8">
                    <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <IconComponent className="w-12 h-12 text-white" />
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {feature.stats}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 relative z-10 dark:text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed relative z-10 dark:text-gray-300">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-50/50 to-gold-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-3xl p-12 text-white shadow-gold">
            <div className="max-w-3xl mx-auto">
              <Award className="w-12 h-12 mx-auto mb-6 animate-pulse" />
              <h3 className="text-3xl font-bold mb-4">Ready to Experience the Tanayas Difference?</h3>
              <p className="text-xl mb-8 text-gold-100">
                Join thousands of satisfied travelers who trust us for their island adventures. 
                Let us make your next trip unforgettable.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-gold-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
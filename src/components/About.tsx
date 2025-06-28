import React from 'react';
import { MessageCircleCode, Compass, PhoneCall, Award, Users, Clock, Shield, Heart } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: MessageCircleCode,
      title: "Personalized Service",
      description: "Get one-on-one assistance from local experts who understand your travel needs and preferences.",
      color: 'from-blue-500 to-blue-600',
      stats: '24/7 Support'
    },
    {
      icon: Compass,
      title: "Expert Local Advice",
      description: "Benefit from insider tips on routes, schedules, and hidden gems only locals know.",
      color: 'from-green-500 to-green-600',
      stats: '17+ Years Experience'
    },
    {
      icon: PhoneCall,
      title: "Easy Communication",
      description: "Reach us instantly via WhatsApp for quick answers and real-time updates.",
      color: 'from-purple-500 to-purple-600',
      stats: '< 5 Min Response'
    }
  ];

  const stats = [
    { icon: Users, number: '10,000+', label: 'Happy Travelers', color: 'text-blue-600' },
    { icon: Award, number: '17+', label: 'Years Experience', color: 'text-green-600' },
    { icon: Shield, number: '100%', label: 'Safe & Secure', color: 'text-purple-600' },
    { icon: Heart, number: '4.9/5', label: 'Customer Rating', color: 'text-red-600' },
  ];

  return (
    <section id="about" className="section-spacing bg-gradient-modern dark:bg-gradient-modern-dark">
      <div className="container mx-auto px-6 max-w-page-max">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-slide-up">
            <Award className="w-4 h-4" />
            <span>About Tanayas</span>
          </div>
          
          <h2 className="heading-section text-gray-900 mb-6 dark:text-white animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Why Choose
            <span className="text-gradient block mt-2">Tanayas?</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }} />
          
          <p className="text-large text-gray-600 max-w-4xl mx-auto leading-relaxed dark:text-gray-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            At Tanayas, we believe planning your island adventure should be as relaxing as the trip itself. 
            We cut through the noise to give you clear, reliable fastboat information and personalized support.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-modern hover:shadow-gold-modern card-modern dark:bg-gray-800">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${stat.color} bg-opacity-10`}>
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2 dark:text-white">{stat.number}</div>
                  <div className="text-gray-600 font-medium dark:text-gray-300">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-modern hover:shadow-gold-modern card-modern dark:bg-gray-800">
                  {/* Icon Container */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* Stats Badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {feature.stats}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10 dark:text-white">
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

        {/* CTA Section */}
        <div className="text-center animate-slide-up">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 text-white shadow-gold-modern max-w-4xl mx-auto">
            <Award className="w-12 h-12 mx-auto mb-6 animate-pulse-custom" />
            <h3 className="text-3xl font-bold mb-4">Ready to Experience the Tanayas Difference?</h3>
            <p className="text-xl mb-8 text-gold-100 max-w-2xl mx-auto">
              Join thousands of satisfied travelers who trust us for their island adventures. 
              Let us make your next trip unforgettable.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-gold-600 hover:bg-gray-50 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
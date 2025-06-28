import React from "react";
import { Mail, Clock, MessageCircle, Phone, MapPin, Star, Zap, Shield } from "lucide-react";

const Contact: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/6281234567890?text=Hi%20Tanayas!%20I%20need%20fastboat%20information%20for%20my%20trip.%20Can%20you%20help%3F";
  const emailUrl =
    "mailto:info@balifastboat.com?subject=Fastboat Information Request";

  return (
    <section
      id="contact"
      className="section-spacing bg-white dark:bg-black"
    >
      <div className="container mx-auto px-6 max-w-page-max">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-slide-up">
            <MessageCircle className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          
          <h2 className="heading-section text-gray-900 mb-6 dark:text-white animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Ready for Your
            <span className="text-gradient block mt-2">Island Escape?</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto rounded-full mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }} />
          
          <p className="text-large text-gray-600 max-w-4xl mx-auto leading-relaxed dark:text-gray-300 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Connect with our local experts for real-time fastboat schedules, personalized routes, and insider tips. 
            We make island hopping effortless and unforgettable.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* WhatsApp Card */}
          <div className="group card-modern p-8 animate-slide-left">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">WhatsApp Chat</h3>
              <p className="text-gray-600 mb-6 dark:text-gray-300">Get instant responses from our local experts</p>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Zap className="w-4 h-4 text-green-500" />
                  <span>Instant responses</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-green-500" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Secure & private</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn btn-primary bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 text-lg"
              >
                <span className="flex items-center space-x-3">
                  <span className="w-6 h-6 block group-hover/btn:scale-110 transition-transform duration-300">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 fill-current"
                    >
                      <title>WhatsApp</title>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>
                  <span>Chat on WhatsApp</span>
                </span>
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="group card-modern p-8 animate-slide-right">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Email Support</h3>
              <p className="text-gray-600 mb-6 dark:text-gray-300">Send detailed inquiries and get comprehensive responses</p>
              
              {/* Features */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-gold-500" />
                  <span>Response within 2 hours</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4 text-gold-500" />
                  <span>Detailed information</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-gold-500" />
                  <span>Professional service</span>
                </div>
              </div>

              <a
                href={emailUrl}
                className="group/btn btn-primary px-8 py-4 text-lg"
              >
                <span className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-300" />
                  <span>Send Email</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center animate-slide-up">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 text-white shadow-gold-modern max-w-5xl mx-auto">
            <Star className="w-12 h-12 mx-auto mb-6 animate-pulse-custom" />
            <h3 className="text-3xl font-bold mb-6">Why Travelers Choose Tanayas</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Free Service</div>
                <div className="text-gold-100 text-sm">No hidden fees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Local Experts</div>
                <div className="text-gold-100 text-sm">17+ years experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">10K+ Travelers</div>
                <div className="text-gold-100 text-sm">Worldwide trust</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">4.9/5 Rating</div>
                <div className="text-gold-100 text-sm">Customer satisfaction</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-gold-100">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Based in Bali</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Safe & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
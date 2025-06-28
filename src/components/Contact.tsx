import React from "react";
import { Mail, Clock, MessageCircle, Phone, MapPin, Star } from "lucide-react";

const Contact: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/6281234567890?text=Hi%20Tanayas!%20I%20need%20fastboat%20information%20for%20my%20trip.%20Can%20you%20help%3F";
  const emailUrl =
    "mailto:info@balifastboat.com?subject=Fastboat Information Request";

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-br from-white via-gold-50/30 to-gray-50 dark:from-black dark:via-gray-950 dark:to-gray-900"
    >
      <div className="container mx-auto px-6 max-w-page-max">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gold-100 text-gold-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MessageCircle className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          
          <h2 className="heading-lg text-gray-900 mb-6 dark:text-white">
            Ready for Your 
            <span className="text-gradient"> Seamless Island Escape?</span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-400 mx-auto rounded-full mb-8 shadow-gold" />
          
          <p className="text-body text-gray-600 max-w-4xl mx-auto leading-relaxed dark:text-gray-300">
            Connect with our local experts for real-time fastboat schedules, personalized routes, and insider tips. We make island hopping effortless and unforgettable.
          </p>
        </div>

        {/* Enhanced Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* WhatsApp Card */}
          <div className="group bg-white rounded-3xl p-10 shadow-soft hover:shadow-gold card-hover dark:bg-gray-800 dark:shadow-xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">WhatsApp Chat</h3>
              <p className="text-gray-600 mb-6 dark:text-gray-300">Get instant responses from our local experts</p>
              
              {/* Response Time Badge */}
              <div className="inline-flex items-center space-x-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Clock className="w-4 h-4" />
                <span>Usually respond within 5 minutes</span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
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
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="group bg-white rounded-3xl p-10 shadow-soft hover:shadow-gold card-hover dark:bg-gray-800 dark:shadow-xl">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 dark:text-white">Email Support</h3>
              <p className="text-gray-600 mb-6 dark:text-gray-300">Send us detailed inquiries and get comprehensive responses</p>
              
              {/* Response Time Badge */}
              <div className="inline-flex items-center space-x-2 bg-gold-50 text-gold-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <Clock className="w-4 h-4" />
                <span>Response within 2 hours</span>
              </div>

              <a
                href={emailUrl}
                className="group/btn inline-flex items-center space-x-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-300" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Enhanced Trust Indicators */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-3xl p-12 text-center text-white shadow-gold">
          <div className="max-w-4xl mx-auto">
            <Star className="w-12 h-12 mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-bold mb-6">Why Travelers Choose Tanayas</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Free Service</div>
                <div className="text-gold-100">No hidden fees or charges</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Local Experts</div>
                <div className="text-gold-100">17+ years of experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">Trusted by 10K+</div>
                <div className="text-gold-100">Happy travelers worldwide</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 text-gold-100">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="w-px h-4 bg-gold-300"></div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Based in Bali</span>
              </div>
              <div className="w-px h-4 bg-gold-300"></div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
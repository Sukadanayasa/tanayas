import React from "react";
import { MessageCircle, Mail, Clock } from "lucide-react";

const Contact: React.FC = () => {
  const whatsappUrl =
    "https://wa.me/6281234567890?text=Hi%20Tanayas!%20I%20need%20fastboat%20information%20for%20my%20trip.%20Can%20you%20help%3F";
  const emailUrl =
    "mailto:info@balifastboat.com?subject=Fastboat Information Request";

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden dark:from-gray-900 dark:via-gray-950 dark:to-black"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 dark:bg-gray-700" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-300 rounded-full transform translate-x-1/2 translate-y-1/2 dark:bg-cyan-600" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Plan Your Island Adventure?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8 dark:text-gray-300">
            Get instant access to real-time fastboat schedules, the best routes,
            and honest local advice. No spam, no pressure—just expert help when
            you need it.
          </p>

          {/* Response time indicator */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 dark:bg-gray-700/20">
            <Clock className="w-4 h-4 text-cyan-300 dark:text-cyan-400" />
            <span className="text-sm text-cyan-100 dark:text-cyan-300">
              Usually respond within 5 minutes
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 max-w-4xl mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 bg-white text-blue-700 px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-white/25 transform hover:scale-105 transition-all duration-300 ease-out w-full md:w-auto justify-center dark:bg-gray-700 dark:text-white dark:hover:shadow-gray-600/25"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>WhatsApp (Fastest)</span>
          </a>

          <a
            href={emailUrl}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 ease-out w-full md:w-auto justify-center dark:from-blue-700 dark:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900 dark:shadow-lg dark:hover:shadow-blue-700/25"
          >
            <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span>Send Email</span>
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-blue-200 text-sm dark:text-blue-300">
            Free service • No spam • Trusted by 10,000+ travelers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
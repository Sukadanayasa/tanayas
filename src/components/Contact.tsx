import React from "react";
import { Mail, Clock } from "lucide-react";

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
            className="group inline-flex items-center space-x-3 bg-green-500 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 ease-out w-full md:w-auto justify-center dark:bg-green-600 dark:hover:shadow-green-600/25"
          >
            {/* WhatsApp SVG Icon */}
            <span className="w-6 h-6 block group-hover:scale-110 transition-transform duration-300">
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
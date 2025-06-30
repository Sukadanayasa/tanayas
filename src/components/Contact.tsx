import React from "react";
import { Mail, Clock } from "lucide-react";

const Contact = () => {
  const whatsappUrl =
    "https://wa.me/6281234567890?text=Hi%20Tanayas!%20I%20need%20fastboat%20information%20for%20my%20trip.%20Can%20you%20help%3F";
  const emailUrl =
    "mailto:info@balifastboat.com?subject=Fastboat Information Request";

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-white to-gold-50 dark:from-black dark:to-gray-950" // Light gradient background
    >
      <div className="container mx-auto px-4 max-w-page-max">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white"> {/* Adjusted title color */}
            Ready for Your Seamless Island Escape?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8 dark:text-gray-300"> {/* Adjusted text color */}
            Connect with our local experts for real-time fastboat schedules, personalized routes, and insider tips. We make island hopping effortless and unforgettable.
          </p>

          {/* Response time indicator */}
          <div className="inline-flex items-center space-x-2 bg-gold-100/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8 dark:bg-gray-800"> {/* Adjusted background and text color */}
            <Clock className="w-4 h-4 text-gold-700 dark:text-gold-400" /> {/* Adjusted icon color */}
            <span className="text-sm text-gold-700 dark:text-gray-300"> {/* Adjusted text color */}
              Usually respond within 5 minutes
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8 max-w-4xl mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-3 bg-green-500 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 ease-out w-full md:w-auto justify-center"
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
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-gold-700 to-gold-800 hover:from-gold-800 hover:to-gold-900 text-white px-10 py-5 rounded-full font-semibold text-lg shadow-2xl hover:shadow-gold-500/25 transform hover:scale-105 transition-all duration-300 ease-out w-full md:w-auto justify-center"
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span>Send Email</span>
            </a>
          </div>

          <div className="text-center mt-8">
            <p className="text-gold-700 text-sm dark:text-gold-400"> {/* Adjusted text color */}
              Free, personalized service • No hidden fees • Trusted by thousands of travelers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
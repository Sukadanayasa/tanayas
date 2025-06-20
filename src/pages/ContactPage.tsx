import React from 'react';
import Contact from '../components/Contact'; // Import the existing Contact component

const ContactPage: React.FC = () => {
  return (
    <div className="pt-16"> {/* Add padding-top to account for fixed header */}
      <Contact />
    </div>
  );
};

export default ContactPage;
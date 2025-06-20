import React from 'react';
import About from '../components/About'; // Import the existing About component

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16"> {/* Add padding-top to account for fixed header */}
      <About />
    </div>
  );
};

export default AboutPage;
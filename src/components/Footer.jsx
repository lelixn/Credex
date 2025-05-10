import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-16">
      <p className="text-sm">&copy; {new Date().getFullYear()} SoftSell. All rights reserved.</p>
      <p className="text-xs mt-2">
        Built with ❤️ during Credex Internship Assignment
      </p>
    </footer>
  );
};

export default Footer;

import React from 'react';
import codeverLogo from '../assets/footer/codever.png';
import marketguruLogo from '../assets/footer/marketguru.png';
import rosembergLogo from '../assets/footer/rosemberg.dev.png';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtém o ano atual

  return (
    <footer className="py-5 bg-gray-900 flex justify-between items-center">
      <p className="text-white ml-5">
        &copy; 2018-{currentYear} PEDRO ROSEMBERG. <i>Versão 1.3</i>
      </p>
      <div className="flex items-center mr-5">
        <a href="https://dev.pedrorosemberg.com" target="_blank" rel="noopener noreferrer">
          <img src={rosembergLogo} alt="dev.pedrorosemberg.com" className="h-8 mx-2" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
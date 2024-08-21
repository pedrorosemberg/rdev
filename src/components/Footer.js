import React from 'react';
import codeverLogo from '../assets/footer/codever.png';
import marketguruLogo from '../assets/footer/marketguru.png';
import rosembergLogo from '../assets/footer/rosemberg.dev.png';

const Footer = () => {
  return (
    <footer className="py-5 bg-gray-900 flex justify-between items-center">
      <p className="text-white ml-5">&copy;2024 PEDRO ROSEMBERG.    <i>Versão 1.2</i></p>
      <div className="flex items-center mr-5">
        <a href="https://www.codever.com.br" target="_blank" rel="noopener noreferrer">
          <img src={codeverLogo} alt="Codever" className="h-8 mx-2" />
        </a>
        <a href="https://www.marketguru.com.br" target="_blank" rel="noopener noreferrer">
          <img src={marketguruLogo} alt="Marketguru" className="h-8 mx-2" />
        </a>
        <a href="https://www.pedrorosemberg.com" target="_blank" rel="noopener noreferrer">
          <img src={rosembergLogo} alt="Rosemberg.dev" className="h-8 mx-2" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
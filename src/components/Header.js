import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center p-5 bg-gray-900">
      <div className="logo text-2xl font-bold text-teal-400">
        <img src="./dev.png" alt="Logo do Pedro Rosemberg" className="w-1/2 md:w-1/4" />
      </div>
      <nav className="flex items-center">
        <button onClick={toggleMenu} className="text-white md:hidden">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row list-none md:space-x-5`}
        >
          <li><a className="text-white hover:border-b-2 border-teal-400" href="#sobre">Portfolio</a></li>
          <li><a className="text-white hover:border-b-2 border-teal-400" href="#tecnologias">Skills</a></li>
          <li><a className="text-white hover:border-b-2 border-teal-400" href="#formacao">Currículo</a></li>
          <li><a className="text-white hover:border-b-2 border-teal-400" href="#projetos-pessoais">Projetos</a></li>
          <li><a className="text-white hover:border-b-2 border-teal-400" href="#clientes">Clientes</a></li>
          <li><a className="text-white hover:border-b-2 border-teal-400" href="#parceiros">Parceiros</a></li>
          <li><a className="text-white hover:border-b-2 border-teal-400" href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

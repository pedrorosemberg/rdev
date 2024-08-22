import React, { useState } from 'react';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-5">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-2xl">Meu Portfólio</h1>
        <button onClick={toggleMenu} className="text-white md:hidden">
          {isOpen ? 'Fechar' : 'Menu'}
        </button>
      </div>
      <ul className={`flex flex-col md:flex-row md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li className="text-white p-2"><a href="#cursos">Cursos</a></li>
        <li className="text-white p-2"><a href="#tecnologias">Tecnologias</a></li>
        <li className="text-white p-2"><a href="#clientes">Clientes</a></li>
        <li className="text-white p-2"><a href="#formacao">Formação</a></li>
        <li className="text-white p-2"><a href="#projetos-profissionais">Projetos Profissionais</a></li>
        <li className="text-white p-2"><a href="#projetos-pessoais">Projetos Pessoais</a></li>
      </ul>
    </nav>
  );
};

export default Menu;
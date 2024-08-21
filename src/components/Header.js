import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 bg-gray-900">
      <div className="logo text-2xl font-bold text-teal-400">
        <img src="./dev.png" alt="Logo do Pedro Rosemberg" width="260px" />
      </div>
      <nav>
        <ul className="flex list-none">
          <li className="ml-5"><a className="text-white hover:border-b-2 border-teal-400" href="#sobre">Sobre</a></li>
          <li className="ml-5"><a className="text-white hover:border-b-2 border-teal-400" href="#formacao">Currículo</a></li>
          <li className="ml-5"><a className="text-white hover:border-b-2 border-teal-400" href="#projetos-pessoais">Projetos</a></li>
          <li className="ml-5"><a className="text-white hover:border-b-2 border-teal-400" href="#clientes">Clientes</a></li>
          <li className="ml-5"><a className="text-white hover:border-b-2 border-teal-400" href="#parceiros">Parceiros</a></li>
          <li className="ml-5"><a className="text-white hover:border-b-2 border-teal-400" href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
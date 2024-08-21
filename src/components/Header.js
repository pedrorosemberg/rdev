import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="dev.png" alt="Logo do Pedro Rosemberg" width="260px" />
      </div>
      <nav>
        <ul>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#curriculo">Currículo</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#clientes">Clientes</a></li>
          <li><a href="#parceiros">Parceiros</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
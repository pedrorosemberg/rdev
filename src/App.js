import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Formacao from './components/Formacao';
import Experiencias from './components/Experiencias';
import Cursos from './components/Cursos';
import ProjetosPessoais from './components/ProjetosPessoais';
import ProjetosProfissionais from './components/ProjetosProfissionais';
import Clientes from './components/Clientes';
import Parceiros from './components/Parceiros';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Tecnologias from './components/Tecnologias';
import Menu from './components/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Tecnologias />
      <Sobre />
      <Formacao />
      <Experiencias />
      <Cursos />
      <ProjetosPessoais />
      <ProjetosProfissionais />
      <Clientes />
      <Parceiros />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
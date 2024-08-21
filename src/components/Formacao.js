import React from 'react';
import anhangueraLogo from '../assets/formacao/anhanguera.png';
import cefetLogo from '../assets/formacao/cefetmg.png';
import famefLogo from '../assets/formacao/famef.png';
import faculdadeMetropolitanaLogo from '../assets/formacao/faculdadeMetropolitana.png';
import uniaselviLogo from '../assets/formacao/uniaselvi.png';

const Formacao = () => {
  return (
    <section id="formacao" className="py-10 px-5 bg-gray-800">
      <h2 className="text-3xl text-teal-400">Formação Acadêmica</h2>
      <div className="mt-5 flex flex-col items-center">
        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-md">
          <div className="flex items-center">
            <img src={anhangueraLogo} alt="Anhanguera" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">Anhanguera Educacional</h3>
          </div>
          <p className="text-white text-left">Engenharia de Software</p>
          <p className="text-white text-left">(julho de 2024)</p>
        </div>

        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-md">
          <div className="flex items-center">
            <img src={cefetLogo} alt="CEFET" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">CEFET-MG</h3>
          </div>
          <p className="text-white text-left">Aluno Especial do Programa de Mestrado em Administração</p>
          <p className="text-white text-left">(julho de 2024)</p>
        </div>

        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-md">
          <div className="flex items-center">
            <img src={famefLogo} alt="FAMEF" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">FAMEF</h3>
          </div>
          <p className="text-white text-left">Pós-graduação em Psicanálise Clínica</p>
          <p className="text-white text-left">(junho de 2024)</p>
        </div>

        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-md">
          <div className="flex items-center">
            <img src={faculdadeMetropolitanaLogo} alt="Faculdade Metropolitana" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">Faculdade Metropolitana</h3>
          </div>
          <p className="text-white text-left">Extensão Universitária em Fundamentos da Psicanálise</p>
          <p className="text-white text-left">(junho de 2023 - agosto de 2023)</p>
        </div>

        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-md">
          <div className="flex items-center">
            <img src={uniaselviLogo} alt="UNIASSELVI" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">UNIASSELVI</h3>
          </div>
          <p className="text-white text-left">MBA em Gestão Comercial e Inteligência de Mercado</p>
          <p className="text-white text-left">(julho de 2023 - novembro de 2023)</p>
        </div>

        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-md">
          <div className="flex items-center">
            <img src={uniaselviLogo} alt="UNIASSELVI" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">UNIASSELVI</h3>
          </div>
          <p className="text-white text-left">Pós-graduação em Marketing, Criatividade e Inovação</p>
          <p className="text-white text-left">(janeiro de 2023 - junho de 2023)</p>
        </div>

        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-md">
          <div className="flex items-center">
            <img src={uniaselviLogo} alt="UNIASSELVI" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">UNIASSELVI</h3>
          </div>
          <p className="text-white text-left">Graduação - CST Marketing</p>
          <p className="text-white text-left">(julho de 2020 - dezembro de 2022)</p>
        </div>

        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-md">
          <div className="flex items-center">
            <img src={cefetLogo} alt="CEFET-MG" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">CEFET-MG</h3>
          </div>
          <p className="text-white text-left">Bacharelado em Letras</p>
          <p className="text-white text-left">(janeiro de 2019 - dezembro de 2022)</p>
        </div>
      </div>
      
    </section>
  );
};

export default Formacao;
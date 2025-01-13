import React, { useState } from 'react';
import cefetmg from '../assets/experiencias/cefetmg.png';
import cedin from '../assets/experiencias/cedin.png';
import in8 from '../assets/experiencias/in8.png';
import ayron from '../assets/experiencias/ayron.png';
import marketguru from '../assets/experiencias/marketguru.png';
import pensi from '../assets/experiencias/pensi.png';
import tecnoveste from '../assets/experiencias/tecnoveste.png';

const Experiencias = () => {
  const [openExperience, setOpenExperience] = useState(null);

  const toggleExperience = (index) => {
    setOpenExperience(openExperience === index ? null : index);
  };

  return (
    <section id="experiencias" className="py-10 px-5 bg-gray-800">
      <h2 className="text-3xl text-teal-400">Experiências</h2>
      <p className="text-lg">Minhas experiências profissionais.</p>
      <div className="mt-5 flex flex-col items-center">

        <div className="relative bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2">
          <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full"></div>
          <div className="flex items-center cursor-pointer" onClick={() => toggleExperience(0)}>
            <img src={marketguru} alt="MarketGuru" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">MarketGuru</h3>
          </div>
          {openExperience === 0 && (
            <>
              <p className="text-white text-left">Cargo: Assessor Especialista de Marketing</p>
              <p className="text-white text-left">(jan de 2023 - atualmente)</p>
            </>
          )}
        </div>

        <div className="relative bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2">
          <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full"></div>
          <div className="flex items-center cursor-pointer" onClick={() => toggleExperience(1)}>
            <img src={ayron} alt="Ayron Energia" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">Ayron Energia</h3>
          </div>
          {openExperience === 1 && (
            <>
              <p className="text-white text-left">Cargo: Diretor de Marketing</p>
              <p className="text-white text-left">(fev de 2024 - abr de 2024)</p>
            </>
          )}
        </div>

        <div className="relative bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2">
          <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full"></div>
          <div className="flex items-center cursor-pointer" onClick={() => toggleExperience(2)}>
            <img src={in8} alt="Super Jovem" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">Super Jovem</h3>
          </div>
          {openExperience === 2 && (
            <>
              <p className="text-white text-left">Cargo: Diretor de Criação e Qualidade</p>
              <p className="text-white text-left">(jun de 2022 - set de 2023)</p>
              <p className="text-white text-left">Cargo: Roteirista</p>
              <p className="text-white text-left">(out de 2021 - jun de 2022)</p>
            </>
          )}
        </div>

        <div className="relative bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2">
          <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full"></div>
          <div className="flex items-center cursor-pointer" onClick={() => toggleExperience(3)}>
            <img src={in8} alt="IN8" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">IN8</h3>
          </div>
          {openExperience === 3 && (
            <>
              <p className="text-white text-left">Cargo: Produtor de Conteúdo</p>
              <p className="text-white text-left">(jan de 2024 - ago de 2024)</p>
              <p className="text-white text-left">Cargo: Estagiário de Growth Hacking</p>
              <p className="text-white text-left">(junho de 2022 - set de 2023)</p>
            </>
          )}
        </div>

        <div className="relative bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2">
          <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full"></div>
          <div className="flex items-center cursor-pointer" onClick={() => toggleExperience(4)}>
            <img src={cedin} alt="CoopMais" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">CoopMais</h3>
          </div>
          {openExperience === 4 && (
            <>
              <p className="text-white text-left">Cargo: Head de Comunicação</p>
              <p className="text-white text-left">(mar de 2022 - mai de 2022)</p>
            </>
          )}
        </div>

        <div className="relative bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2">
          <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full"></div>
          <div className="flex items-center cursor-pointer" onClick={() => toggleExperience(5)}>
            <img src={cedin} alt="CEDIN" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">CEDIN</h3>
          </div>
          {openExperience === 5 && (
            <>
              <p className="text-white text-left">Cargo: Analista de Marketing e Comunicação</p>
              <p className="text-white text-left">(set de 2020 - set de 2021)</p>
              <p className="text-white text-left">Cargo: Professor Convidado</p>
              <p className="text-white text-left">(jan de 2021 - mar de 2021)</p>
              <p className="text-white text-left">Cargo: Gestor de Redes Sociais</p>
              <p className="text-white text-left">(jun de 2020 - ago de 2020)</p>
            </>
          )}
        </div>

        <div className="relative bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2">
          <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full"></div>
          <div className="flex items-center cursor-pointer" onClick={() => toggleExperience(6)}>
            <img src={tecnoveste} alt="Tecnoveste" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">Tecnoveste</h3>
          </div>
          {openExperience === 6 && (
            <>
              <p className="text-white text-left">Cargo: Produtor de Conteúdo</p>
              <p className="text-white text-left">(out de 2019 - set de 2021)</p>
            </>
          )}
        </div>

        <div className="relative bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2">
          <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-teal-400 rounded-full"></div>
          <div className="flex items-center cursor-pointer" onClick={() => toggleExperience(7)}>
            <img src={cefetmg} alt="CEFET-MG" className="h-8 mr-3" />
            <h3 className="text-xl text-teal-400">CEFET-MG</h3>
          </div>
          {openExperience === 7 && (
            <>
              <p className="text-white text-left">Cargo: Bolsista do PRODEP</p>
              <p className="text-white text-left">(fev de 2020 - jul de 2020)</p>
              <p className="text-white text-left">Cargo: Estagiário da Biblioteca Universitária</p>
              <p className="text-white text-left">(set de 2019 - jan de 2020)</p>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experiencias;
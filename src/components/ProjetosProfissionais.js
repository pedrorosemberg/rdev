import React from 'react';

// Importando todas as imagens da pasta
import barceminas from '../assets/projetos-profissionais/barceminas.png';
import cassino from '../assets/projetos-profissionais/cassino-sj.png';
import cedincast from '../assets/projetos-profissionais/cedincast.png';
import cedin from '../assets/projetos-profissionais/cedin.png';
import neonmaker from '../assets/projetos-profissionais/neonmaker.png';
import risin from '../assets/projetos-profissionais/risin.png';
import spide from '../assets/projetos-profissionais/spide.png';
import superjovemExec from '../assets/projetos-profissionais/superjovem-exec.png';
import superjovemPodcast from '../assets/projetos-profissionais/superjovem-podcast.png';
import seekpay from '../assets/projetos-profissionais/seekpay-bg-green_light.png';
import winterCourse from '../assets/projetos-profissionais/winter-course.png';
import superjovem1 from "../assets/projetos-profissionais/superjovem1.png";


const ProjetosProfissionais = () => {
  return (
    <section id="projetos-profissionais" className="py-10 px-5 bg-gray-800">
      <h2 className="text-3xl text-teal-400">Projetos Profissionais</h2>
      <div className="mt-5 p-4 bg-gray-700 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <img src={barceminas} alt="Barceminas" className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105" />
          <img src={cassino} alt="Cassino SJ" className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105" />
          <img src={cedincast} alt="Cedincast" className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105" />
          <img src={cedin} alt="CEDIN" className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105" />
          <img src={neonmaker} alt="Neon Maker" className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105" />
          <img src={risin} alt="Risin" className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105" />
          <img src={spide} alt="Spide" className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105" />
          <img src={superjovem1} alt="Super Jovem Exec" className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105" />
          <img src={superjovemExec} alt="Super Jovem Exec" className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105" />
          <img src={superjovemPodcast} alt="Super Jovem Podcast" className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105" />
          <img src={seekpay} alt="Tecnoveste" className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105" />
          <img src={winterCourse} alt="Curso de Inverno" className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </section>
  );
};

export default ProjetosProfissionais;
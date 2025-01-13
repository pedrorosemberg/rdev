import React from 'react';
import ayron from '../assets/clientes/ayron.png';
import cdi from '../assets/clientes/cdi.png';
import cedin from '../assets/clientes/cedin.png';
import in8 from '../assets/clientes/in8.png';
import kas from '../assets/clientes/kas.png';
import pensi from '../assets/clientes/pensi.png';
import curamente from '../assets/clientes/curamente.png';

const Clientes = () => {
  return (
    <section id="clientes" className="py-10 px-5 bg-gray-800">
      <h2 className="text-3xl text-teal-400 m-10">Clientes</h2>
      <h3 className="text-xl text-teal-400 mb-4">Clientes de Marketing</h3>
      <div className="mt-5 flex flex-wrap justify-center">
        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2 relative">
          <span className="bg-orange-200 text-orange-800 py-1 px-2 rounded-full text-xs absolute top-2 right-2">Marketing</span>
          <img src={ayron} alt="Ayron" className="h-8 mx-auto" />
        </div>
        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2 relative">
          <span className="bg-orange-200 text-orange-800 py-1 px-2 rounded-full text-xs absolute top-2 right-2">Marketing</span>
          <img src={cdi} alt="CDI" className="h-8 mx-auto" />
        </div>
        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2 relative">
          <span className="bg-orange-200 text-orange-800 py-1 px-2 rounded-full text-xs absolute top-2 right-2">Marketing</span>
          <img src={cedin} alt="CEDIN" className="h-8 mx-auto" />
        </div>
        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2 relative">
          <span className="bg-orange-200 text-orange-800 py-1 px-2 rounded-full text-xs absolute top-2 right-2">Conteúdo</span>
          <img src={in8} alt="IN8" className="h-8 mx-auto" />
        </div>
        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2 relative">
          <span className="bg-orange-200 text-orange-800 py-1 px-2 rounded-full text-xs absolute top-2 right-2">Marketing</span>
          <img src={kas} alt="KAS" className="h-8 mx-auto" />
        </div>
        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2 relative">
          <span className="bg-orange-200 text-orange-800 py-1 px-2 rounded-full text-xs absolute top-2 right-2">Marketing</span>
          <img src={pensi} alt="Pensi" className="h-8 mx-auto" />
        </div>
      </div>

      <h3 className="text-xl text-teal-400 mb-4">Clientes de Programação</h3>
      <div className="mt-5 flex flex-wrap justify-center">
        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2 relative">
          <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs absolute top-2 right-2">Desenvolvedor</span>
          <img src={curamente} alt="Curamente" className="h-8 mx-auto mt-4" />
        </div>
        <div className="bg-gray-700 p-4 mb-4 rounded w-full max-w-xs mx-2 relative">
          <span className="bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs absolute top-2 right-2">Desenvolvedor</span>
          <img src={pensi} alt="Pensi" className="h-10 mx-auto mt-3" />
        </div>
      </div>
    </section>
  );
};

export default Clientes;
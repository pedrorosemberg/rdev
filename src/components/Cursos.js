import React from 'react';

const Cursos = () => {
  return (
    <section id="cursos" className="py-10 px-5 bg-gray-800">
      <h2 className="text-3xl text-teal-400 text-center">Cursos</h2>
      <p className="text-lg text-center">Lista de cursos realizados com ícones de certificado.</p>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Adicione aqui os cursos com ícones */}
      </div>
    </section>
  );
};

export default Cursos;
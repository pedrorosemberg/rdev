import React from 'react';

const Hero = () => {
  return (
    <main className="hero h-screen flex items-center justify-center bg-gray-900">
      <section className="intro flex justify-between items-center px-10">
        <div className="content max-w-lg">
          <h1 className="text-5xl mb-5 style={{ color: '#61dafb' }}">Olá!<br />Bem-vindo ao meu portfólio.</h1>
          <p className="text-lg mb-8 text-white">Desenvolvedor Full Stack e Futuro Engenheiro de Software.</p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
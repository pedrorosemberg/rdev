import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Mercadólogo. Desenvolvedor. Pesquisador.', 'Criatividade. Inovação. Tecnologia.'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main className="hero h-screen flex items-center justify-center bg-gray-900">
      <section className="intro flex justify-between items-center px-10">
        <div className="content max-w-lg">
          <h1 className="text-5xl mb-5" style={{ color: '#61dafb' }}>
            Olá!
          </h1>
          <h2 className="text-3xl mb-5 text-teal-400">
            Eu sou o <span style={{ color: '#61dafb' }}>Pedro Rosemberg</span>,
            
          </h2>
          <p className="text-lg mb-8 text-white">
            <span ref={el} />
          </p>
        </div>
      </section>
    </main>
  );
};

export default Hero;
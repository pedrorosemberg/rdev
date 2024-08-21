import React from 'react';

const Contato = () => {
  return (
    <section id="contato" className="py-10 px-5 bg-gray-800">
      <h2 className="text-3xl text-teal-400">Contato</h2>
      <p className="text-lg">Email: <a className="text-teal-400" href="mailto:pedro@codever.com.br">pedro@codever.com.br</a></p>
      <p className="text-lg">WhatsApp: <a className="text-teal-400" href="https://wa.me/5511934738412">11 93473-8412</a></p>
    </section>
  );
};

export default Contato;
import React from "react";

// Importando todas as imagens da pasta
import barcetv from "../assets/projetos-pessoais/barcetv.png";
import brandu from "../assets/projetos-pessoais/brandu.png";
import curamente from "../assets/projetos-pessoais/curamente.png";
import gea from "../assets/projetos-pessoais/gea.png";
import mediatheque from "../assets/projetos-pessoais/mediatheque.png";
import neonmaker from "../assets/projetos-pessoais/neonmaker.png";
import nepli from "../assets/projetos-pessoais/nepli.png";
import rdc from "../assets/projetos-pessoais/rdc.png";
import tecnoveste from "../assets/projetos-pessoais/tecnoveste.png";
import tecUni from "../assets/projetos-pessoais/tec-uni.png";
import tecnoPod from "../assets/projetos-pessoais/tecnopod_image.png";
import vaudeville from "../assets/projetos-pessoais/vaudeville.png";

const ProjetosPessoais = () => {
  return (
    <section id="projetos-pessoais" className="py-10 px-5 bg-gray-800">
      <h2 className="text-3xl text-teal-400">Projetos Pessoais</h2>
      <div className="mt-5 p-4 bg-gray-700 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <img
            src={barcetv}
            alt="Barce TV"
            className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105"
          />
          <img
            src={brandu}
            alt="BrandU"
            className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105"
          />
          <img
            src={curamente}
            alt="Curamente"
            className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105"
          />
          <img
            src={gea}
            alt="GEA"
            className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105"
          />
          <img
            src={mediatheque}
            alt="Mediatheque"
            className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105"
          />
          <img
            src={neonmaker}
            alt="Neon Maker"
            className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105"
          />
          <img
            src={nepli}
            alt="Nepli"
            className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105"
          />
          <img
            src={rdc}
            alt="RDC"
            className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105"
          />
          <img
            src={tecnoveste}
            alt="SeekPay"
            className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105"
          />
          <img
            src={tecUni}
            alt="Tec Uni"
            className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105"
          />
          <img
            src={tecnoPod}
            alt="Tecno Pod"
            className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105"
          />
          <img
            src={vaudeville}
            alt="Vaudeville"
            className="w-32 h-auto rounded-lg m-2 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjetosPessoais;

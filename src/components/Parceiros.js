import React from 'react';
import parceiroBiud from '../assets/parceiros/biud.png';
import parceiroCora from '../assets/parceiros/cora.png';
import parceiroGoogle from '../assets/parceiros/google.png';
import parceiroMeta from '../assets/parceiros/meta.png';
import parceiroMicrosoft from '../assets/parceiros/microsoft.png';
import parceiroNotion from '../assets/parceiros/notion.png';
import parceiroNuvemshop from '../assets/parceiros/nuvemshop.png';
import parceiroUol from '../assets/parceiros/uol.png';
import parceiroWix from '../assets/parceiros/wix.png';

const Parceiros = () => {
  return (
    <section id="parceiros" className="py-10 px-5 bg-gray-800">
      <h2 className="text-3xl text-teal-400 text-center">Parceiros</h2>
      <div className="flex flex-wrap justify-center mt-5">
        <div className="flex flex-wrap justify-center">
          <img src={parceiroBiud} alt="Biud Tecnologia" className="m-2 h-10 w-auto max-w-xs" />
          <img src={parceiroCora} alt="Cora SCD" className="m-2 h-10 w-auto max-w-xs" />
          <img src={parceiroGoogle} alt="Google" className="m-2 h-10 w-auto max-w-xs" />
          <img src={parceiroMeta} alt="Meta" className="m-2 h-10 w-auto max-w-xs" />
          <img src={parceiroMicrosoft} alt="Microsoft" className="m-2 h-10 w-auto max-w-xs" />
          <img src={parceiroNotion} alt="Notion" className="m-2 h-10 w-auto max-w-xs" />
          <img src={parceiroNuvemshop} alt="Nuvemshop" className="m-2 h-10 w-auto max-w-xs" />
          <img src={parceiroUol} alt="UOL" className="m-2 h-10 w-auto max-w-xs" />
          <img src={parceiroWix} alt="Wix" className="m-2 h-10 w-auto max-w-xs" />
        </div>
      </div>
    </section>
  );
};

export default Parceiros;
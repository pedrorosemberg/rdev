import React from 'react';
import marketGuruImg from '../assets/projetos/marketguru.png';
import codeverImg from '../assets/projetos/codever.png';
import seekpayImg from '../assets/projetos/seekpay.png';
import linkUsImg from '../assets/projetos/linkus.png';
import decideForMeImg from '../assets/projetos/decideforme.png';
import secureEverImg from '../assets/projetos/secureever.png';
import jarvisBotImg from '../assets/projetos/jarvisbot.png';
import siriusWebScrapperImg from '../assets/projetos/sirius.png';
import auroraAIImg from '../assets/projetos/aurora.png';
import marstreeImg from '../assets/projetos/marstree.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projetos = [
  {
    title: 'MarketGuru',
    image: marketGuruImg,
    description: 'Agência datadriven de Marketing Digital de Performance e Resultados.',
    link: 'https://www.marketguru.com.br',
    github: 'https://github.com/pedrorosemberg',
    technologies: ['React.js', 'Node.js', 'Html', 'TailwindCSS', 'Vercel (Deploy)'],
    tag: ['Em produção'],
    status:['publico'],
    tipo: ['#colaborativo'],
  },
  {
    title: 'Codever',
    image: codeverImg,
    description: 'Hub colaborativo de desenvolvedores de softwares e aplicações.',
    link: 'https://www.codever.com.br',
    github: 'https://github.com/pedrorosemberg/',
    technologies: ['React.js', 'HTML5', 'TailwindCSS', 'Vercel (Deploy)'],
    tag: ['Concluído'],
    status:['publico'],
    tipo: ['#colaborativo'],
  },
  {
    title: 'Seekpay',
    image: seekpayImg,
    description: 'Site de gestão financeira e pagamentos.',
    link: 'https://www.pedrorosemberg.com',
    github: 'https://github.com/pedrorosemberg/seekpay',
    technologies: ['React.js', 'Node.js', 'MySQL',  'Python', 'APIs'],
    tag: ['Em testes'],
    status:['publico'],
    tipo: ['#colaborativo'],
  },
  {
    title: 'LinkUs',
    image: linkUsImg,
    description: 'Site para gerar contratos personalizados.',
    link: 'https://www.pedrorosemberg.com',
    github: 'https://github.com/pedrorosemberg/linkus',
    technologies: ['React.js', 'Node.js', 'HTML5', 'TailwindCSS'],
    tag: ['Em otimização'],
    status:['publico'],
    tipo: ['#colaborativo'],
  },
  {
    title: 'Decide for Me',
    image: decideForMeImg,
    description: 'Uma aplicação para ajudar na tomada de decisões.',
    link: 'https:/www.pedrorosemberg.com',
    github: 'https://github.com/pedrorosemberg/teoria-da-decis-o',
    technologies: ['Python','HTML5','CSS3','JavaScript'],
    tag: ['Concluído'],
    status:['publico'],
    tipo: ['#colaborativo'],
  },
  {
    title: 'Securepass',
    image: secureEverImg,
    description: 'Uma ferramenta para gerar senhas seguras.',
    link: 'https://www.securepass.pedrorosemberg.com',
    github: 'https://github.com/pedrorosemberg/SecurePass',
    technologies: ['CSS3', 'HTML5', 'JavaScript'],
    tag: ['Concluído'],
    status:['publico'],
    tipo: ['#colaborativo'],
  },
  {
    title: 'MyLinkTree',
    image: marstreeImg,
    description: 'Minha árvore de links personalizada.',
    link: 'https://www.links.pedrorosemberg.com',
    github: 'https://github.com/pedrorosemberg/marstree',
    technologies: ['CSS3', 'HTML5', 'JavaScript'],
    tag: ['Concluído'],
    status:['publico'],
    tipo: ['#colaborativo'],
  }
];

const Sobre = () => {
  return (
    <section id="sobre" className="py-10 px-5 bg-gray-800">
      <h2 className="text-3xl text-teal-400">Portfólio</h2>
      <p className="text-lg text-white">Projetos com a descrição, status e links de acesso.</p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto, index) => (
          <div key={index} className="bg-gray-700 p-5 rounded-lg">
            <img src={projeto.image} alt={projeto.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl text-teal-400 mt-3">{projeto.title}</h3>
            <p className="text-white">{projeto.description}</p>
            <div className="mt-3 flex justify-center items-center">
                    <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="text-teal-400 mr-4 hover:text-teal-300 transition-colors">
                    <FaExternalLinkAlt className="w-5 h-5" />
                    </a>
                    <a href={projeto.github} target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 transition-colors">
                    <FaGithub className="w-5 h-5" />
                    </a>
            </div>
            <div className="mt-2">
              {projeto.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-sm text-gray-400 mr-2">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sobre;

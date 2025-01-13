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
import creditixImg from '../assets/projetos/creditix-logo.png';
import econxImg from '../assets/projetos/econx-1.png';
import prFatImg from '../assets/projetos/prsd-faturas.png';
import prConImg from '../assets/projetos/prsd-contratos.png';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projetos = [
  {
    title: 'MarketGuru',
    image: marketGuruImg,
    description: 'Agência datadriven de Marketing Digital de Performance e Resultados.',
    link: 'https://mkt.codever.com.br',
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
    title: 'LinkUs & Invoiced',
    image: linkUsImg,
    description: 'Gerador de contratos e faturas personalizadas.',
    link: 'https://invoices.pedrorosemberg.com',
    github: 'https://github.com/pedrorosemberg/InoiceMaker',
    technologies: ['HTML5', 'JavaScript','CSS/TailwindCSS'],
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
    technologies: ['Python'],
    tag: ['Concluído'],
    status:['publico'],
    tipo: ['#colaborativo'],
  },
  {
    title: 'Securepass',
    image: secureEverImg,
    description: 'Uma ferramenta para gerar senhas seguras.',
    link: 'https://securepass.pedrorosemberg.com',
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
  },
  {
    title: 'Codever-MarketGuru Propostas',
    image: marketGuruImg,
    description: 'Website de envio de propostas personalizadas.',
    link: 'https://mkt.codever.com.br',
    github: 'https://github.com/pedrorosemberg/Codever-Marketing-Proposal',
    technologies: ['JavaScript', 'Html', 'TailwindCSS', 'Vercel (Deploy)'],
    tag: ['Em produção'],
    status:['publico'],
    tipo: ['#colaborativo'],
  },
  {
    title: 'Creditix API Teste',
    image: creditixImg,
    description: 'API Servless para requisição de informações de crédito com retorno via link.',
    link: 'https://creditix.codever.com.br/acesso',
    github: 'https://github.com/pedrorosemberg/version1.0.0',
    technologies: ['JavaScript', 'Html', 'Babel', 'Gulp', 'Vercel (Deploy)'],
    tag: ['Em produção'],
    status:['publico'],
    tipo: ['#colaborativo'],
  },
  {
    title: 'ECONX Certificações API Valid',
    image: econxImg,
    description: 'API Servless de validação de certificados de projetos.',
    link: 'https://growth.econx.com.br/validation/certificados',
    github: 'https://github.com/pedrorosemberg/project-root',
    technologies: ['JavaScript', 'Vercel (Deploy)'],
    tag: ['Em produção'],
    status:['publico'],
    tipo: ['#colaborativo'],
  },
  {
    title: 'PRSD Gerador de Contratos',
    image: prConImg,
    description: 'Gerador de Contratos personalizados da PRSD.',
    link: 'https://contratos.pedrorosemberg.com',
    github: 'https://github.com/pedrorosemberg/Gerador-de-Contratos-MarketGuru',
    technologies: ['HTML','CSS','JavaScript','GitHub','Vercel (Deploy)'],
    tag: ['Em produção'],
    status:['publico'],
    tipo: ['#colaborativo'],
  },
  {
    title: 'PRSD Gerador de Faturas',
    image: prFatImg,
    description: 'Gerador de Faturas personalizados da PRSD.',
    link: 'https://faturas.pedrorosemberg.com',
    github: 'https://github.com/pedrorosemberg/InoiceMaker',
    technologies: ['HTML','CSS','JavaScript','GitHub','Vercel (Deploy)'],
    tag: ['Em produção'],
    status:['publico'],
    tipo: ['#colaborativo'],
  },
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

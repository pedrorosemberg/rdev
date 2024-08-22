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
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projetos = [
  {
    title: 'MarketGuru',
    image: marketGuruImg,
    description: 'Uma plataforma para análise de mercado e tendências.',
    link: 'https://marketguru.com',
    github: 'https://github.com/marketguru',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Codever',
    image: codeverImg,
    description: 'Um ambiente colaborativo para desenvolvedores.',
    link: 'https://codever.com',
    github: 'https://github.com/codever',
    technologies: ['React', 'Express', 'PostgreSQL'],
  },
  {
    title: 'Seekpay',
    image: seekpayImg,
    description: 'Uma solução de pagamento online segura.',
    link: 'https://seekpay.com',
    github: 'https://github.com/seekpay',
    technologies: ['Angular', 'Django', 'SQLite'],
  },
  {
    title: 'LinkUs',
    image: linkUsImg,
    description: 'Uma plataforma para encurtar links e rastrear cliques.',
    link: 'https://linkus.com',
    github: 'https://github.com/linkus',
    technologies: ['Vue.js', 'Flask', 'MySQL'],
  },
  {
    title: 'Decide for Me',
    image: decideForMeImg,
    description: 'Um aplicativo para ajudar na tomada de decisões.',
    link: 'https://decideforme.com',
    github: 'https://github.com/decideforme',
    technologies: ['React Native', 'Firebase'],
  },
  {
    title: 'SecureEver',
    image: secureEverImg,
    description: 'Uma ferramenta de gerenciamento de senhas.',
    link: 'https://secureever.com',
    github: 'https://github.com/secureever',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'JarvisBot',
    image: jarvisBotImg,
    description: 'Um assistente virtual inteligente.',
    link: 'https://jarvisbot.com',
    github: 'https://github.com/jarvisbot',
    technologies: ['Python', 'Flask'],
  },
  {
    title: 'SiriusWebScrapper (SWSc)',
    image: siriusWebScrapperImg,
    description: 'Uma ferramenta para raspagem de dados da web.',
    link: 'https://siriuswebscrapper.com',
    github: 'https://github.com/siriuswebscrapper',
    technologies: ['Node.js', 'Cheerio'],
  },
  {
    title: 'AuroraAI',
    image: auroraAIImg,
    description: 'Uma plataforma de inteligência artificial para negócios.',
    link: 'https://aurorai.com',
    github: 'https://github.com/aurorai',
    technologies: ['TensorFlow', 'Flask'],
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
            <div className="mt-3">
              <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="text-teal-400 mr-2">
                <FaExternalLinkAlt />
              </a>
              <a href={projeto.github} target="_blank" rel="noopener noreferrer" className="text-teal-400">
                <FaGithub />
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
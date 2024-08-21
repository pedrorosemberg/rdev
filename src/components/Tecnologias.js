import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faTailwindcss } from '@fortawesome/free-brands-svg-icons';

const Tecnologias = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      const response = await fetch('https://api.github.com/users/pedrorosemberg/repos');
      const data = await response.json();

      const techCount = {};

      data.forEach(repo => {
        if (repo.language) {
          techCount[repo.language] = (techCount[repo.language] || 0) + 1;
        }
      });

      const sortedTech = Object.entries(techCount).sort((a, b) => b[1] - a[1]);
      setTechnologies(sortedTech);
    };

    fetchTechnologies();
  }, []);

  return (
    <section id="tecnologias" className="py-10 px-5 bg-gray-800">
      <h2 className="text-3xl text-teal-400">Tecnologias Utilizadas</h2>
      <ul className="mt-5">
        <li className="flex items-center text-lg text-white">
          <FontAwesomeIcon icon={faHtml5} className="w-8 h-8 mr-2" /> HTML5
        </li>
        <li className="flex items-center text-lg text-white">
          <FontAwesomeIcon icon={faCss3Alt} className="w-8 h-8 mr-2" /> CSS3
        </li>
        <li className="flex items-center text-lg text-white">
          <FontAwesomeIcon icon={faJs} className="w-8 h-8 mr-2" /> JavaScript
        </li>
        <li className="flex items-center text-lg text-white">
          <FontAwesomeIcon icon={faPython} className="w-8 h-8 mr-2" /> Python
        </li>
      </ul>
      <h3 className="text-2xl text-teal-400 mt-5">Bibliotecas e Frameworks</h3>
      <ul className="mt-5">
        <li className="flex items-center text-lg text-white">
          <FontAwesomeIcon icon={faReact} className="w-8 h-8 mr-2" /> React.js
        </li>
        <li className="flex items-center text-lg text-white">
          <FontAwesomeIcon icon={faNodeJs} className="w-8 h-8 mr-2" /> Node.js
        </li>
        <li className="flex items-center text-lg text-white">
          <FontAwesomeIcon className="w-8 h-8 mr-2" /> TailwindCSS
        </li>
      </ul>
    </section>
  );
};

export default Tecnologias;
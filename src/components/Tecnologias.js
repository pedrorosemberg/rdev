import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { DatabaseIcon, CodeIcon, SparklesIcon, BeakerIcon, LightningBoltIcon, AdjustmentsIcon, TagIcon, FolderAddIcon, FolderDownloadIcon, FolderOpenIcon, FolderIcon, FolderRemoveIcon, ClipboardIcon, ClipboardCheckIcon, PaperClipIcon, DesktopComputerIcon, SwitchVerticalIcon } from '@heroicons/react/solid';


const Tecnologias = () => {
  const [technologies, setTechnologies] = useState([]);

  return (
    <section id="tecnologias" className="py-10 px-5 bg-gray-800">
      <h3 className="text-3xl text-teal-400 text-center">Linguagens e Tecnologias utilizadas</h3>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <FontAwesomeIcon icon={faHtml5} className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">HTML5</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <FontAwesomeIcon icon={faCss3Alt} className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">CSS3</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <FontAwesomeIcon icon={faJs} className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">JavaScript</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <FontAwesomeIcon icon={faPython} className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">Python</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <FontAwesomeIcon icon={faNodeJs} className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">Node.js</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <DatabaseIcon className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">SQL</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <DatabaseIcon className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">NoSQL</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <FolderRemoveIcon className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">Git</span>
        </div>
      </div>
      <h3 className="text-2xl text-teal-400 mt-5 text-center">Bibliotecas e Frameworks</h3>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <FontAwesomeIcon icon={faReact} className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">React.js</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <ClipboardCheckIcon className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">TailwindCSS</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <FontAwesomeIcon icon={faBootstrap} className="w-8 h-8 mb-2" style={{ color: '#61dafb' }} />
          <span className="text-lg text-white">Bootstrap</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <BeakerIcon className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">Jest</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <TagIcon className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">Selenium</span>
        </div>
      </div>
      <h3 className="text-2xl text-teal-400 mt-5 text-center">Websites, Softwares e Programas</h3>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <DesktopComputerIcon className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">VSCode</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <FolderOpenIcon className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">GitHub</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <SwitchVerticalIcon className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">Vercel</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <LightningBoltIcon className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">Supabase</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <AdjustmentsIcon className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">Firebase</span>
        </div>
        <div className="flex flex-col items-center bg-gray-700 p-4 rounded-lg">
          <FolderIcon className="w-8 h-8 mb-2 text-teal-400" />
          <span className="text-lg text-white">GitLabs</span>
        </div>
      </div>
    </section>
  );
};

export default Tecnologias;
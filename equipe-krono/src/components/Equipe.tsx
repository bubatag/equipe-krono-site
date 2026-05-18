"use client";

import Image from "next/image";
import Link from "next/link";
const membrosEquipe = [
  {
    nome: "Arthur Fukunaga",
    funcao: "UX/UI Designer",
    imagem: "/assets/fuku.jpeg", 
    instagram: "#",
    linkedin: "#",
  },
  {
    nome: "Leonardo de Lima",
    funcao: "Front-End Dev",
    imagem: "/assets/leo.jpeg",
    instagram: "#",
    linkedin: "#",
  },
  {
    nome: "Cristhian Hatzman",
    funcao: "Back/Front-End Dev",
    imagem: "/assets/cris.jpg",
    instagram: "#",
    linkedin: "#",
  },
  {
    nome: "João Paulo",
    funcao: "UX/UI Designer & Front-End",
    imagem: "/assets/jp0.jpg", 
    instagram: "#",
    linkedin: "#",
  },
  {
    nome: "Vinicius de Souza",
    funcao: "Database Administrator",
    imagem: "/assets/vini.jpeg",
    instagram: "#",
    linkedin: "#",
  },
];

export default function Equipe() {
  return (
    <section id="equipe" className="w-full bg-system py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Título e Linha Expandida */}
        <div className="mb-16 flex flex-col items-center w-full">
          <h2 className="font-title text-4xl sm:text-5xl text-primary pb-4">
            Nossa Equipe
          </h2>
          
          {/* Linha agora ocupa 100% da largura do grid de cards */}
          <span 
            className="w-full h-[4px] bg-primary"
            style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 12px) 100%, 12px 100%)" }}
            aria-hidden="true"
          />
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          
          {membrosEquipe.map((membro, index) => (
            <div 
              key={index} 
              className="group relative bg-[#1A1A1A] rounded-2xl p-3 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(224,131,15,0.5)] flex flex-col h-full"
            >
              {/* Camada de Gradiente Radial Laranja no Hover */}
              <div 
                className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(224,131,15,0.25)_0%,transparent_80%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 rounded-2xl"
                aria-hidden="true"
              />

              {/* Container da Imagem (com relative z-10 para ficar acima do brilho) */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-800">
                
                {/* Componente Image Descomentado e Ativo */}
                <Image 
                  src={membro.imagem} 
                  alt={membro.nome} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />

                {/* Aba Social */}
                <div className="absolute bottom-3 right-3 bg-primary rounded-xl py-3 px-2 flex flex-col gap-4 shadow-lg">
                  <Link 
                    href={membro.instagram} 
                    target="_blank"
                    className="text-white hover:text-black transition-colors duration-300 hover:scale-110 transform"
                    aria-label={`Instagram de ${membro.nome}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </Link>

                  <Link 
                    href={membro.linkedin} 
                    target="_blank"
                    className="text-white hover:text-black transition-colors duration-300 hover:scale-110 transform"
                    aria-label={`LinkedIn de ${membro.nome}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Informações do Integrante (com relative z-10 para ficar acima do brilho) */}
              <div className="relative z-10 mt-4 px-2 pb-2 flex-grow flex flex-col justify-center">
                <h3 className="font-title text-white text-lg leading-tight">
                  {membro.nome}
                </h3>
                <p className="font-sans text-secondary text-sm mt-1">
                  {membro.funcao}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
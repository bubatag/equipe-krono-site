"use client";

import Image from "next/image";
import Link from "next/link";

const membrosEquipe = [
  {
    nome: "Arthur Fukunaga",
    funcao: "UX/UI Designer",
    imagemNormal: "/assets/fuku2.png", 
    imagemHover: "/assets/fuku.jpeg",
    corRgb: "255, 200, 0", // Amarelo
    instagram: "#",
    linkedin: "#",
  },
  {
    nome: "Leonardo de Lima",
    funcao: "Front-End Dev",
    imagemNormal: "/assets/leo2.png",
    imagemHover: "/assets/leo.jpeg",
    corRgb: "0, 150, 255", // Azul
    instagram: "#",
    linkedin: "#",
  },
  {
    nome: "Cristhian Hatzman",
    funcao: "Back/Front-End Dev",
    imagemNormal: "/assets/cris2.png",
    imagemHover: "/assets/cris.jpg",
    corRgb: "0, 255, 100", // Verde
    instagram: "#",
    linkedin: "#",
  },
  {
    nome: "João Paulo",
    funcao: "UX/UI Designer & Front-End",
    imagemNormal: "/assets/jp2.png", 
    imagemHover: "/assets/jp0.jpg", 
    corRgb: "255, 255, 255", // Branco para o degradê e sombra
    corIconeRgb: "0, 0, 0", // Preto EXCLUSIVO para o hover dos ícones
    instagram: "#",
    linkedin: "#",
  },
  {
    nome: "Vinicius de Souza",
    funcao: "Database Administrator",
    imagemNormal: "/assets/vini2.png",
    imagemHover: "/assets/vini.jpeg",
    corRgb: "255, 50, 50", // Vermelho
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
              // Se o membro tiver 'corIconeRgb' (JP), usa ela. Se não, usa a 'corRgb' padrão.
              style={{
                "--card-shadow": `rgba(${membro.corRgb}, 0.7)`,
                "--member-color": membro.corIconeRgb || membro.corRgb,
              } as React.CSSProperties}
              className="group relative bg-[#1A1A1A] rounded-2xl p-3 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_15px_30px_-5px_var(--card-shadow)] flex flex-col h-full overflow-hidden"
            >
              
              {/* Degrade Radial Sutil Permanente no Fundo do Card */}
              <div 
                className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 ease-in-out group-hover:opacity-80"
                style={{
                  background: `radial-gradient(circle at center, rgba(${membro.corRgb}, 0.5) 0%, transparent 80%)`
                }}
                aria-hidden="true"
              />

              {/* Container da Imagem */}
              <div className="relative z-10 w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-800 shadow-inner">
                
                {/* 1. Imagem Padrão (Versão 2) - Esconde no Hover */}
                <Image 
                  src={membro.imagemNormal} 
                  alt={membro.nome} 
                  fill 
                  className="object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105" 
                />

                {/* 2. Imagem Hover (Versão Original) - Aparece no Hover */}
                <Image 
                  src={membro.imagemHover} 
                  alt={`${membro.nome} - Hover`} 
                  fill 
                  className="object-cover absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105" 
                />

                {/* 3. Animação de Reflexo (Glare) passando sobre a imagem */}
                <div 
                  className="absolute top-0 left-[-150%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-all duration-700 ease-in-out group-hover:left-[150%] z-20 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Aba Social */}
                <div className="absolute bottom-3 right-3 bg-primary rounded-xl py-3 px-2 flex flex-col gap-4 shadow-lg z-30">
                  <Link 
                    href={membro.instagram} 
                    target="_blank"
                    className="text-white hover:text-[rgb(var(--member-color))] transition-colors duration-300 hover:scale-110 transform"
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
                    className="text-white hover:text-[rgb(var(--member-color))] transition-colors duration-300 hover:scale-110 transform"
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

              {/* Informações do Integrante */}
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
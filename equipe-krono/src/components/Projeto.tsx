"use client";

import Image from "next/image";
import Link from "next/link";

export default function Projeto() {
  return (
    <section id="projeto" className="w-full bg-system py-20 lg:py-32 overflow-hidden" data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Coluna Esquerda: Card Bubatag */}
        <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
          
          <div className="w-fit flex flex-col rounded-xl overflow-hidden shadow-[0_20px_25px_-40px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_30px_35px_-17px_rgba(0,0,0,0.35)]">
            
            {/* Top Div: Sem background. A tag img nativa elimina o conflito de proporção e os vãos */}
            <div className="w-full">
              <img 
                src="/assets/bubatag.png" 
                alt="Bubatag Monitoramento de Bubalinos" 
                className="w-full h-auto block" 
              />
            </div>

            {/* Bottom Div: Largura acompanha a de cima (herdada do flex-col) e fundo com gradiente */}
            <div className="w-full bg-gradient-to-b from-[#2F3E46] to-[#212B31] p-6 sm:p-8 flex flex-col items-start gap-4">
              {/* SVG do Título Bubatag */}
              <Image 
                src="/assets/titulo-bubatag.svg" 
                alt="Título Bubatag" 
                width={140} 
                height={35} 
                className="w-auto h-7 sm:h-8"
              />
              
              <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed max-w-[400px]">
                Sistema de monitoramento de estresse e localização de bubalinos, oferecendo ao pecuarista controle em tempo real, decisões mais rápidas e maior bem-estar animal.
              </p>
            </div>
            
          </div>
        </div>

        {/* Coluna Direita: Informações do Projeto */}
        <div className="w-full lg:w-[55%] flex flex-col items-start">
          
          {/* Título e Linha Decorativa */}
          <div className="w-full mb-8 flex flex-col items-start">
            <h2 className="font-title text-4xl sm:text-5xl text-primary inline-block">
              Projeto
            </h2>
            
            {/* Linha estendida até o fim da tela (min-w-[100vw]), com corte inferior (invertida) e espaçamento (mt-4) */}
            <div 
              className="min-w-[100vw] h-[4px] bg-primary mt-4"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 16px 100%)" }}
              aria-hidden="true"
            />
          </div>

          {/* Texto Explicativo com fonte Medium */}
          <p className="font-sans text-black font-medium text-base sm:text-lg leading-[1.6] mb-10">
            Nosso projeto visa aplicar soluções tecnológicas que possam otimizar a criação e manejo de búfalos, trazendo benefícios para produtores rurais, empresarios do setor agropecuário e a comunidade como um todo. Através de ferramentas e sistemas inovadores, buscamos oferecer novas perspectivas para a gestão de dados, rastreamento de rebanhos e processos logísticos no setor de bubalinos.
          </p>

          {/* Botão Ver Mais com Gradiente Radial e Radius Aumentado */}
          <Link 
            href="https://bubatag-site.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[radial-gradient(circle_at_center,#06D001_0%,#04A600_100%)] hover:brightness-110 text-[#004400] font-sans font-bold tracking-wide px-8 py-3 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            VER MAIS
          </Link>

        </div>

      </div>
    </section>
  );
}
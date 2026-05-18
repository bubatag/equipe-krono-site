"use client";

import Image from "next/image";

export default function QuemSomos() {
  return (
    // A seção tem position relative para segurar a imagem absoluta no desktop
    <section 
      id="quem-somos" 
      className="relative w-full bg-system py-20 lg:py-25 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Lado Esquerdo (Conteúdo de Texto) */}
        <div className="w-full lg:w-[55%]">
          <div className="relative mb-10">
            <h2 className="relative inline-block font-title text-4xl sm:text-5xl text-primary pb-3">
              Quem somos nós?
              
              {/* Linha laranja decorativa com corte angular (idêntica ao UX) */}
              <span 
                className="absolute bottom-0 left-[-100vw] right-[-15px] h-[4px] bg-primary"
                style={{ clipPath: "polygon(0 0, 100% 0, calc(100% - 12px) 100%, 0 100%)" }}
                aria-hidden="true"
              />
            </h2>
          </div>

          <p className="font-sans text-black font-medium text-lg sm:text-xl leading-[1.6] text-left max-w-[650px]">
            Olá, Somos um grupo de estudantes da Faculdade de Tecnologia de Registro (Fatec Registro), com formação e especialização na área de desenvolvimento de sistemas. Atualmente, estamos trabalhando em um projeto inovador voltado ao mercado de bubalinos, com o objetivo de contribuir para o aprimoramento da gestão e desenvolvimento dessa atividade no Brasil.
          </p>
        </div>

      </div>

      {/* Lado Direito (Imagem encostada na margem direita da tela) */}
      {/* No mobile, ela se comporta como um bloco normal; no Desktop, fica absoluta na direita */}
      <div className="mt-12 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full lg:w-[45vw] flex justify-end z-0">
        <Image
          src="/assets/quem-somos.png"
          alt="Mão robótica segurando um tablet com a logo KR"
          width={900}
          height={700}
          quality={100}
          className="w-full lg:w-auto h-auto max-h-[450px] lg:max-h-[80vh] object-contain object-right"
        />
      </div>
    </section>
  );
}
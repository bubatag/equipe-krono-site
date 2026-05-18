import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    // font-title na raiz garante a Audiowide na página toda
    <div className="flex min-h-screen flex-col items-center justify-center p-0 pt-[72px]">
      <HeroSection />

      <main className="flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
        {/* Título com a sua cor primária */}
        <h1 className="font-title text-4xl text-primary sm:text-5xl">
          To get started, edit the page.tsx file.
        </h1>

        {/* Texto com a sua cor secundária */}
        <p className="font-sans text-lg text-black">
          Olá, Somos um grupo de estudantes da Faculdade de Tecnologia de Registro (Fatec Registro), com formação e especialização na área de desenvolvimento de sistemas. Atualmente, estamos trabalhando em um projeto inovador voltado ao mercado de bubalinos, com o objetivo de contribuir para o aprimoramento da gestão e desenvolvimento dessa atividade no Brasil.
        </p>

        {/* Botões ajustados para a sua paleta */}
        <div className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <a
            className="flex items-center justify-center rounded-full bg-primary px-8 py-3 text-white transition-opacity hover:opacity-80"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            className="flex items-center justify-center rounded-full border border-secondary px-8 py-3 text-secondary transition-colors hover:bg-black/5"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
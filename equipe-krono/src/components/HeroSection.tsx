export default function HeroSection() {
  return (
    <section className="w-full overflow-hidden">
      {/* Estilo embutido para a animação do neon passando pelo texto */}
      <style>{`
        @keyframes neon-shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .animate-neon {
          background-size: 200% auto;
          animation: neon-shimmer 4s linear infinite;
        }
      `}</style>

      <div className="relative h-[80vh] min-h-[480px] w-full">
        <video
          className="absolute left-0 -top-[7%] h-[115%] w-full object-cover"
          src="/assets/header-krono.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="pointer-events-none absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-system to-transparent" />
        
        {/* A alteração foi feita nesta div abaixo para alinhar com a Navbar */}
        <div className="relative z-10 flex h-full w-full max-w-7xl mx-auto items-center justify-start px-0 text-left">
          <div className="max-w-3xl">
            {/* Bem-Vindo de volta ao gradiente estático */}
            <h1 className="font-title text-5xl uppercase tracking-[0.12em] bg-gradient-to-r from-[#E0830F] to-[#FCB460] bg-clip-text text-transparent sm:text-6xl lg:text-7xl">
              Bem-Vindo
            </h1>
            <p className="mt-4 font-title text-5xl sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-[#000000] to-[#757575] bg-clip-text text-transparent">Nós somos a </span>
              {/* Animação neon aplicada à Krono */}
              <span className="bg-[linear-gradient(to_right,#E0830F,#F3A545,#F3A545,#E0830F,#E0830F)] bg-clip-text text-transparent animate-neon">Krono</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
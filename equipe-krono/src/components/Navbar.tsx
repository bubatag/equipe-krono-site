"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const navLinkClasses = 
    "text-lg inline-block transition-all duration-300 ease-out hover:text-primary hover:scale-110";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-sm border-b-3 border-primary">
      <div className="relative flex items-center justify-between max-w-6xl mx-auto px-8 py-4 h-[72px]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center z-10 transition-all duration-300 ease-out hover:scale-110">
          <Image
            src="/assets/krono-logo.svg" /* <-- Caminho apontando direto para a pasta public */
            alt="Krono Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Menu Items */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-12 items-center font-title text-white w-max">
          <Link href="#quem-somos" className={navLinkClasses}>
            Quem somos
          </Link>
          <Link href="#equipe" className={navLinkClasses}>
            Equipe
          </Link>
          <Link href="#projeto" className={navLinkClasses}>
            Projeto
          </Link>
        </div>
        
        <div className="w-[40px] hidden md:block"></div>
      </div>
    </nav>
  );
}
import Equipe from "@/components/Equipe";
import HeroSection from "@/components/HeroSection";
import Projeto from "@/components/Projeto";
import QuemSomos from "@/components/QuemSomos";

export default function Home() {
  return (
    // font-title na raiz garante a Audiowide na página toda
    <div className="flex min-h-screen flex-col items-center justify-center p-0 pt-[72px]">
      <HeroSection />
      <QuemSomos />
      <Equipe />
      <Projeto />
    </div>
  );
}
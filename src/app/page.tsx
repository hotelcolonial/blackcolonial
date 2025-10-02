import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Membro from "@/components/Membro";
import VipForm from "@/components/VipForm";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Membro />
      <Benefits />
      <VipForm />
      <footer className="">
        <p className="text-center font-raleway bg-primary-black text-xs py-10 text-gray-300">
          Hotel Colonial Iguaçu | 2025
        </p>
      </footer>
    </div>
  );
}

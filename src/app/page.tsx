import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";

import Membro from "@/components/Membro";
import Form from "@/components/Form";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Membro />
      <Benefits />
      <Form />
      <footer className="">
        <p className="text-center font-raleway bg-primary-black text-xs py-10 text-gray-300">
          Hotel Colonial Iguaçu | 2024
        </p>
      </footer>
    </div>
  );
}

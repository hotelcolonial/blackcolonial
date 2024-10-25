import Image from "next/image";
import Link from "next/link";
import React from "react";
const Membro = () => {
  return (
    <div>
      <div className="padding-container font-raleway flex justify-center items-center background-pattern-secondary">
        <section className="text-gray-300">
          <div className="container flex flex-col-reverse mx-auto lg:flex-row">
            <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5">
              <h2 className="text-2xl lg:text-4xl xl:text-5xl font-black">
                Seja VIP no{" "}
                <span className="text-primary-green">Colonial Black</span>
              </h2>
              <p className="text-sm">
                Ao se juntar ao nosso grupo VIP exclusivo no WhatsApp, você
                desbloqueia muito mais do que apenas ofertas e descontos –
                garantimos total transparência em todas as nossas promoções.{" "}
              </p>
              <div>
                <h2 className="text-lg lg:text-2xl xl:text-3xl font-black pb-3">
                  O que você ganha sendo membro Black:
                </h2>
                <ul className="space-y-2 text-sm">
                  <li>
                    <span className="neonText">
                      Ofertas 100% Transparentes:
                    </span>{" "}
                    Você saberá exatamente o que está pagando e quanto está
                    economizando.
                  </li>
                  <li>
                    <span className="neonText">
                      {" "}
                      Acesso Antecipado a Promoções:
                    </span>{" "}
                    Seja o primeiro a receber nossas melhores ofertas, sempre
                    com clareza total.
                  </li>
                  <li>
                    <span className="neonText">Descontos Exclusivos:</span>{" "}
                    Aproveite tarifas reduzidas e pacotes especiais que só estão
                    disponíveis para membros do grupo.
                  </li>
                </ul>
                <Link href="#formulario">
                  <div className="text-center mt-3 bg-primary-green py-3 rounded-md font-medium hover:bg-opacity-80 cursor-pointer">
                    <button className="uppercase">
                      Quero Acessar Ofertas Exclusivas!
                    </button>
                  </div>
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
              <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                <Image
                  src="/kindpng_1616862.png"
                  alt="Family picture"
                  width={450}
                  height={450}
                  className="opacity-80"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Membro;

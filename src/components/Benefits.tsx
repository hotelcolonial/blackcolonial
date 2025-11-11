"use client";
import { motion, Variants } from "framer-motion";

interface CardProps {
  title: string;
  content: JSX.Element | string;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: [0, -40, 0], // Secuencia de posiciones para el efecto de salto
    transition: {
      delay: i * 0.2, // Retraso entre las tarjetas
      type: "spring",
      stiffness: 300,
      damping: 8, // Amortiguación para suavizar los saltos
      repeat: 1, // Repetir solo 2 veces
      repeatType: "loop", // Repetir en bucle
      duration: 1.5, // Duración del ciclo de animación
    },
  }),
};

const Benefits: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: "Sua Comodidade em Primeiro Lugar",
      content: (
        <>
          Sua única tarefa no dia 28 de Novembro é relaxar. Nós cuidaremos de
          tudo: te enviaremos um <b>alerta amigável</b> com o link direto assim
          que as ofertas do <span className="neonText">Colonial Black</span>{" "}
          estiverem no ar. Sem estresse, sem precisar lembrar.
        </>
      ),
    },
    {
      title: "A Vantagem do Planejador",
      content: (
        <>
          As datas mais desejadas, como feriados e fins de semana, são
          naturalmente as primeiras a serem escolhidas. Ao se cadastrar, você se
          posiciona para <b>ter a primeira escolha</b>, garantindo a viagem dos
          seus sonhos na data que você realmente quer, com total tranquilidade.
        </>
      ),
    },
    {
      title: "Vantagens o Ano Inteiro",
      content: (
        <>
          A festa não acaba em Novembro! Ao entrar para a lista, você se torna
          um cliente especial e passa a receber, em primeira mão, nossas{" "}
          <b>melhores promoções</b>, pacotes de feriados e ofertas surpresa
          durante todo o ano.
        </>
      ),
    },
  ];

  return (
    <div className="padding-container font-raleway flex justify-center items-center background-pattern-secondary">
      <section className="text-gray-300 p-6 xl">
        <div className="container mx-auto">
          <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase">
            VANTAGENS DE ESTAR NA LISTA
          </span>
          <h2 className="text-4xl lg:text-5xl xl:w-3/5 mx-auto font-black text-center">
            Planeje sua viagem com inteligência e{" "}
            <span className="text-primary-green">aproveite mais</span>
          </h2>
          <div className="grid gap-6 my-16 lg:grid-cols-3 xl:w-4/5 mx-auto">
            {cards.map((card, index) => (
              <div className="flex relative" key={index}>
                <div className="absolute h-full w-full rounded-md bg-opacity-20 bg-primary-green top-3 "></div>
                <motion.div
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={cardVariants}
                  className="shadow-[0_0_2px_#006039,inset_0_0_2px_#006039,0_0_5px_#006039,0_0_15px_#006039,0_0_30px_#006039] flex flex-col p-8 space-y-4 rounded-md relative bg-primary-black z-40"
                >
                  <p className="md:text-2xl lg:text-[2rem] xl:text-4xl font-black">
                    {card.title}
                  </p>
                  <p className="text-sm lg:text-base xl:text-lg">
                    {card.content}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Benefits;

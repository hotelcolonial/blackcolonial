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
      title: "Ofertas Exclusivas",
      content: (
        <>
          Acesse uma variedade de <b>descontos únicos</b> que estão disponíveis
          apenas para os membros do{" "}
          <span className="neonText">Colonial Black</span>. Aproveite promoções
          que não são encontradas em nenhum outro lugar e economize de maneira
          significativa em suas compras.
        </>
      ),
    },
    {
      title: "Promoções Antecipadas",
      content: (
        <>
          Seja o primeiro a receber informações sobre nossas ofertas e promoções
          especiais antes de todos. Fique à frente e aproveite as melhores
          oportunidades de descontos e vantagens exclusivas, disponível apenas
          para quem está inscrito em nossa lista de antecipação.
        </>
      ),
    },
    {
      title: "Códigos Promocionais",
      content: (
        <>
          Receba códigos promocionais exclusivos diretamente em nosso{" "}
          <span className="neonText">grupo de Whatsapp</span>, garantindo
          descontos adicionais em suas compras. Esses códigos especiais são a
          chave para economizar ainda mais em seus produtos favoritos, válidos
          por tempo limitado e acessíveis apenas para nossos clientes mais
          leais.
        </>
      ),
    },
  ];

  return (
    <div className="padding-container font-raleway flex justify-center items-center background-pattern-secondary">
      <section className="text-gray-300 p-6 xl">
        <div className="container mx-auto">
          <span className="block mb-2 text-xs font-medium tracking-widest text-center uppercase">
            Benefícios de ser membro
          </span>
          <h2 className="text-4xl lg:text-5xl xl:w-3/5 mx-auto font-black text-center">
            Descubra as vantagens de ser parte do{" "}
            <span className="text-primary-green">Colonial Black</span>
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

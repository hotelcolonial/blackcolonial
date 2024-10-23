import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const BalloonBackground: React.FC = () => {
  const balloonPositions = [
    { className: "absolute left-[10%] bottom-[10%] rotate-[-25deg]" },
    { className: "absolute left-[5%] bottom-[50%] rotate-[-15deg]" },
    { className: "absolute left-[20%] bottom-[30%] rotate-[-10deg]" },
    { className: "absolute left-[25%] bottom-[80%] rotate-[-15deg]" },
    { className: "absolute left-[0%] bottom-[70%] rotate-[-5deg]" },
    { className: "absolute left-[70%] bottom-[15%] rotate-[-15deg]" },
    { className: "absolute left-[75%] bottom-[50%] rotate-[-15deg]" },
    { className: "absolute left-[80%] bottom-[80%] rotate-[-15deg]" },
    { className: "absolute left-[85%] bottom-[20%] rotate-[-25deg]" },
    { className: "absolute left-[90%] bottom-[50%] rotate-[10deg]" },
    { className: "absolute left-[80%] bottom-[80%] rotate-[-15deg]" },
    { className: "absolute left-[85%] bottom-[20%] rotate-[-25deg]" },
    { className: "absolute left-[20%] bottom-[0%] rotate-[-15deg]" },
    { className: "absolute left-[85%] bottom-[0%] rotate-[-5deg]" },
    { className: "absolute left-[0%] bottom-[0%] rotate-[-5deg]" },
    { className: "absolute left-[65%] bottom-[70%] rotate-[-5deg]" },
  ];

  const balloonAnimation = {
    initial: { y: 1000, opacity: 0 }, // Inicia fuera del viewport (parte inferior)
    animate: { y: 0, opacity: 1 }, // Sube y se vuelve visible
    exit: { y: -1000, opacity: 0 }, // Sube hasta desaparecer en la parte superior
    transition: {
      duration: 8, // Duración de la animación
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  const balloons = balloonPositions.map((position, index) => (
    <motion.div
      key={index}
      className={`${position.className} absolute`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={balloonAnimation}
    >
      <Image
        alt="Globo"
        width={300} // Ajusta el tamaño según sea necesario
        height={300} // Ajusta el tamaño según sea necesario
        src="/pngegg.png" // Asegúrate de que la ruta sea correcta
        className="h-auto w-auto"
      />
    </motion.div>
  ));

  return <>{balloons}</>;
};

export default BalloonBackground;

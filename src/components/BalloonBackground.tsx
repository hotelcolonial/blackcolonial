import React from "react";
import Image from "next/image";

const BalloonBackground: React.FC = () => {
  const balloonPositions = [
    { className: "absolute left-[10%] bottom-[10%] rotate-[-25deg]" },
    { className: "absolute left-[5%] bottom-[50%] rotate-[-15deg]" },

    { className: "absolute left-[25%] bottom-[80%] rotate-[-15deg]" },
    { className: "absolute left-[0%] bottom-[70%] rotate-[-5deg]" },
    { className: "absolute left-[70%] bottom-[15%] rotate-[-15deg]" },
    { className: "absolute left-[75%] bottom-[50%] rotate-[-15deg]" },
    { className: "absolute left-[80%] bottom-[80%] rotate-[-15deg]" },

    { className: "absolute left-[85%] bottom-[20%] rotate-[-25deg]" },
    { className: "absolute left-[20%] bottom-[0%] rotate-[-15deg]" },
    { className: "absolute left-[85%] bottom-[0%] rotate-[-5deg]" },

    { className: "absolute left-[65%] bottom-[70%] rotate-[deg]" },
  ];

  const balloons = balloonPositions.map((position, index) => (
    <div
      key={index}
      className={`${position.className} absolute `} // Animación de flotación
    >
      <Image
        alt="Globo"
        width={300} // Ajusta el tamaño según sea necesario
        height={300} // Ajusta el tamaño según sea necesario
        src="/pngegg.png" // Asegúrate de que la ruta sea correcta
        className="h-auto w-auto" // Clases de Tailwind para ajustar tamaño
      />
    </div>
  ));

  return <div>{balloons}</div>;
};

export default BalloonBackground;

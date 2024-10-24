import React, { useState, useEffect } from "react";

interface CountdownProps {
  time: number; // Prop para recibir el número de días
  label: string; // Prop para recibir el texto personalizado
}

const ShowCountdown: React.FC<CountdownProps> = ({ time, label }) => {
  return (
    <div className="text-center text-gray-300 font-black font-raleway">
      <p className="text-5xl xl:text-7xl">{time}</p>
      <p className="font-semibold text-gray-500">{label}</p>{" "}
      {/* Texto personalizado */}
    </div>
  );
};

const CountdownTimer: React.FC = () => {
  // Fecha objetivo: 28 de noviembre de 2024
  const targetDate = new Date("2024-11-28T00:00:00");

  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true); // Confirmamos que estamos en el cliente

    // Función para calcular la diferencia de tiempo
    const calculateTimeRemaining = (): number => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime(); // Diferencia en milisegundos
      return Math.max(Math.floor(difference / 1000), 0); // Convertir a segundos y asegurarse que no sea negativo
    };

    setTimeRemaining(calculateTimeRemaining());

    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(timerInterval);
  }, [targetDate]);

  if (!isClient) {
    return null; // Evitamos el renderizado del temporizador hasta que estemos en el cliente
  }

  // Convertir los segundos en días, horas, minutos y segundos
  const days = Math.floor(timeRemaining / (3600 * 24));
  const hours = Math.floor((timeRemaining % (3600 * 24)) / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex gap-5 mx-auto">
      <ShowCountdown time={days} label="dias" />
      <ShowCountdown time={hours} label="horas" />
      <ShowCountdown time={minutes} label="minutos" />
      <ShowCountdown time={seconds} label="segundos" />
    </div>
  );
};

export default CountdownTimer;

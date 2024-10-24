"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { balloons } from "balloons-js";
import { confetti } from "@tsparticles/confetti";
import CountdownTimer from "./CountdownTimer";
import BalloonBackground from "./BalloonBackground";

const Hero = () => {
  /*   balloons(); */
  const duration = 15 * 1000,
    animationEnd = Date.now() + duration,
    defaults = { startVelocity: 30, spread: 100, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 10 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
  return (
    <div className="padding-container md:h-screen gap-12 background-pattern flex flex-col justify-between lg:gap-8 items-center min-h-screen w-full bg-primary-black relative overflow-hidden">
      <div className="absolute w-full h-full z-20 hidden md:block">
        <BalloonBackground />
      </div>{" "}
      *
      <div className="h-[9rem] w-[9rem] relative z-20">
        <Image
          alt="Hotel Colonial Logo"
          width={800}
          height={800}
          src="/colonial-logo.png"
        />
      </div>
      <motion.div
        className="text-[6rem] leading-[5rem] lg:text-[9rem] lg:leading-[7rem] font-bangers text-center text-gray-300 relative shadow-[0_0_2px_#006039,inset_0_0_2px_#006039,0_0_5px_#006039,0_0_15px_#006039,0_0_30px_#006039] w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[35rem] lg:h-[35rem] xl:w-[38rem] xl:h-[38rem]  flex-col flex justify-center items-center rounded-full"
        animate={{
          boxShadow: [
            "0 0 2px #4CAF50, inset 0 0 2px #4CAF50, 0 0 5px #4CAF50, 0 0 15px #4CAF50, 0 0 30px #4CAF50", // Verde
            "0 0 10px #FFFFAE, inset 0 0 10px #FFFFAE, 0 0 20px #FFFFAE, 0 0 30px #FFFFAE, 0 0 40px #FFFFAE", // Amarillo claro
            "0 0 2px #4CAF50, inset 0 0 2px #4CAF50, 0 0 5px #4CAF50, 0 0 15px #4CAF50, 0 0 30px #4CAF50", // Verde
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <p className="neonText text-xs font-quick uppercase mb-6 text-primary-green font-semibold">
          Somente por tempo limitado
        </p>
        <h2 className="">Colonial</h2>
        <h2 className="">Black</h2>
        <p className="neonText text-[6rem] font-cookie text-primary-green absolute left-[8.5rem] -mb-[12rem] md:left-[13rem] md:-mb-[14rem] lg:left-[17rem] lg:-mb-[15rem] lg:text-9xl -rotate-[20deg]">
          Ofertas
        </p>
      </motion.div>
      <div className="relative z-20 flex justify-center flex-col">
        <div className="text-center text-gray-300 space-y-2 uppercase font-bold text-2xl lg:text-4xl">
          <p className="">
            Ofertas Incríveis, <span className="text-primary-green">Sem</span>{" "}
            Truques!
          </p>
          <p className="text-base lg:text-2xl bg-primary-green px-3 mx-auto">
            Venha aproveitar a autenticidade das nossas ofertas
          </p>
          <p className="text-xs lg:text-base">
            Junte-se a nós e faça parte deste clube{" "}
            <span className="text-primary-green">colonial black</span>
          </p>
        </div>
      </div>
      <CountdownTimer />
    </div>
  );
};

export default Hero;

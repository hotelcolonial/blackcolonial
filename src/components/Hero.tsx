"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { balloons } from "balloons-js";
import { confetti } from "@tsparticles/confetti";
import CountdownTimer from "./CountdownTimer";
import BalloonBackground from "./BalloonBackground";

const Hero = () => {
  /*   balloons(); */
  /*   const duration = 15 * 1000,
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
  }, 250); */
  return (
    <div className="padding-container background-pattern flex flex-col justify-between gap-5 items-center min-h-screen w-full bg-primary-black relative overflow-hidden">
      <div className="absolute w-full h-full z-20 hidden md:block">
        <BalloonBackground />
      </div>{" "}
      <div className="h-[9rem] w-[9rem] relative z-20">
        <Image
          alt="Hotel Colonial Logo"
          width={150}
          height={150}
          src="/colonial-logo.png"
        />
      </div>
      <motion.div
        className="text-[6rem] py-4 leading-[5rem] lg:text-[6.5rem] 2xl:text-[7.5rem] lg:leading-[5rem] 2xl:leading-[7rem] font-bangers text-center text-gray-300 relative  flex-col flex justify-center items-center rounded-full"
        animate={{
          boxShadow: [],
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
        <h2 className="neonTextLight relative z-20">Colonial Black</h2>
        <p className="neonText text-[4rem] left-[11rem] -mb-[12rem] sm:left-[26rem] sm:-mb-[7rem] lg:text-[5rem]  2xl:text-[6rem]  md:left-[27rem] md:-mb-[7rem] lg:left-[29rem] lg:-mb-[7rem] 2xl:left-[33rem] 2xl:-mb-[9rem] z-20 -rotate-[20deg] font-cookie text-primary-green absolute">
          Ofertas
        </p>
      </motion.div>
      <div className="relative z-20 flex justify-center flex-col">
        <div className="text-center text-gray-300 space-y-2 uppercase font-bold text-2xl 2xl:text-4xl">
          <p className="">
            Ofertas Incríveis, <span className="text-primary-green">Sem</span>{" "}
            Truques
          </p>
          <p className="text-base 2xl:text-2xl bg-primary-green px-3 mx-auto">
            Venha aproveitar a autenticidade das nossas ofertas
          </p>
          <p className="text-xs 2xl:text-base">
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

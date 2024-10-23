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
    defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 5 * (timeLeft / duration);

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
    <div className="padding-container background-pattern flex flex-col justify-between gap-8 items-center h-screen w-full bg-primary-black relative overflow-hidden">
      <BalloonBackground />
      <div className="h-[9rem] w-[9rem] relative z-20">
        <Image
          alt="Hotel Colonial Logo"
          width={800}
          height={800}
          src="/colonial-logo.png"
        />
      </div>
      <motion.div
        className="text-[7rem] leading-[6rem] lg:text-[9rem] lg:leading-[7rem] font-bangers text-center text-gray-300 relative shadow-[0_0_2px_#006039,inset_0_0_2px_#006039,0_0_5px_#006039,0_0_15px_#006039,0_0_30px_#006039] w-[25rem] h-[25rem] md:w-[30rem] md:h-[30rem] lg:w-[38rem] lg:h-[38rem]  flex-col flex justify-center items-center rounded-full"
        animate={{
          boxShadow: [
            "0 0 2px #006039, inset 0 0 2px #006039, 0 0 5px #006039, 0 0 15px #006039, 0 0 30px #006039",
            "0 0 10px #ff0000, inset 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000",
            "0 0 2px #006039, inset 0 0 2px #006039, 0 0 5px #006039, 0 0 15px #006039, 0 0 30px #006039",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <p className="text-xs font-quick uppercase mb-6 text-primary-green font-semibold">
          Somente por tempo limitado
        </p>
        <h2>Colonial</h2>
        <h2>Black</h2>
        <p className="font-cookie text-primary-green absolute left-[9rem] -mb-[12rem] md:left-[13rem] md:-mb-[14rem] lg:left-[17rem] lg:-mb-[15rem] lg:text-9xl -rotate-[20deg]">
          Ofertas
        </p>
      </motion.div>
      <div>
        <CountdownTimer />
      </div>
    </div>
  );
};

export default Hero;

"use client";

import { useState } from "react";

const VipForm = () => {
  return (
    // Contenedor principal con fondo oscuro y padding
    <div
      id="formulario"
      className="bg-black w-full pt-2 py-12 px-4 font-['Raleway',_sans-serif]"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Título */}
        <h2 className="text-[32px] md:text-3xl font-extrabold text-white uppercase tracking-wider">
          Inscrições Encerradas
        </h2>

        {/* Separador decorativo */}
        <div className="w-24 h-1 bg-[#006039] mx-auto my-6 rounded-full shadow-[0_0_10px_#006039]"></div>

        {/* Caja de Mensaje */}
        <div className="bg-[#0a0a0a] border border-[#333] p-8 md:p-12 rounded-lg shadow-[0_0_20px_rgba(0,96,57,0.2)] max-w-2xl mx-auto relative overflow-hidden">
          {/* Efecto de fondo sutil */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#006039] to-transparent opacity-50"></div>

          <div className="flex flex-col items-center justify-center space-y-4">
            {/* Icono */}
            <div className="text-4xl mb-2">🔒</div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-200">
              A Lista VIP já foi fechada
            </h3>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg mb-4">
              Infelizmente, não é mais possível se cadastrar na nossa lista de
              antecipação.
            </p>

            {/* --- SECCIÓN CLAVE --- */}
            <div className="w-full py-6 border-t border-dashed border-[#333]">
              <p className="text-[#4ade80] font-bold text-lg md:text-xl animate-pulse mb-2">
                Mas não se preocupe!
              </p>

              <p className="text-gray-300 text-sm uppercase tracking-widest mb-1">
                Fique de olho no site no dia
              </p>

              {/* FECHA GRANDE */}
              <p className="text-3xl md:text-5xl font-black text-white my-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                28 DE NOVEMBRO
              </p>

              <p className="text-gray-300 mt-2">
                Teremos promoções para todos por:
              </p>

              {/* DURACIÓN 24H RESALTADA */}
              <span className="inline-block mt-2 px-4 py-1 bg-red-900/30 border border-red-600/50 text-red-500 font-extrabold text-xl rounded uppercase tracking-wider shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                APENAS 24 HORAS
              </span>
            </div>

            {/* Botón con Redirección */}
            <a
              href="https://www.hotelcolonialfoz.com.br"
              className="mt-4 px-8 py-3 bg-[#111] border border-[#006039] text-[#006039] hover:bg-[#006039] hover:text-white transition-all duration-300 rounded uppercase font-bold text-sm tracking-widest inline-block text-center"
            >
              Acessar Site Oficial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipForm;

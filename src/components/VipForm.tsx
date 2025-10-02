"use client";

import { useState } from "react";

const VipForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // URL que copiaste de Google Apps Script
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxuoG4DHuB1zTHALsTViCEnJDsNV00ta8-rNRX7w6SUQ9_6jheTXeg5JT8h8Xe0Dcn3rQ/exec";

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      // Google Apps Script no devuelve un status.ok, pero podemos verificar la respuesta
      const result = await response.json();

      if (result.result === "success") {
        setModalMessage({
          title: "Inscrição Recebida!",
          body: "Obrigado por se inscrever! Fique de olho no seu e-mail e telefone para receber nossas ofertas VIP exclusivas.",
        });
        form.reset(); // Limpia el formulario
      } else {
        throw new Error("Hubo un error al registrar los datos.");
      }
    } catch (error) {
      console.error("Error!", error);
      setModalMessage({
        title: "Erro no Envio",
        body: "Não foi possível completar sua inscrição. Por favor, tente novamente mais tarde.",
      });
    } finally {
      setIsLoading(false);
      setIsModalOpen(true);
    }
  };

  return (
    // Contenedor principal con fondo oscuro y padding
    <div
      id="formulario"
      className="bg-black w-full pt-2 py-12 px-4 font-['Raleway',_sans-serif]"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Título Principal */}
        <h2 className="text-[32px] md:text-3xl font-extrabold text-white">
          Inscreva-se
        </h2>

        {/* Subtítulo */}
        <p className="text-gray-200 mt-3 mb-10">
          E tenha acesso às melhores promoções e descontos exclusivos!
        </p>

        {/* El tag <form> se usa para estructura, pero no tiene funcionalidad de envío */}
        <form onSubmit={handleSubmit} className="w-full">
          {/* Grid para los campos de entrada. Es 1 columna en móvil y 3 en escritorio */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Campo 1: Nombre */}
            <div>
              <label
                htmlFor="name"
                className="block text-left text-md text-white font-semibold mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nome"
                className="w-full bg-black text-xs text-gray-300 p-3 outline-none border-none
                           shadow-[inset_0_0_2px_#006039,0_0_5px_#006039,0_0_15px_#006039]
                           focus:ring-2 focus:ring-green-500 transition-shadow duration-300"
                required
              />
            </div>

            {/* Campo 2: Teléfono */}
            <div>
              <label
                htmlFor="phone"
                className="block text-left text-white font-semibold mb-2"
              >
                Telefone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Telefone"
                className="w-full bg-black text-xs text-gray-300 p-3 outline-none border-none
                           shadow-[inset_0_0_2px_#006039,0_0_5px_#006039,0_0_15px_#006039]
                           focus:ring-2 focus:ring-green-500 transition-shadow duration-300"
                required
              />
            </div>

            {/* Campo 3: Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-left text-white font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                className="w-full bg-black text-gray-300 text-xs p-3 outline-none border-none
                           shadow-[inset_0_0_2px_#006039,0_0_5px_#006039,0_0_15px_#006039]
                           focus:ring-2 focus:ring-green-500 transition-shadow duration-300"
                required
              />
            </div>
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={isLoading} // Deshabilita el botón mientras se envía
            className="w-full bg-[#006039] text-gray-300 font-medium uppercase py-2 mt-8 rounded-md hover:bg-green-700 transition-colors duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {isLoading ? "Enviando..." : "Quero Receber Ofertas VIP!"}
          </button>
        </form>

        {/* Texto de aviso legal */}
        <p className="text-xs text-gray-100 mt-6">
          Ao enviar este formulário, você autoriza o uso dos seus dados para que
          possamos entrar em contato sobre promoções e comunicações de marketing
        </p>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-black w-full max-w-md p-8 rounded-lg text-center relative border border-green-800 shadow-[0_0_5px_#006039,0_0_25px_#006039]"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              {modalMessage.title}
            </h3>
            <p className="text-gray-300 mb-8">{modalMessage.body}</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="bg-[#006039] text-gray-300 font-medium uppercase py-2 px-8 rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VipForm;

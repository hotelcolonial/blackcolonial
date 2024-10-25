import React from "react";

const Form = () => {
  return (
    <div
      id="formulario"
      className="padding-container font-raleway flex justify-center items-center background-pattern-secondary text-gray-300"
    >
      <form
        action="
       "
      >
        <fieldset className="flex flex-col gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
          <div className="space-y-2 text-center">
            <p className="text-[2rem] xl:text-5xl font-black">Inscreva-se</p>
            <p className="text-sm lg:text-[0.95rem] xl:text-lg">
              E tenha acesso às melhores promoções e descontos exclusivos!
            </p>
          </div>
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="space-y-3">
              <label htmlFor="username" className="text-base font-semibold">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                placeholder="Nome"
                className="w-full rounded-md outline-none text-base px-3 py-1 text-gray-300 bg-primary-black shadow-[inset_0_0_2px_#006039,0_0_5px_#006039,0_0_30px_#006039]"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="username" className="text-base font-semibold">
                Email
              </label>
              <input
                id="nome"
                type="text"
                placeholder="Email"
                className="w-full rounded-md outline-none text-base px-3 py-1 text-gray-300 bg-primary-black shadow-[inset_0_0_2px_#006039,0_0_5px_#006039,0_0_30px_#006039]"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="username" className="text-base font-semibold">
                Telefone
              </label>
              <input
                id="nome"
                type="text"
                placeholder="Telefone"
                className="w-full rounded-md outline-none text-base px-3 py-1 text-gray-300 bg-primary-black shadow-[inset_0_0_2px_#006039,0_0_5px_#006039,0_0_30px_#006039]"
              />
            </div>
          </div>
        </fieldset>
        <div className="text-center bg-primary-green py-3 mt-3 rounded-md font-medium hover:bg-opacity-80 cursor-pointer">
          <button className="uppercase">Quero Receber Ofertas VIP!</button>
        </div>
        <p className="text-center lg:w-3/5 py-3 text-xs mx-auto">
          Ao enviar este formulário, você autoriza o uso dos seus dados para que
          possamos entrar em contato sobre promoções e comunicações de marketing
        </p>
      </form>
    </div>
  );
};

export default Form;

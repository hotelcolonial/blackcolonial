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
        <div className="space-y-2 text-center">
          <p className="text-[2rem] xl:text-5xl font-black">Inscreva-se</p>
          <p className="text-sm lg:text-[0.95rem] xl:text-lg">
            E tenha acesso às melhores promoções e descontos exclusivos!
          </p>
        </div>
        <div className="mx-auto h-[20rem] lg:h-[10rem]">
          <iframe src="/cadastro.html" width="100%" height="100%"></iframe>
          <p className="text-center lg:w-3/5 py-3 text-xs mx-auto">
            Ao enviar este formulário, você autoriza o uso dos seus dados para
            que possamos entrar em contato sobre promoções e comunicações de
            marketing
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;

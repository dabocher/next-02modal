"use client";

import Button from "@/components/Button/Button";
import Input from "../Input/Input";
import FormTitle from "../Form/FormTitle";

const LoginForm = () => {
  const handleFormSumit = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <form
      onSubmit={handleFormSumit}
      className="flex gap-6 my-5 flex-col pt-10 pb-2 w-full 0"
    >
      <FormTitle title={"Iniciar Sesión"} />
      <div className="pb-6 flex justify-center flex-col bg-zinc-200 rounded-md shadow-md">
        <Input
          name={"Usuaria / o"}
          type={"text"}
          placeholder={"Andrea_Peroni"}
          id={"username"}
        />
        <Input
          name={"Correo Electrónico"}
          type={"email"}
          placeholder={"andrea.peroni@hotmail.com"}
          id={"email"}
        />
        <Input
          name={"Contraseña"}
          type={"password"}
          placeholder={"andreita_123"}
          id={"password"}
        />
      </div>
      <div className=" flex gap-2 justify-center flex-col rounded-md ">
        <Button title={"Iniciar Sesión"} type={"button"} url={"/"} />
        <div className="flex flex-wrap justify-center items-center gap-2">
          <p className="text-center mt-1 text-xs  text-red-600 font-medium sm:text-md">
            ¿No tienes cuenta?
          </p>
          <span className="text-center text-sm text-red-600 font-medium sm:text-md">
            Regístrate
          </span>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

import Input from "../../Input/Input";
import FormTitle from "../FormTitle";
import Button from "@/components/Button/Button";

const LoginForm = () => {
  return (
    <form className="flex gap-1 flex-col pt-10 pb-2">
      <div className="flex gap-3 flex-col">
        <FormTitle title={"Iniciar Sesión"} />
        <div className="pb-6 flex justify-center flex-col bg-gray-200 rounded-md shadow-md">
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
        <div className=" flex justify-center flex-col rounded-md ">
          <Button title={"Iniciar Sesión"} type={"button"} url={"/"} />
          <p className="text-center mt-1 text-xs  text-red-600 font-medium sm:text-md">
            ¿No tienes cuenta?
          </p>
          <p className="text-center text-sm  text-red-600 font-medium sm:text-md">
            Regístrate
          </p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

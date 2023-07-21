import { Racing_Sans_One } from "next/font/google";
import Link from "next/link";

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

const LoginForm = () => {
  return (
    <form className="flex gap-1 flex-col pt-10 pb-2">
      <div className="flex gap-3 flex-col">
        <h1
          className={`${racing.className} w-full text-2xl text-center leading-12 font-medium text-gray-100 bg-gray-600  py-2 rounded-md uppercase sm:text-4xl`}
          id="modal-title"
        >
          Inicio Sesión
        </h1>
        <div className=" py-3 flex justify-center flex-col bg-gray-200 rounded-md shadow-md">
          <label
            htmlFor="username"
            className={`${racing.className} uppercase text-lg text-gray-700 mx-6   align-text-left sm:text-2xl sm-mb-2`}
          >
            Usuaria/o
          </label>
          <input
            id="username"
            className="rounded-md  mx-5  px-2 py-3  text-gray-500 text-xs shadow-md sm:text-xl sm:py-5 sm:px-4"
            type="text"
            placeholder="Andrea_Peroni"
          />
          <label
            htmlFor="email"
            className={`${racing.className} uppercase text-lg text-gray-700 mx-6 mt-5  align-text-left sm:text-2xl sm-mb-2`}
          >
            Correo Electrónico
          </label>
          <input
            id="email"
            className="rounded-md  mx-5  px-2 py-3  text-gray-500 text-xs shadow-md sm:text-xl sm:py-5 sm:px-4"
            type="email"
            placeholder="andrea.peroni@hotmail.com"
          />
          <label
            htmlFor="password"
            className={`${racing.className} uppercase text-lg text-gray-700 mx-6 mt-5  align-text-left sm:text-2xl sm-mb-2`}
          >
            Contraseña
          </label>
          <input
            id="password"
            className="rounded-md  mx-5  px-2 py-3  text-gray-500 text-xs shadow-md sm:text-xl sm:py-5 sm:px-4"
            type="password"
            placeholder="andreita123"
          />
        </div>
        <div className=" flex justify-center flex-col rounded-md ">
          <Link
            href="/"
            type="button"
            className={`${racing.className} transition-all duration-1000 disabled:opacity-75  text-2xl text-center rounded-lg border border-transparent px-4 py-2 bg-blue-600 font-medium text-white hover:bg-blue-800 hover:scale-[1.015] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 uppercase mb-2 w-full shadow-2xl sm:text-3xl`}
          >
            Iniciar
          </Link>
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

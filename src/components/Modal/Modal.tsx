import { Racing_Sans_One } from "next/font/google";
import LoginForm from "../LoginForm/LoginForm";

const racing = Racing_Sans_One({ subsets: ["latin"], weight: "400" });

const Modal = () => {
  return (
    <section
      className="fixed z-10 inset-0 overflow-y-auto"
      id="error-modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="block min-h-screen text-center  p-2">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span className="hidden align-middle h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block  bg-white rounded-lg px-4  pb-4 text-left overflow-hidden shadow-xl transform transition-all my-10 align-middle w-full sm:max-w-lg sm:px-10 tracking-[.08rem]">
          <LoginForm />
        </div>
      </div>
    </section>
  );
};
export default Modal;

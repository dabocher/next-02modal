import { racing as font } from "@/app/layout";

interface InputProps {
  type: string;
  id: string;
  placeholder: string;
  isTextArea?: boolean;
  name: string;
}

const Input = ({ type, placeholder, name }: InputProps) => {
  return (
    <>
      <label
        htmlFor={type}
        className={`${font.className} uppercase text-lg text-gray-700 mx-6 mt-5  align-text-left sm:text-2xl sm-mb-2`}
      >
        {name}
      </label>
      <input
        id={type}
        className="rounded-md  mx-5  px-2 py-3  text-gray-500 text-xs shadow-md sm:text-xl sm:py-5 sm:px-4"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;

import { racing as font } from "@/app/layout";

interface FormTitleProps {
  title: string;
}

const FormTitle = ({ title }: FormTitleProps) => {
  return (
    <h1
      className={`${font.className} w-full text-2xl text-center leading-12 font-medium text-gray-100 bg-gray-600  py-2 rounded-md uppercase sm:text-4xl`}
      id="modal-title"
    >
      {title}
    </h1>
  );
};

export default FormTitle;

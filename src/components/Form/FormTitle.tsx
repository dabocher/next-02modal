import { racing as font } from "@/app/layout";

interface FormTitleProps {
  title: string;
}

const FormTitle = ({ title }: FormTitleProps) => {
  return (
    <h1
      className={`${font.className} w-full text-5xl text-center leading-12 font-medium text-slate-100  py-2 rounded-md uppercase sm:text-6xl bg-slate-700`}
    >
      {title}
    </h1>
  );
};

export default FormTitle;

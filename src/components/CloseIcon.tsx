import Image from "next/image";

interface CloseIconProps {
  onDismiss: () => void;
}

const CloseIcon = ({ onDismiss }: CloseIconProps) => {
  return (
    <>
      <button
        type="button"
        onClick={onDismiss}
        className="absolute top-4 right-4"
      >
        <Image
          src="/icons/close_icon.svg"
          width={20}
          height={20}
          alt="close button"
        />
      </button>
    </>
  );
};

export default CloseIcon;

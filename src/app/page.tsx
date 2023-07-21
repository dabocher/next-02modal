import Modal from "@/components/Modal/Modal";
import Image from "next/image";
import Link from "next/link";

const HomePage = ({
  searchParams,
}: {
  searchParams: Record<string, string | null | undefined>;
}) => {
  const showModal = searchParams?.modal;

  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Link
          href="/?modal=true"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          LOGIN
        </Link>
        {showModal && <Modal />}
      </div>
    </main>
  );
};

export default HomePage;

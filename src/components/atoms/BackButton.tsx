import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";

type LinksProps = {
  setState?: Dispatch<SetStateAction<boolean>>;
  title?: string;
};

const BackButton: React.FC<LinksProps> = ({ setState }) => {
  const router: AppRouterInstance = useRouter();
  return (
    <div className="w-[90vw] ml-4 top-0 mt-[30px] absolute">
      <button
        className="absolute text-left text-white bg-transparent border  border-blue-800 rounded-full font-extrabold text-[1.2rem] p-[8px]"
        onClick={setState ? () => setState(false) : () => router.back()}
      >
        <FaArrowLeftLong />
      </button>
    </div>
  );
};
export default BackButton;

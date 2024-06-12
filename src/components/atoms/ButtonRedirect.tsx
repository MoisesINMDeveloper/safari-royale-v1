import Link from "next/link";

const ButtonRedirect = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      className="text-gray-100 hover:text-white border border-blue-800 hover:border-blue-700 rounded-xl w-[90vw] h-12 flex flex-row justify-center items-center text-xl"
      href={href}
    >
      {text}
    </Link>
  );
};
export default ButtonRedirect;

import Link from "next/link";
import LogoIconRoyale from "../atoms/LogoIconRoyale";
import MenuHam from "./MenuHam";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-screen px-4 pt-3 mb-6 glassEffect">
      <LogoIconRoyale />
      
      <div className=" border h-10 w-36 flex justify-evenly items-center border-blue-800 rounded-full ">
        <Link className="text-2xl text-red-500" href={"/deposit-or-withdrawal"}>
          -
        </Link>
        <Link className="text-md text-white" href={"/deposit-or-withdrawal"}>
          9.99 $
        </Link>
        <Link
          className="text-2xl text-green-500"
          href={"/deposit-or-withdrawal"}
        >
          +
        </Link>
      </div>
      <div className="text-white "><MenuHam/></div>
    </nav>
  );
};

export default Navbar;

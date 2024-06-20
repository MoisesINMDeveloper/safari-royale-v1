import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import LogoIconRoyale from "../atoms/LogoIconRoyale";
import { useState } from "react";
import MenuHam from "./MenuHam";
import { UserData } from "../../../types";

interface NavbarProps {
  userData: UserData;
}
const Navbar: React.FC<NavbarProps> = ({ userData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center w-screen px-4 pt-3 mb-6 glassEffect">
      <LogoIconRoyale />
      <div className=" border h-10 w-36 flex justify-evenly items-center border-blue-800 rounded-full bg-">
        <Link className="text-2xl text-red-500" href={"/deposit-or-withdrawal"}>
          -
        </Link>
        <Link className="text-md text-white" href={"/deposit-or-withdrawal"}>
          {userData.balance} $
        </Link>
        <Link
          className="text-2xl text-green-500"
          href={"/deposit-or-withdrawal"}
        >
          +
        </Link>
      </div>
      <div
        className={`${
          isMenuOpen
            ? "text-gray-100 transition-all duration-1000 rotate-360"
            : "text-white transition-all duration-1000  rotate-180"
        }`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <IoClose className="text-gray-100 h-7 w-7" />
        ) : (
          <GiHamburgerMenu className="text-gray-100 h-7 w-7" />
        )}
      </div>
      <div
        className={`absolute top-full right-0 w-screen transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <MenuHam userData={userData} />
      </div>
    </nav>
  );
};

export default Navbar;

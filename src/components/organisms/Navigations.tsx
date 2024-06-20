import { Key } from "react";
import NavItem from "../atoms/NavItem";

const urlsLink = [
  { href: "/deposit-or-withdrawal", text: "Depositar" },
  { href: "/deposit-or-withdrawal", text: "Retirar" },
  { href: "/history", text: "Movimientos" },
  { href: "/results", text: "Resultados" },
  { href: "/account", text: "Mi cuenta" },
];
const Navigations = () => {
  return (
    <nav className="flex mt-1 items-center justify-between px-4 pt-2 w-screen bg-[#020aa73b] box-shadow">
      {urlsLink.map(
        (
          link: { text: string; href: string },
          index: Key | null | undefined
        ) => (
          <NavItem key={index} text={link.text} href={link.href} />
        )
      )}
    </nav>
  );
};

export default Navigations;

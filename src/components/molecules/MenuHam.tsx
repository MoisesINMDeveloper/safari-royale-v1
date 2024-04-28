import Link from "next/link";

const MenuHam = () => {
  <div>
    <ul className="w-screen text-2xl flex justify-between items-center">
      <li>
        <Link href={"/deposit-or-withdrawal"}>Depositar</Link>
      </li>
      <li>
        <Link href={"/deposit-or-withdrawal"}>Retirar</Link>
      </li>
      <li>
        <Link href={"/history"}>Movimientos</Link>
      </li>
      <li>
        <Link href={"/results"}>Resultados</Link>
      </li>
      <li>
        <Link href={"/logout"}>Salir</Link>
      </li>
    </ul>
    ;
  </div>;
};
export default MenuHam;

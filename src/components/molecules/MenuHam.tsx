import Link from "next/link";

const menuItems = [
  { href: "/deposit-or-withdrawal", label: "Depositar" },
  { href: "/deposit-or-withdrawal", label: "Retirar" },
  { href: "/history", label: "Movimientos" },
  { href: "/results", label: "Resultados" },
  { href: "/account", label: "Mi cuenta" },
];

const MenuHam = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="absolute w-[70vw] right-0 h-auto">
      <ul className="text-lg p-4 gap-4 flex flex-col justify-start items-start text-white bg-[#02000ecb] shadow-blue-600 rounded-md">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
        <li>
          <button onClick={handleLogout} className="text-left w-full">
            Salir
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MenuHam;

import NavItem from "../atoms/NavItem";

const Navigations: React.FC<NavigationsProps> = ({ urlsLink }) => {
  return (
    <nav className="flex mt-1 items-center justify-between px-4 pt-2 w-screen bg-[#020aa73b] box-shadow">
      {urlsLink.map((link, index) => (
        <NavItem key={index} text={link.text} href={link.href} />
      ))}
    </nav>
  );
};

export default Navigations;

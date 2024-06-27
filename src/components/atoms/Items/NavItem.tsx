import Link from "next/link";

const NavItem = ({
  href,
  text,
  className,
  onClick,
}: {
  href: string;
  text: string;
  onClick?: () => void;
  className?: string;
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <Link
      className={` text-xs  ${className}`}
      href={href}
      onClick={handleClick}
    >
      {text}
    </Link>
  );
};
export default NavItem;

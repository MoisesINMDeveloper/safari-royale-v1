import Link from "next/link";
interface LinksProps {
  href: string;
  text: string;
  className?: string;
}
const LinkRedirect: React.FC<LinksProps> = ({ href, text, className }) => {
  return (
    <div className="px-2">
      <Link className={` text-xs text-white ${className}`} href={href}>
        {text}
      </Link>
    </div>
  );
};
export default LinkRedirect;

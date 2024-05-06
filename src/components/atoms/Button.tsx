interface ButtonProps {
  type: any;
  text: string;
  className?: string;
  loader?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button: React.FC<ButtonProps> = ({ type, text, className, onClick }) => {
  return (
    <button
      className={`bg-blue-800 font-bold text-white w-[7rem] rounded-full h-10 ${className}`}
      type={type} onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

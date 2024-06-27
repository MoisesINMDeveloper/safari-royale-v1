interface ButtonProps {
  type: any;
  text: string;
  onClick?: any;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ type, text, className, onClick }) => {
  return (
    <button
      className={`bg-blue-800 font-bold text-gray-100 hover:text-white w-[7rem] rounded-xl h-12 ${className}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

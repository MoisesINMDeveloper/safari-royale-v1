interface ButtonProps {
  type: any;
  text: string;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ type, text, className }) => {
  return (
    <button
      className={`bg-blue-800 font-bold text-white w-[7rem] rounded-full h-10 ${className}`}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;

interface InputProps {
  type: string | number | any;
  name: string;
  value: string | any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}
const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      className={`h-[39px] text-sm px-4 w-full text-white border rounded-full border-blue-800 outline-none  placeholder:text-gray-500 bg-transparent placeholder:text-sm ${className}`}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
export default Input;

interface TextTitleProps {
  name: string;
  className?: string;
}
const TextTitle: React.FC<TextTitleProps> = ({ name, className }) => {
  return (
    <h1 className={`${className} text-4xl text-white font-semibold my-5`}>
      {name}
    </h1>
  );
};

export default TextTitle;

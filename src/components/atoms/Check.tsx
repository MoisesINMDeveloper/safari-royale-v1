import React, { Dispatch, SetStateAction } from "react";

interface CheckProps {
  href?: React.MouseEventHandler<HTMLButtonElement>;
  required?: boolean;
  state?: boolean;
  setState?: React.Dispatch<React.SetStateAction<boolean>>;
  linkText?: string;
  text?: string;
}

const Check: React.FC<CheckProps> = ({
  linkText,
  text,
  href,
  state,
  setState,
}) => {
  const handleCheckboxChange = () => {
    if (setState) {
      setState(!state);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        id="checkbox"
        className="ml-4 w-5 h-5 rounded-full bg-transparent border border-blue-800 focus:bg-gray-800"
        checked={state}
        onChange={handleCheckboxChange}
        aria-label="Aceptar políticas de privacidad"
      />
      <div className="text-gray-800">
        {text}{" "}
        <button
          onClick={href}
          type="button"
          className="underline underline-offset-2 text-gray-400">
          {linkText} 
        </button>
      </div>
    </div>
  );
};

export default Check;
import React, { Dispatch, SetStateAction } from "react";

interface CheckProps {
  href?: React.MouseEventHandler<HTMLButtonElement>;
  required?: boolean;
  state?: boolean;
  setState?: Dispatch<SetStateAction<boolean>>;
  linkText?: string;
  text?: string;
}

const Check: React.FC<CheckProps> = ({
  linkText,
  text,
  href,
  required,
  state,
  setState,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <label className=" flex items-center " htmlFor="checkbox">
        <input
          type="checkbox"
          placeholder="none"
          id="checkbox"
          className="ml-4 w-5 h-5 rounded-full bg-transparent border border-blue-800"
          required={required}
          checked={state}
        />
      </label>
      <div className="text-gray-800">
        {text}{" "}
        <button
          onClick={href}
          type="button"
          className="underline underline-offset-2 text-gray-400"
        >
          {linkText}
        </button>
      </div>
    </div>
  );
};

export default Check;

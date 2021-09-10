import { useState } from "react";

interface Props {
  placeholder: string;
  className?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: string;
}

const Input = (props: Props) => {
  return (
    <input
      required
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      className={`border border-purple rounded-sm mb-3 h-8 w-full focus:outline-none bg-black text-white px-2 py-3 text-xs ${props.className}`}
    />
  );
};

export default Input;

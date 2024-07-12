import React from "react";

interface CustomInputProps {
  children: React.ReactNode;
  value: string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}

const CustomInput = ({ children, value, onChange }: CustomInputProps) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input
        type="text"
        id="search"
        defaultValue={value}
        onChange={onChange}
        placeholder="Example"
      />
    </div>
  );
};

export default CustomInput;

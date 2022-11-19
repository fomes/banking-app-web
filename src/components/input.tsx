import React from "react";
import "../styles/input.css";

interface InputProps {
  type: string;
  value: any;
  onChange: any;
  placeholder: string;
}

export default function Input({
  type,
  value,
  onChange,
  placeholder,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

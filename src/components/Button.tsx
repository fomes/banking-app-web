import React from "react";
import "../styles/button.css";

interface ButtonPropos {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
  className?: string;
}

export default function Button({
  text,
  type,
  onClick,
  className,
}: ButtonPropos) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {text}
    </button>
  );
}

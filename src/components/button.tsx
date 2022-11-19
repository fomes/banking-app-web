import React from "react";
import "../styles/button.css";

interface ButtonPropos {
  text: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick: () => void;
}

export default function Button({ text, type, onClick }: ButtonPropos) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}

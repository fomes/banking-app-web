import React from "react";
import Button from "./Button";
import Input from "./Input";

interface HeaderProps {
  name: string | null;
  token: string | null;
  amount: string;
  balance: number;
  userTarget: string;
  setAmount: Function;
  setUserTarget: Function;
  handleLogOut: () => void;
  handleTransfer: () => void;
}

export default function Header({
  name,
  balance,
  setAmount,
  handleLogOut,
  setUserTarget,
  handleTransfer,
}: HeaderProps) {
  return (
    <>
      <div className="header">
        <h1>Bem vindo {name}!</h1>
        <h3>Saldo: R$ {balance.toFixed(2)}</h3>
        <Button text="Sair" type="button" onClick={handleLogOut} />
      </div>

      <div className="transfer-section">
        <Input type="text" placeholder="Username" onChange={setUserTarget} />

        <Input type="number" onChange={setAmount} placeholder="valor" />

        <Button
          text="Transferir"
          type="button"
          onClick={handleTransfer}
          className="btn-transfer"
        />
      </div>
    </>
  );
}

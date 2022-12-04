import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { FaUserCircle } from "react-icons/fa";
import { BiLogOutCircle } from "react-icons/bi";
import Modal from "react-modal";

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

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#333"
  },
};

Modal.setAppElement("#root");

export default function Header({
  name,
  balance,
  setAmount,
  handleLogOut,
  setUserTarget,
  handleTransfer,
}: HeaderProps) {
  const [showData, setShowData] = useState(false);
  const [showModalTransfer, setShowMOdalTransfer] = useState(false);

  const userDataToggle = () => {
    setShowData(!showData);
  };

  return (
    <>
      <div className="header">
        <FaUserCircle
          size={30}
          className={"pointer"}
          onClick={userDataToggle}
        />

        <div
          id="modal-transfer"
          className={`modal-transfer ${showData ? "visible" : "hidden"}`}
        >
          <h1>{name}</h1>
          <h3>Saldo: R$ {balance.toFixed(2)}</h3>
          <button
            className="btn-new-transfer"
            onClick={() => setShowMOdalTransfer(true)}
          >
            Transferência
          </button>
          <BiLogOutCircle
            size={30}
            onClick={handleLogOut}
            className="pointer"
          />
        </div>
      </div>

      <Modal
        isOpen={showModalTransfer}
        style={customStyles}
        onRequestClose={() => setShowMOdalTransfer(false)}
      >
        <h3 className="transfer-section-title">Transferir para:</h3>
        <div className="transfer-section">
          <Input type="text" placeholder="username" onChange={setUserTarget} />

          <Input type="number" onChange={setAmount} placeholder="valor" />

          <Button
            text="Transferir"
            type="button"
            onClick={handleTransfer}
            className="btn-transfer" 
           />
        </div>
      </Modal>
    </>
  );
}

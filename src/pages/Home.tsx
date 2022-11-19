import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";
import Table from "../components/table";
import { getBalance } from "../services/getBalance";
import { getTransfers } from "../services/getTransfers";
import { handleTransfer } from "../services/postTransfer";
import "../styles/home.css";

export default function Home() {
  const [name] = useState(localStorage.getItem("user"));
  const [token] = useState(localStorage.getItem("token"));
  const [userTarget, setUserTarget] = useState("");
  const [error, setError] = useState("");
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState("");
  const [transfersList, setTransferList] = useState([]);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  useEffect(() => {
    getBalance(token, setBalance);
    getTransfers(token, setTransferList);
  }, []);

  useEffect(() => {
    if (userTarget || amount) {
      setError("");
    }
  }, [userTarget, amount]);

  return (
    <>
      {token ? (
        <div>
          <div className="header">
            <h1>Bem vindo {name}!</h1>
            <h3>Saldo: R$ {balance.toFixed(2)}</h3>
            <Button text="Sair" type="button" onClick={handleLogOut} />
          </div>

          <div className="transfer-section">
            <Input
              type="text"
              placeholder="Username"
              onChange={(event: any) => setUserTarget(event.target.value)}
            />

            <Input
              type="number"
              onChange={(event: any) => setAmount(event.target.value)}
              placeholder="valor"
            />

            <Button
              text="Transferir"
              type="button"
              onClick={() =>
                handleTransfer(userTarget, Number(amount), token, setUserTarget)
              }
              className="btn-transfer"
            />
          </div>

          <div className="label-error transfer-error">{error}</div>

          <div className="history">
            <Table transfersList={transfersList} />
          </div>
        </div>
      ) : (
        <h1>Não autorizado!</h1>
      )}
    </>
  );
}

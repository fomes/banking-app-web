import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Table from "../components/Table";
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
          <Header
            name={name}
            token={token}
            amount={amount}
            balance={balance}
            userTarget={userTarget}
            setAmount={(event: React.FormEvent<HTMLInputElement>) =>
              setAmount(event.currentTarget.value)
            }
            handleLogOut={handleLogOut}
            setUserTarget={(event: React.FormEvent<HTMLInputElement>) =>
              setUserTarget(event.currentTarget.value)
            }
            handleTransfer={() =>
              handleTransfer(userTarget, Number(amount), token)
            }
          />

          <div className="label-error transfer-error">{error}</div>

          <div className="history">
            <Table data={transfersList} />
          </div>
        </div>
      ) : (
        <h1 className="no-auth-title">Não autorizado!</h1>
      )}
    </>
  );
}

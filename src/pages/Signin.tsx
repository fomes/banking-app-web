import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import { api } from "../services/api";
import "../styles/signin.css";

export default function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!userName || !password) {
      setError("Preencha todos os campos!");
      return;
    } else {
      try {
        let res = await api.post("/users/login", {
          username: userName,
          password,
        });

        localStorage.setItem("user", userName);
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      } catch (err) {
        setError(err?.response?.data?.error);
      }
    }
  };

  useEffect(() => {
    if (userName || password) {
      setError("");
    }
  }, [userName, password]);

  return (
    <div className="container">
      <div className="label">NG LOGIN</div>
      <div className="content">
        <Input
          type={"text"}
          value={userName}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setUserName(event.currentTarget.value)
          }
          placeholder="Digite seu nome"
        />

        <Input
          type={"password"}
          value={password}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setPassword(event.currentTarget.value)
          }
          placeholder="Digite sua senha"
        />

        <div className="label-error">{error}</div>
        <Button
          text="Entrar"
          type="button"
          onClick={handleLogin}
          className={"btn-login"}
        />

        <div className="label-signup">
          <span>Não tem uma conta? </span>
          <strong>
            <Link to={"/signup"}>Registe-se</Link>
          </strong>
        </div>
      </div>
    </div>
  );
}

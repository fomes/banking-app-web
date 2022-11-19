import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";
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
          onChange={(event: any) => setUserName(event.target.value)}
          placeholder="Digite seu nome"
        />

        <Input
          type={"password"}
          value={password}
          onChange={(event: any) => setPassword(event.target.value)}
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

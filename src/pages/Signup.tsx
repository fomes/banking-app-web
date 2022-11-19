import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";
import { api } from "../services/api";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    if (!userName || !password || !confirmPassword) {
      setError("Preencha todos os campos!");
      return;
    } else {
      try {
        await api.post("/users/new", {
          username: userName,
          password,
        });

        alert("Usuário cadastrado com sucesso!");
        setUserName("");
        setPassword("");
        setConfirmPassword("");
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
      <div className="label">CADASTRO</div>
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

        <Input
          type={"password"}
          value={confirmPassword}
          onChange={(event: any) => setConfirmPassword(event.target.value)}
          placeholder="Confirme sua senha"
        />

        <div className="label-error">{error}</div>
        <Button text="Cadastrar" type="button" onClick={handleSignUp} />

        <div className="label-signup">
          <span>Já tem uma conta? </span>
          <strong>
            <Link to={"/signin"}>Entre</Link>
          </strong>
        </div>
      </div>
    </div>
  );
}

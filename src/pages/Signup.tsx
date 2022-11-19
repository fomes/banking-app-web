import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/input";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log("login");
    if (!email || !password || !confirmPassword) {
      setError("Preencha todos os campos!");
      return;
    } else {
      alert("Usuário cadastrado com sucesso!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }
  };

  useEffect(() => {
    if (email || password) {
      setError("");
    }
  }, [email, password]);

  return (
    <div className="container">
      <div className="label">CADASTRO</div>
      <div className="content">
        <Input
          type={"email"}
          value={email}
          onChange={(event: any) => setEmail(event.target.value)}
          placeholder="Digite seu e-mail"
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
          placeholder="Digite novamente sua senha"
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

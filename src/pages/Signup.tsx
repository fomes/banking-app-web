import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../components/Button";
import Input from "../components/Input";
import { api } from "../services/api";

export default function Signup() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

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

        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Usuário cadastrado com sucesso!",
        });

        navigate("/");

        setUserName("");
        setPassword("");
        setConfirmPassword("");
      } catch (err: any) {
        setError(err?.response?.data?.error);
      }
    }
  };

  useEffect(() => {
    if (password !== confirmPassword) {
      setError("Passord does not match!");
    } else {
      setError("");
    }
  }, [password, confirmPassword]);

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

        <Input
          type={"password"}
          value={confirmPassword}
          onChange={(event: React.FormEvent<HTMLInputElement>) =>
            setConfirmPassword(event.currentTarget.value)
          }
          placeholder="Confirme sua senha"
        />

        <div className="label-error">{error}</div>
        <Button
          text="Cadastrar"
          type="button"
          onClick={handleSignUp}
          className="btn-login"
        />

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

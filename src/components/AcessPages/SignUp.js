import { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { postSignUp } from "../../services/backtothedisc";
import MessageContext from "../../contexts/MessageContext";

import { Container, Button, Logo, Input } from "./AcessStyled";
import { DiscIcon } from "../../common/Icons";
import Warning from "../../common/Warning";

export default function SignUp() {
  const navigate = useNavigate("");
  const { setMessage } = useContext(MessageContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const body = {
    name,
    email,
    password,
  };

  function joinSignUp(event) {
    event.preventDefault();

    if (name.length < 4) {
      setErrorName(true);

      nameRef.current.focus();
    } else if (repeatPassword !== password || password.length < 4) {
      passwordRef.current.focus();

      setErrorPassword(true);
      setErrorName(false);

      setMessage({
        type: "alert",
        message: {
          text: "As senhas devem ser iguais e ter no mínimo 4 caracteres!",
          type: "error",
        },
      });
    } else {
      setErrorName(false);

      const promise = postSignUp(body);

      promise.catch((err) => {
        setErrorPassword(false);

        emailRef.current.focus();
        if (err.response.status === 409) {
          setErrorEmail(true);
        } else if (err.response.status === 422) {
          setErrorEmail(true);
        }
        setMessage({
          type: "alert",
          message: {
            text: "Ocorreu um erro no cadastro. Por favor, tente novamente.",
            type: "error",
          },
        });
      });

      promise.then(() => {
        setMessage({
          type: "alert",
          message: {
            text: "Cadastro realizado com sucesso!",
            type: "success",
          },
        });

        navigate("/sign-in");
      });
    }
  }

  return (
    <Container>
      <DiscIcon fontSize={"150px"} />

      <Logo>
        BACK TO THE <p></p> DISC
      </Logo>

      <form onSubmit={joinSignUp}>
        <Input
          placeholder="Nome"
          value={name}
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
          backgroundColor={errorName}
          ref={nameRef}
        />

        {errorName ? (
          <Warning>Seu nome deve ter no mínimo 4 letras!</Warning>
        ) : (
          ""
        )}

        <Input
          placeholder="E-mail"
          value={email}
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
          backgroundColor={errorEmail}
          ref={emailRef}
        />

        {errorEmail ? <Warning>E-mail inválido ou já cadastrado!</Warning> : ""}

        <Input
          placeholder="Senha"
          value={password}
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
          backgroundColor={errorPassword}
          ref={passwordRef}
        />

        {errorPassword ? <Warning>Senha inválida!</Warning> : ""}

        <Input
          placeholder="Confirme a senha"
          value={repeatPassword}
          type="password"
          required
          onChange={(e) => setRepeatPassword(e.target.value)}
          backgroundColor={errorPassword}
        />

        {errorPassword ? <Warning>Senha inválida!</Warning> : ""}

        <Button>Cadastrar</Button>
      </form>

      <Link to={"/sign-in"}>Já tem uma conta? Entre agora!</Link>
    </Container>
  );
}

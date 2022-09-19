import { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { postSignIn } from "../../services/backtothedisc";
import MessageContext from "../../contexts/MessageContext";

import { Container, Logo, Button, Input } from "./AcessStyled";
import { DiscIcon } from "../../common/Icons";
import Warning from "../../common/Warning";

export default function SignIn() {
  const navigate = useNavigate("");
  const { setMessage } = useContext(MessageContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const body = {
    email,
    password,
  };

  function joinSignIn(event) {
    event.preventDefault();

    postSignIn(body)
      .catch((err) => {
        console.log(err);
        if (err.response.status === 400 || err.response.status === 422) {
          setErrorEmail(true);
          setErrorPassword(false);

          emailRef.current.focus();
        } else if (err.response.status === 401) {
          setErrorPassword(true);
          setErrorEmail(false);

          passwordRef.current.focus();
        }

        setMessage({
          type: "alert",
          message: {
            text: "Não foi possível efetuar o login! Tente novamente.",
            type: "error",
          },
        });
      })
      .then((response) => {
        localStorage.setItem(
          "backtothedisc",
          JSON.stringify({ token: response.data })
        );

        setMessage({
          type: "alert",
          message: {
            text: "Bem vindo(a)!",
            type: "success",
          },
          style: {
            top: "60px",
          },
        });

        navigate("/");
      });
  }

  return (
    <Container>
      <DiscIcon fontSize={"150px"} />

      <Logo>
        BACK TO THE <p></p> DISC
      </Logo>

      <form onSubmit={joinSignIn}>
        <Input
          placeholder="E-mail"
          value={email}
          type="email"
          pattern="[a-z0-9._%+-]+@[a-zLink, 0-9.-]+\.[a-z]{2,4}$"
          required
          onChange={(e) => setEmail(e.target.value)}
          backgroundColor={errorEmail}
          ref={emailRef}
        />
        {errorEmail ? (
          <Warning>
            O e-mail informado é inválido ou não está cadastrado!
          </Warning>
        ) : (
          ""
        )}

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

        <Button>Entrar</Button>
      </form>

      <Link to={"/sign-up"}>Não tem uma conta? Cadastre-se!</Link>
    </Container>
  );
}

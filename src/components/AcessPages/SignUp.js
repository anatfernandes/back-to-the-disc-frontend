import styled from "styled-components";
import Input from "../../common/Input";
import Button from "./AcessStyled";
import {DiscIcon} from "../../common/Icons";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignUp } from "../../services/backtothedisc";
import MessageContext from "../../contexts/MessageContext";

export default function SignUp() {
  const navigate = useNavigate("");
  const { setMessage } = useContext(MessageContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const body = {
    name,
    email,
    password,
  };

  function joinSignUp(event) {
    event.preventDefault();

    if (repeatPassword !== password) {
      setMessage({
        type: "alert",
        message: {
          text: "As senhas devem ser iguais!",
          type: "error",
        },
      });
    } else {
      postSignUp(body)
        .catch((err) => {
          console.log(err);
          setName("");
          setEmail("");
          setPassword("");
          setPassword("");
        })
        .then(() => {
          setMessage({
            type: "alert",
            message: {
              text: "Cadastro realizado com sucesso!",
              type: "sucess",
            },
          });

          navigate("/sign-in");
        });
    }
  }

  return (
    <SignUpContainer>
      <DiscIcon font-size={"100px"} />

      <Logo>
        BACK TO THE <p></p> DISC
      </Logo>

      <form onSubmit={joinSignUp}>
        <Input
          placeholder="Nome completo"
          value={name}
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          value={email}
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          value={password}
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          placeholder="Confirme a senha"
          value={repeatPassword}
          type="password"
          required
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <Button>Cadastrar</Button>
      </form>

      <Link to={"/sign-in"}>Já tem uma conta? Entre agora!</Link>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  a {
    margin-top: 20px;
    font-size: 18px;
  }
`;

const Logo = styled.h1`
  font-size: 35px;
  font-weight: 700;
  font-family: Aclonica;
  text-align: center;
  margin: 30px 0px;
`;

import { Container, Logo, Button } from "./AcessStyled";
import Input from "../../common/Input";
import { DiscIcon } from "../../common/Icons";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postSignIn } from "../../services/backtothedisc";
import MessageContext from "../../contexts/MessageContext";

export default function SignIn() {
  const navigate = useNavigate("");
  const { setMessage } = useContext(MessageContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const body = {
    email,
    password,
  };

  function joinSignIn(event) {
    event.preventDefault();

    postSignIn(body)
      .catch((err) => {
        console.log(err);
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

        navigate("/my-cart");
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
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Senha"
          value={password}
          type="text"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Entrar</Button>
      </form>

      <Link to={"/sign-up"}>Não tem uma conta? Cadastre-se!</Link>
    </Container>
  );
}

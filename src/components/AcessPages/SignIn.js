import { Container, Logo, Button } from "./AcessStyled";
import Input from "../../common/Input";
import { DiscIcon } from "../../common/Icons";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <DiscIcon fontSize={"150px"} />
      <Logo>
        BACK TO THE <p></p> DISC
      </Logo>

      <form>
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

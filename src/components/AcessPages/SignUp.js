import Input from "../../common/Input";
import styled from "styled-components";

export default function SignUp() {
  return (
    <SignUpContainer>
      <Logo>
        BACK TO THE <p></p>DISC
      </Logo>
      <Input></Input>
      <Input></Input>
      <Input></Input>
      <Input></Input>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-family: Aclonica;
  text-align: center;
  margin-bottom: 40px;
`;

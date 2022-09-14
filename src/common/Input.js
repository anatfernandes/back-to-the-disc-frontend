import styled from "styled-components";

const Input = styled.input`
  width: 500px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  color: var(--grayEscuro);
  background-color: var(--white);
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 15px;
  border: solid 1px var(--grayEscuro);

  &::placeholder {
    color: var(--grayEscuro);
    text-align: center;
  }
`;

export default Input;

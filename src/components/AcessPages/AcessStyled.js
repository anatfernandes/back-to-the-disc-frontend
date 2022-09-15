import styled from "styled-components";

const Container = styled.div`
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

const Button = styled.button`
  width: 300px;
  height: 45px;
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  background-color: var(--red-theme);
  border: none;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export { Container, Logo, Button };

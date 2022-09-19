import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;


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

const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "25vw")};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "auto")};
  height: ${(props) => (props.height ? props.height : "50px")};
  font-size: 20px;
  text-align: center;
  color: var(--grayEscuro);
  background-color: ${(props) =>
    props.backgroundColor ? "#FFE9E9" : "var(--white)"};
  border-radius: ${(props) => (props.radius ? props.radius : "15px")};
  margin: ${(props) => (props.margin ? props.margin : "0 0 20px 0")};
  padding: 15px;
  border: ${(props) =>
    props.margin ? props.border : "solid 1px var(--grayEscuro)"};

  &::placeholder {
    color: var(--grayEscuro);
  }

  @media (max-width: 1200px) {
    width: 300px;
  }
`;

export { Container, Logo, Button, Input };

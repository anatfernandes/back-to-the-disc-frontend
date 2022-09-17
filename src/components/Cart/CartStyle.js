import styled from "styled-components";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 400px;
`;

const Title = styled.h1`
  font-size: 22px;
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 30px;
`;

const ItemsCart = styled.div`
  width: 50vw;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grayExtraClaro);
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  padding: 25px;
  margin-bottom: 10px;

  p {
    font-weight: 700;
    color: var(--graySemiEscuro);
  }

  img {
    width: 100px;
    height: 100px;
    background-color: var(--grayEscuro);
    border-radius: 5px;
  }

  @media (max-width: 1100px) {
    width: 90vw;
    height: 120px;
    padding: 10px;

    img {
      width: 80px;
      object-fit: cover;
    }
  }
`;
const Span = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfosProduct = styled.div`
  width: 50%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 12px;

  h2 {
    margin-top: 8px;
    line-height: 25px;
    font-weight: 700;
    font-size: 20px;
  }

  h6 {
    font-weight: 400;
    margin-bottom: 22px;
  }

  h4 {
    color: var(--red-theme);
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
  }

  @media (max-width: 1100px) {
    width: 30%;
    padding-left: 0px;

    h2 {
      font-size: 17px;
      margin-top: 0px;
    }
  }
`;

const Amount = styled.div`
  width: 10vw;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 25px;
    height: 30px;
    font-weight: 700;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    background-color: var(--red-theme);
    border: none;
    cursor: pointer;
  }

  div {
    width: 40px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grayMedioB);
    border: solid 1px var(--graySemiEscuro);
  }

  @media (max-width: 1100px) {
    width: 10%;
  }
`;

const Value = styled.div`
  width: 10vw;
  height: 100px;
  font-weight: 700;
  display: flex;
  justify-content: end;
  align-items: center;

  @media (max-width: 1100px) {
    width: 25%;
    font-size: 18px;
  }
`;

const Checkout = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  background-color: var(--grayExtraClaro);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  margin-top: 50px;
  padding: 25px;

  @media (max-width: 1100px) {
    width: 90vw;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  background-color: var(--red-theme);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 80px;
`;

const BuyerData = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-top: 40px;

  h2 {
    font-size: 19px;
    font-weight: 700;
    color: var(--grayEscuro);
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 35px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    color: var(--grayMedioB);
    background-color: var(--white);
    padding: 5px;
    border: solid 1px var(--graySemiEscuro);
    border-radius: 5px;
    box-sizing: border-box;
    margin-bottom: 5px;
  }

  input::placeholder {
    font-size: 16px;
    font-weight: 700;
    color: var(--grayMedioB);
  }

  select {
    width: 100%;
    height: 35px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 700;
    color: var(--grayMedioB);
    background-color: var(--white);
    border-radius: 5px;
    cursor: pointer;
  }

  p {
    display: flex;
    color: var(--red-theme);
    font-size: 17px;
    margin-bottom: 10px;
  }

  @media (max-width: 1100px) {
    justify-content: center;
    width: 95%;
    
    h2{
      font-size: 15px;
    }
    input{
        width: 70%;
    }

  
  }
`;

const Total = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  border-bottom: solid 2px var(--grayEscuro);

  h1 {
    margin-top: 5px;
    font-size: 22px;
    font-weight: 700;
  }

  h2 {
    margin-top: 5px;
    color: var(--red-theme);
    font-weight: 700;
  }
`;

export {
  CartContainer,
  Title,
  ItemsCart,
  InfosProduct,
  Amount,
  Value,
  Checkout,
  Button,
  BuyerData,
  Total,
  Span,
};

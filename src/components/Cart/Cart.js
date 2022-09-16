import {
  CartContainer,
  Title,
  ItemsCart,
  ImageProduct,
  InfosProduct,
  Amount,
  Value,
  Checkout,
  Button,
  BuyerData,
  Total,
} from "./CartStyle";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import { useState, useContext } from "react";
import MessageContext from "../../contexts/MessageContext";

export default function Cart({ cart, setCart }) {
  const price = cart
    .map((item) => item.preco)
    .reduce((prev, curr) => prev + curr, 0);

  const [total, setTotal] = useState(price);

  return (
    <>
      <Header />
      <CartContainer>
        <Title>CARRINHO DE COMPRAS</Title>

        {cart.length === 0 ? (
          <ItemsCart>
            <p>Ainda não há produtos no seu carrinho!</p>
          </ItemsCart>
        ) : (
          <>
            {cart.map((product, index) => (
              <ProductCart
                key={index}
                cart={cart}
                setCart={setCart}
                {...product}
                total={total}
                setTotal={setTotal}
              />
            ))}
          </>
        )}

        <Checkout>
          <Total>
            <h1>Total</h1>
            <h2>R${total.toFixed(2).replace(".", ",")}</h2>
          </Total>

          <BuyerData>
            <div>
              <h2>Digite seu CEP</h2>
              <input placeholder="777.777-77"></input>
            </div>

            <div>
              <h2>Escolha a forma de pagamento</h2>
              <select>
                <option value="credit">Cartão de crédito</option>
                <option value="debit">Cartão de débito</option>
                <option value="boleto">Boleto</option>
                <option value="pix">Pix</option>
              </select>
            </div>
          </BuyerData>

          <Button>Finalizar Compra</Button>
        </Checkout>
      </CartContainer>
      <Footer />
    </>
  );
}

function ProductCart({
  cart,
  setCart,
  image,
  nome,
  artista,
  preco,
  total,
  setTotal,
}) {
  const { setMessage } = useContext(MessageContext);
  const [amount, setAmount] = useState(1);

  function addProduct() {
    setAmount(amount + 1);
    setTotal(total + preco);
  }

  function lessProduct() {
    if (amount > 1) {
      setAmount(amount - 1);
      setTotal(total - preco);
    }
  }

  function removeProduct() {
    setMessage({
      type: "confirm",
      message: {
        title: "Remover item",
        text: "Você tem certeza que deseja remover este item do seu carrinho?",
        ifTrue: {
          function: remove,
          params: "",
        },
      },
    });

    function remove() {
      const removeItem = cart.filter((products) => products.nome !== nome);
      setCart(removeItem);
      setTotal(total - preco * amount);
    }
  }

  return (
    <ItemsCart>
      <ImageProduct>
        <img src={image}></img>
      </ImageProduct>
      <InfosProduct>
        <h2>
          {nome} <h6>{artista}</h6>
        </h2>
        <h4 onClick={removeProduct}>Remover</h4>
      </InfosProduct>
      <Amount>
        <button onClick={lessProduct}>-</button>
        <div>{amount}</div>
        <button onClick={addProduct}>+</button>
      </Amount>
      <Value>R$ {(preco * amount).toFixed(2).replace(".", ",")}</Value>
    </ItemsCart>
  );
}

import { useState, useContext } from "react";
import MessageContext from "../../contexts/MessageContext";
import { InfosProduct, Amount, Value, ItemsCart } from "./CartStyle";

export default function ProductCart({
  cart,
  setCart,
  image,
  nome,
  artista,
  preco,
  total,
  setTotal,
}) {
  const [amount, setAmount] = useState(1);
  const { setMessage } = useContext(MessageContext);

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
      <img src={image} alt="productImage"></img>

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

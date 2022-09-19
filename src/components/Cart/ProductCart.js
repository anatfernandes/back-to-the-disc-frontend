import { useState, useContext } from "react";
import MessageContext from "../../contexts/MessageContext";
import { InfosProduct, Amount, Value, ItemsCart } from "./CartStyle";

export default function ProductCart({
  cart,
  setCart,
  image,
  name,
  by,
  price,
  total,
  setTotal,
  product,
}) {
  const [amount, setAmount] = useState(1);
  const { setMessage } = useContext(MessageContext);
  product.quantity = amount;

  function addProduct() {
    setAmount(amount + 1);
    setTotal(total + Number(price));
    product.quantity = amount + 1;
    cart = cart.quantity;
  }

  function lessProduct() {
    if (amount > 1) {
      setAmount(amount - 1);
      setTotal(total - Number(price));
      product.quantity = amount - 1;
      cart = cart.quantity;
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
      const removeItem = cart.filter((products) => products.name !== name);
      setCart(removeItem);
      setTotal(total - price * amount);
    }
  }

  return (
    <ItemsCart>
      <img src={image} alt="productImage"></img>

      <InfosProduct>
        <div>
          <h2>{name}</h2>
          <h6>{by}</h6>
        </div>

        <h4 onClick={removeProduct}>Remover</h4>
      </InfosProduct>

      <Amount>
        <button onClick={lessProduct}>-</button>
        <div>{amount}</div>
        <button onClick={addProduct}>+</button>
      </Amount>

      <Value>R$ {(Number(price) * amount).toFixed(2).replace(".", ",")}</Value>
    </ItemsCart>
  );
}

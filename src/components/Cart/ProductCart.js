import { useContext } from "react";
import MessageContext from "../../contexts/MessageContext";
import { InfosProduct, Amount, Value, ItemsCart } from "./CartStyle";

export default function ProductCart({
  cart,
  setCart,
  total,
  setTotal,
  product,
}) {
  const { setMessage } = useContext(MessageContext);

  function addProduct() {
    product.quantity = product.quantity + 1;
    setTotal(total + Number(product.price));
  }

  function lessProduct() {
    if (product.quantity > 1) {
      product.quantity = product.quantity - 1;
      setTotal(total - Number(product.price));
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
      const removeItem = cart.filter(
        (products) => products.name !== product.name
      );
      setCart(removeItem);
      setTotal(total - Number(product.price) * product.quantity);
    }
  }

  return (
    <ItemsCart>
      <img src={product.image} alt="productImage"></img>

      <InfosProduct>
        <div>
          <h2>{product.name}</h2>
          <h6>{product.by}</h6>
        </div>

        <h4 onClick={removeProduct}>Remover</h4>
      </InfosProduct>

      <Amount>
        <button onClick={lessProduct}>-</button>
        <div>{product.quantity}</div>
        <button onClick={addProduct}>+</button>
      </Amount>

      <Value>
        R${" "}
        {(Number(product.price) * product.quantity)
          .toFixed(2)
          .replace(".", ",")}
      </Value>
    </ItemsCart>
  );
}

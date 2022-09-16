import { useState } from "react";

import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import ProductCart from "./ProductCart.js";
import CheckoutCart from "./CheckoutCart.js";


import { CartContainer, Title, ItemsCart, Checkout, Total } from "./CartStyle";

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
                produto={product}
              />
            ))}
            <Checkout>
              <Total>
                <h1>Total</h1>
                <h2>R${total.toFixed(2).replace(".", ",")}</h2>
              </Total>

              <CheckoutCart cart={cart} />
            </Checkout>
          </>
        )}
      </CartContainer>
      <Footer />
    </>
  );
}

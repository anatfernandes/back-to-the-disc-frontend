import GlobalStyle from "./GlobalStyles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import MessageContext from "../../contexts/MessageContext";
import { Alert, Confirm } from "../Messages";
import SignUp from "../AcessPages/SignUp.js";
import SignIn from "../AcessPages/SignIn.js";
import Products from "../Products/Products";
import Cart from "../Cart/Cart.js";

function App() {
  const [message, setMessage] = useState({});
  const [cart, setCart] = useState([
    {
      artista: "Beyonce",
      nome: "RENAISSANCE",
      image:
        "https://cdn.shopify.com/s/files/1/0096/1884/9839/products/beyonce_480x.png?v=1656665682",
      preco: 79,
    },
  ]);

  return (
    <BrowserRouter>
      <MessageContext.Provider value={{ message, setMessage }}>
        <GlobalStyle />

        {message.type === "alert" ? <Alert /> : ""}
        {message.type === "confirm" ? <Confirm /> : ""}

        <Routes>
          <Route
            path="/"
            element={<Products cart={cart} setCart={setCart} />}
          ></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route
            path="/checkout/my-cart"
            element={<Cart cart={cart} setCart={setCart} />}
          ></Route>
        </Routes>
      </MessageContext.Provider>
    </BrowserRouter>
  );
}

export default App;

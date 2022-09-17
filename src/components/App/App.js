import GlobalStyle from "./GlobalStyles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import MessageContext from "../../contexts/MessageContext";
import { Alert, Confirm } from "../Messages";
import SignUp from "../AcessPages/SignUp.js";
import SignIn from "../AcessPages/SignIn.js";
import Products from "../Products/Products";
import Description from "../Description/Description";
import Cart from "../Cart/Cart.js";
import PrivatePage from "../PrivatePage/PrivatePage";

function App() {
  const [message, setMessage] = useState({});
  const [cart, setCart] = useState([]);

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
            path="/description/:productID"
            element={<Description cart={cart} setCart={setCart} />}
          ></Route>

          <Route
            path="/checkout/my-cart"
            element={
              <PrivatePage>
                <Cart cart={cart} setCart={setCart} />
              </PrivatePage>
            }
          ></Route>
        </Routes>
      </MessageContext.Provider>
    </BrowserRouter>
  );
}

export default App;

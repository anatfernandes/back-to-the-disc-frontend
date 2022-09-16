import GlobalStyle from "./GlobalStyles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import MessageContext from "../../contexts/MessageContext";
import { Alert, Confirm } from "../Messages";
import SignUp from "../AcessPages/SignUp.js";
import SignIn from "../AcessPages/SignIn.js";
import Products from "../Products/Products";


function App() {
  const [message, setMessage] = useState({});
  const [cart, setCart] = useState([]);
  
  return (
    <BrowserRouter>
      <MessageContext.Provider value={{ message, setMessage }}>
      
        <GlobalStyle/>

        {message.type === 'alert' ? <Alert /> : ''}
        {message.type === 'confirm' ? <Confirm /> : ''}

        <Routes>
          <Route path="/" element={<Products cart={cart} setCart={setCart} />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
      
       </MessageContext.Provider>
    </BrowserRouter>
  );
}

export default App;

import GlobalStyle from "./GlobalStyles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import MessageContext from "../../contexts/MessageContext";
import { Alert } from "../Messages";
import SignUp from "../AcessPages/SignUp.js";

function App() {
  const [message, setMessage] = useState({});

  return (
    <BrowserRouter>
      <MessageContext.Provider value={{ message, setMessage }}>
        <GlobalStyle />

        {message.type === "alert" ? <Alert /> : ""}

        <Routes>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      </MessageContext.Provider>
    </BrowserRouter>
  );
}

export default App;

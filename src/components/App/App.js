import GlobalStyle from "./GlobalStyles";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import MessageContext from "../../contexts/MessageContext";
import { Alert, Confirm } from "../Messages";
import SignUp from "../AcessPages/SignUp.js";
import Header from "../Header/Header";
import { Input } from "../../common";


function App() {
  const [message, setMessage] = useState({});

  return (
    <BrowserRouter>
      <MessageContext.Provider value={{ message, setMessage }}>
      
        <GlobalStyle/>
        <Header>
        <Input width='40%' height='36px' radius='5px' margin='0' placeholder='hahdjhadf' maxWidth='310px'></Input>
        </Header>
        {message.type === 'alert' ? <Alert /> : ''}
        {message.type === 'confirm' ? <Confirm /> : ''}

        <Routes>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      
       </MessageContext.Provider>
    </BrowserRouter>
  );
}

export default App;

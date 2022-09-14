import GlobalStyle from "./GlobalStyles";
import { useState } from "react";

import { Alert } from "../Messages";
import MessageContext from "../../contexts/MessageContext";


function App() {
  const [message, setMessage] = useState({});

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <GlobalStyle/>

      {message.type === 'alert' ? <Alert /> : ''}
      
    </MessageContext.Provider>
  );
}

export default App;
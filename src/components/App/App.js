import GlobalStyle from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SignUp from "../AcessPages/SignUp.js";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

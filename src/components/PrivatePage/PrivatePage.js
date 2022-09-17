import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MessageContext from "../../contexts/MessageContext";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";

export default function PrivatePage({ children }) {
  const navigate = useNavigate("");
  const { setMessage } = useContext(MessageContext);

  const auth = JSON.parse(localStorage.getItem("backtothedisc"));

  if (!auth) {
    localStorage.clear("backtothedisc");

    setMessage({
      type: "alert",
      message: {
        text: "Entre com sua conta para acessar o carrinho!",
        type: "error",
      },
    });

    navigate("/sign-in");
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

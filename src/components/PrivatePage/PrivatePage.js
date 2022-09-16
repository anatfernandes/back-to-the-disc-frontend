import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import MessageContext from "../../contexts/MessageContext";

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

  return <>{children}</>;
}

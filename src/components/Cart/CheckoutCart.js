import { useState, useContext } from "react";
import MessageContext from "../../contexts/MessageContext.js";
import { Button, BuyerData } from "./CartStyle";
import { postHistoric } from "../../services/backtothedisc";
import { useNavigate } from "react-router-dom";

export default function CheckoutCart({ cart, setCart }) {
  const navigate = useNavigate("");
  const [render, setRender] = useState(false);
  const [rua, setRua] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const { setMessage } = useContext(MessageContext);
  const [selectPayment, setSelectPayment] = useState("credit");

  const checkCep = (e) => {
    const cep = e.target.value.replace(".", "").replace("-", "");

    fetch(`https://viacep.com.br/ws/${cep}/json`)
      .catch(() => setRender(false))
      .then((res) => res.json())
      .then((data) => {
        setRender(true);
        setRua(data.logradouro);
        setCity(data.localidade);
        setState(data.uf);
      });
  };

  function join(event) {
    event.preventDefault();
  
   

    setMessage({
      type: "confirm",
      message: {
        title: "Finalizar compra",
        text: "Você tem certeza que deseja finalizar sua compra e que seus dados estão corretos?",
        ifTrue: {
          function: addHistoric,
          params: "",
        },
      },
    });

    function addHistoric() {
      postHistoric({products: cart, payment: selectPayment})
        .catch(() =>
          setMessage({
            type: "alert",
            message: {
              text: "Erro ao efetuar a compra! Confira seus dados, por gentileza.",
              type: "error",
            },
            style: {
              top: "160px",
            },
          })
        )
        .then(() => {
          setMessage({
            type: "alert",
            message: {
              text: "Compra efetuada com sucesso! Agradecemos sua preferência.",
              type: "success",
            },
            style: {
              top: "60px",
            },
          });

          navigate("/");
          setCart([]);
        });
    }
  }

  return (
    <form onSubmit={join}>
      <BuyerData>
        <div>
          <h2>Digite seu CEP</h2>

          <input
            placeholder="777777-77"
            type="text"
            required
            onBlur={checkCep}
          />

          {render ? (
            <>
              <p>
                {rua}, {city} - {state}.
              </p>
              <h2>Digite seu número</h2>
              <input placeholder="nº" required />
            </>
          ) : (
            ""
          )}
        </div>

        <div>
          <h2>Selecione a forma de pagamento</h2>
          <select
            value={selectPayment}
            onChange={(e) => setSelectPayment(e.target.value)}
          >
            <option value="credit">Cartão de crédito</option>
            <option value="debit">Cartão de débito</option>
            <option value="boleto">Boleto</option>
            <option value="pix">Pix</option>
          </select>
        </div>
      </BuyerData>

      <Button>Finalizar Compra</Button>
    </form>
  );
}

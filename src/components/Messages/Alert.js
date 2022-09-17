import styled from "styled-components";

import { useState, useEffect } from "react";
import { useContext } from "react";
import MessageContext from "../../contexts/MessageContext";

export default function Alert() {
  const [opacity, setOpacity] = useState(0);
  const { message, setMessage } = useContext(MessageContext);
  const { text, type } = message.message;

  let top = message?.style?.top ? message.style.top : "10px";

  let color = "var(--black)";

  switch (type) {
    case "error":
      color = "lightcoral";
      break;
    case "success":
      color = "#8FC549";
      break;
    case "warning":
      color = "rgb(219, 177, 26)";
      break;

    default:
      break;
  }

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);

    setTimeout(() => {
      setOpacity(0);
    }, 3000);

    setTimeout(() => {
      setMessage({ type: "" });
    }, 3500);
  }, []);

  return (
    <Wrapper opacity={opacity} color={color} top={top}>
      {text}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: fit-content;
  max-width: 500px;
  background-color: ${(props) => props.color};
  position: fixed;
  top: ${(props) => props.top};
  opacity: ${(props) => props.opacity};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 7px;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 0.3);
  font-size: 18px;
  color: var(--white);
  text-align: center;
  transition: all 0.2s linear;
  z-index: 3;
`;

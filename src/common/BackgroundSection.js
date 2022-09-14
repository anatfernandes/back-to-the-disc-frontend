import styled from "styled-components";

function BackgroundSection ({ width, height, children }) {
  return <Wapper width={width} height={height}>{ children }</Wapper>
}

export default BackgroundSection;

const Wapper = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height};
  background-color: var(--grayExtraClaro);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);

  &::placeholder {
    color: var(--grayEscuro);
  }
`;
import styled from "styled-components";

function BackgroundSection ({ children, ...otherProps }) {
  return (
    <Wapper
      {...otherProps}
      >{ children }
    </Wapper>
  );
}

export default BackgroundSection;

const Wapper = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  height: ${props => props.height};
  background-color: var(--grayExtraClaro);
  border-radius: 10px;
  padding: ${props => props.padding ? props.padding : '20px'};
  margin: ${props => props.margin ? props.margin : '0'};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);

  &::placeholder {
    color: var(--grayEscuro);
  }
`;
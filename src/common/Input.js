import styled from "styled-components";

function Input ({ ...otherProps }) {
  return <Wapper {...otherProps}></Wapper>
}

export default Input;

const Wapper = styled.input`
  width: ${props => props.width ? props.width : '25vw'};
  max-width: ${props => props.maxWidth ? props.maxWidth : 'auto'};
  height: ${props => props.height ? props.height : '50px'};
  font-size: 20px;
  text-align: center;
  color: var(--grayEscuro);
  background-color: var(--white);
  border-radius: ${props => props.radius ? props.radius : '15px'};
  margin: ${props => props.margin ? props.margin : '0 0 20px 0'};
  padding: 15px;
  border: solid 1px var(--grayEscuro);

  &::placeholder {
    color: var(--grayEscuro);
  }
`;
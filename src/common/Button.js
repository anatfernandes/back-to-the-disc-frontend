import styled from "styled-components";


function Button ({ children, small = false, ...otherProps }) {
    return (
        <Wrapper small={small} { ...otherProps }>{children}</Wrapper>
    );
}

export default Button;

const Wrapper = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-color: var(--red-theme);
  border: none;
  font-size: 20px;
  font-weight: 700;
  color: var(--white);
  cursor: pointer;

  a {
    color: var(--white);
  }

  &:hover {
    filter: brightness(0.8);
  }

  &:disabled {
    filter: brightness(0.6);
    cursor: initial;
  }

  ${ props => props.small
      ?
        `{
            width: 26px;
            height: 38px;
        }`
      : ''
  }
`;
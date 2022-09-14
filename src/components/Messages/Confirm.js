import styled from "styled-components";

import { useContext } from "react";
import MessageContext from "../../contexts/MessageContext";

import { Button } from "../../common";


export default function Confirm () {
    const { message, setMessage } = useContext(MessageContext);
    const { message:data } = message;

    function clickButton (response) {
        if (response) {
            const { params } = data.ifTrue;

            if (params) {
                data.ifTrue.function(params);
            } else {
                data.ifTrue.function();
            }
        }

        setMessage({});
    }

    return (
        <Wrapper>
            <Main>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
                <Buttons>
                    <CancelButton 
                        onClick={() => clickButton(false)}>
                            Cancelar
                    </CancelButton>
                    <Button
                        Large={true}
                        onClick={() => clickButton(true)}>
                            Confirmar
                    </Button>
                </Buttons>
            </Main>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s linear;
`;

const Main = styled.div`
    width: 80%;
    height: auto;
    max-width: 450px;
    background-color: var(--white);
    box-shadow: 0 0 10px 1px rgb(0 0 0 / 40%);
    margin: auto;
    border-radius: 9px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        width: 100%;
        color: var(--grayEscuro);
        background: transparent;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 30px;
    }

    p {
        width: 90%;
        color: var(--graySemiEscuro);
        background: transparent;
        font-size: 18px;
        text-align: center;
        margin: 0 auto 50px;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
`;

const CancelButton = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 20px;
    border: none;
    background-color: var(--white);
    color: var(--red-theme);
    cursor: pointer;
`;
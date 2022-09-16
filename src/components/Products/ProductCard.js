import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import BackgroundSection from "../../common/BackgroundSection";


export default function ProductCard ({ cart, setCart, nome, image, preco, _id }) {

    const hasInCart = cart.find(product => (product.nome === nome) && (product.preco === preco));

    const [buttonDisabled, setButtonDisabled] = useState(!!hasInCart);


    function addProductOnCart () {
        setCart([...cart, { nome, image, preco }]);
        setButtonDisabled(true);
    }


    return (
        <BackgroundSection width='190px' height='260px' padding='0' margin='0 5px 40px'>
            <Container>
                <Link to={`/description/${_id}`}>
                    <Title><b>{nome.toUpperCase()}</b></Title>

                    <img alt={nome} src={image} />

                    <div><b>{`R$ ${preco}`}</b></div>
                </Link>
            </Container>
            
            <Button onClick={addProductOnCart} disabled={buttonDisabled}>
                <b>Adicionar ao carrinho</b>
            </Button>
            
        </BackgroundSection>
    );
}

const Container = styled.div`
    font-size: 16px;
    cursor: pointer;

    div {
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        width: 100%;
        height: 160px;
        object-fit: cover;
    }
`;

const Title = styled.div`
    && {
        width: 80%;
        height: 40px;
        margin: auto;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: flex;
        justify-content: flex-start;
    }
`;

const Button = styled.button`
    width: 100%;
    height: 30px;
    font-size: 16px;
    color: var(--white);
    text-align: center;
    background-color: var(--black);
    border-radius: 0 0 10px 10px;
    border: none;
    cursor: pointer;

    &:hover {
        filter: brightness(1.3);
    }

    &:disabled {
        filter: brightness(0.6);
        cursor: initial;
    }
`
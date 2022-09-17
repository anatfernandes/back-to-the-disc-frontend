import styled from "styled-components";
import { useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";

import { getProductDescription } from "../../services/backtothedisc";
import MessageContext from "../../contexts/MessageContext";
import BackgroundSection from "../../common/BackgroundSection";
import Button from "../../common/Button";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


export default function Description ({ cart, setCart }) {
    const { setMessage } = useContext(MessageContext);
    const { productID } = useParams();
    const [description, setDescription] = useState({});
    const [buttonDisabled, setButtonDisabled] = useState(true);


    useEffect(() => {
        const promise = getProductDescription(productID);

        promise.catch(() => {
            setMessage({
                type: "alert",
                message: {
                  text: "Sentimos muito, não foi possível encontrar a descrição do produto.",
                  type: "error",
                },
              });
        });

        promise.then(({ data }) => {
            setDescription(data);
        });
    }, [productID]);

    useEffect(() => {
        const isInCart = cart.find(product =>
            (product.name === description.name) && (product.price === description.price)
        );
    
        setButtonDisabled(!!isInCart);
    }, [description]);


    function addProductOnCart () {
        const { name, image, price, by } = description;
        setCart([...cart, { name, image, price, by }]);
        setButtonDisabled(true);
    }


    return (
        <>
            <Header />

            <Main>
                
                {!description.name
                    ? ''
                    :<BackgroundSection height='auto'>
                        <Info>
                            <div>
                                <img alt={description.name} src={description.image} />
                            </div>

                            <Product>
                                <h1>{description.name.toUpperCase()}</h1>

                                <p>
                                    <span>Artista: <strong>{description.by}</strong></span>
                                    <span>Condição: <strong>{description.status}</strong></span>
                                </p>

                                <span>
                                    <strong>R$ {description.price}</strong>
                                </span>

                                <Button
                                    onClick={addProductOnCart}
                                    disabled={buttonDisabled}
                                >Adicionar ao carrinho</Button>
                            </Product>
                        </Info>

                        <Additional>
                            <h2><b>Informações adicionais</b></h2>

                            <h2><b>Descrição</b></h2>
                            <p>{description.description}</p>

                            <h2><b>Músicas</b></h2>
                            <ul>
                                {description.musics.map((music, index) => <li key={index}>{music}</li>)}
                            </ul>

                            <span>
                                {`Tags: ${description.tags.join(', ')}`}
                            </span>
                        </Additional>
                    </BackgroundSection>
                }

            </Main>

            <Footer />
        </>
    );
}

const Main = styled.main`
    width: 80%;
    max-width: 900px;
    margin: 50px auto 100px;
`;

const Info = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 47px;
    display: flex;

    & > div {
        display: flex;
        align-items: center;
        margin-right: 20px;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        object-fit: cover;
    }

    @media (min-width: 800px) {
        img {
            width: 258px;
        }
    }
`;

const Product = styled.div`
    && {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: initial;
        margin: 0;
    }

    h1 {
        font-size: 22px;
        font-weight: 700;
        margin-bottom: 18px;
    }

    p {
        width: 100%;
        font-size: 16px;
        text-align: end;
        margin-bottom: 90px;
        line-height: 22px;
        display: flex;
        flex-direction: column;
        align-items: start;

        span {
            height: 20px;
        }
    }

    & > span {
        width: 100%;
        display: flex;
        justify-content: end;
        margin-bottom: 18px;
    }
`;

const Additional = styled.div`
    width: 100%;
    height: auto;

    h2 {
        font-size: 16px;
        margin-bottom: 18px;
    }

    p {
        width: 100%;
        font-size: 17px;
        color: var(--black);
        margin-bottom: 18px;
        line-height: 22px;
    }

    ul {
        width: 100%;
        height: auto;
        border-radius: 5px;
        background-color: var(--grayClaroB);
        padding: 10px;
        column-count: 2;
        list-style: none;
    }

    ul li::before {
        content: "- ";
    }

    li {
        font-size: 14px;
        width: fit-content;
        height: 24px;
        display: flex;
        align-items: center;
        margin: 2px 0;
    }

    span {
        font-size: 14px;
        margin-top: 20px;
        display: flex;
    }
`;

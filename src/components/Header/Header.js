import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

import MessageContext from "../../contexts/MessageContext";
import { CartIcon, ExitIcon, HomeIcon, PersonIcon } from "../../common/Icons";
import bannerImage from "../../images/banner.svg";
import Logout from "../Logout/Logout";


export default function Header ({ children }) {
    const { setMessage } = useContext(MessageContext);

    let isUser = false;
    const navigate = useNavigate();

    const auth = JSON.parse(localStorage.getItem('backtothedisc'));

    if (auth?.token) isUser = true;

    function verifyLogin () {
        if (isUser) {
            navigate('/checkout/my-cart');
        } else {
            setMessage({
                type:'alert',
                message: {
                    text: 'Você precisa estar logado para acessar o carrinho.',
                    type: 'warning'
                },
                style: {
                    top:'160px'
                }
            });
        }
    }

    function exit () {
        Logout({ setMessage });

        navigate('/');
    }

    function confirmExit () {
        setMessage({
            type:'confirm',
            message: {
                title:'Sair',
                text:'Tem certeza que deseja sair?',
                ifTrue: {
                    function: exit,
                }
            }
        });
    }


    return (
        <Wrapper>
            <img src={bannerImage} alt="back to the disc" />

            <Menu>
                <span>
                    <Link to='/'>
                        <HomeIcon />
                        <b>Início</b>
                    </Link>
                </span>

                { children }

                <div>
                    <span onClick={verifyLogin}>
                        <CartIcon />
                        <b>Carrinho</b>
                    </span>

                    {isUser
                        ?   <i>
                                <span onClick={confirmExit}>
                                    <ExitIcon />
                                    <b>Sair</b>
                                </span>
                            </i>
                        :   <i>
                                <span>
                                    <Link to='/sign-in'>
                                        <PersonIcon />
                                        <b>Entrar</b>
                                    </Link>
                                </span>
                            </i>
                    }
                </div>
            </Menu>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;

    img {
        width: 100%;
        height: 100px;
        object-fit: cover;
    }

    @media (max-width: 390px) {
        && {
            input {
                width: 40px;
            }
        }
    }
`;

const Menu = styled.div`
    width: 100%;
    height: 50px;
    background-color: var(--grayClaroB);
    padding: 0 3%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span, a {
        font-size: 18px;
        display: flex;
        align-items: flex-end;
        cursor: pointer;
    }

    span svg {
        width: 20px;
        height: auto;
        margin: 0 4px 0 0;
    }

    & > span {

        width: 50%;
        max-width: 200px;
    }

    i, i a {
        color: var(--red-theme);
    }

    div {
        width: 50%;
        max-width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 0 3px;
    }
`;
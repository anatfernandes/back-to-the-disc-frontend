import styled from "styled-components";
import { CartIcon, ExitIcon, HomeIcon, PersonIcon } from "../../common/Icons";
import bannerImage from "../../images/banner.svg";

export default function Header ({ children }) {

    let isUser = false;

    const auth = JSON.parse(localStorage.getItem('backtothedisc'));

    if (auth?.token) isUser = true;

    return (
        <Wrapper>
            <img src={bannerImage} alt="back to the disc" />

            <Menu>
                <span>
                    <HomeIcon />
                    <b>Início</b>
                </span>

                { children }

                <div>
                    <span>
                        <CartIcon />
                        <b>Carrinho</b>
                    </span>

                    {isUser
                        ?   <i>
                                <span>
                                    <ExitIcon />
                                    <b>Sair</b>
                                </span>
                            </i>
                        :   <i>
                                <span>
                                    <PersonIcon />
                                    <b>Entrar</b>
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
`;

const Menu = styled.div`
    width: 100%;
    height: 50px;
    background-color: var(--grayClaroB);
    padding: 0 3%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: 18px;
        display: flex;
        align-items: flex-end;
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

    i {
        color: var(--red-theme);
    }

    div {
        width: 50%;
        max-width: 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 0 
    }
`;
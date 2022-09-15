import styled from "styled-components";


export default function Footer () {

    return (
        <Wrapper>
            <div>
                <i>
                    <b>
                        <h2>Back to the Disc</h2>
                        e-commerce
                    </b>
                </i>
            </div>

            <span>
                <strong>
                    Formas de pagamento aceitas:
                    cartões de crédito (Visa, MasterCard, Elo e American Express),
                    cartões de débito (Visa e Elo), Boleto e Pix.
                </strong>
            </span>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    width: 100%;
    padding: 10px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background-color: var(--grayClaroB);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        height: 30px;
    }

    i {
        color: var(--red-theme);
    }

    b {
        font-size: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        font-size: 12px;
        font-family: Aclonica;
    }

    span {
        font-size: 8px;
        color: var(--graySemiEscuro);
        max-width: 300px;
        text-align: center;
        width: 90%;
    }
`;
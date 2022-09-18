import styled from "styled-components"
import { useState } from "react"


export default function HistoricCard ({ date, products, payment }) {
    const [view, setView] = useState(false);

    const total = products
        .map(({ price, quantity }) => Number(price) * quantity)
        .reduce((prev, curr) => prev + curr, 0);


    return (
        <Wrapper view={view}>
            
            <Header>
                <div>
                    <span>{new Date(date).toLocaleDateString('pt-br')}</span>
                    <Time>{new Date(date).toLocaleTimeString('pt-br')}</Time>
					<p>Forma de pagamento: <b>{payment}</b></p>
                </div>
                <span onClick={() => setView(!view)}>+</span>
            </Header>

            {products.map(({ name, price, by, quantity, image }, index) => (
                <Card key={index}>

                    <Info>
                        <img src={image} alt={name} />

                        <div>
                            <b>{name.toUpperCase()}</b>
                            <span>Por: <b>{by}</b></span>
                        </div>
                    </Info>

                    <Price>
                        <span>Preço: <b>{price}</b></span>
                        <span>Quantidade: <b>{quantity}</b></span>
                    </Price>
                    
                </Card>
            ))}

            <Total>
                <span>Total</span>
                <span>R$ {total.toFixed(2)}</span>
            </Total>

        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: ${props => props.view ? 'auto' : '79px'};
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-radius: 5px;
    font-size: 16px;
	margin-bottom: 10px;
`;

const Header = styled.div`
    width: 100%;
    height: 100px;
    background-color: var(--grayEscuro);
    font-size: 18px;
    font-weight: 600;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    div {
        display: flex;
        flex-direction: column;

		p {
			font-size: 14px;
			font-weight: 400;
			margin-top: 5px;
		}
    }

    & > span {
   	 	font-size: 22px;
        cursor: pointer;
    }
`;

const Time = styled.span`
    font-size: 14px;
    font-weight: 500;
    margin-top: 10px;
`;

const Card = styled.div`
    width: 100%;
    height: 130px;
    background-color: var(--grayClaroB);
    border-bottom: 1px solid var(--grayEscuro);
    padding: 10px;
	display: flex;
    justify-content: space-between;

    @media (max-width: 540px) {
    font-size: 12px;
    }
`;

const Info = styled.div`
    display: flex;
	height: 100px;

    img {
        width: 100px;
        height: 100px;
        border-radius: 3px;
        margin-right: 12px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
		height: 80px;
		margin: auto 0;
    }
`;

const Price = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
	justify-content: end;
	height: 80px;
	text-align: end;
    margin: auto 0;

    span {
        margin-top: 10px;
    }
`;

const Total = styled.div`
    width: 100%;
    height: 70px;
    background-color: var(--grayEscuro);
    font-size: 20px;
    font-weight: 700;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`;

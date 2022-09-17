import styled from "styled-components"
import { useState, useEffect } from "react"

import { getHistoric } from "../../services/backtothedisc"
import { BackgroundSection } from "../../common";
import HistoricCard from "./HistoricCard";


export default function Historic () {
    const [historic, setHistoric] = useState([]);

    useEffect(() => {
        const promise = getHistoric();

        promise.catch(() => {
          setMessage({
            type: "alert",
            message: {
              text: "Não foi possível carregar o histórico. Por favor, tente novamente.",
              type: "error",
            },
            style: {
              top: "60px"
            }
          });
        });
    
        promise.then(({ data }) => {
            setHistoric([...data]);
        });
    }, []);

    return (
        <Main>

            <h1>HISTÓRICO</h1>

            {
                historic.length === 0
                ?   <BackgroundSection height='140px'>
                        <Div>
                            <span>Você ainda não comprou nenhum produto :(</span>
                        </Div>
                    </BackgroundSection>
                :   historic.map(buy => (
                        <HistoricCard {...buy}/>
                    ))
            }
        </Main>
    );
}

const Main = styled.main`
    width: 80%;
    max-width: 900px;
    margin: 200px auto 100px;
	align-items: flex-start;

    h1 {
        font-size: 22px;
        font-weight: 700;
		margin: 0 0 30px;
    }
`;

const Div = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: var(--graySemiEscuro);
`;

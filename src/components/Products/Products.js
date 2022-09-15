import styled from "styled-components";
import { useState, useEffect } from "react";

import { getProducts } from "../../services/backtothedisc";

import Input from "../../common/Input";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { SearchIcon } from "../../common/Icons";


export default function Products ({ setCart }) {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        setProducts(getProducts);
    }, []);

    return (
        <>
            <Header>
                <Search>
                    <SearchIcon />
                    <InputSearch placeholder='Pesquisar...' />
                </Search>
            </Header>

            <main>
                {products.map(({nome}) => <li>{nome}</li>)}
            </main>

            <Footer />
        </>
    );
}

const Search = styled.div`
    && {
        width: 40%;
        max-width: 310px;
        position: relative;

        svg {
            width: 20px;
            height: auto;
            position: absolute;
            z-index: 3;
            left: 7px;
            color: var(--grayEscuro);
        }

        input {
            width: 100%;
            position: absolute;
        }
    }
`;

const InputSearch = styled(Input)`
    width: 40%;
    max-width: 310px;
    height: 34px;
    border-radius: 5px;
    margin: 0;
    padding: 0 0 0 40px;
    border: none;
    text-align: left;
`;
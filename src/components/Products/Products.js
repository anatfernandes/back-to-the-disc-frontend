import styled from "styled-components";
import { useState, useEffect, useContext } from "react";

import { getProducts } from "../../services/backtothedisc";
import MessageContext from "../../contexts/MessageContext";
import { SearchIcon } from "../../common/Icons";

import Input from "../../common/Input";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProductCard from "./ProductCard";

export default function Products({ cart, setCart }) {
  const { setMessage } = useContext(MessageContext);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const promise = getProducts(page);

    promise.catch(() => {
      setMessage({
        type: "alert",
        message: {
          text: "Não foi possível carregar mais produtos. Tente novamente.",
          type: "error",
        },
      });
    });

    promise.then(({ data }) => {
      setProducts([...products, ...data]);
    });
  }, [page]);

  let productsFiltered;

  if (search) {
    productsFiltered = products.filter(({ nome, status, musicas, tags }) => {
      const musicsFiltered = musicas.filter((music) =>
        music.toLowerCase().includes(search)
      );
      const tagsFiltered = tags.filter((tag) =>
        tag.toLowerCase().includes(search)
      );

      return (
        nome.toLowerCase().includes(search) ||
        status.toLowerCase().includes(search) ||
        musicsFiltered.length > 0 ||
        tagsFiltered.length > 0
      );
    });
  }

  const productsToShow = productsFiltered ? productsFiltered : products;

  return (
    <>
      <Header>
        <Search>
          <SearchIcon />
          <InputSearch
            placeholder="Pesquisar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Search>
      </Header>

      <Main>
        <ProductsWrapper>
          {productsToShow.map((product, index) => (
            <ProductCard
              key={index}
              cart={cart}
              setCart={setCart}
              {...product}
            />
          ))}
        </ProductsWrapper>

        <button
          onClick={() => setPage(page + 1)}
          disabled={products.length % 10 !== 0}
        >
          Carregar mais...
        </button>
      </Main>

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
      width: 25px;
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

const Main = styled.main`
  max-width: 80%;
  margin: 200px auto 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  & > button {
    width: 190px;
    height: 33px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: var(--grayClaroB);
    font-weight: 700;
    background-color: var(--grayEscuro);
    cursor: pointer;
  }

  & > button:hover {
    filter: brightness(0.9);
  }
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

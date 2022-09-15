import axios from "axios";

const BASE_URL = "https://back-to-the-disc-backend.herokuapp.com";

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function postSignIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

function getProducts(page) {
  //const promise = axios.post(`${'localhost:5000'}/products/?page=${page}`);
  const promise = [{
    artista: "Beyonce",
    nome: "RENAISSANCE",
    image: "https://cdn.shopify.com/s/files/1/0096/1884/9839/products/beyonce_480x.png?v=1656665682",
    preco: "79.90",
    musicas: [
    " I'm That Girl",
    "Cozy",
    "Alien Superstar",
    "Cuff It",
    "Energy",
    "Break My Soul",
    "Church Girl",
    "Plastic Off The Sofa",
    "Virgo's Groove",
    "Move",
    "Heated",
    "Thique",
    "All Up In Your Mind",
    "America Has a Problem",
    "Pure/honey",
    "Summer Renaissance"
    ],
    status: "new",
    tags: ["beyonce", "renaissance", "r&b"]
    }]
  return promise;
}

export { postSignUp, postSignIn, getProducts };

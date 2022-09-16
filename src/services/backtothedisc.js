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
  const promise = axios.get(`${BASE_URL}/products/?page=${page}`);
  return promise;
}

function getProductDescription(id) {
  //const promise = axios.get(`${BASE_URL}/description/${id}`);
  const promise = {image: "https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Bruno_Unorthodox_Jukebox_Final_480x.jpg?v=1618049286", status : "new", tags : [ "bruno", "mars", "unorthodox", "jukebox", "pop" ], by : "Bruno Mars", description : "Unorthodox Jukebox é o segundo álbum de estúdio do cantor e compositor americano Bruno Mars. Foi lançado em 7 de dezembro de 2012, pela Atlantic Records. Ele serve como acompanhamento do álbum de estreia de Mars, Doo-Wops & Hooligans (2010). O álbum foi inicialmente planejado para ser mais \"energético\" do que seu trabalho anterior, mas acabou apresentando uma ampla gama de estilos, como reggae rock, disco e soul music. O cantor co-escreveu todo o álbum e trabalhou com vários colaboradores anteriores, enquanto recrutava novos produtores e nenhum vocalista convidado. Liricamente, Unorthodox Jukebox gira em torno do tema dos relacionamentos, incorporando letras e assuntos mais explícitos do que seu material anterior.", musics : [ "Young Girls", "Locked Out Of Heaven", "Gorilla", "Treasure", "Moonshine", "When I Was Your Man", "Natalie", "Show Me", "Money Make Her Smile", "If I Knew" ], name : "UNORTHODOX JUKEBOX", price : "49.90" }
  return promise;
}

export { postSignUp, postSignIn, getProducts, getProductDescription };

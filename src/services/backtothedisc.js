import axios from "axios";

const BASE_URL = "https://back-to-the-disc-backend.herokuapp.com";

function createHeaders() {
  const auth = JSON.parse(localStorage.getItem("backtothedisc"));

  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  return config;
}

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

function putLogout() {
  const config = createHeaders();

  const promise = axios.put(`${BASE_URL}/logout`, {}, config);

  return promise;
}

function getProductDescription(id) {
  const promise = axios.get(`${BASE_URL}/description/${id}`);
  return promise;
}

function postHistoric(body) {
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/historic`, body, config);
  return promise;
}

function getHistoric() {
  //const config = createHeaders();
  //const promise = axios.get(`${BASE_URL}/historic`, config);
  const promise = [
    {
        date: "2022-09-17T21:40:02.692Z",
        products: [
            {
                name: "UNORTHODOX JUKEBOX",
                image: "https://cdn.shopify.com/s/files/1/0096/1884/9839/products/Bruno_Unorthodox_Jukebox_Final_480x.jpg?v=1618049286",
                price: "49.90",
                by: "Bruno Mars",
                quantity: 3
            },
            {
                name: "LOVE GOES",
                image: "https://cdn.shopify.com/s/files/1/0096/1884/9839/products/SamSmithLive19.03.21_480x.jpg?v=1615199081",
                price: "49.90",
                by: "Sam Smith",
                quantity: 1
            }
        ]
    }
]

  return promise;
}


export {
  postSignUp,
  postSignIn,
  getProducts,
  getProductDescription,
  postHistoric,
  putLogout,
  getHistoric
};

import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders() {
  const token = JSON.parse(localStorage.getItem("backtothedisc")).token;
  console.log(token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
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

function getProductDescription(id) {
  const promise = axios.get(`${BASE_URL}/description/${id}`);
  return promise;
}

function postHistoric(body) {
  console.log(body);
  const config = createHeaders();
  const promise = axios.post(`${BASE_URL}/historic`, body, config);
  return promise;
}

export { postSignUp, postSignIn, getProducts, getProductDescription, postHistoric };

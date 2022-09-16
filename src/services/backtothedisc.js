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
  const promise = axios.get(`${'http://localhost:5000'}/products/?page=${page}`);
  return promise;
}

function getProductDescription(id) {
  const promise = axios.get(`${'http://localhost:5000'}/description/${id}`);
  return promise;
}

export { postSignUp, postSignIn, getProducts, getProductDescription };

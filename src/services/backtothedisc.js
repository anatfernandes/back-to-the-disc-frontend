import axios from "axios";

const BASE_URL = "https://back-to-the-disc-backend.herokuapp.com";

function postSignUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

export { postSignUp };

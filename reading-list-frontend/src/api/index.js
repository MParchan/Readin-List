import axios from "axios";

export const BASE_URL = "https://localhost:7077";

export const ENDPOINTS = {
  books: "Books",
};

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + "/api/" + endpoint + "/";
  return {
    get: () => axios.get(url),
    getById: (id) => axios.get(url + id),
    post: (newRecord) => axios.post(url, newRecord),
    put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    delete: (id) => axios.delete(url + id),
  };
};

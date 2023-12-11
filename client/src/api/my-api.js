import axios from "axios";
const URL = "http://localhost:5000";
// add number
const addNumber = async (data) => {
  return axios
    .post(`${URL}/add`, data)
    .then((res) => res)
    .catch((er) => er);
};

// create pdf
const createPdf = async (formInput) => {
  return axios
    .post(`${URL}/create-pdf`, formInput)
    .then((res) => res)
    .catch((er) => er);
};

const getPdf = async () => {
  return axios
    .get(`${URL}/fetch-pdf`, { responseType: "blob" })
    .then((res) => res)
    .catch((er) => er);
};
export { addNumber, createPdf, getPdf };

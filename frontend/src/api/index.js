import axios from "axios";

const URL = `${process.env.REACT_APP_URL}cards`;

//questions
export const postCard = (data) => axios.post(URL, data);
export const getAllCards = () => axios.get(URL);
export const getSpecificCard = (title) => axios.get(`${URL}/${title}`);

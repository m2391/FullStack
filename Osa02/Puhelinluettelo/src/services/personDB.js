import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

//haetaan kaikki listalla olevat henkilöt
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};
//luodaan uusi
const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
};
//päivitetään yksittäistä TIETTYÄ henkilöä
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
};
//poistetaan juuri TIETTY henkilö
const deletePerson = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response.data);
};
//lähetetään tieto Appin käytettäväksi
export default {
  getAll: getAll,
  create: create,
  update: update,
  deletePerson: deletePerson
};
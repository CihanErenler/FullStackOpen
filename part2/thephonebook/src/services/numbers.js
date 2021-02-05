import axios from "axios";
const baseURL = "http://localhost:3001/persons";

const create = (newObject) => {
  const response = axios.post(baseURL, newObject);
  return response.then((result) => result.data);
};

const deletePerson = (id) => {
  const response = axios.delete(`${baseURL}/${id}`);
  return response.then((result) => "successfully deleted");
};

const update = (id, newObject) => {
  const response = axios.put(`${baseURL}/${id}`, newObject);
  return response.then((result) => result.data);
};

const services = {
  create,
  deletePerson,
  update,
};
export default services;

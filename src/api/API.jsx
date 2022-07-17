import axios from "axios";

const URL = "http://localhost:5000/bookList";

const books = {
  getBooks: async () => {
    return await axios.get(URL);
  },
  sendBooks: (params) => {
    return axios.post(URL, params);
  },
  updateBooks: (ID, params) => {
    return axios.put(`${URL}/${ID}`, params)
  },
  deleteBooks: (ID) => {
    return axios.delete(`${URL}/${ID}`, {});
  }
}

export default books;



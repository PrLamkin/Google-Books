import axios from "axios";

export default {
  bookSearch: function (search) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search);
  },
  bookSave: async function (info) {
    console.log(info);
    try {
      const result = await axios({
        method: "POST",
        data: info,
        url: "/api/books",
      });
      if (result) {
        console.log(result);
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  },
  bookLoad: async function () {
    try {
      const result = await axios({
        method: "GET",
        url: "/api/books",
      });
      if (result) {
        console.log(result);
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  },
  bookDelete: async function (id) {
    console.log(id);
    try {
      const result = await axios({
        method: "DELETE",
        url: `/api/books/${id}`,
      });
      if (result) {
        console.log(result);
        return result;
      }
    } catch (error) {
      console.log(error);
    }
  },
};
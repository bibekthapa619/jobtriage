const axios = require("axios");
const constants = require("../constants");

module.exports = {
  register: async (name, email, password) => {
    try {
      await axios.post(`${constants.apiUrl}/auth/register`, {
        name,
        email,
        password,
      });
    } catch (error) {
        throw new Error(`Cannot register user with email ${email}
        Status code: ${error.response.status}
        Status: ${error.response.statusText}`);
    }
  },
  login: (email, password) => {
    try {
      axios
        .post(`${constants.apiUrl}/auth/login/`, {
          email,
          password,
        })
        .then((data) => console.log(data.data));
    } catch (error) {
        throw new Error(`Cannot login user with email ${email}
        Status code: ${error.response.status}
        Status: ${error.response.statusText}`);
    }
  },
  delete: (email, password) => {
    try {
      axios
        .delete(`${constants.apiUrl}/auth/deleteuser`, {
          params: { email: email, password: password },
        })
        .then((data) => console.log(data.data));
    } catch (error) {
        throw new Error(`Cannot delete user with email ${email}
        Status code: ${error.response.status}
        Status: ${error.response.statusText}`);
    }
  },
};

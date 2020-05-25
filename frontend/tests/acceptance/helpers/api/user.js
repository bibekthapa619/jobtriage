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
      //   throw new Error(`Cannot register user with email ${email}
      //  Status code: ${error.response.status}
      //  Status: ${error.response.statusText}`);
    }
  },
  login: async (email, password) => {
    try {
      await axios.post(`${constants.apiUrl}/auth/login/`, { email, password });
    } catch (error) {
      throw new Error(`Cannot login user with email ${email}
     Status code: ${error.response.status}
     Status: ${error.response.statusText}`);
    }
  },
  delete: async (email) => {
    try {
      let res = await axios.post(`${constants.apiUrl}/auth/deleteuser`, {
        email: email,
      });
      console.log(res.data);
    } catch (error) {
      throw new Error(`Cannot delete user with email ${email}
     Status code: ${error.response.status}
     Status: ${error.response.statusText}`);
    }
  },
};
